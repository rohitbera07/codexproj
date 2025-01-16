const ham=document.getElementById("hamburg");
const open=document.getElementById('open');
function openMenu(){
    ham.style.display='block';
    open.style.display='none';
}
console.log(ham);
function closeMenu(){
    ham.style.display='none';
    open.style.display='block';
}