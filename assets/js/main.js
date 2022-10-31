const korperGroßeInput = document.getElementById("Korpergrößer-input");
const alterInput = document.getElementById("Alter-input");
const gewichtInput = document.getElementById("Gewicht-input");
const weiblich = document.getElementById("weiblich-radio");
const manlich = document.getElementById("manlich-radio");
const activitat = document.getElementById("select-input");
const grundsumeKcalOutput = document.getElementById("grundsume-kcal-output");
const grundsumeKjOutput = document.getElementById("grundsume-KJ-output");
const GesamtumsatzKcalOutput = document.getElementById(
  "Gesamtumsatz-kcal-output"
);
const GesamtumsatzKjOutput = document.getElementById("Gesamtumsatz-KJ-output");
function calc(event) {
  event.preventDefault();
  if (manlich.checked && Number(activitat.value == 1)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 0.95).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (manlich.checked && Number(activitat.value == 2)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.2).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (manlich.checked && Number(activitat.value == 3)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.5).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (manlich.checked && Number(activitat.value == 4)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.7).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (manlich.checked && Number(activitat.value == 5)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.9).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (manlich.checked && Number(activitat.value == 6)) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 2.2).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 1)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 0.95).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 2)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.2).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 3)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.5).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 4)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.7).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 5)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 1.9).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked && Number(activitat.value == 6)) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * 2.2).toFixed(0);
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  }
}
