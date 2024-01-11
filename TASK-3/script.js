function temperatureconversion() {
    const inputTemperature = parseFloat(document.getElementById("number").value);
    const unit = document.getElementById("unit").value;
    

    if (unit === 'Celsius') {
        // Celsius to Fahrenheit
        const fahrenheitTemp = (inputTemperature * 9/5) + 32;        

        // Celsius to Kelvin
        const kelvinTemp = inputTemperature + 273.15;

        document.getElementById("output").innerHTML = ` ${inputTemperature} degrees Celsius = ${fahrenheitTemp} degrees Fahrenheit <br> ${inputTemperature} degrees Celsius =${kelvinTemp} Kelvin.`;
    } 
    else if (unit === 'Fahrenheit') {
        // Fahrenheit to Celsius
        const celsiusTemp = (inputTemperature - 32) * 5/9;
        
        // Fahrenheit to Kelvin
        const kelvinTemp = (inputTemperature - 32) * 5/9 + 273.15;
        
        document.getElementById("output").innerHTML = ` ${inputTemperature} degrees Fahrenheit = ${celsiusTemp} degrees Celsius <br> ${inputTemperature} degrees Celsius =${kelvinTemp} Kelvin.`;
    } 
    else if (unit === 'Kelvin') {
        // Kelvin to Celsius
        const celsiusTemp = inputTemperature - 273.15;
        
        // Kelvin to Fahrenheit
        const fahrenheitTemp = (inputTemperature - 273.15) * 9/5 + 32;

        document.getElementById("output").innerHTML = `${inputTemperature} Kelvin = ${celsiusTemp} degrees Celsius <br> ${inputTemperature} Kelvin = ${fahrenheitTemp} degrees Fahrenheit.`;
    
    } 
    else {
        document.getElementById("output").textContent = 'Please select a valid unit.';
    }
}

