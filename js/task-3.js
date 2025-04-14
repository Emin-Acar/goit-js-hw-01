function getElementWidth(content, padding, border) {
    const contentParameter = parseFloat(content);
    const paddingParameter = parseFloat(padding);
    const borderParameter = parseFloat(border);

    const totalWidth = contentParameter + paddingParameter * 2 + 2 * borderParameter;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));