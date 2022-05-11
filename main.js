moustache_x=0
moustache_y=0

function preload(){
 manmoustache="https://us.123rf.com/450wm/ilonitta/ilonitta1905/ilonitta190500276/122405002-moustaches-sticker-black-isolated-silhouettes-for-cinco-de-mayo-paper-cutting-design-mustache-for-ba.jpg?ver=6"
    }
function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()

    video=createCapture(VIDEO)
    video.size(400, 300)
    video.hide()
      poseNet=ml5.poseNet(video, modelloaded)
      poseNet.on(poses, gotPoses)
}

function gotPoses(results){
    console.log(results)
   moustache_x=results[0].poses.nose.x
   moustache_y=results[0].poses.nose.y
   console.log(moustache_x)
   console.log(moustache_y)
}
function draw(){
   image(video, 0, 0, 400, 300) 
}

function modelloaded() {
    console.log('Posenet is initialized.')
}

function save_image(){
    save(myfilterimage.png)
}

function poses(){

}