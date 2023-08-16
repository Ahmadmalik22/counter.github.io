const dynamicdate=document.querySelector("h3").innerHTML="Aug 14 2023 01:11 PM";
function clock(){
    
const end=new Date(dynamicdate);
const now=new Date();
const diff=(end-now)/1000;
if(diff<0)return;
const input=document.querySelectorAll("input");
input[0].value=Math.floor(diff/60/60/24);
input[1].value=Math.floor(diff/60/60)%24;
input[2].value=Math.floor((diff/60)%60);
input[3].value=Math.floor(diff%60);
}
setInterval(clock,1000)

