
function filterEvents(cat){
  let cards = document.querySelectorAll('.event-card');

  cards.forEach(card => {
    if(cat === 'all' || card.dataset.cat === cat){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function validateForm(){
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();

  if(!name || !email || !msg){
    alert('يرجى تعبئة جميع الحقول.');
    return false;
  }

  if(!email.includes('@')){
    alert('يرجى إدخال بريد إلكتروني صحيح.');
    return false;
  }

  alert('تم إرسال رسالتك بنجاح.');
  return true;
}
