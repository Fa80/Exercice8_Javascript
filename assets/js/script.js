function calcul(){
  var âge = document.getElementById("age").value;
  if(âge >= 18){
    alert (" Vous êtes majeur ");
}else{
    alert (" Vous êtes mineur ");
  }
}


/* Correction de stéphane avec la condition (En chiffre!)
function calcul(){
  var âge = document.getElementById("age").value;
  if(isNaN(âge) || age < 1){
    alert ("En chiffre !")
 }else{
 if (âge.lenght >= 4 ){
 alert ('petit farceur);
}else if (âge >= 18){
    alert (" Vous êtes majeur ");
}
else{
    alert (" Vous êtes mineur ");
    }
  }
}
*/
