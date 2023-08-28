export const removesBrackets = (string: string) => {
    return string.split('').splice(1, string.length - 2).join('');
}