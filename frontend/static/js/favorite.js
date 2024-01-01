window.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'save') {
    e.target.classList.toggle('active')
  }
})
