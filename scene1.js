//drawing-p5.js

let sand;
let starfish;
let gif_loadImg;

//preload starfish image and ocean gif
function preload(){
  starfish = loadImage('https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fstarfish.png?v=1589662051757');
  gif_loadImg = loadImage("https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fsea.gif?v=1589661916878");
}

//load sand image as background
function setup() {
  sand = loadImage("https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fscene1-background.jpg?v=1589662054750");
  var canvas = createCanvas(960, 540);
  canvas.position(240, 35); //make the position of the sketch the same with other
  
}

//apply sand as background and add starfish and gif ocean
function draw() {
  background(sand);
  image(starfish, 100, 180, 300, 300);
  image(gif_loadImg, 20, 20);
  }


//text-plain javascript
//add subtitle to the scene
var app = document.getElementById('typeWriter');
var TypewriterWrapper;

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 80, //writing speed
    wrapperClassName: TypewriterWrapper
});

typewriter.typeString('<span style = "font-family: Arial, Helvetica, sans-serif"> Hello there 👋 </span>') //inefficient but a way to change font
    .pauseFor(1000) //1000 millisecond = 1sec
    //.typeString('<br/>') //next sentance
    .typeString('Im Hiro, a starfish')
    .pauseFor(1000)
    .deleteAll(1) //deleting speed(lower=>faster)
    .typeString('I was chillin on a coral in my backyard...')
    .pauseFor(500)
    //.typeString('<br/>')
    .typeString('and a wave flew me here.')
    .pauseFor(1000)
    .deleteAll(1)
    .typeString('Could you help me to find my way back home?')
    .start();