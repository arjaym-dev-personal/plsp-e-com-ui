export const SpecialCharToDash = (str: string) => {
    let char;
    char = str.replace(/\W+(?!$)/g, "-").toLowerCase();

    return char;
};
