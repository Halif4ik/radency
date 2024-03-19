function findPath(mountain: number[][]) {
   return dfs(mountain, 0, 0);
}

function dfs(mountain: number[][], row: number, col: number) {
   if (row === mountain.length) return 0; // the end of recursion

   const current = mountain[row][col];
   const left = dfs(mountain, row + 1, col); // try left child
   const right = dfs(mountain, row + 1, col + 1); // try right child

   return current + Math.max(left, right); // Return max summ for current child
}

const mountain: number[][] = [
   [6],
   [7, 10],
   [12, 11, 9],
   [90, 25, 130, 14]
];
console.log(findPath(mountain));
