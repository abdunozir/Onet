function turliQator(couples, figure1_loc, figure2_loc) {
  let clicked1 = +couples[0].getAttribute(`data-loc`);
  let clicked2 = +couples[1].getAttribute(`data-loc`);
  let clicked_id = +couples.id;
  let x1 = couples[0].classList[3].split("-")[0];
  let y1 = couples[0].classList[3].split("-")[1];
  let x2 = couples[1].classList[3].split("-")[0];
  let y2 = couples[1].classList[3].split("-")[1];
  // console.log(x1, y1, x2, y2);
  let rowD = couples[0].id - couples[1].id;
  pastgiChap(couples, figure1_loc, figure2_loc);
  // pastgiOng(couples, figure1_loc, figure2_loc);
}

// function pastgiOng(couples, clicked1, clicked2, rowD) {
//   let x1 = +couples[0].classList[3].split("-")[0];
//   let y1 = +couples[0].classList[3].split("-")[1];
//   let x2 = +couples[1].classList[3].split("-")[0];
//   let y2 = +couples[1].classList[3].split("-")[1];
// }

function pastgiChap(couples, xfigure1_loc, figure2_loc) {
  let x1 = +couples[0].classList[3].split("-")[0];
  let y1 = +couples[0].classList[3].split("-")[1];
  let x2 = +couples[1].classList[3].split("-")[0];
  let y2 = +couples[1].classList[3].split("-")[1];
  // let card = document.querySelector(`.card${x1 - 1}${y1}`)
  // console.log(card);
  if (x1 > x2) {
    let distansx = Math.abs(x1 - x2);
    let distansy = Math.abs(y1 - y2);
    let m = 1;
    let k = 0;
    while (m <= distansx) {
      for (let i = 0; i < 24; i++) {
        let card = document.querySelector(`.card${x1 - m}${y1}`);
        if (
          document
            .querySelector(`.card${x1 - 1}${y1}`)
            .classList.contains("blank")
        ) {
          if (card.classList.contains("blank")) {
            if (m == distansx) {
              let n = 1;
              while (n <= distansy) {
                for (let i = 0; i < 24; i++) {
                  let cls = `.card${x1 - m}${y1 + n}`;
                  let card = document.querySelector(cls);
                  if (!card.classList.contains("blank")) {
                    couples.forEach((el) => el.classList.remove("outline"));
                    couples.forEach((el) => el.classList.add("blank"));
                    n = distansy;
                    break;
                  }
                }
                n++;
              }
            }
          }
        } else {
          i = 24;
          let a = 1;
          while (a <= distansy) {
            for (let i = 1; i <= 24; i++) {
              let card = document.querySelector(`.card${x1}${y1 - a}`);
              if (!card.classList.contains("blank")) {
                if (a == distansy) {
                  let n = 1;
                  while (n <= distansx) {
                    for (let i = 0; i < 24; i++) {
                      let cls = `.card${x1 - n}${y1}`;
                      let card = document.querySelector(cls);
                      console.log(card);
                      if (!card.classList.contains("blank")) {
                        couples.forEach((el) => el.classList.remove("outline"));
                        couples.forEach((el) => el.classList.add("blank"));
                        a = distansx;
                        break;
                      }
                    }
                    n++;
                  }
                }
              }
            }
            a++;
          }
        }
      }
      m++;
    }
  } else if (x1 < x2) {
    let distansx = Math.abs(x1 - x2);
    let distansy = Math.abs(y1 - y2);
    let m = 1;
    while (m <= distansx) {
      for (let i = 0; i < 24; i++) {
        let card = document.querySelector(`.card${x1 + m}${y1}`);
        if (card.classList.contains("blank")) {
          if (m == distansx) {
            let n = 1;
            while (n <= distansy) {
              for (let i = 0; i < 24; i++) {
                let cls = `.card${x1 + m}${y1 + n}`;
                let card = document.querySelector(cls);
                if (
                  !card.classList.contains("blank") &&
                  card.classList[3] == couples[1].classList[3]
                ) {
                  couples.forEach((el) => el.classList.add("blank"));
                  couples.forEach((el) => el.classList.remove("outline"));
                }
              }
              n++;
            }
          }
        } else {
          i = 24;
          let a = 1;
          while (a <= distansy) {
            for (let i = 1; i <= 24; i++) {
              let card = document.querySelector(`.card${x1}${y1 - a}`);
              if (!card.classList.contains("blank") !== null) {
                if (a == distansy) {
                  let n = 1;
                  while (n <= distansx) {
                    for (let i = 0; i < 24; i++) {
                      let cls = `.card${x1 + n}${y1}`;
                      let card = document.querySelector(cls);
                      if (!card.classList.contains("blank")) {
                        couples.forEach((el) => el.classList.remove("outline"));
                        couples.forEach((el) => el.classList.add("blank"));
                        a = distansx;
                        break;
                      }
                    }
                    n++;
                  }
                }
              }
            }
            a++;
          }
        }
      }
      m++;
    }
  }
}
