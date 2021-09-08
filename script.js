var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var calculateBtn = document.querySelector("#calculate-btn");
var outputBox = document.querySelector("#output-box");

calculateBtn.addEventListener("click", function calculationHandler() {
  var initial = Number(initialPrice.value);
  var quantity = Number(stocksQuantity.value);
  var current = Number(currentPrice.value);

  if ((initial === 0) | (quantity === 0) | (current === 0)) {
    showOutput("Enter all the inputs");
  } else {
    calculateProfitorLoss(initial, quantity, current);
  }
});

function calculateProfitorLoss(initial, quantity, current) {
  if (current === initial) {
    // No profit or loss
    showOutput("No pain No gain, No gain No pain");
  } else if (current > initial) {
    // profit
    profitPerStock = current - initial;
    profit = profitPerStock * quantity;
    profitPercentage = (profitPerStock / initial) * 100;
    showOutput(
      `The profit is of ${profit} and the percentage is ${profitPercentage}%`,
      "PROFIT"
    );
  } else {
    // loss
    lossPerStock = initial - current;
    loss = lossPerStock * quantity;
    lossPercentage = (lossPerStock / initial) * 100;
    showOutput(
      `The loss is of ${loss} and the percentage is ${lossPercentage}%`,
      "LOSS"
    );
  }
}

function showOutput(message, status) {
  outputBox.innerHTML = message;
  if (status === "PROFIT") {
    outputBox.style.color = "green";
  } else if (status === "LOSS") {
    outputBox.style.color = "red";
  } else {
    outputBox.style.color = "yellow";
  }
}

document.getElementById("clear-btn").addEventListener("click", newPage);
function newPage() {
  document.location.reload();
}
