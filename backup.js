const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
hintBtn.addEventListener('click', () => {
    txt.textContent = 'I CHANGED YOU!!!';
});
function writeTxt () {
    const text = 'To be a shogoat';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count = text.length) clearInterval(id);
        txt.textContent +=   text[Count];
    count++;//count++keeps adding 1 to the value of count
        
    }, 100);
}
let score = 0
const checkBtn = document.querySelector('#checkBtn'); 
checkBtn.addEventListener('click', () =>{
console.log ("I have just been clicked");
    document.querySelector('#cup > i').textContent = score;
    score++;
    document.querySelector('#action').style.backgroundImage = `url('error_fawzi_mourad.gif')`;
    const tid = setTimeout(() => {
        document.querySelector('#action').style.backgroundImage = 'none'
        clearTimeout(tid);
    }, 2000);
});
function showicon () {
    return `<svg>
    <use href ='#icon'></use>
    </svg>`
}
document.querySelector('#container').innerHTML = showicon();
//STRING METHODS
//.slice(start, end) //slices a portion ofa string
//.concat(...strings)  //joins alll characters {chars} in a string
//.trim()  //removes spaces at the beginning and end of a string
//.at(..index) //chooses char at the index
//.length //tells how many chars are in a string
//.toLowerCase()  writes all chars in lower case
//.UpperCase()  writes alll chars in upper case
//.endsWith('')  //returns true if the char of the string matches the LAST char
//startwith('')  //returns true if the char of the strings matches the FIRST char