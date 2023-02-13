
// console.log('script connected');

// This section is for user full name validation

function addItem() {
  let emailid = document.getElementById('useremail').value;
  // let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  let name = document.getElementById('fullname').value;
  let address = document.getElementById('useraddress').value;
  let accountno = document.getElementById('useraccount').value;
  let mobilenumber = document.getElementById('mobilenumber').value;
  // let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  let passwordforuserid = document.getElementById('userpassword').value;
  


  obj ={
    "emailid":emailid,
    "name":name,
    "address":address,
    "accountno":accountno,
    "mobilenumber":mobilenumber,
    "passwordforuserid":passwordforuserid,
   

  }
    
  if(obj.emailid=='' || obj.emailid==null || obj.name=='' || obj.name==null || obj.address=='' || obj.address==null ||
  obj.accountno=='' || obj.accountno==null || obj.mobilenumber=='' || obj.mobilenumber==null || obj.passwordforuserid=='' || obj.passwordforuserid==null){
    alert('all feilds need to be updated')

  
  
  }else if(obj.accountno.length<11){
    alert('account number should not be less than eleven digit')
    
    return false;
    
  }else if(obj.mobilenumber.length<=10 || obj.mobilenumber.length>10){
    alert('mobile number should not be less or not more than ten digit')
    return false;
  }

  else{
    fetch('http://localhost:3000/Emplyeedata',{
    method: "post",
    headers: {"content-Type":"application/json"},
    body:JSON.stringify(obj)
    })
    .then(result=> alert("Student Registered successfully "));
     window.open("http://127.0.0.1:5500/Login/Login.html");
    
  }




}
