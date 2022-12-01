function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Db_1G0y0r/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}
function gotResults(error, results){
if (error) {
    console.error(error);
} else {
    var imgear = 0;
    var imgcat = 0;
    var imgcow = 0;
    var imglion = 0;
    var imgstomach = 0;
    img1 = document.getElementById("ear");
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        if (results[0].label == "Meow"){
            img1.src = "cat.jpg";
            imgcat = imgcat + 1; 
        } else if (results[0].label == "Moo"){
            img1.src = "cow.jpg";
            imgcat = imgcow + 1; 
        } else if (results[0].label == "Roar"){
            img1.src = "lion.jpg";
            imgcat = imglion + 1; 
        } else if (results[0].label == "Stomach"){
            img1.src = "stomach.jpg";
            imgstomach = imgstomach + 1; 
        } else {
            if (results[0].label == "Meow"){
                img1.src = "ear.jpg";
        }
}
}
}