var image = document.querySelector('img')


var imageCoords = image.getBoundingCLientRect

image.addEventListener("mouseover", ghostAppears);

function ghostAppears() {
  image.style.opacity = "1";
  image.style.transition = "3s"
}

image.addEventListener("mouseleave", ghostDisappears);

function ghostDisappears() {
  image.style.opacity = "0";
  image.style.transition = "3s"
}

image.addEventListener("click", ghostisVanquished);

function ghostisVanquished() {
  image.style.animation = "slideout";
  image.style.transition = "3s";
  var parent = image.parentElement
  console.log(parent);
  // parent.removeChild(image)
  var newText = document.createElement('p')
  newText.textContent = "You vanquished the ghost!"
  newText.className = "vanquished"
  parent.appendChild(newText)
  parent.removeChild(image)



  setTimeout(removeText, 2000)
  function removeText() {

    parent.removeChild(newText)
  }
}
