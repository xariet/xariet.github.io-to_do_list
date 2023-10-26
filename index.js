const input=document.querySelector('.inp');
const button = document.querySelector('.btn');
const list = document.querySelector('.list');

button.addEventListener('click', ()=>{

const item = document.createElement('li');
item.innerText=input.value;
item.classList.add('styleList');
list.appendChild(item);
input.value ='';
item.addEventListener('click', ()=>{
item.classList.add('completed');
})
item.addEventListener('dblclick', ()=>
{
    list.removeChild(item);
})
})