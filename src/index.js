import "./styles.css";
import * as DataBusiness from "./data_business.js";
import * as Utils from "./utils.js";



document.getElementById("character").addEventListener("click", () => showCharacters())
document.getElementById("location").addEventListener("click", () => showLocations())

function showCharacters(){
    DataBusiness.getCharacters().then(data => {
        document.getElementById("root").innerHTML = "";
        for (let character of data.results) {
            var characterRow = Utils.createCharacterRow(character);
            characterRow.onclick = function createID(){
                DataBusiness.getCharactersID(character.id).then(data=> 
                    Utils.showCharacter(data))};
            document.getElementById("root").append(characterRow);
            } 
        });
}

function showLocations(){
    DataBusiness.getLocations().then(data=>{
        document.getElementById("root").innerHTML="";
        for(let location of data.results){
            var locationRow = Utils.createLocationRow(location);
            document.getElementById("root").append(locationRow);
        }
    })
}