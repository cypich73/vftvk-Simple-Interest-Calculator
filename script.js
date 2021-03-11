function compute() {
    event.preventDefault();
    p = document.getElementById("principal").value;
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;
    document.getElementById("result").textContent = p * r/100 * y;
    return false;
}

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
        