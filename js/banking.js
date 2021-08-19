function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input filed
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previsousBalanceTotal = parseFloat(balanceTotalText);
    return previsousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previsousBalanceTotal = parseFloat(balanceTotalText);
    const previsousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previsousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previsousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    //get and update deposite total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositeTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositeTotal + depositAmount;

    //update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previsousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previsousBalanceTotal + depositAmount;

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);


    //get update and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previsousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previsousBalanceTotal - withdrawAmount;

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you in your account');
    }

});