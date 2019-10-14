let bugs = [];
//let bugNum = 1000;



function setup() {
  createCanvas(400, 400);

   for (let i = 0; i<1000; i++){

    bugs[i] = new BuGs();

  }

}

function draw() {
      background(0);


  for (let i =0; i<1000; i++) {
  bugs[i].update();
    bugs[i].display();
   bugs[i].checkEdges();
  }
    strokeWeight(1);

}





  this.top= 3;
   this.s = 0;
   this. d = 0;
  this. distance = 0;



class BuGs {

 constructor(){

      this.s =5;

  this.pos = createVector(random(s,width-s), random(s,height-s));
   this.vel = createVector(0.0,0.0);
   this.accel = createVector(random(-0.01, 0.01), random(-0.02, 0.02));
     this.top = 3;




   // this.vel = createVector(0,0);
   //this.dir.normalize();




 }




  update(){
        // d = 0;
this.mouse = createVector(mouseX, mouseY);
    this.dir = createVector(this.mouse-this.pos);


  this. distance = dist(this.mouse.x, this.mouse.y, this.pos.x, this.pos.y);


    if(this.distance < 150)
    {

      this.d = map(this.distance, 0, 150, 0.2, 0.01);

    }
    if(this.distance > 100) {
      this.vel.mult(0.99);

    }
     this.dir.mult(d);
    this.acc = this.dir;

    this.vel.add(this.accel);
    this.vel.limit(this.top);
    this.pos.add(this.vel);





  }

  display(){

    fill(0);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, s,s);

  }

  checkEdges(){
  if(this.pos.x < s/2 || this.pos.x > width-s/2){
  this.vel.x = this.vel.x * -1;
    this.accel.x = this.accel.x * -1;

  }

     if(this.pos.y < s/2 || this.pos.y > height-s/2){
  this.vel.y = this.vel.y * -1;
    this.accel.y = this.accel.y * -1;

  }


  }



}
