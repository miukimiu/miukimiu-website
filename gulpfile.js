var gulp = require('gulp'),
  webpack = require("webpack"),
  webpackDevServer = require("webpack-dev-server"),
  webpackDevConfig = require("./webpack.dev.config.js"),
  webpackStagingConfig = require("./webpack.staging.config.js"),
  webpackProductionConfig = require("./webpack.production.config.js"),
  gutil = require('gulp-util'),
  babel = require('babel-core/register'),
  mocha = require('gulp-mocha'),
  spawn = require('child_process').spawn,
  port = 3000,
  open = require('open'),
  git = require('gulp-git'),
  config = require('./config'),
  chalk = require('chalk'),
  figlet = require('figlet'),
  clean = require('gulp-clean'),
  nullCompiler = require('./nullCompiler'),
  ghPages = require('gulp-gh-pages');


gulp.task('html', function() {
  var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || 'staging';
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/' + n));
});

// gulp.task('build', ['clean', 'test', 'html'], function() {
//   var n = (['production'].indexOf(process.argv[4]) > -1 && process.argv[4]) || 'production';
//   gulp.start('build-' + n);
// });

gulp.task("build-production", ['clean', 'test', 'html'], function() {
  // run webpack
  webpack(webpackProductionConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:errors]", stats.compilation.errors.toString({
      colors: true
    }));
    gutil.log("[webpack:warnings]", stats.compilation.warnings.toString({
      colors: true
    }));
    console.log('webpack compile success.');
  });
});

gulp.task("build", ['clean', 'html'], function() {
  // run webpack
  webpack(webpackProductionConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:errors]", stats.compilation.errors.toString({
      colors: true
    }));
    gutil.log("[webpack:warnings]", stats.compilation.warnings.toString({
      colors: true
    }));
    console.log('webpack compile success.');
  });
});

gulp.task('deploy', function() {
  return gulp.src('./dist/production/**/*')
    .pipe(ghPages());
});


gulp.task('unit_test', function() {
  return gulp.src('./test/unit_tests/**/*.spec.js', {
      read: false
    })
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }))
    .once('error', function() {
      process.exit(1);
    })
});

gulp.task('test', ['unit_test']);

gulp.task('openBrowser', function() {
  open('http://localhost:' + port, function(err) {
    if (err) throw err;
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['test']);
});

gulp.task('node-server', function(cb) {
  var cmd = spawn('node', ['server.js'], {
    stdio: 'inherit'
  });
  cmd.on('close', function(code) {
    console.log('my-task exited with code ' + code);
    cb(code);
  });
});

gulp.task('preview', function(cb) {

  var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || false;

  if (n) {
    process.env.NODE_ENV = n;

    var cmd = spawn('node', ['server.js'], {
      stdio: 'inherit'
    });

    cmd.on('close', function(code) {
      console.log('my-task exited with code ' + code);
      cb(code);
    });

    setTimeout(function() {
      open('http://localhost:' + port, function(err) {
        if (err) throw err;
      });
    }, 1800);

  } else {
    console.log('Error: use the command `gulp preview --env [ENVIRONMENT]` to preview!')
  }


});

gulp.task('set-dev-env', function() {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-env', function() {
  return process.env.NODE_ENV = 'production';
});

gulp.task('banner', function() {
  spawn('clear', [null], {
    stdio: 'inherit'
  });
  console.log(
    chalk.magenta(
      figlet.textSync('Reactatouille', {
        horizontalLayout: 'full'
      })
    ),
    chalk.yellow.bold('\n' + ' ' + 'Boilerplate'),
    chalk.yellow('by Punkbit'),
    '\n',
    '\n'
  );
});

gulp.task('clean', function() {
  return gulp.src(['./js/', './css/'])
    .pipe(clean());
});

gulp.task('default', ['banner', 'set-dev-env', 'node-server', 'watch']);
