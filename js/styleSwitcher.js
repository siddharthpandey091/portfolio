const links = document.querySelectorAll(".alternate-style");
const     totalLinks=links.length;
function setActivateStyle(color){
    for(let i=0;i<totalLinks;i++){
        if(color===links[i].getAttribute("title")){
            links[i].removeAttribute('disabled');
        }else{
            links[i].setAttribute("disabled","true");
        }
    }
}
const bodySkin = document.querySelectorAll(".body-skin")
const totalBodySkin = bodySkin.length;
for(let i=0;i<totalBodySkin;i++){
    bodySkin[i].addEventListener("change",function(){
        if(this.value === "dark"){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    })
}


document.querySelector('.toggle-style-switcher').addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
