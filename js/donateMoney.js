// --card - 1
document
  .getElementById("btn-donate-now")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-donate-money");

    if (isNaN(donateMoney)) {
      alert("Failed to added money");
      return;
    } else {
      const donationBalance = getTextFieldValueById("donation-balance");
      const accountBalance = getTextFieldValueById("account-balance");
      const newDonationBalance = donationBalance + donateMoney;
      const newBalance = accountBalance - donateMoney;

      document.getElementById("donation-balance").innerText =
        newDonationBalance;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });

// ---card - 2
