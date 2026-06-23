function timeConverter(value, fromUnit, toUnit) {
    // Conversion factors to seconds
    const toSeconds = {
        "second": 1,
        "minute": 60,
        "hour": 3600,
        "day": 86400
    };

    // Convert the input value to seconds
    const valueInSeconds = value * toSeconds[fromUnit];

    // Convert from seconds to the target unit
    return valueInSeconds / toSeconds[toUnit];
}

module.exports = timeConverter;
