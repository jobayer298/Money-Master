function setValue(id, value) {
  const getValue = document.getElementById(id);
  getValue.innerText = value;
}

function getInputValue(id , isTrue) {
  const inputField = document.getElementById(id).value;
  if(isTrue){
    document.getElementById(id).value = "";
  }
  return parseFloat(inputField);
}

document.getElementById("calculate").addEventListener("click", function () {
  const incomeField = getInputValue("income");
  const foodField = getInputValue("food", true);
  const rentField = getInputValue("rent", true);
  const costField = getInputValue("cost", true);
  
  
  if (
    isNaN(foodField) ||
    isNaN(incomeField) ||
    isNaN(rentField) ||
    isNaN(costField)
  ) {
    alert("Value cannot be empty");
    return;
  } else if (
    foodField <= 0 ||
    incomeField <= 0 ||
    rentField <= 0 ||
    costField <= 0
  ) {
    alert("provide valid number");
    return;
  } else if (
    foodField > incomeField ||
    rentField > incomeField ||
    costField > incomeField
  ) {
    alert("provide valid number");
    return;
  }
  const totalExpense = foodField + rentField + costField;
  if(totalExpense > incomeField){
    alert("cost is greater than income")
    return;
  }
  setValue("total-expense", totalExpense);
  const incomeValue = incomeField - totalExpense;
  setValue("balance", incomeValue);
   

});

document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = getInputValue("income");
  const saving = getInputValue("save", true);
  // const saving = getInputValue("save");
  const balance = document.getElementById("balance").innerText;
  if (isNaN(saving)) {
    alert("Value cannot be empty");
    return;
  } else if (saving > balance) {
    alert("Eto taka nai");
    return;
  }
  const totalSave = (totalIncome * saving) / 100;
  setValue("saving", totalSave);
  const remaining = balance - totalSave;
  setValue("remaining", remaining);
});
