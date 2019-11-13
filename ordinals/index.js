function toOrdinal(number) {
    const asString = String((+number).toFixed(0));
    if(number >= 10 && number < 20)
    {
        return asString + suffix['0'];
    }

    const finalDigit = asString.charAt(asString.length - 1);

    return asString + suffix[finalDigit] || suffix['0'];
}

const suffix = {
    '0': 'th',
    '1': 'st',
    '2': 'nd',
    '3': 'rd'
};

export default toOrdinal;