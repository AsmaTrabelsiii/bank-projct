const sort=document.querySelector(".sort")
const deposit=document.querySelector(".deposit-amount").textContent
const whithdrow=document.querySelector(".withdraw-amount").textContent
sort.addEventListener("click",function(){
    let status=false
    let arr=[deposit,whithdrow]
    if(status){
        arr.sort((a,b)=>b-a)
        status=true
        
    }
})