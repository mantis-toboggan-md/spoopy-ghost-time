

//DECLARATION OF VARIABLES
//WE THE VARIABLES...
var images
var parent
var newText
var arrayOfBoxes
var randomboxDad



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
    images = event.target
    //VAR IDENTIFIES PARENT OF IMAGE ELEMENT (IT'S BOX)
    parent = images.parentElement
    //CREATES NEW H2 ELEMENT IN A VARIABLE
    newText = document.createElement('h2');
    //MAKES THE H2 TEXT NODE READ THE FOLLOWING
    newText.textContent = "You vanquished the ghost!";
    // MAKES THE H2 CLASSNAME 'VANQUISHED'
    newText.className = "vanquished text-center";
    //ACTUALLY PLACES THIS NEW TEXT INSIDE THE PARENT ELEMENT (BOXES)
    parent.appendChild(newText);
    //REMOVES THE IMAGE ELEMENT FROM THE DOCUMENT
    parent.removeChild(images);

    // 2 SECONDS AFTER THE USER CLICKS, THIS HAPPENS:
    setTimeout(removeText, 2000)
        function removeText() {
          //THE NEWLY CREATED H2 ELEMENT IS REMOVED FROM THE DOCUMENT
          parent.removeChild(newText);
        }

      // 3 SECONDS AFTER THE CLICK (AND 1 SECOND AFTER THE H2 ELEMENT IS REMOVED), THIS HAPPENS:
     setTimeout(aNewGhost, 3000)
           function aNewGhost() {
             //A NEW IMAGE ELEMENT IS CREATED
             var aNewGhost = document.createElement('img');
             //THE SOURCE IS A LOCALLY STORED IMAGE
             aNewGhost.src = "Assets/images/moreSpoopyGhosts.png";
             //IT'S ALT IS BELOW
             aNewGhost.alt = "a new cute ghost click it before it pulls your heart strings!";
             aNewGhost.style.opacity = 1; //this is temporary just so I can see if the new ghost popped up, I need to call the above code to happen again, so when a user mouses over the new ghost/clicks it/etc, all the same stuff happens

             arrayOfBoxes = document.querySelectorAll('.boxes')
             randomboxDad = arrayOfBoxes[Math.floor(Math.random()*(arrayOfBoxes.length))]

             //THIS NEWLY CREATED ELEMENT IS PLACE ON THE PAGE INSIDE THE PARENT.
             randomboxDad.appendChild(aNewGhost)
           }
  }
});
