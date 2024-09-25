document.getElementById("noakhalidon").addEventListener('click',function(){
    const noakhaliInput =parseFloat(document.getElementById("noakhaliinp").value);
    if(isNaN(noakhaliInput) || noakhaliInput <= 0){
        alert("Failed to donate")
        return
    }
    const noakhalioutput =parseFloat(document.getElementById("noakhaliout").innerText);
    const finaloutput =parseFloat(document.getElementById("finalout").innerText);
    const balance = noakhaliInput + noakhalioutput;
    document.getElementById("noakhaliout").innerText = balance
    if(balance >0){
        alert("Donation Succesful")
    }
    const finalBalance = finaloutput-noakhaliInput;
    document.getElementById("finalout").innerText = finalBalance
    const rev =document.createElement("div");
    rev.classList.add("border-2","rounded-md","py-6","pl-8","md:mx-32")

    // rev.innerText = `
    // ${balance} Taka is Donated for famine-2024 at Noakhali, Bangladesh
    // ${new Date().toLocaleString(`en-US`,{timeZone:`Asia/Dhaka`,timeStyle:`medium`,dateStyle:`full`})} `;
    document.getElementById("history").appendChild(rev);
    
    

})

document.getElementById("fenidon").addEventListener('click',function(){
   
    const feniInput =parseFloat(document.getElementById("feniinp").value);
    if(isNaN(feniInput) || feniInput <= 0){
        alert("Failed to donate")
        return
    }
    const fenioutput =parseFloat(document.getElementById("feniout").innerText);
    const finaloutput =parseFloat(document.getElementById("finalout").innerText);
    const balance = feniInput + fenioutput;
    document.getElementById("feniout").innerText = balance
    if(balance >0){
        alert("Donation Succesful")
    }
    const finalBalance = finaloutput-feniInput;
    document.getElementById("finalout").innerText = finalBalance;
   
    const rev =document.createElement("div");
    rev.classList.add("border-2","rounded-md","py-6","pl-8","md:mx-32")
    rev.innerText = `
    ${balance} Taka is Donated for famine-2024 at Feni, Bangladesh
    ${new Date().toLocaleString(`en-US`,{timeZone:`Asia/Dhaka`,timeStyle:`medium`,dateStyle:`full`})} `;
    document.getElementById("history").appendChild(rev);
    
    

})
document.getElementById("movedon").addEventListener('click',function(){
    const moveInput =parseFloat(document.getElementById("moveinp").value);
    if(isNaN(moveInput) || moveInput <= 0){
        alert("Failed to donate")
        return
    }
    const moveoutput =parseFloat(document.getElementById("moveout").innerText);
    const finaloutput =parseFloat(document.getElementById("finalout").innerText);
    const balance = moveInput + moveoutput;
    document.getElementById("moveout").innerText = balance
    if(balance >0){
        alert("Donation Succesful")
    }
    const finalBalance = finaloutput-moveInput;
    document.getElementById("finalout").innerText = finalBalance
    const rev =document.createElement("div");
    rev.classList.add("border-2","rounded-md","py-6","pl-8","md:mx-32")
    rev.innerText = `
    ${balance} Taka is Donated for injured people in quota movement, Bangladesh
    ${new Date().toLocaleString(`en-US`,{timeZone:`Asia/Dhaka`,timeStyle:`medium`,dateStyle:`full`})} `;
    document.getElementById("history").appendChild(rev);
   
    

})
function showSectionById(id){
    document.getElementById("history").classList.add("hidden")
    document.getElementById("sec").classList.add("hidden")

    
        document.getElementById(id).classList.remove("hidden")
}
function showbutton(id){
    document.getElementById("showhis").classList.remove("bg-[#B4F461]")
    document.getElementById("showdon").classList.remove("bg-[#B4F461]")
    document.getElementById(id).classList.add("bg-[#B4F461]")
    
}
    

document.getElementById("showhis").addEventListener("click", function(){
    showSectionById("history")
    showbutton("showhis")
    
   
})
document.getElementById("showdon").addEventListener("click", function(){
    showSectionById("sec")
    showbutton("showdon")
    
})


 

