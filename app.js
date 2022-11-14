


document.getElementById('submitbtn').onclick = function(){
    let temp;


    if (document.getElementById('Cbtn').checked) {
        temp = document.getElementById('myinput').value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById('mylabel').innerHTML = temp.toFixed(2) + "°C";
    } 
    else if(document.getElementById('Fbtn').checked) {
        temp = document.getElementById('myinput').value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById('mylabel').innerHTML = temp.toFixed(2) + "°F";
    }
}

function toCelsius(temp){
    return (temp - 32) * 5/9
}


function toFahrenheit(temp){
    return temp * 9 / 5 + 32
}