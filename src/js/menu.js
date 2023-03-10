(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__menu-open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    closeMenuLink: document.querySelector('[data-nav-link]'),
    closeMenuLinkAbout: document.querySelector('[data-nav-linkA]'),
    closeMenuLinkContact: document.querySelector('[data-nav-linkC]'),
    closeMenuLinkProduct: document.querySelector('[data-nav-linkP]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.addEventListener('click', toggleMenu);
  refs.closeMenuLinkAbout.addEventListener('click', toggleMenu);
  refs.closeMenuLinkContact.addEventListener('click', toggleMenu);
  refs.closeMenuLinkProduct.addEventListener('click', toggleMenu);
  function toggleMenu() {
		refs.menu.classList.toggle('is-none');
		refs.menu.classList.toggle('menu-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();
