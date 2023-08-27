//https://teachablemachine.withgoogle.com/models/Op1gHm8Sk/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='myphoto' src='"+ data_uri+"'>"
});

}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Op1gHm8Sk/",modelloaded);

function modelloaded(){
    console.log("loaded");
}