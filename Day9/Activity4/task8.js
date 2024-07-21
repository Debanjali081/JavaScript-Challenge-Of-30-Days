// Task 8 : Add and remove a CSS class to/from an HTML element .

let styleCls =document.querySelector('.styleCls');

styleCls.innerHTML="<h1>Hey , This Is Debanjali</h1>";

styleCls.classList.toggle('styling');

setTimeout(()=>{
    styleCls.classList.remove('styling');
},2000);



