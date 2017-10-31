/**
 * Created by alesha on 31.10.2017.
 */
function checkSpam(str) {
    str = str.toLowerCase()
    if((str.indexOf("viagra") + 1)||(str.indexOf("xxx") + 1)){
        return true;
    } else {
        return false;
    }
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));