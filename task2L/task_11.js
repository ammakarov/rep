function getWeekDay(data) {
    var dataName = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return dataName[data.getDay()];
}

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );