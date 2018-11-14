

//DECLARATION OF VARIABLES
//WE THE VARIABLES...
var images
var parent
var newText
var arrayOfBoxes
var randomboxDad
var newlyCreatedText
var textParent
var aNewGhost

var ghostsVanquished = 0;


var someGhosts = ["Assets/images/mosquito1.png", "Assets/images/mosquito2.png"];

var getRandomGhost = function() {
  return someGhosts[Math.floor(Math.random()*someGhosts.length)]
}

function removeText(textToRemove) {
  while(textToRemove.parentNode) {
    textParent = textToRemove.parentElement
    //THE NEWLY CREATED H2 ELEMENT IS REMOVED FROM THE DOCUMENT
    textParent.removeChild(textToRemove);
  }
}



//the function below applies an event that makes the ghost "appear" when moused over for all img elements, including newly appended image elements
document.querySelector('.dad').addEventListener('mouseover', function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
    images = event.target
    images.style.opacity = "1";
    images.style.transition = "3s";
  }
});

//the function below applies an event that makes the ghost "disappear" when moused off for all img elements, including newly appended image elements
document.querySelector('.dad').addEventListener('mouseout', function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
    images = event.target
    images.style.opacity = "0";
    images.style.transition = "3s";
  }
});

//the following function creates an event when users click on any imaeg element, even newly appended ones using delegation
document.querySelector('.dad').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
    ghostsVanquished ++
    document.querySelector(".btn-info").textContent = `Mosquitos Squashed: ${ghostsVanquished}`
    images = event.target
    images.src = "Assets/images/splat.png"
    images.classList.add("splat")

    // rANDOM AMOUNT OF  SECONDS BETWEEN 1/2 AFTER THE USER CLICKS, THIS HAPPENS:
    setTimeout(removeText, 2000, newText)
        }
});


      // 3 SECONDS AFTER THE CLICK (AND 1 SECOND AFTER THE H2 ELEMENT IS REMOVED), THIS HAPPENS:
setInterval(makeaNewGhost, Math.floor(Math.random()*3000))
function  makeaNewGhost() {
    //A NEW IMAGE ELEMENT IS CREATED
    aNewGhost = document.createElement('img');
    //THE SOURCE IS A LOCALLY STORED IMAGE WHOSE FILE PATH IS SELECTED RANDOMLY
    aNewGhost.src = getRandomGhost()
    //IT'S ALT IS BELOW
    aNewGhost.alt = "a new cute ghost click it before it pulls your heart strings!";
    aNewGhost.style.opacity = 1; //this is temporary just so I can see if the new ghost popped up, I need to call the above code to happen again, so when a user mouses over the new ghost/clicks it/etc, all the same stuff happens

    arrayOfBoxes = document.querySelectorAll('.boxes')
    randomboxDad = arrayOfBoxes[Math.floor(Math.random()*(arrayOfBoxes.length))]

    //THIS NEWLY CREATED ELEMENT IS PLACED ON THE PAGE INSIDE THE PARENT.
    //mKE SURE THE RANDOMLY CHOSEN DIV IS EMPTY
    while(randomboxDad.childNodes[0]) {
      randomboxDad.removeChild(randomboxDad.childNodes[0])
    }
    randomboxDad.appendChild(aNewGhost)
    setTimeout(aGhostEscapes, 2000, aNewGhost)
  }


           // setInterval(aGhostEscapes, 4000)

var escapedGhostCounter = 0;
function aGhostEscapes(fourSecondOldGhost) {
  if(!fourSecondOldGhost.classList.contains("splat")) {
    var newWarnText = document.createElement('h2');
    //MAKES THE H2 TEXT NODE READ THE FOLLOWING
    newWarnText.textContent = "A mosquito bit you!!";
    // MAKES THE H2 CLASSNAME 'VANQUISHED'
    newWarnText.className = "escaped text-center";

    fourSecondOldGhost.parentNode.appendChild(newWarnText)


    fourSecondOldGhost.parentElement.removeChild(fourSecondOldGhost)
    setTimeout(removeText, 2000, newWarnText)

    escapedGhostCounter ++
    document.querySelector(".btn-danger").textContent = `Mosquito Bites: ${escapedGhostCounter}`

    // makeaNewGhost()
  }  // makeaNewGhost()
}





//Math.floor(Math.random()*3000) <-- THIS WILL RANDOMIZE THE AMOUNT OF TIME, REPLACE THE NEARGHOST TIMOUT TO THIS, NEED TO MAKE THIS ONLY HAPPEN AFTER TEXT IS REMOVED, MAYBE?
