function lengthConverter(value, fromUnit, toUnit) {
    const conversionRates = {
        'meter': 1,
        'kilometer': 0.001,
        'centimeter': 100,
        'millimeter': 1000,
        'inch': 39.3701,
        'foot': 3.28084,
        'yard': 1.09361,
        'mile': 0.000621371
    };
    const valueInMeters = value / conversionRates[fromUnit];
    return valueInMeters * conversionRates[toUnit];
}
module.exports = lengthConverter;