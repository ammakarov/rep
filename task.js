/**
 * Created by Aleksej on 06/02/17.
 */
//var name = '';
//name = prompt('Как тебя зовут?', '')
//alert(prompt('Как тебя зовут?', ''));
/*
var otvet = '';
otvet = prompt("Каково \"официальное\" название JavaScript?", '');
if(otvet == 'EcmaScript')
    alert('Верно');
else
{
    alert('Не знаете? "EcmaScript"!')
}*/

/*var namber = prompt('Введите число', '');
if (namber > 0)
    alert('1');
else if (namber < 0)
    alert('-1');
else
    alert('0');*/

/*var login = '', pass = '';
login = prompt('Кто пришел ?', '');
if(login == null)
    alert('Вход отменен');
else if(login != 'Админ')
          alert('Я вас не знаю');
    else {
        pass = prompt('Пароль ?', '');
        if (pass == null)
            alert('Ввод отменен');
        else if (pass != 'Черный Властелин')
                alert('Пароль не верен');
            else
                alert('Добро пожаловать!');
    }*/

/*
var a = b = 1;
resualt = (a + b < 4) ? 'Мало'  : 'Много';
alert(resualt);*/


/*
var message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здраствуйте' :
        (login == '') ? 'Нет логиана' :
            '';*/
var i, j, simpleNamber = ' ';
for(i=2; i<101; i++)
    for (j=2; j<=i; j++)
        if(j == i) simpleNamber = simpleNamber + i + ', ';
        else if(!(i % j)) break;
alert(simpleNamber);
