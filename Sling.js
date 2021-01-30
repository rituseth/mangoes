class Sling{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 5
        }
       this.bodyA=bodyA;
       this.bodyB=bodyB;
        this.sling1 = Constraint.create(options)
        World.add(world, this.sling1);
    }
fly(){
    this.sling1.bodyA=null
}
    display(){
        if (this.sling1.bodyA){
         var bodyA=this.bodyA;
        var bodyB = this.bodyB;
        strokeWeight(4);
        line(bodyB.x, bodyB.y,bodyA.x,bodyA.y);
       
    }

}
}