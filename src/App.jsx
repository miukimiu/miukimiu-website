import React from "react";
import scrollToComponent from "react-scroll-to-component";
import GlobalStyles from "./utils/globalStyles";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Awards from "./components/Awards";
import Talks from "./components/Talks";
import Header from "./components/common/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Header
          scrollToComponent={() =>
            scrollToComponent(this.Welcome, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
        >
          <ul>
            <li>
              <button
                onClick={() =>
                  scrollToComponent(this.About, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  scrollToComponent(this.Projects, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  scrollToComponent(this.Talks, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                Talks
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  scrollToComponent(this.Awards, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                Awards
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  scrollToComponent(this.Articles, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                Articles
              </button>
            </li>
          </ul>
        </Header>
        <div
          ref={section => {
            this.Welcome = section;
          }}
        >
          <Welcome />
        </div>
        <div
          ref={section => {
            this.About = section;
          }}
        >
          <About />
        </div>
        <div
          ref={section => {
            this.Projects = section;
          }}
        >
          <Projects />
        </div>
        <div
          ref={section => {
            this.Talks = section;
          }}
        >
          <Talks />
        </div>
        <div
          ref={section => {
            this.Awards = section;
          }}
        >
          <Awards />
        </div>

        <div
          ref={section => {
            this.Articles = section;
          }}
        >
          <Articles />
        </div>
      </div>
    );
  }
}

export default App;
