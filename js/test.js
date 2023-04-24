export default function test() {
  const fruits = ["apple", "orange", "banana", "watermelon"];

  fruits.forEach((fruit, index) => {
    if (fruit === "banana") {
      console.log(fruit);
    } else {
      console.log(index);
    }
  });
}
