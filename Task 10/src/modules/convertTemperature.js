module.exports = {
  convertTemperature(value, inputUnit, outputUnit) {
    let result = 0;
    if(inputUnit === "Kelvin")
    {
      if(outputUnit === "Celsius")
      {
        result = value - 273
      }
      else if(outputUnit === "Fahrenheit")
      {
        result = (value - 273) * (9/5) + 32
      }
      else if(outputUnit === "Kelvin")
      {
        result = value;
      }
    }
    else if(inputUnit === "Fahrenheit")
    {
      if(outputUnit === "Celsius")
      {
        result = (value-32)*(5/9)
      }
      else if(outputUnit === "Fahrenheit")
      {
        result = value
      }
      else if(outputUnit === "Kelvin")
      {
        result = (value-32)*(5/9) + 273;
      }
    }
    else if(inputUnit === "Celsius")
    {
      if(outputUnit === "Celsius")
      {
        result = value
      }
      else if(outputUnit === "Fahrenheit")
      {
        result = (value * (9/5))+32
      }
      else if(outputUnit === "Kelvin")
      {
        result = value + 273;
      }
    }
    return result
  }
}
