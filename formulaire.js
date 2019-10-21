var formvalid= document.getElementById('form1');
var elName=document.getElementById('name');
var missname=document.getElementById('missname')
var subject=document.getElementById('subject');
var message=document.getElementById('message');
var email=document.getElementById('email');
var missemail=document.getElementById('missemail');
var missmessage=document.getElementById('missmessage');
var misssubject=document.getElementById('misssubject')
var prenomvalid=  /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
var regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

formvalid.addEventListener('submit',validation);

function validation (event){
    event.preventDefault();
    if(elName.validity.valueMissing ){
        missname.innerText='error';
     
        
    
    }else if (prenomvalid.test(name.value) ==false){
            event.preventDefault();
            missname.textcontent='incorrect';
        


        
    }else{

    }
    if(message.validity.valueMissing ){
        missmessage.textContent='error';
    
    
    }else if (message.validity.valid ==false){
            event.preventDefault();
            missmessage.textcontent='incorrect';
            missmessage.style.color='orange';


        
    }else{

    }
    if(email.validity.valueMissing ){
        missemail.textContent='please provide a valid email adress';
        
    
    }else if (regex.test(name.value) ==false){
            event.preventDefault();
            misseamil.textcontent='';
            missemail.style.color='orange';


        
    }else{

    }
    if(subject.validity.valueMissing ){
        misssubject.textContent='error';
        
    
    }else if (subject.test(subject.value) ==false){
            event.preventDefault();
            misssubject.textcontent='incorrect';
            misssubject.style.color='orange';


        
    }else{

    }


}
/********************************************kkkk******** */

