import "./styles.css";
import * as DataBusiness from "./data_business.js";
import * as Utils from "./utils.js";

DataBusiness.getCharactersID().then(data => {
    console.log(data);
})

DataBusiness.getCharacters().then(data => {
    const users = data;
    const nodes = [];
    for (let character of users) {
        const node = Utils.createCharacterRow(character);
        nodes.onclick = function () {
            DataBusiness.getCharactersId(character).then(data2 => {
                console.log(data2[0]);
                Utils.showCharacter(data2[0]);
            })
        }
    }


})