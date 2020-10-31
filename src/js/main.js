import { generatePdf } from './pdf-util'
import pdfBase from '../certificate.pdf'

console.log("Main")

function make_date_str(today) {

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var today_str = dd + '/' + mm + '/' + yyyy;
  return today_str
}

function make_time_str(today) { 
  return String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0')
}


const today = new Date()
var today_str = make_date_str(today)
var time_str_1 = make_time_str(today)
today.setHours(today.getHours() + 1) 
var time_str_2 =  make_time_str(today)

/***** Fill your data here *****/

// It will generate a first certicate where heure de sortie is  generation time and reason 1
// Followed by a second certicate where heure de sortie is generation time and reason 2
var profile1 = 
	{    
        "address": "8 rue des bains",
	"birthday": "24/11/1967",
	"city": "Antibes",
	"datesortie": today_str,
	"firstname": "Sylvain",
	"heuresortie": time_str_1,
	"lastname": "Yolo",
	"placeofbirth": "Paris",
	"zipcode": "06600"
	}  
	

// const reason1 =  "travail"
// const reason1 =  "achats"
// const reason1 =  "sante"
// const reason1 =  "famille"
// const reason1 =  "handicap"
const reason1 =  "sport_animaux"
// const reason1 =  "convocation"
// const reason1 =  "missions"
// const reason1 =  "enfants"


// const reason2 =  "travail"
const reason2 =  "achats"
// const reason2 =  "sante"
// const reason2 =  "famille"
// const reason2 =  "handicap"
// const reason2 =  "sport_animaux"
// const reason2 =  "convocation"
// const reason2 =  "missions"
// const reason2 =  "enfants"

/***** Fill your data here *****/

var profile2 = profile1
var profile2 = Object.assign({}, profile1); // deep copy
profile2["heuresortie"] = time_str_2
 

generatePdf(profile1, reason1, pdfBase)
generatePdf(profile2, reason2, pdfBase)
// set downloadBlob in generatePdf otheriwse issue with async, it download before generation endee

