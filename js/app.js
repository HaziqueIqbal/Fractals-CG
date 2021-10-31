const scene = new THREE.Scene();

var fac = new factory(0, 5, 50, 500); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();
//Declare or Initialize variables here..
var point, initAngle = 0, t;

//Code your logic here..
function initialize() {

  point = new THREE.Vector2(0, 0);
  initAngle = 0;
  t = new Turtle(point, initAngle);
  // CODE FOR CHARACTER "H"

  // t.turn(90);
  // t.forward(5, true);
  // t.turn(-180);
  // t.forward(2.5, false);
  // t.turn(90)
  // t.forward(5, true);
  // t.turn(90);
  // t.forward(2.5, true);
  // t.turn(-180);
  // t.forward(5, true);

  // END CODE FOR CHARACTER "H"

  // t.myPattern takes arguments in this format
  // (atom, Fstr, Xstr, Ystr, angle, orders);

  //UNCOMMENT ONE BY ONE DO NOT MAKE TWO PATTERNS AT SAME TIME, IT WILL CRASH YOUR BROWSER..

  // FOR DRAGON
  t.myPattern("FX", "F", "X+YF+", "-FX-Y", 90, 14); 

  // FOR QUADRATIC KOCH ISLAND
  // t.myPattern("F+F+F+F", "F+F-F-FF+F+F-F", "", "", 90, 3);

  // FOR SIERPINSKI GASKET
  // t.myPattern("FXF--FF--FF", "FF", "--FXF++FXF++FXF--", "", 60, 4); 

  // INTELLIGENT TURTLE MAKING FRACTLES (A BUSH) --> WILL TAKES SOME TIME..
  // t.myPattern("X", "FF", "F[+X]F[-X]+X", "", 20, 11); 

  //ANOTHER BUSH --> WILL TAKES SOME TIME
  // t.myPattern("X", "FF", "F-[[X]+X]+F[+FX]-X", "", 22.5, 7); 

  // FOR DISPLAYING TURTLE
  scene.add(t.drawTurtle());
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}

