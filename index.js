document.getElementById("aboutbutton").classList.add("button");
document.getElementById("aboutbutton").addEventListener("click", typeWriter);

var i = 0;
var txt = "The Association for Computing Machinery is a US-based international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The VIT Chennai Student chapter aims to foster and nurture these beliefs at the college levels";
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
