// import * as THREE from "./three.js";
class Turtle {
  constructor(CP, CD) {
    // FOR STORING CURRENT POINT
    this.stackofPosition = []; 
    //CURRENT POINT
    this.CP = CP;
    //CURRENT ANGLE
    this.CD = CD;
    //CURRENT PATHS
    this.path = new THREE.Path();
    this.path.moveTo(this.CP.x, this.CP.y);
    this.points = this.path.getPoints();
    this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    this.material = new THREE.LineBasicMaterial({ color: 0xffffff });
    this.line = new THREE.Line(this.geometry, this.material);
  }

  //TURNING TO A SPECIFIC ANGLE
  turnTo(angle) {
    this.CD = angle;
  }
  //MOVING TO A SPECIFIC ANGLE WRT CURRENT ANGLE
  turn(angle) {
    this.CD += angle;
  }
  //MOVING FORWARD TO A DISTANCE 
  forward(dist, isVisible) {
    var radPerDeg = 0.017453393;
    var x = this.CP.x + dist * Math.cos(radPerDeg * this.CD);
    var y = this.CP.y + dist * Math.sin(radPerDeg * this.CD);
    if (isVisible) this.path.lineTo(x, y);
    else this.path.moveTo(x, y);
    this.CP = new THREE.Vector2(x, y);
    console.log(this.CP)
  }
  //DRAWING ALL THE MOVEMENTS
  drawTurtle() {
    //CURRENT PATHS
    this.path.moveTo(this.CP.x, this.CP.y);
    this.points = this.path.getPoints();
    this.geometry = this.geometry.setFromPoints(this.points);
    // this.material = new THREE.LineBasicMaterial({ color: 0xffffff });
    this.line = new THREE.Line(this.geometry, this.material);
    // return this.line;
    return this.line;
  }
  myPattern(atom, Fstr, Xstr, Ystr, myangle, myOrder) {
    this.atom = atom;
    this.Fstr = Fstr;
    this.Xstr = Xstr;
    this.Ystr = Ystr;
    this.myangle = myangle;
    this.myOrder = myOrder;
    this.myStringProduce(atom, myOrder);
  }

  myStringProduce(collections, order) {
    [...collections].forEach(element => {
      switch (element) {
        case "+":
          this.turnRight(this.myangle);
          break;
        case "-":
          this.turnLeft(this.myangle);
          break;
        case "F":
          if (order > 0) {
            this.myStringProduce(this.Fstr, order - 1);
          } else {
            this.forward(2, true);
          }
          break;
        case "X":
          if (order > 0 & this.Xstr != "") {
            this.myStringProduce(this.Xstr, order - 1);
          }
          break;
        case "Y":
          if (order > 0 & this.Xstr != "") {
            this.myStringProduce(this.Ystr, order - 1);
          }
          break;
        case "[":
          this.saveTurtle();
          break;
        case "]":
          this.restoreTurtle();
          break;
      }
    });
  }
  // used in my string procedure.
  saveTurtle() { // saving current point if "[" occur
    this.stackofPosition.push(this.CP);
  }
  restoreTurtle() {// poping current point if "]" occur
    this.CP = this.stackofPosition.pop();
  }
  turnRight(value) { // for left turn
    this.CD -= value;
  }
  turnLeft(value) { // for right turn
    this.CD += value;
  }
}