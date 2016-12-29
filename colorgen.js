var rgbColor;
var html = "";
function randomRGB(){
 return Math.floor(Math.random() * 256); 
}
function randomColor(){
 var color = "rbg(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
 return color;
}

function print(message){
 document.write(message); 
}

for(var i = 0; i < 10; i++){
rgbColor = randomColor();
html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);
