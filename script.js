const quastions = document.querySelectorAll(".quastion-item");

const hideAllOthers = function (id) {
  quastions.forEach((q) => {
    if (+q.attributes[0].textContent !== id) {
      q.children[2].classList.add("hidden");
      q.children[1].classList.remove("rotate");
      q.children[0].classList.remove("bold");
    }
  });
};

quastions.forEach((q) => {
  q.addEventListener("click", function (e) {
    const quastionId = +q.attributes[0].textContent;
    hideAllOthers(quastionId);

    const quastion = this.children[0];
    const answer = this.children[2];
    const arrow = this.children[1];

    arrow.classList.toggle("rotate");
    answer.classList.toggle("hidden");
    quastion.classList.toggle("bold");
  });
});
