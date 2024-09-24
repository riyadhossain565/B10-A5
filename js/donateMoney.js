// --card - 1
document
  .getElementById("btn-donate-now")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-donate-money");

    if (
      isNaN(donateMoney) ||
      donateMoney <= 0 ||
      parseFloat(donateMoney) > parseFloat(accountBalance)
    ) {
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
      document.getElementById("congrates-modal").showModal();

      // added to donation history
      const dateTime = new Date();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl");
      div.innerHTML = `
        <p class="font-bold">${donateMoney} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
        <samp>Date:${dateTime}</samp>
      `;
      document.getElementById("history-container").appendChild(div);
    }
  });

// ---card - 2

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateMoneyFeni = getInputFieldValueById("input-donate-feni");

    if (
      isNaN(donateMoneyFeni) ||
      donateMoneyFeni <= 0 ||
      parseFloat(donateMoney) > parseFloat(accountBalance)
    ) {
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
      document.getElementById("congrates-modal").showModal();

      // added to donation history
      const dateTime = new Date();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl");
      div.innerHTML = `
        <p class="font-bold">${donateMoneyFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <samp>Date:${dateTime}</samp>
      `;
      document.getElementById("history-container").appendChild(div);
    }
  });

// ---card - 3

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const donateMoneyQuota = getInputFieldValueById("input-donate-quota");

    if (
      isNaN(donateMoneyQuota) ||
      donateMoneyQuota <= 0 ||
      parseFloat(donateMoney) > parseFloat(accountBalance)
    ) {
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
      document.getElementById("congrates-modal").showModal();

      // added to donation history
      const dateTime = new Date();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl");
      div.innerHTML = `
        <p class="font-bold">${donateMoneyQuota} Taka is Donated for Aid for injured in the Quota Movement, Bangladesh</p>
        <samp>Date:${dateTime}</samp>
      `;
      document.getElementById("history-container").appendChild(div);
      // p.innerText = `${donateMoneyQuota} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    }
  });
