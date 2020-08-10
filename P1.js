function multiplesOf3and5(number) {
    // Good luck!
    var sum = 0;
    for (var i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}

multiplesOf3and5(1000);
multiplesOf3and5(10);
multiplesOf3and5(49);
multiplesOf3and5(8456);
multiplesOf3and5(19564);

//output
// 233168
// 23
// 543
// 16687353
// 89301183