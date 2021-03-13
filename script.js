function compute() {
    event.preventDefault();

    document.getElementById("principal_text").innerHTML="If you deposit ";
    
    document.getElementById("principal_comma").innerHTML=",";

    document.getElementById("rangeInput_text").innerHTML="at an interest rate of ";
    //document.getElementById("rangeInput").innerHTML= r;
    document.getElementById("rangeInput_comma").innerHTML="%.";

    document.getElementById("result_text").innerHTML="You will receive the amount of ";
    
    document.getElementById("result_comma").innerHTML=",";
    
    document.getElementById("years_text").innerHTML="in the year ";
    

    
    p = document.getElementById("principal").value;
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r/100 * y;

    document.getElementById("principal").innerHTML= p;

    //return false;
}

// function updateTextInput(val) {
//          document.getElementById('textInput').value=val; 
//        }

        