//bai 4
class Rectangle {
    x;
    y;
    // width;
    // height;
    r;
    color;
    // s;
    // g;
    constructor(x,y,r,c) {

        this.x = x;
        this.y = y;
        // this.width = width;
        // this.height = height;
        this.r =r;
        // this.s = s;
        // this.g =g;
        this.color = c;

    }

    render(canvas){
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();

    }
}
let canvas = document.getElementById('canvas');
// let rect1 = new Rectangle(100,100,300,200,"red");
let rect2 = new Rectangle(100,75,50,"red");
rect2.render(canvas);