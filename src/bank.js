const newDepoBtn = document.getElementById("addDeposite");
const newDepoInput = document.getElementById("newDeposite");
const preDepoAmount = document.getElementById("preDeposite");

newDepoBtn.addEventListener("click", function () {
  const depoValueString = newDepoInput.value;
  const depoValue = parseFloat(depoValueString);

  const previousDepositeAmmount = preDepoAmount.innerText;
  const totalDeposite =
    parseFloat(previousDepositeAmmount) + parseFloat(depoValue);
  preDepoAmount.innerText = totalDeposite;

  const previousTotalBalance = document.getElementById("preBalance");
  const preTotalBalanceString = previousTotalBalance.innerText;
  const totalBalance = parseFloat(preTotalBalanceString);
  const newTotalBalance = totalBalance + depoValue;
  previousTotalBalance.innerText = newTotalBalance;

  newDepoInput.value = "";
});
// Withdraw amount

const newWithdrawBtn = document.getElementById("addWithdraw");
const newWithdrawInput = document.getElementById("newWithdraw");
const prewithdrawAmount = document.getElementById("preWithdraw");

newWithdrawBtn.addEventListener("click", function () {
  const withdrawValueString = newWithdrawInput.value;
  const withdrawValue = parseFloat(withdrawValueString);
  const previousWithdrawAmount = prewithdrawAmount.innerText;
  const totalWithdraw = parseFloat(previousWithdrawAmount) + withdrawValue;
  prewithdrawAmount.innerText = totalWithdraw;

  const previousTotalBalance = document.getElementById("preBalance");
  const previousBalanceString = previousTotalBalance.innerText;
  const finalBalance = parseFloat(previousBalanceString);
  const leftBalance = finalBalance - withdrawValue;
  previousTotalBalance.innerText = leftBalance;

  newWithdrawInput.value = "";
});
