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