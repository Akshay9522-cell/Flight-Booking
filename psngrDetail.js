
document.getElementById('load').addEventListener('click', loadData);
function loadData() {
    const userString = localStorage.getItem('user');
    if (userString) {
        const userObject = JSON.parse(userString);
        alert(`Name: ${userObject.name}, last: ${userObject.last}, Email: ${userObject.email},age: ${userObject.age},gender: ${userObject.male},`);
        name1.innerHTML=userObject.name
        last1.innerHTML=userObject.last
        email1.innerHTML=userObject.email
        age1.innerHTML=userObject.age
    } else {
        alert('No user data found in localStorage.');
    }
}

const  name1=document.getElementById('name')
const  last1=document.getElementById('last')
const  email1=document.getElementById('email')
const  age1=document.getElementById('age')