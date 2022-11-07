let hands = ["Rock", "Paper", "Scissor"];
let item = document.getElementById("item");

// function getHand() {
//   let randomIndex = Math.floor(Math.random() * 3);
//   return (item.textContent = hands[randomIndex]);
// }
function playerOne() {
  let randomIndex = Math.floor(Math.random() * 3);
  return (item.textContent = hands[randomIndex]);
}
function playerTwo() {
  let randomIndex = Math.floor(Math.random() * 3);
  return (item.textContent = hands[randomIndex]);
}

// function resetHand() {
//   hands.textContent = [];
//   randomIndex.textContent = hands;
//   console.log(hands);
// }
