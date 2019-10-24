let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let img;
let shoulderX = 0;
let shoulderY = 0;
let imag;
let imgg;
let imagg;


function preload() {
  img = loadImage("moustache.png");
  imag = loadImage("wig.png");
  imgg = loadImage("pig.png");
  imagg = loadImage("wing.png");
}



function setup() {
  createCanvas(1200, 1200);
  video = createCapture(VIDEO)
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

}


function modelReady() {
  console.log('model ready')
}


function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    let sX = poses[0].pose.keypoints[2].position.x;
    let sY = poses[0].pose.keypoints[2].position.y;

    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
    shoulderX = lerp(shoulderX, sX, 0.5);
    shoulderY = lerp(shoulderY, sY, 0.5);

  }
}

function draw() {
  image(video, 0, 0);
  let d = dist(noseX, noseY, eyelX, eyelY); //scale
  image(imagg, shoulderX-490, shoulderY-150, 1000,500); //wing
  image(imag, noseX - 350, noseY - 150, 700, 350); //hair, (scale this)
  image(imgg, noseX - 72.5, noseY - 50, 150, 100); //nose
  image(img, noseX - 47, noseY - 1, 100, 40); //moustache
  //fill(255, 200, 250);
  //ellipse(noseX, noseY, d);
  noFill();
  circle(eyelX, eyelY, 40);
  noFill();
  circle(shoulderX, shoulderY, 40);


}
