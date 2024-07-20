const defaultCard = document.querySelector(".main");
const openModalBtn = document.querySelector(".open-btn");
const modalBg = document.querySelector(".modal-opener");
const modalCard = document.querySelector(".card");
const modalCloseBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function () {
  addModal();
});
modalCloseBtn.addEventListener("click", function () {
  defaultCard.style.display = "block";
  modalCard.style.display = "none";
  modalBg.classList.remove("active-body-modal");
});

function addModal() {
  defaultCard.style.display = "none";
  modalCard.style.display = "block";
  modalBg.classList.add("active-body-modal");
}
