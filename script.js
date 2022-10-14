function random(min, max) {
    let num = Math.floor(Math.random() * (max + - min) + min)
    return num;}

var a = random(1, 100);
alert("Я загадал число! у тебя 5 попыток чтобы угадать его!подсказка: числа от 1 до 100) Удачи!");
alert(a)

var b = +prompt("Первая попытка!");
if(b > 100) {
   alert("Чтото пошло не так! повторите попытку")
   var b = +prompt("Первая попытка!");
} else if (b == a) {
    alert("Вы победили!")
}else if(b == a - 3 || b == a - 2 || b == a - 1 || b == a + 3 || b == a + 2 || b == a + 1){
    alert("Очень жарко!")
} else if(b == a - 6 || b == a - 5 || b == a - 4 || b == a + 6 || b == a + 5 || b == a + 4){
    alert("жарко!")
}  else if(b == a - 9 || b == a - 8 || b == a - 7 || b == a + 9 || b == a + 8 || b == a + 7){
    alert("тепло!")
}  else if(b == a - 12 || b == a - 11 || b == a - 10 || b == a + 12 || b == a + 11 || b == a + 10){
    alert("холодно!")
} else {
    alert("лед! Очень холодно")
}
if(b != a){
    var c = +prompt("Вторая попытка!");
    if(c > 100) {
    alert("Чтото пошло не так! повторите попытку")
    var c = +prompt("Вторая попытка!");
 } else if (c == a) {
     alert("Вы победили!")
 }else if(c == a - 3 || c == a - 2 || c == a - 1 || c == a + 3 || c == a + 2 || c == a + 1){
     alert("Очень жарко!")
 } else if(c == a - 6 || c == a - 5 || c == a - 4 || c == a + 6 || c == a + 5 || c == a + 4){
     alert("жарко!")
 }  else if(c == a - 9 || c == a - 8 || c == a - 7 || c == a + 9 || c == a + 8 || c == a + 7){
     alert("тепло!")
 }  else if(c == a - 12 || c == a - 11 || c == a - 10 || c == a + 12 || c == a + 11 || c == a + 10){
     alert("холодно!")
 } else {
     alert("лед! Очень холодно")
 }
}
 
 


if(c != a && b != a) {
var d = +prompt("Третья попытка!");
if(d > 100) {
    alert("Чтото пошло не так! повторите попытку")
    var d = +prompt("Третья попытка!");
 } else if (d == a) {
     alert("Вы победили!")
 }else if(d == a - 3 || d == a - 2 || d == a - 1 || d == a + 3 || d == a + 2 || d == a + 1){
     alert("Очень жарко!")
 } else if(d == a - 6 || d == a - 5 || d == a - 4 || d == a + 6 || d == a + 5 || d == a + 4){
     alert("жарко!")
 }  else if(d == a - 9 || d == a - 8 || d == a - 7 || d == a + 9 || d == a + 8 || d == a + 7){
     alert("тепло!")
 }  else if(d == a - 12 || d == a - 11 || d == a - 10 || d == a + 12 || d == a + 11 || d == a + 10){
     alert("холодно!")
 } else {
     alert("лед! Очень холодно")
 }
}
 

if ( b != a && c != a && d != a) {
     var e = +prompt("Четвертая попытка!");
     if(e > 100) {
    alert("Чтото пошло не так! повторите попытку")
    var e = +prompt("Четвертая попытка!");
 } else if (e == a) {
     alert("Вы победили!")
 }else if(e == a - 3 || e == a - 2 || e == a - 1 || e == a + 3 || e == a + 2 || e == a + 1){
     alert("Очень жарко!")
 } else if(e == a - 6 || e == a - 5 || e == a - 4 || e == a + 6 || e == a + 5 || d == a + 4){
     alert("жарко!")
 }  else if(e == a - 9 || e == a - 8 || e == a - 7 || e == a + 9 || e == a + 8 || e == a + 7){
     alert("тепло!")
 }  else if(e == a - 12 || e == a - 11 || e == a - 10 || e == a + 12 || e == a + 11 || e == a + 10){
     alert("холодно!")
 } else {
     alert("лед! Очень холодно")
 }
}

 

 if(b != a && c != a && d != a && e != a){
     var f = +prompt("Последняя попытка!");
     if(f > 100) {
    alert("Чтото пошло не так! повторите попытку")
    var f = +prompt("Последняя попытка!");
 } else if (f == a) {
     alert("Вы победили!")
 }else {
    alert("GAME OVER!")
 }
 }

 
