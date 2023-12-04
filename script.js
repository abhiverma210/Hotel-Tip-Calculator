

//custom function
function calculatetip() {

    //store data of input from html code
    var billamount = document.getElementById("billamount").value;
    var servicequality = document.getElementById("servicequality").value;
    var numpeople = document.getElementById("totalpeople").value;

    //quick validation
    if(billamount === "" || servicequality == 0 ){
        window.alert("please enter some values");
        return;//this will prevent the function from continuting
    }

    //check to see if this input is empty or less than or equal to 1
    if(numpeople === "" || numpeople <= 1){
        numpeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    //do some math!
    var total = (billamount * servicequality) / numpeople;
    total = Math.round(total * 100) / 100; // round(total*100) means if value is 10.235 then this convert into 1023 then /100 means it convert into 10.23
    total = total.toFixed(2); // it means if value is 10.5 then it convert into 10.50

    //display the tip
    document.getElementById("totaltip").style.display = "block"; //it going to display the totaltip container
    document.getElementById("tip").innerHTML = total; //put value of totl into tip

} 

//initially hide the tip amount on load

document.getElementById("each").style.display = "none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick = function() {calculatetip();};//how to call the functon.