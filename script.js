// small interactions & light accessibility helpers
document.addEventListener('DOMContentLoaded', () => {
  // set year in footers
  const yrs = document.querySelectorAll('[id^="yr"]');
  yrs.forEach(el => el.textContent = new Date().getFullYear());

  // simple contact form demo (no backend)
  window.submitContact = function(e){
    e.preventDefault();
    const status = document.getElementById('contactStatus');
    if(!status) return;
    status.textContent = 'Sending message...';
    setTimeout(()=> {
      status.textContent = 'Message sent! We will reply in 1-2 business days.';
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 900);
    return false;
  };

  // add small hover float effect for cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', ()=> card.style.transform = 'translateY(-6px)');
    card.addEventListener('mouseleave', ()=> card.style.transform = 'translateY(0)');
  });
});
