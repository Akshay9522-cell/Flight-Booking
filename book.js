
const saveBtn=document.querySelector('.fnlbk')

saveBtn.addEventListener('click',(e)=>{
    
    let name=document.getElementById('nm').value
    let last=document.getElementById('ls').value
    let email=document.getElementById('em').value
    let age=document.getElementById('ag').value
    let male=document.getElementById('ma').value
    let female=document.getElementById('fm').value
    const user = {
        name: name,
        last: last,
        email: email,
        age:age,
        gender:male,
    
    };

    if(name.length==0 || last.length==0 || email.length==0 || age.length==0){
        alert('plzz Fill details')
        e.preventDefault()
    }else{
        localStorage.setItem('user', JSON.stringify(user));
        alert('Data saved to localStorage!');
    }
   
})


