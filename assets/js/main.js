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
const button = document.getElementById("submit-butt");

// ================ Mit alter Schreibweise==============

// function calc(event) {
//   event.preventDefault();
//   if (manlich.checked) {
//     let resultKcalGrundKcal = (
//       664.7 +
//       13.7 * gewichtInput.value +
//       5 * korperGroßeInput.value -
//       (6, 8 * alterInput.value)
//     ).toFixed(0);
//     grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
//     grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
//     let resultKcalGesamtdKcal = (resultKcalGrundKcal * activitat.value).toFixed(
//       0
//     );
//     GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
//     GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
//   } else if (weiblich.checked) {
//     let resultKcalGrundKcal = (
//       655.7 +
//       9.6 * gewichtInput.value +
//       1.8 * korperGroßeInput.value -
//       4.7 * alterInput.value
//     ).toFixed(0);
//     grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
//     grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
//     let resultKcalGesamtdKcal = (resultKcalGrundKcal * activitat.value).toFixed(
//       0
//     );
//     GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
//     GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
//   }
// }

// ==============addEventListener Methode=================

button.addEventListener(`click`, (event) => {
  event.preventDefault();
  if (manlich.checked) {
    let resultKcalGrundKcal = (
      664.7 +
      13.7 * gewichtInput.value +
      5 * korperGroßeInput.value -
      (6, 8 * alterInput.value)
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * activitat.value).toFixed(
      0
    );
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  } else if (weiblich.checked) {
    let resultKcalGrundKcal = (
      655.7 +
      9.6 * gewichtInput.value +
      1.8 * korperGroßeInput.value -
      4.7 * alterInput.value
    ).toFixed(0);
    grundsumeKcalOutput.innerHTML = resultKcalGrundKcal;
    grundsumeKjOutput.innerHTML = (resultKcalGrundKcal * 4.184).toFixed(0);
    let resultKcalGesamtdKcal = (resultKcalGrundKcal * activitat.value).toFixed(
      0
    );
    GesamtumsatzKcalOutput.innerHTML = resultKcalGesamtdKcal;
    GesamtumsatzKjOutput.innerHTML = (resultKcalGesamtdKcal * 4.184).toFixed(0);
  }
});
