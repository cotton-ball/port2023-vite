const headerToggle=document.getElementById("headerToggle");
const headerNav=document.querySelector(".header_nav")

if(headerToggle){
    headerToggle.addEventListener("click",()=>{
        headerNav.classList.toggle("show");
        headerToggle.getAttribute("area-expended")==="true"
        ?headerToggle.setAttribute("area-expended","false")
        :headerToggle.setAttribute("area-expended",true);
    });
}