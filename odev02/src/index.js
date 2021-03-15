const secondImages = [
    "cat.jpg",
    "dog1.jpg",
    "dog2.jpg",
];

let guess = 2;
let latestIndex;
let html;
let html1;
let html2;

export const newGame = () => {
if(guess!==0){
    let index = Math.floor(Math.random()*secondImages.length);
    if(latestIndex === index){
        index = (index+1)%secondImages.length;
    }
    const image = secondImages[index];
    latestIndex = index;
    html = document.getElementById("img0").src=image; 
    if(secondImages[0] === image){
        document.getElementById("messageId").innerHTML =
          "You won !!! Congratulations :) If you want to play a new game, you can click <span class ='link' onclick='document.location.reload(true);'> here </span>.";
    }
    guess-=1;
}else{
    document.getElementById("messageId").innerHTML =
      "You lost :( If you want to play a new game, you can click <span class = 'link' onclick = 'document.location.reload (true);'> here </span>.";
}
}

export const newGame1 = () => {
if(guess!==0){
    let index1 = Math.floor(Math.random()*secondImages.length);
    if(latestIndex === index1){
        index1 = (index1+1)%secondImages.length;
    }
    const image1 = secondImages[index1];
    latestIndex = index1;

    html1 = document.getElementById("img1").src=image1; 
    if(secondImages[0] === image1){
        document.getElementById("messageId").innerHTML =
          "You won !!! Congratulations :) If you want to play a new game, you can click <span class ='link' onclick='document.location.reload(true);'> here </span>.";
    } 
    guess-=1;
}else{
    document.getElementById("messageId").innerHTML =
      "You lost :( If you want to play a new game, you can click <span class = 'link' onclick = 'document.location.reload (true);'> here </span>.";
}
}

export const newGame2 = () => {
if(guess!==0){
    let index2 = Math.floor(Math.random()*secondImages.length);
    if(latestIndex === index2){
        index2 = (index2+1)%secondImages.length;
    }
    const image2 = secondImages[index2];
    latestIndex = index2;    
    html2 = document.getElementById("img2").src=image2; 
    if(secondImages[0] === image2){
        document.getElementById("messageId").innerHTML =
          "You won !!! Congratulations :) If you want to play a new game, you can click <span class ='link' onclick='document.location.reload(true);'> here </span>.";
    } 
    guess-=1;
}else{
    document.getElementById("messageId").innerHTML =
      "You lost :( If you want to play a new game, you can click <span class = 'link' onclick = 'document.location.reload (true);'> here </span>.";
}
}