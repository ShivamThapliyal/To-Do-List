const inputs = document.querySelector("#area");
const list = document.querySelector("#add");

inputs.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addto(this.value);
    this.value = "";
  }
});

const addto = (value) => {
  let lists = document.createElement("li");
  lists.innerHTML = `
    ${value}
    <i class="fas fa-times" style = "hover:black"></i>`;
  lists.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  lists.querySelector("i").addEventListener("click", function () {
    list.remove();
  });
  list.appendChild(lists);
};
