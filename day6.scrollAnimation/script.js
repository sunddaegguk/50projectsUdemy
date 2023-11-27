const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
  const triggerBottoms = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottoms) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
