function compute() {
    event.preventDefault();

    document.getElementById("principal_text").innerHTML="If you deposit ";
    var p = document.getElementById("principal").value;
    document.getElementById("principal").innerHTML= p;
    document.getElementById("principal_comma").innerHTML=",";

    document.getElementById("rangeInput_text").innerHTML="at an interest rate of ";
    r = document.getElementById("rangeInput").value;
    document.getElementById("rangeInput").innerHTML= r;
    document.getElementById("rangeInput_comma").innerHTML="%.";

    document.getElementById("result_text").innerHTML="You will receive the amount of ";
    document.getElementById("result").innerHTML = p * r/100 * y;
    document.getElementById("result_comma").innerHTML=",";
    
    document.getElementById("years_text").innerHTML="in the year ";
    y = document.getElementById("years").value;

    
    //return false;
}

// function updateTextInput(val) {
//          document.getElementById('textInput').value=val; 
//        }

        