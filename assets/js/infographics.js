document.querySelectorAll('.infographic-thumb img').forEach(function(img){
  var frame=img.closest('.infographic-thumb');
  var download=frame.querySelector('.infographic-download');
  function enableDownload(){
    if(img.naturalWidth>0){
      frame.classList.add('is-loaded');
      download.removeAttribute('aria-disabled');
      download.removeAttribute('tabindex');
    }
  }
  img.addEventListener('load',enableDownload);
  img.addEventListener('error',function(){
    frame.classList.remove('is-loaded');
    download.setAttribute('aria-disabled','true');
    download.setAttribute('tabindex','-1');
  });
  if(img.complete)enableDownload();
});
