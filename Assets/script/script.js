var image = document.querySelector('img')
console.log(image);

var imageCoords = image.getBoundingCLientRect

image.addEventListener("mouseover", ghostAppears);

function ghostAppears() {
  console.log(image)
  image.style.opacity = "1";
  image.style.transition = "3s"
}

image.addEventListener("mouseleave", ghostDisappears);

function ghostDisappears() {
  image.style.opacity = "0";
}
