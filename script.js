function request_permission(){
    if (
        DeviceMotionEvent &&
        DeviceMotionEvent.requestPermission &&
        typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
        DeviceMotionEvent.requestPermission();
    }
    if (
        DeviceOrientationEvent &&
        DeviceOrientationEvent.requestPermission &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
        DeviceOrientationEvent.requestPermission();
    }

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    request_permission();
}

function draw(){
    background(0);

    fill(255);

}
