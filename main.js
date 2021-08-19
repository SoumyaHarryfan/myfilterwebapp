noseX = 0;
noseY = 0;
function preload(){
crown = loadImage("https://i.postimg.cc/TP76dzvk/thumbnail.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
    console.log("Posenet is initialized");
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log('noseX = '+results[0].pose.nose.x);
        console.log('noseY = '+results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);
image(crown,noseX,noseY,150,150);
}
function take_snapshot(){
    save('myfilteredimage.png')
}