(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  function openD(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow='hidden';}
  function closeD(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow='';}
  if(t&&d&&o){
    t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeD();}else{openD();}});
    if(c){c.addEventListener('click',closeD);}
    o.addEventListener('click',closeD);
    var links=d.querySelectorAll('a');
    for(var i=0;i<links.length;i++){links[i].addEventListener('click',closeD);}
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeD();}});
    var gb=d.querySelectorAll('.drawer-group-btn');
    for(var j=0;j<gb.length;j++){gb[j].addEventListener('click',function(){var sub=document.getElementById(this.getAttribute('aria-controls'));var ex=this.getAttribute('aria-expanded')==='true';this.setAttribute('aria-expanded',ex?'false':'true');if(sub){sub.classList.toggle('open',!ex);}});}
  }
  var qs=document.querySelectorAll('.faq-q');
  for(var k=0;k<qs.length;k++){qs[k].addEventListener('click',function(){var item=this.parentNode;var open=item.classList.toggle('open');this.setAttribute('aria-expanded',open?'true':'false');});}
})();
