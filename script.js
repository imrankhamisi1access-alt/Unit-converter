let myValue = [];
const inputEL = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const divLength = document.getElementById("div-length");
const divVolume = document.getElementById("div-volume");
const divMass = document.getElementById("div-mass");
const mToF = 3.2808399;
const fToM = 0.3048;
const lToG = 0.26417205;
const gToL = 3.78541178;
const kToP = 2.20462262;
const pToK = 0.45359237;

function convert(divUnit, unitOne, unitTwo, convertionOne, convertionTwo) {
  const value = inputEL.value;
  myValue.push(value);

  if (myValue.length > 1) {
    myValue.shift();
  }

  if (divUnit.querySelector("p")) {
    divUnit.querySelector("p").remove();
  }

  const pUnit = document.createElement("p");
  pUnit.textContent += `${inputEL.value} ${unitOne} = ${(inputEL.value * convertionOne).toFixed(3)} ${unitTwo} | ${inputEL.value} ${unitTwo} = ${(inputEL.value * convertionTwo).toFixed(3)} ${unitOne}`;
  divUnit.append(pUnit);
}

convertBtn.addEventListener("click", () => {
  convert(divLength, "meters", "feet", mToF, fToM);

  convert(divVolume, "liters", "gallons", lToG, gToL);

  convert(divMass, "kilos", "pounds", kToP, pToK);
});

inputEL.addEventListener("focus", function () {
  inputEL.value = "";
});
