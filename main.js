difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size (550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized !');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("Left Wrist = " + leftwristX + "Right Wrist = " + rightwristX + "Difference = " + difference);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("font_size").innerHTML = "The FOnt Size Of The Text Will Be = " + difference + "px";
    textSize(difference);
    fill('#ffe787');
    text('Peter', 50, 400);
}