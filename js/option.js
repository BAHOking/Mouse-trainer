let btnOptionOpen = document.querySelector(".btn__option");
let btnOptionToClose = document.querySelector(".explanation__btn-ok");

let explanation = document.querySelector(".explanation__box");
let mainMmenu = document.querySelector(".main__menu");

btnOptionOpen.addEventListener("click", function openOption() {
  explanation.style.display = "block";
  mainMmenu.style.display = "none";
});

btnOptionToClose.addEventListener("click", function toCloseOption() {
  explanation.style.display = "none";
  mainMmenu.style.display = "block";
});
