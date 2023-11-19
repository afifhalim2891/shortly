const modalBtn = document.getElementById("modal-btn");
const menuModal = document.getElementById("modal-menu");

const openModal = (e) => {
  modalBtn.classList.toggle("open");
  menuModal.classList.toggle("flex");
  menuModal.classList.toggle("hidden");
};

modalBtn.addEventListener("click", openModal);
