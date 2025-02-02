
const saveBtn=document.querySelector('.fnlbk')

saveBtn.addEventListener('click',()=>{
    
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
    localStorage.setItem('user', JSON.stringify(user));
    alert('Data saved to localStorage!');
})

document.getElementById('load').addEventListener('click', loadData);
function loadData() {
    const userString = localStorage.getItem('user');
    if (userString) {
        const userObject = JSON.parse(userString);
        alert(`Name: ${userObject.name}, last: ${userObject.last}, Email: ${userObject.email},age: ${userObject.age},gender: ${userObject.male},`);
    } else {
        alert('No user data found in localStorage.');
    }
}
