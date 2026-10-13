  // Theme toggle
  var tb=document.querySelector('.theme'),root=document.documentElement;
  function paint(){var l=root.getAttribute('data-theme')==='light';tb.setAttribute('aria-label','Switch to '+(l?'dark':'light')+' mode')}
  tb.addEventListener('click',function(){var n=root.getAttribute('data-theme')==='light'?'dark':'light';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}paint()});
  paint();
  // Mobile menu
  var btn=document.querySelector('.menu'),links=document.getElementById('links');
  btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  // Contact form opens your email app with the message filled in (no backend needed)
  document.getElementById('cf').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var body='From: '+f.name.value+' ('+f.email.value+')\n\n'+f.message.value;
    location.href='mailto:bm9110472@gmail.com?subject='+encodeURIComponent('Portfolio message from '+f.name.value)+'&body='+encodeURIComponent(body);
  });
  document.getElementById('yr').textContent=new Date().getFullYear();
