let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnX = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (Winner) => {
  msg.innerText = `Congratulations , Winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};
newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
