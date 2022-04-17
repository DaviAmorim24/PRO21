class Ground{
    constructor(x,y,largura,altura){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, largura, altura, options)
        World.add(world, this.body);
        this.largura = largura
        this.altura = altura
    }


    display(){
        var pos = this.body.position
        fill("red")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.largura, this.altura)


    }
}