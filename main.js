canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
imagearray=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(imagearray)
background_image=imagearray[random_number]
console.log("background_image= "+ background_image)


rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

rover_image="rover.png";

function add()
{
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;
rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;
}

function uploadBackground()
{
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover()
{
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if (keyPressed=='38')
{
up();
console.log("up")
}
if (keyPressed=='40')
{
down();
console.log("down")
}
if (keyPressed=='37')
{
left();
console.log("left")
}
if (keyPressed=='39')
{
right();
console.log("right")
}
}

function up()
{
if(rover_y>=0)
{
rover_y=rover_y-10;
console.log("When Up Arrow Pressed,X= "+rover_x + ",y= " +rover_y);
uploadBackground();
uploadrover();
}
}


function down()
{
if(rover_y<=500)
{
rover_y=rover_y+10;
console.log("When Down  Arrow Pressed,X= "+rover_x + ",y= " +rover_y);
uploadBackground();
uploadrover();
}
}


function right()
{
if(rover_x<=700)
{
rover_x=rover_x+10;
console.log("When Right Arrow Pressed,X= "+rover_x + ",y= " +rover_y);
uploadBackground();
uploadrover();
}
}

function left()
{
if(rover_x>=0)
{
rover_x=rover_x-10;
console.log("When Left Arrow Pressed,X= "+rover_x + ",y= " +rover_y);
uploadBackground();
uploadrover();
}
}



