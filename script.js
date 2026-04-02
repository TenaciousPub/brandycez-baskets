window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50)});
var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('vis');obs.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el){obs.observe(el)});
document.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('navLinks').classList.remove('open')})});
function openChat(){if(window.PayMeGPT&&window.PayMeGPT.open){window.PayMeGPT.open()}else{var b=document.querySelector('.pmg-chat-bubble,.pmg-launcher');if(b)b.click()}}