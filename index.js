let matrix = [];
matrix[0] = [1,2,3,4,5];
matrix[1] = [5,4,3,2,1];
matrix[2] = [6,7,8,9,0];
matrix[3] = [0,9,8,7,6];
let rowLength = matrix.length - 1;
let columnLength = matrix[0].length - 1;

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const traverse = (matrix, row, column) => {
    if (row > matrix.length) return;
    if (rowLength <= -1) return;
    let output = [];
    output = output.concat(goRightToLeft(matrix, row, column));
    output = output.concat(goTopRightToLowerRight(matrix, row, columnLength));
    output = output.concat(goLowerRightToLowerLeft(matrix, rowLength, columnLength));
    output = output.concat(goLowerLeftToUpperRight(matrix, rowLength, column));
    rowLength--;
    columnLength--;
    output = output.concat(traverse(matrix, row + 1, column + 1));
    return output;
};

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const markAndStore = (matrix, row, column) => {
    let output = [];
    if (matrix[row][column] !== "") {
        output.push(matrix[row][column]);
        matrix[row][column] = "";
    }
    return output;
}

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const goLowerLeftToUpperRight = (matrix, row, column) => {
    if (row <= -1) return [];
    let output = markAndStore(matrix, row, column);
    output = output.concat(goLowerLeftToUpperRight(matrix, row - 1, 0));
    return output;
};

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const goLowerRightToLowerLeft = (matrix, row, column) => {
    if (column <= -1) return [];
    let output = markAndStore(matrix, row, column);
    output = output.concat(goLowerRightToLowerLeft(matrix, row, column - 1));
    return output;
};

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const goTopRightToLowerRight = (matrix, row, column) => {
    if (row > rowLength) return [];
    let output = markAndStore(matrix, row, column);
    output = output.concat(goTopRightToLowerRight(matrix, row + 1, column));
    return output;
};

/**
 * 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} column 
 * @returns 
 */
const goRightToLeft = (matrix, row, column) => {
    if (column > columnLength) return [];
    let output = markAndStore(matrix, row, column);
    output = output.concat(goRightToLeft(matrix, row, column + 1));
    return output;
};

let output = traverse(matrix, 0, 0);
console.log(output);