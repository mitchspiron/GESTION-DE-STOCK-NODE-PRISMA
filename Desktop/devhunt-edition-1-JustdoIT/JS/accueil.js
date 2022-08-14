const container = document.querySelector('.container');

container.addEventListener('wheel', (e)=>{
    e.preventDefault();

    container.scrollLeft += e.deltaY;
})

function menu(){
            
    document.getElementsByClassName("TITRE")[0].style.animation=" disparaitre  4s ease-in-out forwards ";
    document.querySelectorAll(".TITRE h1")[0].style.animation="scaleH1 3s ease-in-out forwards "
    
}