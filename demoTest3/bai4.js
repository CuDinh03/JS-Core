class Rectangle {
    x;
    y;
    width;
    height;
    color;
    constructor(x,y,r,c) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = c;

    }

    render(canvas){
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let canvas = document.getElementById('canvas');
let rect1 = new Rectangle(100,100,300,200,"red");
rect1.render();