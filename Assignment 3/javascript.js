 var stop = 0; //variable used to stop the animation
 var wasPressed = 0; //variable to check if the ACW button was pressed after the CW button and vice versa
 var direction = 'cw'; //direction of rotation

 window.onload = function(){
    alert("Welcome to my webpage!");
    
 };

 // function to draw the image on the canvas
 function drawImg() {
    deleteCanvas();
    stop = 1;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("yin");

    ctx.drawImage(img, 0, 0, 726, 726);
 };

//function to start the image rotation
function useRotate(dir) {
    //restarting the frozen animation
    if(stop == 1) {
        stop = 0;
    }

    direction = dir;
    window.requestAnimationFrame(rotate);
};

function rotate() {
    if(stop == 0) {
        if(direction == 'cw') {
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var img = document.getElementById('yin');
            var x = 726/2; //x-coord of center of image
            var y = 726/2; //y-coord of center of image

            //rotation code
            ctx.translate(x,y);
            ctx.rotate(Math.PI / 480);
            ctx.translate(-x,-y);
            ctx.drawImage(img, 0, 0, 726, 726);
            
            //callback function for animation frame
            window.requestAnimationFrame(rotate);
        } else if (direction == 'acw') {
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var img = document.getElementById('yin');
            var x = 726/2; //x-coord of center of image
            var y = 726/2; //y-coord of center of image
            
            //rotation code
            ctx.translate(x,y);
            ctx.rotate(-1 * (Math.PI / 480));
            ctx.translate(-x,-y);
            ctx.drawImage(img, 0, 0, 726, 726);
            
            //callback function for animation frame
            window.requestAnimationFrame(rotate);
        }
        
    }
    
};

function freeze() {
    stop = 1;
};

function deleteCanvas() {

    //delete the canvas
    var cont = document.getElementById('canvas-cont');
    var canvas = document.getElementById('myCanvas');
    canvas.remove();

    var new_c = document.createElement('canvas');
    new_c.setAttribute('id', 'myCanvas');
    new_c.setAttribute('width', '726');
    new_c.setAttribute('height', '726');

    cont.append(new_c);
};
