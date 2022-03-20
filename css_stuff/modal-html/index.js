// const modal = document.querySelector("#modal");
// const openModal = document.querySelector(".open-button");
// const closeModal = document.querySelector(".close-button");

// openModal.addEventListener("click", () => {
//   modal.showModal();
// });

// closeModal.addEventListener("click", () => {
//   modal.close();
// });

const modal = document.getElementById("modal")
const opendModal = document.querySelector('.open-button')
const closeModal = document.querySelector('.close-button')

opendModal.addEventListener("click", () => {
    modal.show();
})

closeModal.addEventListener('click', () => {
    modal.close()
})