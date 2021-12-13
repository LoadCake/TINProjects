module.exports = {
  convertDistance(value, inputUnit, outputUnit) {
    let result =0;
    if(inputUnit === "Mile")
    {
      result = value * 1.609
    }
    else if(inputUnit === "Kilometer")
    {
      result = value * 0.621
    }
    return result
  }
}
