let btn=document.querySelector("button");
btn.addEventListener("click",random);

function random()
{
    let h3=document.querySelector("h3");
    h3.innerText=getrandom();
    console.log("color updated");
    let div=document.querySelector("div");
    div.style.backgroundColor=getrandom();
}
function getrandom()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}