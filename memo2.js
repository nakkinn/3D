/*function disableScroll(event) {
    event.preventDefault();
}
  
document.addEventListener('touchmove', disableScroll, { passive: false });
*/

let n;
let p=
[
    [ [-1,-1,-1],[-1,-1, 1],[ 1,-1, 1],[ 1,-1,-1] ],
    [ [-1, 1,-1],[-1, 1, 1],[ 1, 1, 1],[ 1, 1,-1] ],
    [ [-1,-1,-1],[-1,-1, 1],[-1, 1, 1],[-1, 1,-1] ],
    [ [ 1,-1,-1],[ 1,-1, 1],[ 1, 1, 1],[ 1, 1,-1] ],
    [ [-1,-1,-1],[-1, 1,-1],[ 1, 1,-1],[ 1,-1,-1] ],
    [ [-1,-1, 1],[-1, 1, 1],[ 1, 1, 1],[ 1,-1, 1] ]
];


let c=['#555555','#ff4500','#b0c4de','#ffff00','#32cd32','#8b008b'];
let num=0,theta=0;

function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    n=createVector(1,0,0);
}

function draw(){
    background(150);
    orbitControl(10,10);

    /*let angle=atan2(mouseY-height/2,mouseX-width/2);
    n.x=cos(angle);
    n.y=sin(angle);*/

    scale(60);
    

    for(let i=0;i<p.length;i++){
        
        /*if(mouseIsPressed==false){
            let v=createVector(0,0,0);
            for(let j=0;j<4;j++){
                v=v.set(p[i][j][0],p[i][j][1],p[i][j][2]);
                theta=constrain(theta,0,0.1);
                v=rot(v,n,theta);
                p[i][j][0]=v.x;
                p[i][j][1]=v.y;
                p[i][j][2]=v.z;
            }

        }*/


        if(i<p.length-num){
            fill(c[i]);
            beginShape();
            for(let j=0;j<4;j++)    vertex(p[i][j][0],p[i][j][1],p[i][j][2]);
            endShape(CLOSE);
        }
    }

    /*
    if(mouseIsPressed==false){
        //line(-3*n.x,-3*n.y,-3*n.z,3*n.x,3*n.y,3*n.z);
        theta*=0.99;
    }*/
    

}
/*
function mousePressed(){
    theta=0;
}

function mouseDragged(){
    let angle=atan2(mouseY-pmouseY,mouseX-pmouseX)+PI/2;
    theta=map(dist(mouseX,mouseY,pmouseX,pmouseY),0,width,0,6);

    n.x=cos(angle);
    n.y=sin(angle);

    for(let i=0;i<p.length;i++){
        let v=createVector(0,0,0);
        for(let j=0;j<4;j++){
            v=v.set(p[i][j][0],p[i][j][1],p[i][j][2]);
            
            v=rot(v,n,theta);
            p[i][j][0]=v.x;
            p[i][j][1]=v.y;
            p[i][j][2]=v.z;
        }    
    }
}

function mouseWheel(event){
    if(event.delta>0)   num++;
    else    num--;
    num=constrain(num,0,6);
}

function rot(v,n,theta){

    let temx=v.x,temy=v.y,temz=v.z,x,y,z;
    n=n.normalize();

    x=(n.x*n.x*(1-cos(theta))+cos(theta))*temx+(n.x*n.y*(1-cos(theta))-n.z*sin(theta))*temy+(n.x*n.z*(1-cos(theta))+n.y*sin(theta))*temz;
    y=(n.x*n.y*(1-cos(theta))+n.z*sin(theta))*temx+(n.y*n.y*(1-cos(theta))+cos(theta))*temy+(n.y*n.z*(1-cos(theta))-n.x*sin(theta))*temz;
    z=(n.x*n.z*(1-cos(theta))-n.y*sin(theta))*temx+(n.y*n.z*(1-cos(theta))+n.x*sin(theta))*temy+(n.z*n.z*(1-cos(theta))+cos(theta))*temz;

    let result=createVector(x,y,z);
    return result;
}*/

