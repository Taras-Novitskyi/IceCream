(() => {
    const menuBtnRef = document.querySelectorAll("[data-products-button]");
  const mobileMenuRef = document.querySelectorAll("[data-products]");

  menuBtnRef.forEach(element => {
    element.addEventListener("click", (e) => {
      const currentCard = e.currentTarget.previousElementSibling;

      const expanded =
        element.getAttribute('aria-expanded') === 'true' || false;

      element.classList.toggle('is-open');
      element.setAttribute('aria-expanded', !expanded);

      currentCard.classList.toggle('is-open');
    })
  });
  })();