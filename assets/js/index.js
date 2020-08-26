document.querySelectorAll('inupt').forEach(input => {
  input.addEventListener('native.showkeyboard', () => {
    document.querySelector('.mobile_logo').style.display = 'none';
  });

  input.addEventListener('native.hidekeyboard', () => {
    document.querySelector('.mobile_logo').style.display = 'flex';
  })
})