var summ = 0;
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

for (var name in salaries){
    summ += salaries[name];
}
alert(summ);