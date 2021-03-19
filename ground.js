class Ground{
 
    constructor(){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(200,380,400,20,options);
        this.width=400;
        this.height=20;
        World.add(myWorld,this.body)
    }

    display(){
        //name alliasing
        var pos=this.body.position;

        rectMode(CENTER);
        push();
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }


}