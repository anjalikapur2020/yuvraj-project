class Box {
    constructor(x,y,width,height){
    var a = {'restitution': 0.3, }
    
       this.body =  Bodies.rectangle(x,y,width,height,a);
       this.width= width
           this.height=height
    World.add(world,this.body)
    
    }
    display(){
    
    var p = this.body.position
    var angle = this.body.angle
    
    rectMode(CENTER)
    fill("red")
    rect(width/2, 650,200,20)
   
    rectMode(CENTER)
    fill("red")
    rect(height/2.3, 610,20,100)
   
    
    rectMode(CENTER)
    fill("red")
    rect(502, 610,20,100)
    }
    
    
    }