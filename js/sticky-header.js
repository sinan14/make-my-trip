window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.querySelector('#second-nav').classList.add('d-none');
    // document.querySelector('#sticky-nav').classList.add('fixed-header');
    document.querySelector('#sticky-nav').classList.add('show-stickynav');
    document.querySelector('#sticky-nav').classList.remove('hide-stickynav');
  } else {
    document.querySelector('#second-nav').classList.remove('d-none');
    document.querySelector('#sticky-nav').classList.remove('show-stickynav');
    document.querySelector('#sticky-nav').classList.add('hide-stickynav');
  }
});
