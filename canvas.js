let canvas= document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let penTools=canvas.getContext('2d');

penTools.strokeStyle="blue";
penTools.lineWidth=5;

eraser.addEventListener('click',()=>{
    penTools.strokeStyle="white";
})

// penTools.beginPath(); // new line
// penTools.moveTo(0,0); //starting point of that line
// penTools.lineTo(200, 100); // ending point of that line
// // penTools.moveTo(0,0);
// penTools.lineTo(450, 300);
// // penTools.moveTo(0,0);
// // penTools.lineTo(300, 500);
// penTools.stroke();

let isMouseDown=false;
canvas.addEventListener('mousedown',(e)=>{
    isMouseDown=true;
    let x=e.clientX-5;
    let y=e.clientY-90;
    penTools.beginPath();
    penTools.moveTo(x,y);
})

canvas.addEventListener('mousemove',(e)=>{
    if(isMouseDown){
        penTools.lineTo(e.clientX-5,e.clientY-90);
        penTools.stroke();
    }
})

canvas.addEventListener('mouseup',()=>{
    isMouseDown=false;
})
