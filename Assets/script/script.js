var image = document.querySelector('img')


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

  setTimeout(aNewGhost, 4000)
  function aNewGhost() {
    var aNewGhost = document.createElement('img')
    aNewGhost.src = "Assets/images/moreSpoopyGhosts.png";
    aNewGhost.alt = "a new cute ghost click it before it pulls your heart strings!";
    aNewGhost.style.opacity = 1; //this is temporary just so I can see if the new ghost popped up, I need to call the above code to happen again, so when a user mouses over the new ghost/clicks it/etc, all the same stuff happens

    parent.appendChild(aNewGhost)

  }

}
