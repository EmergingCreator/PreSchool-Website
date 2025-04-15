const HamBurger=document.querySelector(".hamburger_btn")
const navBar=document.querySelector("nav")
let isOpen=false;
HamBurger.addEventListener("click",((e)=>{
    if(!isOpen){

        navBar.style.visibility="visible";
        navBar.style.left="0%";
        HamBurger.style.left="47%"
        isOpen=!isOpen;
    }else{
        navBar.style.visibility="hidden";
        navBar.style.left="-200%";
        HamBurger.style.left="5%"
        isOpen=!isOpen;

    }
}))

