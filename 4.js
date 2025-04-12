const numberss = [[1, 2, 3], [4, 5, 6], [7, 8]];
const flatArrayMethod = numberss.flat();
let tek = 0;
let cut = 0;
flatArrayMethod.forEach(num => {
  if (num % 2 === 0) {
    cut += num;
  } else {
    tek += num;
  }
});
console.log("Tək  cəmi:", tek);  
console.log("Cüt  cəmi:", cut);
