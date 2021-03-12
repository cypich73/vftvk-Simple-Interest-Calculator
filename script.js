function compute() {
    event.preventDefault();
    p = document.getElementById("principal").value;
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r/100 * y;

    document.getElementById("principal_text").innerHTML="If you deposit ";
    //return false;
}

// function updateTextInput(val) {
//          document.getElementById('textInput').value=val; 
//        }

        