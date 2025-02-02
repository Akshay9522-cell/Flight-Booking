const seat=document.querySelector('.box')
const seat1=document.querySelector('.ss')

seat1.addEventListener('click',(e)=>{
    
     
  if(e.target.classList.contains('box')){
      
    e.target.style.backgroundColor='green'
  }
   
  
})

const btn=document.querySelector('.btn').addEventListener('click',()=>{
   
    alert('seat is confirmed')
        
    localStorage.setItem("e",e)
})


