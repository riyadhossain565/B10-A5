// --card - 1
document
  .getElementById("btn-donate-now")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-donate-money");

    if (isNaN(donateMoney) || donateMoney <= 0) {
      alert("Failed to donate money");
      return;
    } else {
      const donationBalance = getTextFieldValueById("donation-balance");
      let accountBalance = getTextFieldValueById("account-balance");
      const newDonationBalance = donationBalance + donateMoney;
      let newBalance = accountBalance - donateMoney;

      document.getElementById("donation-balance").innerText =
        newDonationBalance;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });

// ---card - 2

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateMoneyFeni = getInputFieldValueById("input-donate-feni");

    if (isNaN(donateMoneyFeni) || donateMoneyFeni <= 0) {
      alert("Failed to donate money");
      return;
    } else {
      const addedBalanceFeni = getTextFieldValueById("added-balance-feni");
      let accountBalance = getTextFieldValueById("account-balance");
      const newDonationBalanceFeni = addedBalanceFeni + donateMoneyFeni;
      let newBalance = accountBalance - donateMoneyFeni;

      document.getElementById("added-balance-feni").innerText =
        newDonationBalanceFeni;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });

// ---card - 3

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const donateMoneyQuota = getInputFieldValueById("input-donate-quota");

    if (isNaN(donateMoneyQuota) || donateMoneyQuota <= 0) {
      alert("Failed to donate money");
      return;
    } else {
      const addedBalanceQuota = getTextFieldValueById("added-balance-quota");
      let accountBalance = getTextFieldValueById("account-balance");
      const newDonationBalanceQuota = addedBalanceQuota + donateMoneyQuota;
      let newBalance = accountBalance - donateMoneyQuota;

      document.getElementById("added-balance-quota").innerText =
        newDonationBalanceQuota;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
