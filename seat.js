const seat=document.querySelector('.box')

seat.addEventListener('click',()=>{
     
    seat.classList.toggle('active')
})

const btn=document.querySelector('.btn').addEventListener('click',()=>{alert('seat is confirmed')})