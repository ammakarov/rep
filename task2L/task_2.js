/**
 * Created by Aleksej on 30/08/17.
 */
function randomNumber() {
    return Math.floor(Math.random()*101);
}
function outputRandomNamber() {
    document.getElementById("random_number").innerHTML = randomNumber() ;
}
