function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  /*

doplnit neco?

  */

  document.getElementById("vysledek").innerHTML = "Vysledek je: " + vyraz;
}


var input = document.getElementById("vyraz");

// spusti funkci , kdyz uzivatel zmackne enter

input.addEventListener("keyup", function(event)

{
  //zrusi vychozi funkci klavesy pokud nejaka existuje 
  event.preventDefault();
  //13 je hodnota klavesy enter
  if(event.keyCode == 13)
  {
    solveExpression();
  }

});

