const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function count(){
    const text = textarea.value;
    const length=text.length;
    counter.innerText = `${length}`
}