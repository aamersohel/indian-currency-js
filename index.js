const ONES =  [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"    
];
    
const TENS = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
];
    
const PLACES = [ 
    "",
    "",
    "Hundred",
    "Thousand",
    "",
    "Lakh",
    "",
    "Crore",
    ""
];
    
function getTens(value) {
    value = parseInt(value);
    if(value > 99 || value < 1) return "";
    if(value < 20) {
        return ONES[value];
    }
    return (TENS[parseInt(value / 10)] + " " + ONES[parseInt(value % 10)]).trim();
}
    
function getHundred(value) {
    value = parseInt(value);
    if(value < 100) return getTens(value);
    return (ONES[parseInt(value / 100)] + " " + PLACES[2] + " " + getTens(value % 100)).trim();
}

function getPositiveNumber(value) {
    value = parseInt(value);
    let result = getHundred(value % 1000);
    value = parseInt(value / 1000);
    if(value < 1) return result;
    let place = 3;
    while(value > 0) {
        result = (getTens(value % 100) + " " + PLACES[place] + " " + result).trim();
        value = parseInt(value / 100);
        place += 2;
    }
    return result;
}

/**
 * Converts any numeric Indian currency to string equivalent representation
 * @param value numeric Indian currency
 * @returns string equivalent currency
 */
exports.toIndianCurrency = function(value) {
    if(value) {
        if(value === "") throw new Error("Invalid number");
        value = parseInt(value);
        if(Math.abs(value) > 999999999) throw new Error("Out of range number, currently it only support numbers from -999999999 to +999999999");
        if(value == 0) return "Zero";
        return (value < 0)? "Minus " + getPositiveNumber(value * -1): getPositiveNumber(value);    
    }
    throw new Error("Invalid number");
}
