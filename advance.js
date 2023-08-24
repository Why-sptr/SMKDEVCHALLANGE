const numRows = 5;

for (let i = numRows; i >= 1; i--) {
    let row = '';
    for (let j = i; j >= 1; j--) {
        row += j + ' ';
    }
    console.log(row);
}
