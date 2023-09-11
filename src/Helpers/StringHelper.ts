export const UpCaseFirstSymbol = (string: string) => {
    let arr = [...string];
    arr[0] = arr[0].toUpperCase();
    return arr.join('').toString();
}