var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);


/// ve duong thang
var dt = document.getElementById("myCanvas");
var dtx = dt.getContext("2d");
dtx.moveTo(200,10); // toa do
dtx.lineTo(300,200);
dtx.stroke();


// ve hinh tron
var r = document.getElementById("myCanvas");
var rtx = r.getContext("2d");
rtx.beginPath();
rtx.arc(95,150,40,0,2*Math.PI);
rtx.stroke();

// ve chu
var chu = document.getElementById("myCanvas");
var chutx = chu.getContext("2d");
chutx.font = "30px Arial";
chutx.fillText("Hello World",50,250);