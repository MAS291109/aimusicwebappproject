peter_pan = "";
hp_theme = "";
rightWrist_X = 0;
rightWrist_Y = 0;
leftWrist_X = 0;
leftWrist_Y = 0;

function preload(){
    peter_pan = loadSound("music2.mp3");
    hp_theme = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(video,0,0,600,500);
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
         
        leftWrist_X = result[0].pose.leftWrist.x;
        leftWrist_Y = result[0].pose.leftWrist.y;
        console.log("leftWrist_X = "+leftWrist_X+" leftWrist_Y = "+leftWrist_Y);

        rightWrist_X = result[0].pose.rightWrist.x;
        rightWrist_Y = result[0].pose.rightWrist.y;
        console.log("rightWrist_X = "+rightWrist_X+" rightWrist_Y = "+rightWrist_Y);
    }
}