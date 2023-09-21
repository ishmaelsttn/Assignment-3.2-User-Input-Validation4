/* Ishmael Sutton*/
function Warning()
{
  /*in line 5 is an alert saying alert*/
    alert("Alert");
  /*lines 6-10 are variables of the text inputs from the html page strings */ 
  var Firstname = document.getElementById("Firstname").value;
  var Lastname = document.getElementById("Lastname").value;
  var Zipcode = document.getElementById("Zipcode").value;
  var bothnames = Firstname + " " + Lastname;
  let text = Firstname + " " + Lastname;
  /*line 11 joins the length of the first name and last name with a space in the middle*/
  if (text.length >20)
  /*line 13 along with line 16 determines that if the length is longer than 20 characters that it shouldnt be*/
  {
  document.getElementById("submit").innerHTML = "Alert that the length of string is longer than 20";
  }
  /* the else if for the zipcode determines if the zipcode length is NOT equal to five or is less than 5 than is incorrect along with line 21 using innerhtml*/
  else if ((Zipcode.length !=5) && (Zipcode.length <5))
  {
    
    document.getElementById("submit").innerHTML = "Zipcode is the incorrect ";
  }
  if (Zipcode.length ==5)
{
    document.getElementById("submit").innerHTML = "Zipcode is correct"
}
}