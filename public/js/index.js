const handleOpenSubBar = () => {
  const subBarElm = document.getElementById("subBar");

  subBarElm.classList.toggle("hidden");
};

var _MAINLIST = [];

const handleDropdownChange = (e) => {
  const quantity = document.getElementById("quantity");
  const mainList = document.getElementById("mainList");

  if (!quantity.value || quantity.value === "0") {
    quantity.classList.add("error");
    quantity.focus();
    return;
  } else {
    quantity.classList.remove("error");
  }

  window.location = `/${e.target.value}/${quantity.value}`;

  // mainList.innerHTML = "";

  // const ul = document.createElement("ul");

  // mainList.appendChild(ul);

  // for (var i = 0; i < Number(quantity.value); i++) {
  //   var li = document.createElement("li");

  //   ul.appendChild(li);
  //   li.innerHTML = `${li.innerHTML} ${e.target.value + i}`;
  // }

  // mainList.console.log(quantity);
  // console.log(e.target.value);
};

window.onload = function () {
  document.getElementById("option").addEventListener("click", handleOpenSubBar);

  document
    .getElementById("dropdown")
    .addEventListener("change", handleDropdownChange);

  //CONTROLE DO CLIQUE DENTRO E FORA DA HIDDEN BAR
  document.addEventListener("click", function (event) {
    if (
      document.getElementById("option").contains(event.target) ||
      document.getElementById("quantity").contains(event.target)
    ) {
      return;
    }

    const subBarElm = document.getElementById("subBar");

    const isClickInside = subBarElm.contains(event.target);

    if (!subBarElm.classList.contains("hidden")) {
      if (!isClickInside) {
        subBarElm.classList.toggle("hidden");
      }
    }
  });
};
