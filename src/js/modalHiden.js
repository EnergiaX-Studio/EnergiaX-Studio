(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    //openModalBtnMobile: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  if (refs.openModalBtn === null) {
    console.log("openModalBtn is null");
  }
  refs.openModalBtn.addEventListener('click', toggleModal);
 // refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(event) {
    console.log("wbiłem2");
    refs.modal.classList.toggle('is-hidden');
  }
})();
