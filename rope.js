class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){

        if(this.Rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.Rope.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.Rope.bodyA= null;
    }
    
}