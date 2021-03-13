function compute() {
    event.preventDefault();

    
    
    p = document.getElementById("principal").value;
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r/100 * y;

    x = 2020*1 + y

    document.getElementById("principal_text").innerHTML="If you deposit " + p + ",";
    document.getElementById("rangeInput_text").innerHTML="at an interest rate of " + r + "%.";
    document.getElementById("result_text").innerHTML="You will receive the amount of ";
    document.getElementById("years_text").innerHTML="in the year " + x;

}

// function updateTextInput(val) {
//          document.getElementById('textInput').value=val; 
//        }

        