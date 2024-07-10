const map = document.querySelector(".container-1 img");
const c2 = document.querySelector(".container-2");

let flag = 0;

map.addEventListener("click", ()=>{
    if(flag===0){
        map.style.scale = "1.4";
        c2.style.filter = "blur(2px)";
        flag=1;
    }
    else{
        map.style.scale = "1";
        c2.style.filter = "blur(0px)";
        flag=0;
    }
})