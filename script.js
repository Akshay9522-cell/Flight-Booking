



const togglesearch=()=>{

    const srch=document.getElementById('srch')
   
    const srchbtn=document.querySelector('.search-btn')


    srchbtn.addEventListener('click',()=>{
        srch.classList.toggle('active')
        
    });

    // srscinp.addEventListener('keydown',(e)=>{
       
    // if(e.key==='Enter'){
    //     e.preventDefault()
    //     srscinp.value=' '
    //     srch.classList.remove('active')
    // }
    // })
}

togglesearch();


const btn=document.getElementById('btn')
const show=document.getElementById('show')
btn.addEventListener('click',myFlight)

  function myFlight(){
        

    const inp=document.getElementById('inp').value

   const api=`http://localhost:3000/flights/?id=${inp}`
   
    fetch(api).then((res)=>{
          return res.json()
    }).then((data)=>{
        console.log(data)

        let main=`<table border=1 width=100% height=50%>
                  <tr >
                  <th>id</th>
                  <th>name</th>
                  <th>from</th>
                  <th>to</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>rate</th>
                  <th>class</th>
                  <th>Add</th>
                  <th>Delete</th>
                  </tr>
        
        `

        data.map((e)=>{
             main+=`<tr>
                  <td>${e.id}</td>
                  <td>${e.name}</td>
                  <td>${e.from}</td>
                  <td>${e.to}</td>
                  <td>${e.departureTime}</td>
                  <td>${e.arivalTime}</td>
                  <td>${e.rate}</td>
                  <td>${e.class}</td>
                  <td></td>
             
             </tr>`
        })

        main+='</table>'
        show.innerHTML=main


    })

 }

 
const btnn= document.querySelector('.sbmt')


btnn.addEventListener('click',()=>{
    var name=document.getElementById('name').value
    var numbr=parseInt(document.getElementById('numbr').value)
var email=document.getElementById('email').value

     localStorage.setItem("name",name)
     localStorage.setItem("email",email)
     localStorage.setItem("numbr",numbr)
})