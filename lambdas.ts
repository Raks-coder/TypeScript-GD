var filtered = [1, 2, 3, 4].filter(x => x > 1);
for (var x of filtered) {
  console.log(`${x}`);
}
filtered.forEach(element => {
  console.log(element);
});