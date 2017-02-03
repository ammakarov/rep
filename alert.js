/**
 * Created by user on 01.02.2017.
 */
/*var admin, name
name = 'Василий';
admin = name;*/
// alert('Я - JavaScript');
// alert('Привет');
//alert(admin);
/*var myPlanet = 'Земля';
var vizitorName = 'Петя';
alert(1/0);
var i, a, b, c;
a=1;
b=3;*/
//b=3;

var objects = [
    {key: 3,
    y: 0.5,
    title: "456"},
    {key: 5,
    f: 8,
    title: "rte"},
    {key: 8,
    x: 3,
    title:"ups"}
];

// вывести title, у которого key == 8
for(var i=0; i<3; i++)
{
    if (objects[i].key == 8)
        alert(objects[i].title);

};

for(o in objects)
    if (objects[o].key == 8)
        alert(objects[o].title)

// посчитать сумму значений key
var summKey = 0;
for(a in objects)
    summKey += objects[a].key;
alert('Сумма ' + summKey);





