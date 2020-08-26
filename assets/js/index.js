document.querySelectorAll('input').forEach(input => {
  
  input.addEventListener('focus', function() {
    document.querySelector('.mobile_logo').style.display = 'none';
  });

  input.addEventListener('focusout', () => {
    document.querySelector('.mobile_logo').style.display = 'flex';
  })

})