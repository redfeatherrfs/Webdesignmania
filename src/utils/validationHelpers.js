const isAlphanumeric = input => {
    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    return alphanumericRegex.test(input);
}

const isAlphabetic = input => {
    const alphabeticRegex = /^[a-zA-Z\s]*$/;
    return alphabeticRegex.test(input);
}

const fieldLengthValidator = (input, length) => {
    return length >= input.length;
}













export { isAlphanumeric, isAlphabetic, fieldLengthValidator }
