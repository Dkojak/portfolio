const time = new Date().getHours(); 
let greeting;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

//alert(greeting + ' Happy ' + day)
var check= prompt("Enter your name","Name")
if (check !== '') {
    alert(greeting + ' ' + check + ' Happy ' + day);
}
    document.getElementsById("mars").innerHTML = "Happy " + day;

    document.getElementsById("des").innerHTML = "welcome " + check;

