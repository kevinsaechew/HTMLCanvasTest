

$(document).ready(function() {

    var canvas = $('#myCanvas')[0]; // This gets the HTML DOM object stored in the JQuery Object
    var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0,0,300,150);

     // Create gradient
    var grd=ctx.createLinearGradient(0,0,800,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle=grd;
    ctx.fillRect(10,10,2000,360);

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.fillText("Hello Canvas", canvas.width/2, canvas.height/2); 
    // // Makes a diagonal stroke
    // ctx.moveTo(0,0);
    // ctx.lineTo(800,400);
    // ctx.stroke();

    ctx.fillStyle = "#b41434";
    
    ctx.beginPath();
    ctx.arc(190,100,80,0,4*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(600,100,80,0,4*Math.PI);
    ctx.stroke();
});

