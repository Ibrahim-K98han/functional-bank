document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposite
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositeTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositeTotal + depositAmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previsousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previsousBalanceTotal + depositAmount;

    //clear input filed
    depositInput.value = '';
})