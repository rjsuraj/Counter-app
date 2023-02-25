const output = document.getElementById('output');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

const increeMent = ()=>{
    let number = Number.parseInt(output.innerHTML)
    number += 1;
    output.innerHTML = `${number}`  
}
const decreeMent = ()=>{
    let number = Number.parseInt(output.innerHTML)
    number -= 1;
    output.innerHTML = `${number}`  
}

plus.addEventListener('click',increeMent)
minus.addEventListener('click',decreeMent)