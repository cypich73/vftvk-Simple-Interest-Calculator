function compute() {
    event.preventDefault();
    
    p = document.getElementById("principal").value;
    r = document.getElementById("rangeInput").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r/100 * y;

    z = 2020;
    x = parseInt(y)
    document.getElementById("result_years").innerHTML = z+x;

    document.getElementById("principal_text").innerHTML="If you deposit ";
    document.getElementById("principal_no").innerHTML=p;
    document.getElementById("principal_text").innerHTML=",";
    document.getElementById("rangeInput_text").innerHTML="at an interest rate of " + r + "%.";
    document.getElementById("result_text").innerHTML="You will receive the amount of ";
    document.getElementById("result_comma").innerHTML=",";
    document.getElementById("years_text").innerHTML="in the year ";

}

function checkNegativeValue()
{
  //var value = parseFloat(document.getElementById("principal").value);
  if(p<0)
  {
   alert("Negative Value is not allowed");
   return false;
  }
}


        