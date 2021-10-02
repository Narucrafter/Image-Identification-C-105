Webcam.set({
    width: 340,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
console.log("Ok");
Webcam.attach("#camera");

function takeSnapShot() {
    Webcam.snap(function (data_URI) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_URI + '">';
    });
}
console.log("ml5 version is", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0I89cNAPR/model.json", modelLoaded);

function modelLoaded() {

    console.log("model has been successfully loaded");

}

function check() {
var Img=document.getElementById("captured_image");
classifier.classify(Img,gotResult);
}




function gotResult(error,results) {
if(error==true)
{
console.error(error);
}
else{
console.log(results);
document.getElementById("object_name").innerHTML=results[0].label;
document.getElementById("object_accuracy").innerHTML=results[0].confidence;
}

}





























