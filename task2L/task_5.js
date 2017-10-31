/**
 * Created by Aleksej on 30/10/17.
 */
function ucFirst(inputString) {
    var rezaltString = "";
    if(inputString.length){
        rezaltString = inputString[0].toUpperCase() + inputString.slice(1);
    }
    return rezaltString;
}
alert(ucFirst("vasa"));
alert(ucFirst("VASA"));
alert(ucFirst("v"));
alert(ucFirst(""));
alert(ucFirst("валера"));
alert(ucFirst("3vasa"));
alert(ucFirst("-vasa"));