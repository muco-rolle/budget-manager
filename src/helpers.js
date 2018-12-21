const ucFirst = (word) => {
    word = word.split("");
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1).join("");
}
export { ucFirst }