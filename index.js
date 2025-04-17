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
 //this submits the passwords with the form
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
 start.addEventListener('click', () => {
    pan.classList.toggle('on');
 });


 //this formats a -Unix number into a human-readable number
const dob =new Date ('4/28/2014').getTime(); //date format in java script => month/day/year
 pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(dob);


 //FU8NCTIONS
 //A FUNCTIONS ARE GROUP OF STATEMENTS THAT DO NOT RUN UNLESS WHEN CALLED
 /*function calculator () {
 console.log(2 + 4);
 console.log(10 - 5)
 console.log(10 / 2)
 console.log(3 * 3)
 console.log(5 % 3)  //modulos(short form is mod):the remainder of a division => No. % No.
 }
 calculator();
 //create a function with the name TXT
 //Inside the function,create a constant variable called t  
 //Make your t variable = any string you choose
 //create another constant  variable called u
 //Mkae your u variable = a different string
 //finally, console.lkog the SUM of t and u

 function callConfetti(){  
    /*
    const t = "ME";
    const u = " YOU";
    console.log(t + u); //concatenation: joins strings together
    */
    const d = new Date("03/28/2025").getDate();
    const m = new Date("03/14/2025").getMonth();
    const today = Date.now();
    console.log(new Date(today).getDate())
    if (new Date(today).getMonth() ===d && new Date(today))
        pan.querySelector('#panel').classList.add('bgi');

callConfetti();


 
