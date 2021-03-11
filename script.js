function compute() {
    event.preventDefault();
    p = document.getElementById("principal").innerHTML;
    r = document.getElementById("rangeInput").innerHTML;
    y = document.getElementById("years").innerHTML;
    document.getElementById("result").innerHTML = p * r/100 * y;
    return false;
}

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
        