let listMain = document.querySelector(".list");

let arr = [];

for (let i = 0; i < 4; i++) {
  pokemons.forEach((item) => {
    arr.push(item);
  });
}

let arr_length = 60;

for (let i = 0; i < 100; i++) {
  const idx1 = Math.floor(Math.random() * arr_length);
  const idx2 = Math.floor(Math.random() * arr_length);

  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

let i = 0;
let x = 1;
let y = 1;
let row = 1;
arr.forEach((item, index) => {
  let li = document.createElement("li");
  li.className = "item__box";
  li.classList.add(item.id);
  li.id = row;
  li.classList.add("card" + index);
  li.classList.add(x + "-" + y);
  li.classList.add("card" + x + "" + y);
  li.setAttribute("data-loc", index);
  li.innerHTML = `
      <button id="btn" class=" game__btn">
        <img class="game__img" src="${item.img}" alt="img">
      </button>
    `;

  li.addEventListener("click", (e) => {
    e.currentTarget.classList.add("outline");

    const couples = document.querySelectorAll(".outline");

    if (couples.length == 2) {
      const figure1_type = couples[0].classList[1];
      const figure2_type = couples[1].classList[1];
      const figure1_loc = +couples[0].getAttribute("data-loc");
      const figure2_loc = +couples[1].getAttribute("data-loc");

      if (figure1_type == figure2_type) {
        // bir qatorda
        birQator(couples, figure1_loc, figure2_loc);

        // bir ustunda
        if (Math.abs(figure1_loc - figure2_loc) % 10 == 0) {
          birUstunda(couples, figure1_loc, figure2_loc);
        }
        // turli xil uston qatorda
        turliQator(couples, figure1_loc, figure2_loc);
      } else {
        console.log("type does not match");
        couples.forEach((figure) => figure.classList.remove("outline"));
      }
    }
  });
  if ((index - 9) % 10 == 0) {
    row = 0;
    x = 0;
    y++;
  }
  x++;
  i++;
  row++;
  listMain.appendChild(li);
});

let btn_primari = document.querySelector(".btn-primari");

btn_primari.addEventListener("click", () => {
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
  document.getElementById("windowMain").style.display = "none";
  listMain.style.display = "flex";
});
