const engine=Matter.Engine
const world=Matter.World
const bodies=Matter.Bodies

var e,w
var dr,ar=[]
var m,st

function preload(){
    mi=loadImage("walking_1.png")
    
}

function setup(){
   createCanvas(800,800)
   e=engine.create()
   w=e.world

   st={isStatic:true}
   m=bodies.rectangle(300,500,20,20,st)
   world.add(w,m)
    
}

function draw(){
    background(0)

    engine.update(e)

    imageMode(CENTER)
    image(mi,this.m.position.x,this.m.position.y,300,400)
    

    if(frameCount%10===0){
        dr=new Drop(random(0,800),0)
        ar.push(dr)
    }
    for(var i in ar){
        ar[i].display()
    }

    
}   

