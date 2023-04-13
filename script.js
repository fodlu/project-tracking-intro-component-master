const closeBtn = document.querySelector(".close");
const ham = document.querySelector(".ham");
const link = document.querySelector(".link");
const links = link.querySelectorAll("a");

links.forEach((lnk) => {
  lnk.addEventListener("click", () => {
    link.classList.remove("active");
    closeBtn.classList.toggle("hidden");
    ham.classList.toggle("hidden");
  });
});

ham.addEventListener("click", () => {
  link.classList.add("active");
  closeBtn.classList.toggle("hidden");
  ham.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  link.classList.toggle("active");
  closeBtn.classList.toggle("hidden");
  ham.classList.toggle("hidden");
});
