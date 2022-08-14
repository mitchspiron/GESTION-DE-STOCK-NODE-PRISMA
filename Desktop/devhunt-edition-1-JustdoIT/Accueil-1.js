const conteneur = document.querySelector('.conteneur');

conteneur.addEventListener('wheel', (e)=>{
    e.preventDefault();

    conteneur.scrollLeft += e.deltaY;
})

function menu(){
    
    document.getElementsByClassName("TITRE")[0].style.animation=" disparaitre  4s ease-in-out forwards ";
    document.querySelectorAll(".TITRE h1")[0].style.animation="scaleH1 3s ease-in-out forwards "
    
}
function mention(){
   replace(document.getElementsByClassName("avenir")[0], document.getElementsByClassName("existant")[0])
}

function theme(){
    console.log(event.target.id)
    if(event.target.id=="d"){
        document.body.classList.add("dark");
        document.getElementsByClassName("font")[0].style.backgroundColor="rgba(0, 0, 0, 0.88)";
        document.querySelectorAll("h2")().style.color="white";
        console.log( document.querySelectorAll("h2").style.color);
    } 
    else if (event.target.id=="l") {
        document.body.classList.remove("dark");
        document.getElementsByClassName("font")[0].style.backgroundColor="rgba(122, 117, 117, 0.782)";
        document.querySelectorAll("h2").style.color="black";
        document.body.classList.remove("dark");
    }
   
}
function apparition(){
        document.getElementsByClassName("popup")[0].style.display="block"
        if(event.target.id== "pr1")document.getElementById("pr").style.display="block";
        else if(event.target.id=="cs1")document.getElementById("cs").style.display="block";
        else if(event.target.id=="sec1")document.getElementById("sec").style.display="block";
        else if(event.target.id== "tr1")document.getElementById("tr").style.display="block";
        else if(event.target.id== "fin1")document.getElementById("fin").style.display="block";
        else if(event.target.id== "res1")document.getElementById("res").style.display="block";
        else if(event.target.id== "log1")document.getElementById("log").style.display="block";
        else if(event.target.id== "com1")document.getElementById("com").style.display="block";
        else if(event.target.id== "ped1")document.getElementById("ped").style.display="block";
        else if(event.target.id== "brs1")document.getElementById("brs").style.display="block";
        else if(event.target.id== "disp1")document.getElementById("disp").style.display="block";
        else if(event.target.id== "l11") document.getElementById("l1").style.display="block";
        else if(event.target.id== "l21") document.getElementById("l2").style.display="block";
        else if(event.target.id== "l31") document.getElementById("l3").style.display="block";
        else if(event.target.id== "m11") document.getElementById("m1").style.display="block";
        else if(event.target.id== "m21") document.getElementById("m2").style.display="block";

}
function disparition(){
    document.getElementsByClassName("popup")[0].style.display="none";
    document.getElementById("pr").style.display="none";
    document.getElementById("cs").style.display="none";
    document.getElementById("sec").style.display="none";
    document.getElementById("tr").style.display="none";
    document.getElementById("fin").style.display="none";
    document.getElementById("res").style.display="none";
    document.getElementById("log").style.display="none";
    document.getElementById("com").style.display="none";
    document.getElementById("ped").style.display="none";
    document.getElementById("brs").style.display="none";
    document.getElementById("disp").style.display="none";
    document.getElementById("l1").style.display="none";
    document.getElementById("l2").style.display="none";
    document.getElementById("l3").style.display="none";
    document.getElementById("m1").style.display="none";
    document.getElementById("m2").style.display="none";

}