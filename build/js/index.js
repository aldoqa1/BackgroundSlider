const bks = document.querySelectorAll(".bk");
const body = document.body;
const left = document.getElementById("left");
const rigth = document.getElementById("rigth");

let indexActual = 0;

left.addEventListener("click", ()=>{
    indexActual--;
    if(indexActual<0){
        indexActual = bks.length-1;
    }
    noActives();
    bks[indexActual].classList.add("active");
    setBg();
});

rigth.addEventListener("click", ()=>{
    indexActual++;
    if(indexActual>bks.length-1){
        indexActual = 0;
    }
    noActives();
    bks[indexActual].classList.add("active");
    setBg();
});

function setBg(){
    body.style.backgroundImage = bks[indexActual].style.backgroundImage
}

function noActives(){
    bks.forEach(bk =>{
        bk.classList.remove("active");
    })
}