let customerdetails = []
const validate = ()=> {
fetch('http://localhost:3000/Emplyeedata', {method: 'GET'})
.then(res => res.json())
.then(data=> (customerdetails=data))
}
const login = () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
console.log('value of login successfully taken ');
    if (customerdetails.find(obj=> obj.name == username && obj.passwordforuserid == password))
    {  alert('you have successfuly logged in');
        window.open('http://127.0.0.1:5500/Index.html')
    }
    else{
        alert('incorrect username and password')
    }
}

// let studentsuserdetails = []
// const getStudents = ()=> {
// fetch('http://localhost:3000/students', {method: 'GET'})
// .then(res => res.json())
// .then(data=> (studentsuserdetails=data))
// }
// const login = () => {
//     let username = document.getElementById('username').value
//     let password = document.getElementById('password').value
// console.log('value of login successfully taken ');
//     if (studentsuserdetails.find(obj=> obj.username == username && obj.password == password))
//     {  alert('you have successfuly logged in');
//         window.open('http://127.0.0.1:5500/dashboard.html')
//     }
//     else{
//         alert('incorrect username and password')
//     }
// }
