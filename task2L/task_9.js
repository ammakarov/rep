var arr = [1, 2, 3, 4, 5];
function random(a, b) {
    if(Math.random() > 0.4 ){
        return 1;
    } else {
        return -1;
    }
}
arr.sort(random);

alert( arr );