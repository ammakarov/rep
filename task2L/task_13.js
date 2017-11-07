function makeNegative(number) {
    if(number > 0) {
        return -1*number;
    } else {
        return number;
    }
};

alert( makeNegative(1) );
alert ( makeNegative(-5) );
alert ( makeNegative(0) );