import React, {Component} from 'react';


class KawaiiPlanet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eyeL: 0,
      eyeR: 0,
    };
  }

  componentDidMount() {
      console.log('component mounted');
       window.addEventListener('mousemove', this.handleEyesFollow);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleEyesFollow);
  }

  handleEyesFollow() {
    // console.log('this is:', this);
    var x = event.pageX;
    var y = event.pageY;




    // var offsetL = eyeL.getBoundingClientRect();
    // var left = (offsetL.left - x)
    // var top = (offsetL.top - y)
    // var rad = Math.atan2(top, left);
    // console.log('eye', eye);
    //
    // eyeL.style.webkitTransform = "rotate(" + rad + "rad)";

    let eyes = document.querySelectorAll('.eye');


    eyes.forEach(function (eye) {

      let lens = eye.querySelector('.lens');
      let iris = eye.querySelector('.iris');

      var offsets = lens.getBoundingClientRect();

      // console.log('cx', iris.getAttribute('cx'));


      var left = (offsets.left - x)
      var top = (offsets.top - y)
      // var rad = Math.atan2(top, left);

      var rad = Math.atan2(top, left);

      console.log('left', rad);

      iris.style.webkitTransform = "rotate(" + rad + "rad)";

      // let left = iris.getAttribute('cx') + x;
      //
      // console.log('left', x);
      //
      // iris.style.cx = left;
      // iris.style.cy = iris.getAttribute('cy');


    });
  }

  render() {

      return (
        <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'
xmlnsXlink='http://www.w3.org/1999/xlink'>
  <defs>
      <path d='M100,200 C155.228475,200 200,155.228475 200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 Z'
      id='path-1' />
      <path d='M130.406586,4.70668497 C170.767538,17.5742008 200,55.3732967 200,100 C200,144.626703 170.767538,182.425799 130.406586,195.293315 C162.318424,175.572265 183.58209,140.26933 183.58209,100 C183.58209,59.7306696 162.318424,24.4277345 130.406575,4.70667805 Z'
      id='path-3' />
      <path d='M2.17398323,4.69678922 C2.17398323,4.69678922 2.17398323,4.69678922 2.17398323,4.69678922 L3.90798505e-15,4.69679574 C3.90798505e-15,3.45997286 0.516468202,2.24976516 1.41705963,1.37616115 C2.31926502,0.500991546 3.56685852,1.30562228e-14 4.8418894,1.30562228e-14 L38.7351152,1.30562228e-14 C40.010146,1.30562228e-14 41.2561256,0.500991546 42.158331,1.37616115 C43.0605364,2.24976516 43.5770046,3.45997286 43.5770046,4.69679574 C43.5657068,8.74230247 42.1502612,12.609331 39.8697313,15.9424903 C37.5779036,19.2693873 34.3758008,22.1078176 30.4538703,23.9145183 C27.842478,25.1122012 24.8969953,25.8339422 21.7885023,25.8323766 C17.1144651,25.8323766 12.8552163,24.2151132 9.44814018,21.7837386 C6.02976626,19.3414049 3.3796388,16.088091 1.73501037,12.4449431 C0.64397129,10.0135685 0.00161396313,7.3927565 3.90798505e-15,4.69679574 L2.17398352,4.69679574 Z'
      id='path-5' />
  </defs>
  <g id='Page-1' fill='none' fillRule='evenodd'>
      <g id='Desktop-Copy' transform='translate(-412 -113)'>
          <g id='Group-3' transform='translate(412 113)'>
              <g id='kawaii-planet'>
                  <g id='kawaii-planet__body'>
                      <mask id='mask-2' fill='#fff'>
                          <use xlinkHref='#path-1' />
                      </mask>
                      <use id='kp-body-color' fill='#46F4D4' xlinkHref='#path-1' />
                      <mask id='mask-4' fill='#fff'>
                          <use xlinkHref='#path-3' />
                      </mask>
                      <use id='kp-body__shadow' fill='#000' opacity='.263' xlinkHref='#path-3'
                      />
                  </g>
                  <g id='kawaii-planet__face' transform='translate(50.746 83.075)'>
                      <g id='kawaii-planet__mouth' transform='translate(27.619 25.81)'>
                          <g id='kp-mouth__joy' transform='translate(0 1.905)'>
                              <mask id='mask-6' fill='#fff'>
                                  <use xlinkHref='#path-5' />
                              </mask>
                              <use id='kawaii-iceCream__Combined-Shape' fill='#000' xlinkHref='#path-5'
                              />
                              <path d='M14.326358,18.6672529 C14.326358,18.6672529 14.326358,18.6672529 14.326358,18.6672529 L13.4328358,18.6672529 C13.4328358,18.2384877 13.6451078,17.8189491 14.015257,17.5160997 C14.3860697,17.2127076 15.4228856,15.7498223 22.3880597,15.7498223 C29.3532338,15.7498223 30.3893864,17.2127076 30.760199,17.5160997 C31.1310116,17.8189491 31.3432836,18.2384877 31.3432836,18.6672529 C31.3386401,20.0696951 30.7568823,21.4102649 29.8195688,22.56576 C28.8776119,23.7190842 27.5615257,24.7030732 25.9495854,25.3293961 C24.8762852,25.7445928 23.6656716,25.9947963 22.3880597,25.9942536 C20.4669983,25.9942536 18.7164179,25.4336023 17.3160862,24.5907259 C15.9111111,23.7440503 14.8218905,22.6162349 14.145937,21.3532771 C13.6975124,20.5104007 13.4334992,19.6018526 13.4328358,18.6672529 L14.326358,18.6672529 Z'
                              id='kawaii-iceCream__tongue' fill='#E74144' mask='url(#mask-6)' transform='matrix(1 0 0 -1 0 41.744)'
                              />
                          </g>
                      </g>
                      <g id='kawaii-planet__blush' transform='translate(0 24.388)' fill='#000'
                      opacity='.2'>
                          <circle id='Oval' cx='4.478' cy='4.478' r='4.478' />
                          <circle id='Oval' cx='94.03' cy='4.478' r='4.478' />
                      </g>
                      <g id='kawaii-planet__eyes' transform='translate(2.985)'>
                          <g id='kp-eyes__circle' transform='translate(1.478 .985)'>
                              <g id='eye-l' className="eye">
                                  <circle id='lens-l' className="lens" fill='#D8D8D8' opacity='.814' cx='10' cy='10' r='10'
                                  />
                                <circle id='iris-l' className="iris" fill='#000' cx='9.716' cy='10.716' r='6.716' />
                              </g>
                              <g id='eye-r' className="eye" transform='translate(70)'>
                                  <circle id='lens-r' className="lens" fill='#D8D8D8' opacity='.814' cx='10' cy='10' r='10'
                                  />
                                <circle id='iris-r' className="iris" fill='#000' cx='9.866' cy='10.716' r='6.716' />
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </g>
</svg>
      )
  }

}

export default KawaiiPlanet;
