function perimetre_cercle(){
const pi=3.14 ; 
let r = prompt("saisir le rayon ..."); 
let res = r*2*pi ; 
alert("le perimetre de la cercle est "+res.toFixed(2)); /* to round the string */
}
document.getElementById("resultat").innerHTML=res ;

function perimetre_rectangle(){
    let long1 = prompt("saisir longeur1") ; 
    let long2 = prompt("saisir longeur2") ; 
    let larg1 = prompt("saisir largeur1") ; 
    let larg2 = prompt("saisir largeur2") ; 
    let res2 = long1+larg1+long2+larg2 ; 
    alert("le perimetre de la cercle est "+res2.toFixed(2)); 
}

document.getElementById("resultat1").innerHTML=res2 ;

