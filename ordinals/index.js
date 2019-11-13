/***
 * Important things to consider:
 *
 * What about non-english languages?
 * What about numbers >2 digits
 * What about teens (should all be 'th')
 *
 * For a more complete solution/extra credit:
 *
 * What about negative numbers
 * What about non-integer numbers
 * What about non-base 10 numbers
 * How would you test it
 */

function toOrdinal(number) {
    const asString = String((+number).toFixed(0));
    const tens = +asString.slice(-2);

    if(tens >= 10 && tens < 20)
    {
        return asString + suffix['0'];
    }

    const finalDigit = asString.charAt(asString.length - 1);

    return asString + (suffix[finalDigit] !== undefined ? suffix[finalDigit] : suffix['0']);
}

const suffix = {
    '0': 'th',
    '1': 'st',
    '2': 'nd',
    '3': 'rd'
};

export default toOrdinal;