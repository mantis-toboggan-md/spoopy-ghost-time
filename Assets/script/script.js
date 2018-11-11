var imageArray = document.querySelectorAll('img')

var arrayOfBoxes = document.querySelectorAll('.boxes')


//this variable will be a box randomly selected from available boxes on page
var randomboxDad = arrayOfBoxes[Math.floor(Math.random()*(arrayOfBoxes.length+1))]

//THE FUNCTION BELOW CAUSES ALL IMAGES ON PAGE FADE INTO VISIBILITY WHEN MOUSED OVER

var mousoverEffect = imageArray.forEach(function(elem) {
  elem.addEventListener("mouseover", ghostAppears);

  function ghostAppears() {
    elem.style.opacity = "1";
    elem.style.transition = "3s"
  }
})






//THE FUNCTION BELOW CAUSES ALL IMAGES ON PAGE FADE OUT OF VISIBILITY WHEN MOUSE LEAVES

var mouseOffEffect = imageArray.forEach(function(elem){
  elem.addEventListener("mouseleave", ghostDisappears);

  function ghostDisappears() {
    elem.style.opacity = "0";
    elem.style.transition = "3s"
  }

})

//THE FOLLOWING FUNCTION AFFECTS ALL MAGES ON PAGE

imageArray.forEach(function(elem){
  //ADDS EVENT LISTENER FOR WHEN USER CLICKS AN IMAGE ELEMENT
  elem.addEventListener("click", ghostisVanquished);
  console.log(elem.nodeName);

  //DEFINES FUNCTION WHERE GHOST IS "VANQUISHED"
  function ghostisVanquished() {

    //VAR IDENTIFIES PARENT OF IMAGE ELEMENT (IT'S BOX)
    var parent = elem.parentElement
    //CREATES NEW H2 ELEMENT IN A VARIABLE
    var newText = document.createElement('h2');
    //MAKES THE H2 TEXT NODE READ THE FOLLOWING
    newText.textContent = "You vanquished the ghost!";
    //MAKES THE H2 CLASSNAME 'VANQUISHED'
    newText.className = "vanquished";
    //ACTUALLY PLACES THIS NEW TEXT INSIDE THE PARENT ELEMENT (BOXES)
    parent.appendChild(newText);
    //REMOVES THE IMAGE ELEMENT FROM THE DOCUMENT
    parent.removeChild(elem);


    //2 SECONDS AFTER THE USER CLICKS, THIS HAPPENS:
    setTimeout(removeText, 2000)
    function removeText() {
      //THE NEWLY CREATED H2 ELEMENT IS REMOVED FROM THE DOCUMENT
      parent.removeChild(newText);
    }

    //3 SECONDS AFTER THE CLICK (AND 1 SECOND AFTER THE H2 ELEMENT IS REMOVED), THIS HAPPENS:
    setTimeout(aNewGhost, 3000)
    function aNewGhost() {
      //A NEW IMAGE ELEMENT IS CREATED
      var aNewGhost = document.createElement('img');
      //THE SOURCE IS A LOCALLY STORED IMAGE
      aNewGhost.src = "Assets/images/moreSpoopyGhosts.png";
      //IT'S ALT IS BELOW
      aNewGhost.alt = "a new cute ghost click it before it pulls your heart strings!";
      aNewGhost.style.opacity = 1; //this is temporary just so I can see if the new ghost popped up, I need to call the above code to happen again, so when a user mouses over the new ghost/clicks it/etc, all the same stuff happens

      //THIS NEWLY CREATED ELEMENT IS PLACE ON THE PAGE INSIDE THE PARENT.
      randomboxDad.appendChild(aNewGhost)
    }
  }
})
