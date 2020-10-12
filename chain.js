class Chain{
    constructor(bodyA,pointB){
    
            var options={
                bodyA:bodyA,
                pointB:pointB,
                length:10,
                stiffness:0.02
                
            }
            this.sling1=loadImage("sprites/sling1.png");
            this.sling2=loadImage("sprites/sling2.png");
            this.sling3=loadImage("sprites/sling3.png");

            this.pointB=pointB
            this.chain=Matter.Constraint.create(options)
            World.add(world,this.chain);
     }
        display(){
            if (this.chain.bodyA){   
                 intro.play();
                if(this.chain.bodyA.position.x<200){
                push();
                strokeWeight(9);
                stroke(85,40,15);
                line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x+10,this.pointB.y-10);
                line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x-30,this.pointB.y-10);
                image(this.sling3,this.chain.bodyA.position.x-20,this.chain.bodyA.position.y-10,15,30)
                 pop();
                }
                else{
                    push();
                    strokeWeight(4);
                    stroke(85,40,15);
                    line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,this.pointB.x+10,this.pointB.y-10);
                    line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,this.pointB.x-30,this.pointB.y-10);
                    image(this.sling3,this.chain.bodyA.position.x+20,this.chain.bodyA.position.y-10,15,30)
                pop();


                }
            }
            image(this.sling1,250,60)
            image(this.sling2,222,50)


       }
 fly(){
    this.chain.bodyA=null;



}
attach(body){
this.chain.bodyA=body



}

}

