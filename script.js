function compute() {
    event.preventDefault();

    document.getElementById("principal_text").innerHTML="If you deposit ";
    var p = document.getElementById("principal").value;
    document.getElementById("principal").innerHTML= p;
    document.getElementById("principal_comma").innerHTML=",";

    
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;

    
    
    document.getElementById("result").innerHTML = p * r/100 * y;

    
    //return false;
}

// function updateTextInput(val) {
//          document.getElementById('textInput').value=val; 
//        }

        