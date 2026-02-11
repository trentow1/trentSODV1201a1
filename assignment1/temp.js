// Converts temperature between Celsius, Fahrenheit, and Kelvin
function convertTemp() {
    const value = parseFloat(document.getElementById("tempValue").value);
    const type = document.getElementById("tempType").value;
    const output = document.getElementById("output");

    if (document.getElementById("tempValue").value === "") {
        output.textContent = "";
        return;
    }

    if (isNaN(value)) {
        output.textContent = "Please enter a valid temperature.";
        return;
    }

    let c, f, k;

    if (type === "C") {
        c = value;
        f = (c * 9 / 5) + 32;
        k = c + 273.15;
    } else if (type === "F") {
        f = value;
        c = (f - 32) * 5 / 9;
        k = c + 273.15;
    } else {
        k = value;
        c = k - 273.15;
        f = (c * 9 / 5) + 32;
    }

    output.textContent =
        `C: ${c.toFixed(2)} °C | F: ${f.toFixed(2)} °F | K: ${k.toFixed(2)} K`;
}
