var score_rick = 0;
var score_kirito = 0;
var score_food = 0;
var score_megumin = 0;
var score_rocket = 0;


function rickKey(){
    if (event.keyCode==72) {
        if (score_rick == 1 || score_rick == 3){
            score_rick = 0;
        }
        else {
            score_rick += 1;
        }
	} else if (event.keyCode==69) {
        if (score_rick == 1 || score_rick == 3){
            score_rick += 1;
        }
        else {
            score_rick = 0;
        }
	} 
    if (score_rick >= 4){
        window.open("https://youtu.be/83oHyBpNd-4","rick", config='titlebar=0,scrollbars=0,status=0,menubar=0,toolbar=0');
        score_rick = 0;
        return false;
    }
}

function kiritoKey(){
    if (event.keyCode==67) {
        if (score_kirito != 0){
            score_kirito = 0;
        }
        else {
            score_kirito += 1;
        }
	} else if (event.keyCode==56) {
        if (score_kirito != 1){
            score_kirito = 0;
        }
        else {
            score_kirito += 1;
        }
	} else if (event.keyCode==55) {
        if (score_kirito != 2){
            score_kirito = 0;
        }
        else {
            score_kirito += 1;
        }
	} else if (event.keyCode==54) {
        if (score_kirito != 3){
            score_kirito = 0;
        }
        else {
            score_kirito += 1;
        }
	} else if (event.keyCode==51) {
        if (score_kirito != 4){
            score_kirito = 0;
        }
        else {
            score_kirito += 1;
        }
	} 
    if (score_kirito >= 5){
        var audio = new Audio('/audio/kirito.mp3');
        audio.play();
        score_kirito = 0;
        return false;
    }
}

function foodKey(){
    if (event.keyCode==50) {
        if (score_food != 0){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} else if (event.keyCode==56 && score_food == 1) {
        if (score_food != 1){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} else if (event.keyCode==52) {
        if (score_food != 2){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} else if (event.keyCode==65) {
        if (score_food != 3){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} else if (event.keyCode==56 && score_food == 4) {
        if (score_food != 4){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} else if (event.keyCode==54) {
        if (score_food != 5){
            score_food = 0;
        }
        else {
            score_food += 1;
        }
	} 
    if (score_food >= 6){
        var audio = new Audio('/audio/weed.mp3');
        audio.play();
        score_food = 0;
        return false;
    }
}

function meguminKey(){
    if (event.keyCode==66) {
        if (score_megumin != 0){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} else if (event.keyCode==65) {
        if (score_megumin != 1){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} else if (event.keyCode==75) {
        if (score_megumin != 2){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} else if (event.keyCode==85 && score_megumin == 3) {
        if (score_megumin != 3){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} else if (event.keyCode==82) {
        if (score_megumin != 4){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} else if (event.keyCode==69) {
        if (score_megumin != 5){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	}  else if (event.keyCode==84) {
        if (score_megumin != 6){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	}  else if (event.keyCode==83) {
        if (score_megumin != 7){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	}  else if (event.keyCode==85 && score_megumin == 8) {
        if (score_megumin != 8){
            score_megumin = 0;
        }
        else {
            score_megumin += 1;
        }
	} 
    if (score_megumin >= 9){
        var audio = new Audio('/audio/megumin.mp3');
        audio.play();
        score_megumin = 0;
        return false;
    }
}

function rocketKey(){
    if (event.keyCode==82) {
        if (score_rocket != 0){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} else if (event.keyCode==79) {
        if (score_rocket != 1){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} else if (event.keyCode==67) {
        if (score_rocket != 2){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} else if (event.keyCode==75) {
        if (score_rocket != 3){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} else if (event.keyCode==69) {
        if (score_rocket != 4){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} else if (event.keyCode==84) {
        if (score_rocket != 5){
            score_rocket = 0;
        }
        else {
            score_rocket += 1;
        }
	} 
    if (score_rocket >= 6){
        var audio = new Audio('/audio/rocket.mp3');
        audio.play();
        score_rocket = 0;
        return false;
    }
}

function keyFunction() {
	rickKey();
    kiritoKey();
    foodKey();
    meguminKey();
    rocketKey();
}
document.onkeydown=keyFunction;