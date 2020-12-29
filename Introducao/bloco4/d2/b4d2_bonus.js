let numbers = [5, 9, 2, 11, 10];
for (let i = 1; i < n.length; i++) {
  for (let j = 0; j > i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
    console.log("If do Loop de dentro: array i" + (array[i]) + "array j" +array[j] + "position:" + position);
    console.log(array[i]);
  }
  console.log("Loop de dentro: array i" + array[i] + "array j" +array[j] + "position:" + position);
}
console.log("Loop de fora: array i" + array[i] + "array j" +array[j] + "position:" + position);

