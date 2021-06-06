button1=document.querySelector("button")
input1=document.querySelector("input")
tipamount=document.querySelector(".tipamount")
button1.addEventListener("click",showAmount)
function showAmount(){
    let amount = (input1.value*10)/100
    
    tipamount.innerHTML=amount
}
