import { gsap } from 'gsap'
import { Linear } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Expo } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

export default (props) => {
setTimeout(function() {
  gsap.registerPlugin(Draggable);
  gsap.registerPlugin(CSSPlugin)
  var xmlns = "http://www.w3.org/2000/svg",
    xlinkns = "http://www.w3.org/1999/xlink",
    select = function(s) {
      return document.querySelector(s);
    },
    selectAll = function(s) {
      return document.querySelectorAll(s);
    },
      liquid = selectAll('.liquid'),
      tubeShine = select('.tubeShine'),
      label = select('.label'),
      follower = select('.follower'),
      dragger = select('.dragger'),
      dragTip = select('.dragTip'),
      minDragY = -380,
      liquidId = 0,
      step = Math.abs(minDragY/100),
      snap = Math.abs(minDragY/10),
      followerVY = 0
    

  gsap.set('svg', {
    visibility: 'visible'
  })

  gsap.set(dragTip, {
  transformOrigin:'20% 50%'
  })

  var tl = new gsap.timeline()
  tl.staggerTo(liquid, 0.7, {
  x:'-=200',
  ease:Linear.easeNone,
  repeat:-1
  },0.4)

  tl.time(100);

  document.addEventListener("touchmove", function(event){
      event.preventDefault();
  });

  Draggable.create(dragger, {
  type:'y',
  bounds:{minY:minDragY, maxY:0},
  onDrag:onUpdate,
  throwProps:true,
  throwResistance:2300,
  onThrowUpdate:onUpdate,
  overshootTolerance:0,
  snap:function(value){
    //Use this to snap the values to steps of 10
    //return Math.round(value/snap) * snap
  }
  })

  function onUpdate(){
  liquidId = Math.abs(Math.round(gsap.getProperty(dragger, "y")/step));

  // label.textContent = liquidId + '°';
  gsap.to(liquid, 1.3, {
    y:gsap.getProperty(dragger, "y")*1.12,
    ease:Elastic.easeOut.config(1,0.4)
  })
  
  }

  gsap.to(follower, 1, {
  y:'+=0',
  repeat:-1,
  modifiers:{
    y:function(y, count){
    followerVY += (gsap.getProperty(dragger, "y") - gsap.getProperty("follower","y")) * 0.23;
    followerVY *= 0.69;
    return gsap.getProperty(follower, "y") + followerVY; 
    }
  }
  })

  gsap.to(dragTip, 1, {
  rotation:'+=0',
  repeat:-1,
  modifiers:{
    rotation:function(rotation, count){
    return rotation-followerVY
    }
  }
  })

  gsap.to(label, 1, {
  y:'+=0',
  repeat:-1,
  modifiers:{
    y:function(y, count){
    return y-followerVY * 0.5
    }
  }
  })


  gsap.to(dragger, 1.4, {
  y:minDragY/2,
  onUpdate:onUpdate,
  ease:Expo.easeInOut
  })
}, 100)
}