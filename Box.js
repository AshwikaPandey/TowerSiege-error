class Box extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,50,50);
   
   
    this.Visiblity = 200;
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 8){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
}
