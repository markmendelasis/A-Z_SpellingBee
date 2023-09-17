document.getElementById("spellSpace").addEventListener("keypress", function(event) {
  // Check if the Enter key (key code 13) was pressed
  if (event.key === "Enter") {
      // Prevent the default behavior of the Enter key (page refresh)
      event.preventDefault();

      // Submit the form or perform any other desired action
      document.getElementById("submitButton").click();

  }
});


var score = 0;


var welcomeAudio = document.getElementById("welcomeAudio");




var startTheGameAudio = document.getElementById("startTheGameAudio");


var start = document.querySelector("body > div:nth-child(2) > div > div > div.col-xl-9.col.col-lg-12 > div > button");

start.addEventListener("click", function(){
  startTheGameAudio.play();
  document.getElementById("willOpen").style.display="block";
  var startRemove = document.getElementById("start");
  startRemove.remove();

});




var closeTheModal = document.querySelector("#openModal > div > div > div.modal-header > button");
var correctAudio = document.querySelector("#correctAudio");
var wrongAudio = document.querySelector("#wrongAudio");
var spellTheAudio = document.getElementById("myAudio");
var celebrateAudio = document.getElementById("celebrateAudio");


function playAudio() {
  spellTheAudio.play();
}

// Get all the letter buttons by their class name
var letterButtons = document.querySelectorAll(".letterImg");

// Attach a click event listener to each button
letterButtons.forEach(button => {
  button.addEventListener("click", function() {

    var letterClicked = this.id; // Get the id attribute of the clicked button


    switch(letterClicked){
      case "A":
        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/achievement.mp3"
        imgOfButton = document.querySelector("#A");
        spellingOfAudio = "achievement";
        // checkTheSpell();
        
      break;

      case "B":
         var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/bureaucracy.mp3";
         imgOfButton = document.querySelector("#B");
         spellingOfAudio = "bureaucracy";
        //  checkTheSpell();
      break;

      case "C":  
        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/ceremonious.mp3";
        imgOfButton = document.querySelector("#C");
        spellingOfAudio = "ceremonious";
        // checkTheSpell();
      break;

      case "D":  

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/dilemma.mp3";
        imgOfButton = document.querySelector("#D");
        spellingOfAudio = "dilemma";
        // checkTheSpell();
      break;
      
      case "E":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/endeavour.mp3";
        imgOfButton = document.querySelector("#E");
        spellingOfAudio = "endeavour";
        // checkTheSpell();
      break;
      
      case "F":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/fatuous.mp3";
        imgOfButton = document.querySelector("#F");
        spellingOfAudio = "fatuous";
        // checkTheSpell();
      break;

      case "G":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/genre.mp3";
        imgOfButton = document.querySelector("#G");
        spellingOfAudio = "genre";
        // checkTheSpell();
      break;        

      case "H":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/harbinger.mp3";
        imgOfButton = document.querySelector("#H");
        spellingOfAudio = "harbinger";
        // checkTheSpell();
      break;   

      case "I":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/idiosyncrasy.mp3";
        imgOfButton = document.querySelector("#I");
        spellingOfAudio = "idiosyncrasy";
        // checkTheSpell();
      break; 
    
      case "J":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/juxtapose.mp3";
        imgOfButton = document.querySelector("#J");
        spellingOfAudio = "juxtapose";
        // checkTheSpell();
      break; 

      case "K":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/kinship.mp3";
        imgOfButton = document.querySelector("#K");
        spellingOfAudio = "kinship";
        // checkTheSpell();
      break;

      case "L":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/labyrinth.mp3";
        imgOfButton = document.querySelector("#L");
        spellingOfAudio = "labyrinth";
        // checkTheSpell();
      break;        

      case "M":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/manoeuvre.mp3";
        imgOfButton = document.querySelector("#M");
        spellingOfAudio = "manoeuvre";
        // checkTheSpell();
      break;   

      case "N":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/niche.mp3";
        imgOfButton = document.querySelector("#N");
        spellingOfAudio = "niche";
        // checkTheSpell();
      break; 
    
      case "O":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/omniscient.mp3";
        imgOfButton = document.querySelector("#O");
        spellingOfAudio = "omniscient";
        // checkTheSpell();
      break;         

      case "P":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/pseudonym.mp3";
        imgOfButton = document.querySelector("#P");
        spellingOfAudio = "pseudonym";
        // checkTheSpell();
      break;        

      case "Q":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/quintessence.mp3";
        imgOfButton = document.querySelector("#Q");
        spellingOfAudio = "quintessence";
        // checkTheSpell();
      break;   

      case "R":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/renaissance.mp3";
        imgOfButton = document.querySelector("#R");
        spellingOfAudio = "renaissance";
        // checkTheSpell();
      break; 
    
      case "S":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/solace.mp3";
        imgOfButton = document.querySelector("#S");
        spellingOfAudio = "solace";
        // checkTheSpell();
      break;

      case "T":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/threshold.mp3";
        imgOfButton = document.querySelector("#T");
        spellingOfAudio = "threshold";
        // checkTheSpell();
      break;   

      case "U":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/ubiquitous.mp3";
        imgOfButton = document.querySelector("#U");
        spellingOfAudio = "ubiquitous";
        // checkTheSpell();
      break; 
    
      case "V":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/vigorous.mp3";
        imgOfButton = document.querySelector("#V");
        spellingOfAudio = "vigorous";
        // checkTheSpell();
      break;

      case "W":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/wardrobe.mp3";
        imgOfButton = document.querySelector("#W");
        spellingOfAudio = "wardrobe";
        // checkTheSpell();
      break;        

      case "X":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/xylophone.mp3";
        imgOfButton = document.querySelector("#X");
        spellingOfAudio = "xylophone";
        // checkTheSpell();
      break;   

      case "Y":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/yacht.mp3";
        imgOfButton = document.querySelector("#Y");
        spellingOfAudio = "yacht";
        // checkTheSpell();
      break; 
    
      case "Z":

        var spellTheAudio = document.querySelector("#myAudio").src="spellTheAudio/zephyr.mp3";
        imgOfButton = document.querySelector("#Z");
        spellingOfAudio = "zephyr";
        // checkTheSpell();
      break;        

        default:
    }


    console.log("Letter clicked: " + letterClicked); // Output the clicked letter to the console
    // You can perform further actions with the clicked letter here
  });
});







  var inputField = document.getElementById("spellSpace");
  var submitButton = document.getElementById("submitButton");


  submitButton.addEventListener("click", function() {
    // Get the value from the input field
    var inputValue = inputField.value;
    // Display the value in the output element
    
    if (inputValue == spellingOfAudio) {
        correctAudio.play();
        imgOfButton.style.visibility="hidden";
        closeTheModal.click();
        score++;
        
        

        if (score == 1) {
          celebrateAudio.play();
          document.querySelector("#willOpen").style.display="none";
          document.querySelector("#congratulations").style.display="block";

        } else{
          
        }
        

    } else {
        wrongAudio.play();
        closeTheModal.click();


    }

});





