function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r/100 * y;
    
}

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
        