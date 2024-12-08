//*task 1 :

alert("welcme to my website ! ");
let name = prompt(" enter your name :");
console.log ( name )

//*task 2:

function checkTemperature(temperature){
    return temperature >=30 ?"HOT" :"COLD";
}
let tenperatureOfToday = 25 ;
let temperatureStatuse = checkTemperature(tenperatureOfToday);
console.log (temperatureStatuse);

//*task 3 :
function contactForm(){
    let name, birthYear, age ; 
    do{
        name = prompt("enter your name :");

    } while ( typeof name!=='string');
    do{
        birthYear = prompt("enter your birth year (before 2010) :");
        birthYear = parseInt(birthYear);

    }while(isNaN(birthYear) || birthYear>=2010);
    age = 2024-birthYear;
    document.write(" <b><u>Name</u></b> :" +name+ "<br>");
    document.write("<b><u>BirthYear</u></b> :" +birthYear+ "<br>");
    document.write("<b><u>Age</u></b> :" +age+ "<br>");
}
contactForm();


