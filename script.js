document.addEventListener("DOMContentLoaded", function () {
    const head = document.getElementById("header");
    const btn_top = document.getElementById("btn_top");

    btn_top.addEventListener("click", () => {
        head.scrollIntoView({behavior:"smooth"});
    });
    
    window.addEventListener("scroll",() => {
        var posizione_nav = head.getBoundingClientRect().top;
        if(posizione_nav>=0){
            btn_top.classList.add("btn_top_nascosto");
        }else{
            btn_top.classList.remove("btn_top_nascosto");
        }
    });
});