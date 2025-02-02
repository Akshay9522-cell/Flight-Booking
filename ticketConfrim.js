const btn=document.getElementById('payment')

btn.addEventListener("click",()=>{

const card=document.getElementById('cn').value
const expiry=document.getElementById('ed').value
const cvv=document.getElementById('cv').value

const user1 = {
     card: card,
     expiry: expiry,
     cvv: cvv,
     
 };

 if(card.length==0 || expiry.length==0 || cvv.length==0){
     alert('plzz fill details')
 } else{
     localStorage.setItem('user1', JSON.stringify(user1));
     alert('payment is successfully done')
 }
     
})

