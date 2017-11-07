function stringToNumber(str) {
    return +str;    // parseInt можно использовать функцию (мягкое преобразование)
};

alert(stringToNumber("1234"));
alert(stringToNumber("605"));
alert(stringToNumber("1405"));
alert(stringToNumber("-7"));