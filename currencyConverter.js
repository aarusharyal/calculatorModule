function currencyConverter(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        USD: { EUR: 0.85, NRP: 130.0 },
        EUR: { USD: 1.18, NRP: 153.0 },
        NRP: { USD: 0.0077, EUR: 0.0065 }
    };
    if(fromCurrency === toCurrency) {
        return amount;
    }
    if(exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        return amount * exchangeRates[fromCurrency][toCurrency];
    }
    throw new Error("Conversion rate not available for the specified currencies.");
}
module.exports = currencyConverter;