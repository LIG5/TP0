function date(){
    var d = new date() ; 
    var x = d.getday();
    let 
    switch(x){
case 0 :
    document.getElementById(resultat).innerHTML("dimanche ") 
    case 1 : 
    document.getElementById(resultat).innerHTML("lundi ")  
    break ; 
    case 2 :
        document.getAnimations(resultat).innerHTML("mardi")
        break ; 
    case 3 : 
    document.getElementById(resultat).innerHTML("mercredi")  
    break ; 
    case 4 : 
    document.getElementById(resultat).innerHTML("jeudi")  
    break ; 
    case 5 : 
    document.getElementById(resultat).innerHTML("vendredi")  
    break ; 
    case 6 : 
    document.getElementById(resultat).innerHTML("samedi")  
    break ; 
}
alert(+x) ; 
}
document.getElementById(resultat).innerHTML =  x ; 