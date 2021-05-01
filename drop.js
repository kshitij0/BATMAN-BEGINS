class Drop{
    constructor(x,y){
        this.body=bodies.circle(x,y,5)
        world.add(w,this.body)

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,5)

    }
}