canvas=document.getElementById("mycanvas");
ctx=canvas.getContext('2d');
var carwidth=100;
var carheight=90;
var carimage="car1.png";
backgroundimage="racing.jpg"
var carx=10;
var cary=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=backgroundimage;
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=carimage;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height)
}
function uploadcar(){
  ctx.drawImage(car_imgTag , carx , cary , carwidth , carheight);  
}
window.addEventListener("keydown" , mykeydown);
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed == '38'){
        up()
        console.log("up pressed");    
    }
    if(keypressed == '40'){
        down()
        console.log("down pressed");
    }
    if(keypressed == '37'){
        left()
        console.log("left pressed")
    }
    if(keypressed == '39'){
        right()
        console.log("right has been pressed");
    }

    
}
function up(){
    if(cary >=0){
        cary= cary-10
        console.log("X= " + carx + "Y" + cary);
        uploadbackground()
        uploadcar()
        document.body.style.overflow="hidden"
    }
}
function down(){
    if(cary<=500){
        cary=cary+10
        console.log("X= "+ carx + "Y= " + cary);
        uploadbackground()
        uploadcar()
        document.body.style.overflow="hidden"
    }
}
function left (){
    if(carx>=0){
        carx=carx-10
        console.log("X= " + carx + "Y= " + cary);
        uploadbackground()
        uploadcar()
    }
}
function right(){
    if(carx<=700){
        carx=carx+10
        console.log("X= " + carx + "Y= " + cary);
        uploadbackground()
        uploadcar()
    }
}

