var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){var o=parseFloat(t.textContent.replace(/,/g,""));isNaN(o)||(e+=o)});var o=e/t.length,n=a(e),r=a(o);function a(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}//# sourceMappingURL=index.8735c1c2.js.map
document.querySelector(".total-population").textContent=n,document.querySelector(".average-population").textContent=r;
//# sourceMappingURL=index.8735c1c2.js.map
