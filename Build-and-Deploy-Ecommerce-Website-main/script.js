// Script for navigation bar
const bar= document.getElementById('bar');
const close = document.getElementById('close');
const nv = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        navigator.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        navigator.classList.remove('active');
    })
}