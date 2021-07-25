var filtered = [1, 2, 3, 4].filter(function (x) { return x > 1; });
for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
    var x = filtered_1[_i];
    console.log("" + x);
}
filtered.forEach(function (element) {
    console.log(element);
});
