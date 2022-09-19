const amount = document.getElementById('amount')
const guest = document.getElementById('guest')
const quality = document.getElementById('quality')
const tipAmount = document.getElementById('tipAmount')

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2)
    amount.value=''
    guest.value=''
    quality.value=''
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each'
        showTipAmount()
    }else{
        tipAmount.innerHTML = 'Tip $'+ tip +' each'
        showTipAmount()
    }
}

showTipAmount = () =>{
    var x = tipAmount
    x.className = 'show'
    setTimeout(function(){
        x.className = x.className.replace('show', '')}, 3000)
}


document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, 0)
    }
}


buttonUp = document.getElementById("button-up")

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop
    if (scroll > 450){
        buttonUp.style.transform = "scale(1)"
    }else if(scroll < 450){
        buttonUp.style.transform = "scale(0)"
    }
}