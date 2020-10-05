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
                line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
                
            }
            image(this.sling1,175,60)
            image(this.sling2,147,50)


       }
 fly(){
this.chain.bodyA=null;


}
}