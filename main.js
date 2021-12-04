function startClassification() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NUXnMKZo0/model.json", modelLoaded);


}

function modelLoaded(){
classifier.classify(gotResults);

}

function gotResults (error,results)
{
if (error)
{
console.error(error);

} else {
console.log(results); 
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("answer_label").innerHTML = 'I can hear - ' +
results[0].label;
document.getElementById("answer_confidence").innerHTML = ' Accuracy - ' +
(results[0].confidence*100).toFixed(2)+ " % " ;
document.getElementById("answer_label").style.color = "rgb("
+random_number_r+ " , " +random_number_g+ " , " +random_number_b+ " ) "
document.getElementById("answer_confidence").style.color = "rgb(" 
+random_number_r+ " , " +random_number_g+ " , " +random_number_b+ " ) "

img= document.getElementById('Alien1')
img1=document.getElementById('Alien2')
img2=document.getElementById('Alien3')
img3=document.getElementById('Alien4')

if (results[0].label== "Clapping" ){
img.src = 'aliens-01.gif';
img1.src = 'aliens-02.png';
img2.src = 'aliens-03.png';
img3.src = 'aliens-04.png';
} else if (results[0].label == "Tapping") {
img.src = 'aliens-01.png';
img1.src = 'aliens-02.gif';
img2.src = 'aliens-03.png';
img3.src = 'aliens-04.png';
}
else if (results[0].label == "Drums") {
img.src = 'aliens-01.png';
img1.src = 'aliens-02.png';
img2.src = 'aliens-03.gif';
img3.src = 'aliens-04.png';
}
else{
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.png';
    img2.src = 'aliens-03.png';
    img3.src = 'aliens-04.gif';
}

}
}