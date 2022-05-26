function disableScroll(event) {
    event.preventDefault();
}
  
document.addEventListener('touchmove', disableScroll, { passive: false });

let vts=[[0., 4.23607, 1.61803], [0., 4.23607, -1.61803], [2.61803, 2.61803, 2.61803], [2.61803, 2.61803, -2.61803], [4.23607, 1.61803, 0.], [0., -4.23607, -1.61803], [0., -4.23607, 1.61803], [2.61803, -2.61803, -2.61803], [2.61803, -2.61803, 2.61803], [4.23607, -1.61803, 0.], [-2.61803, -2.61803, -2.61803], [-2.61803, -2.61803, 2.61803], [-4.23607, -1.61803, 0.], [-2.61803, 2.61803, 2.61803], [-2.61803, 2.61803, -2.61803], [-4.23607, 1.61803, 0.], [1.61803, 0., 4.23607], [-1.61803, 0., 4.23607], [-1.61803, 0., -4.23607], [1.61803, 0., -4.23607]];
let faces=[[3, 5, 10, 9, 17], [4, 5, 10, 8, 20], [1, 2, 4, 5, 3], [6, 7, 9, 10, 8], [1, 3, 17, 18, 14], [2, 4, 20, 19, 15], [7, 9, 17, 18, 12], [6, 8, 20, 19, 11], [1, 2, 15, 16, 14], [6, 7, 12, 13, 11], [12, 13, 16, 14, 18], [11, 13, 16, 15, 19]];
let theta=0,n;

function setup(){
    let s=min(windowWidth,windowHeight);
    createCanvas(s,s,WEBGL);
    n=createVector(1,0,0);

}

function draw(){
    background(50);

    scale(40);

    for(let i=0;i<faces.length;i++){
        beginShape();
        for(let j=0;j<faces[i].length;j++){
            vertex(vts[faces[i][j]-1][0],vts[faces[i][j]-1][1],vts[faces[i][j]-1][2]);
        }
        endShape(CLOSE);
    }

    if(mouseIsPressed==false){
        for(let i=0;i<vts.length;i++){
            let v=createVector(vts[i][0],vts[i][1],vts[i][2]);
            theta=constrain(theta,0,0.1);
            v=rot(v,n,theta*deltaTime*0.04);
            vts[i][0]=v.x;
            vts[i][1]=v.y;
            vts[i][2]=v.z;
        }
    }

}

function mouseDragged(){
    let angle=atan2(mouseY-pmouseY,mouseX-pmouseX)+PI/2;
    theta=map(dist(mouseX,mouseY,pmouseX,pmouseY),0,width,0,6);

    n.x=cos(angle);
    n.y=sin(angle);

    for(let i=0;i<vts.length;i++){
        let v=createVector(0,0,0);
    
        v=v.set(vts[i][0],vts[i][1],vts[i][2]);
        
        v=rot(v,n,theta*deltaTime*0.04);
        vts[i][0]=v.x;
        vts[i][1]=v.y;
        vts[i][2]=v.z;
    }    
    
}

function rot(v,n,theta){

    let temx=v.x,temy=v.y,temz=v.z,x,y,z;
    n=n.normalize();

    x=(n.x*n.x*(1-cos(theta))+cos(theta))*temx+(n.x*n.y*(1-cos(theta))-n.z*sin(theta))*temy+(n.x*n.z*(1-cos(theta))+n.y*sin(theta))*temz;
    y=(n.x*n.y*(1-cos(theta))+n.z*sin(theta))*temx+(n.y*n.y*(1-cos(theta))+cos(theta))*temy+(n.y*n.z*(1-cos(theta))-n.x*sin(theta))*temz;
    z=(n.x*n.z*(1-cos(theta))-n.y*sin(theta))*temx+(n.y*n.z*(1-cos(theta))+n.x*sin(theta))*temy+(n.z*n.z*(1-cos(theta))+cos(theta))*temz;

    let result=createVector(x,y,z);
    return result;
}