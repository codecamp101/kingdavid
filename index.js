/*THIS changes the text inside of an element
document.querySelector('#user > b').textContent = 'KING-DAVID';
document.querySelector('#user >  i').textContent = "?"*/
 const eye = document.querySelector('#eye');
 const output =  document.querySelector('output');
 const ipt = document.querySelector('input');
 const fm = document.querySelector('form');
 const pop = document.querySelector('#pop');
 const user = document.querySelector('#user');
 const start = document.querySelector('#start');
 const pan = document.querySelector('#panel');
 //this unmasks the the password
 eye.addEventListener('mousedown',() =>{
     ipt.type = 'text'
 })
 ;
 eye.addEventListener('mouseup',() =>{ //this masks the password../
    ipt.type = 'password';
 });
 //this submitthe passwords with the form
 fm.addEventListener('submit',(e)=>{
    e.preventDefault();//this will stop the page from reloading
    const password ='konikawa';
    if(password=== ipt. value){
        user.remove();
        fm.remove();
        output.textContent = 'Signing you in...';
        const timeoutID = setTimeout(() =>{
            output.remove();
            pop.showPopover();
            clearTimeout(timeoutID);
        }, 3000)
                
    } else{
        output.textContent = 'Wrong password';
    }
 });
 //this shows or hides the panels
 start.adddEventListener('click', () => {
    pan.classList.toggle('on');
 });
