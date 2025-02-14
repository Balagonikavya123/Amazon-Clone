const imgs=document.querySelectorAll('.main-sec ul img')
const prev_btn=document.querySelector('.control_prev')
const next_btn=document.querySelector('.control_next')

let n=0;

function changeSlide(){
    for(let i=0; i < imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}

changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
});

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
});

const div1=document.querySelector(".sign-in");

div1.addEventListener('mouseover',(e)=>{
    let div2=document.createElement("div");
    div2.innerText='Hello';

});


const backtop=document.querySelector(".sec-1");

 backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
 })

 const sidebar = document.querySelector(".sidebar");
 const cross = document.querySelector(".fa-xmark"); // X button
 const black = document.querySelector(".black");
 const sidebtn = document.querySelector(".all");
 const sign = document.querySelector(".accounts");
 const tri = document.querySelector(".triangle");
 const signin = document.querySelector(".hdn-sign");
 
 // Open sidebar
 sidebtn.addEventListener("click", (event) => {
     event.stopPropagation(); 
     sidebar.classList.add("active");
     black.classList.add("active");
     document.body.classList.add("stop-scroll");
 });
 
 // Close sidebar when clicking X button
 cross.addEventListener("click", (event) => {
     event.stopPropagation(); 
     closeSidebar();
 });
 
 // Open sign-in menu
 sign.addEventListener("click", (event) => {
     event.stopPropagation();
     black.classList.add("active-1");
     signin.classList.add("active");
     tri.classList.add("active");
 });
 
 // Close sidebar and sign-in when clicking outside
 document.addEventListener("click", (event) => {
     if (!sidebar.contains(event.target) && !sidebtn.contains(event.target) && !cross.contains(event.target)) {
         closeSidebar();
     }
     if (!signin.contains(event.target) && !sign.contains(event.target)) {
         closeSignIn();
     }
 });
 
 // Close sidebar function
 function closeSidebar() {
     sidebar.classList.remove("active");
     black.classList.remove("active");
     document.body.classList.remove("stop-scroll");
 }
 
 // Close sign-in menu function
 function closeSignIn() {
     signin.classList.remove("active");
     tri.classList.remove("active");
     black.classList.remove("active-1");
 }
 