function birUstunda(couples, figure1_loc, figure2_loc) {
  if (figure1_loc < figure2_loc) {
    let place;
    for (let i = 1; i <= Math.abs(figure1_loc - figure2_loc) / 10; i++) {
      place = figure1_loc + i * 10;
      if (place == figure2_loc) {
        couples.forEach((el) => el.classList.add("blank"));
        couples.forEach((el) => el.classList.remove("outline"));
        break;
      } else if (
        (figure1_loc == 0 || figure1_loc % 10 == 0) &&
        (figure2_loc == 0 || figure2_loc % 10 == 0)
      ) {
        couples.forEach((el) => el.classList.add("blank"));
        couples.forEach((el) => el.classList.remove("outline"));
        break;
      } else if (chapQator(figure1_loc, figure2_loc)) {
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
  } else {
  }
}

function chapQator(f1, f2) {
  if (
    (f1 == 9 || f1 == 19 || f1 == 29 || f1 == 39 || f1 == 49 || f1 == 59) &&
    (f2 == 9 || f2 == 19 || f2 == 29 || f2 == 39 || f2 == 49 || f2 == 59)
  ) {
    return true;
  } else {
    return false;
  }
}
