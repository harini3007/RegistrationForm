const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword');
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
 
 });
 function validateInputs(){
 const usernameVal = username.value.trim();
 const emailVal = email.value.trim();
 const passwordVal = password.value.trim();
 const cpasswordVal = cpassword.value.trim();

if(usernameVal ===''){
    setError(username,'user name is empty')
}else{
    setsuccess(username);
}
if(emailVal ===''){
    setError(email,' email name is empty')
}else if(!validateEmail(emailVal)){
    setError(email,'please invalid email')
}
    else{
        setsuccess(email);
    }
   
if(passwordVal ===''){
    setError(password,'password is requied')
}else  if (passwordVal.length<8){
    setError(password,'password must be atleast 8 characters long');

}else{
    setsuccess(password);
}
if(cpasswordVal ===''){
    setError(cpassword,'Confirm password is requied')
}else  if (passwordVal !==passwordVal){
    setError(password,'password does not match');

}else{
    setsuccess(cpassword);
}



}
function setError(element,message){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error')
errorElement.innerText = message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')

}
function setsuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    
    }
    const validateEmail=(email)=>{
        return String(email)
        .toLowerCase()
        .match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        );
    };