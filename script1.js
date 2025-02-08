const my=document.getElementById('mainbtn')

my.addEventListener('click',myFlight1)

async function myFlight1(e) {
      let from=document.getElementById('from').value.toLowerCase()
    let to=document.getElementById('to').value.toLowerCase()



    console.log(from,to)

    let table=`<table border=1 gap=5px >
               <tr>
               <th>Flight Name</th>
               <th>Depature</th>
               <th>Arrival</th>
               <th>price</th>
               <th>class</th>
               <th>Book</th>
               
               </tr>`

    e.preventDefault()

    let api="http://localhost:3000/flights"

    let res=await fetch(api)

    let data=await res.json()

        console.log(data)

        data.map((e)=>{
        if(e.from.toLowerCase()=== from && e.to.toLowerCase()===to) 
            table+=`<tr>
                    <td>${e.name}</td>           
                    <td>${e.departureTime}</td>           
                    <td>${e.arivalTime}</td>           
                    <td>${e.rate}</td>           
                    <td>${e.class}</td>    
                    <td>
                     <a href="book.html" >
                                   <img src="/IMAGES/tick.png" width="30" height="30" >
                                  </a></td>    
                    
            
            
            </tr>`
        

    });

    table+='</table>'
    document.getElementById('show1').innerHTML=table
}


const menu=document.querySelector('.menu')

const slider=document.querySelector('.slider')


menu.addEventListener('click',(e)=>{

    slider.classList.toggle('active1')
    e.preventDefault()
})

var nameerror=document.getElementById('name-error')
const sbmt=document.querySelector('.sbmt')
const sbmtform=document.querySelector('.sbmtform')

sbmt.addEventListener('click',myForm)

function myForm(){
    
    const name=document.getElementById('name').value
    const nmbr=document.getElementById('numbr').value
    const email=document.getElementById('email').value

    if(name.length==0 || nmbr.length==0 || email.length==0){
        sbmtform.style.cssText=`opacity:1`
         return false
    }

   
     sbmtform.style.cssText=`opacity:0`
     return true    

   
    
}

