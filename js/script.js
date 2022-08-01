document.addEventListener("DOMContentLoaded", () => {
  const gameField = document.querySelector("#gameField");
  const cells = gameField.children;
  let currentMark = "X";

  const collectionToFieldArray = (collection) => {
    arr = Array.prototype.slice.call(collection, 0);

    arr = arr.map((el) => el.innerText);

    return arr;
  };

  const checkWin = (field) => {
    let isGameComplete = true;
    for (let i = 0; i < field.length; i++) {
      const el = field[i];
      if (el === "") {
        isGameComplete = false;
      }
    }
  };

  const addMark = (cell) => {
    cell.innerHTML = currentMark;
    cell.classList.add("filled");

    currentMark = currentMark == "X" ? "0" : "X";

    const field = collectionToFieldArray(gameField.children);
    checkWin(field);
  };

  gameField.addEventListener("click", (e) => {
    if (e.target.id !== "gameField" && !e.target.classList.contains("filled")) {
      addMark(e.target);
    }
  });
});
