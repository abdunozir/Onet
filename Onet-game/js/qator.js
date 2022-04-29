function birQator(couples, figure1_loc, figure2_loc) {
  if (figure1_loc < figure2_loc) {
    for (let i = 1; i <= Math.abs(figure1_loc - figure2_loc); i++) {
      let place = figure1_loc + i;
      if (place == figure2_loc) {
        couples.forEach((el) => el.classList.add("blank"));
        couples.forEach((el) => el.classList.remove("outline"));
        break;
      } else if (
        (figure1_loc == 0 || (figure1_loc < 10 && figure1_loc >= 0)) &&
        (figure2_loc == 0 || (figure2_loc < 10 && figure2_loc >= 0))
      ) {
        couples.forEach((el) => el.classList.add("blank"));
        couples.forEach((el) => el.classList.remove("outline"));
        break;
      } else if (
        (figure1_loc == 50 || (figure1_loc <= 59 && figure1_loc >= 50)) &&
        (figure2_loc == 50 || (figure2_loc <= 59 && figure2_loc >= 50))
      ) {
        couples.forEach((el) => el.classList.add("blank"));
        couples.forEach((el) => el.classList.remove("outline"));
        break;
      } else {
        const place_el = document.querySelector(`[data-loc="${place}"]`);
        if (!place_el.classList.value.includes("blank")) {
          couples.forEach((el) => el.classList.remove("outline"));
          break;
        } else {
          continue;
        }
      }
    }
  }
}

// row detect
function detectRow(figure1_loc, figure2_loc) {
  if (0 <= figure1_loc > 10 && 0 <= figure2_loc > 10) {
    return 1;
  } else if (10 <= figure1_loc > 20 && 10 <= figure2_loc < 20) {
    return 2;
  } else if (20 <= figure1_loc > 30 && 20 <= figure2_loc < 30) {
    return 3;
  } else if (30 <= figure1_loc > 40 && 30 <= figure2_loc < 40) {
    return 4;
  } else if (40 <= figure1_loc > 50 && 40 <= figure2_loc < 50) {
    return 5;
  } else if (50 <= figure1_loc >= 60 && 50 <= figure2_loc <= 60) {
    return 6;
  } else {
    return 0;
  }
}

// if (figure1_loc < figure2_loc) {
//   let place;
//   for (let i = 1; i <= Math.abs(figure1_loc - figure2_loc) / 10; i++) {
//     place = figure1_loc + i * 10;
//     if (place == figure2_loc) {
//       couples.forEach((el) => el.classList.add("blank"));
//       couples.forEach((el) => el.classList.remove("outline"));
//       break;
//     } else {
//       const place_el = document.querySelector(`[data-loc="${place}"]`);
//       if (!place_el.classList.value.includes("blank")) {
//         couples.forEach((el) => el.classList.remove("outline"));
//         break;
//       } else {
//         console.log("yeap");
//         continue;
//       }
//     }
//   }
// } else {
// }
