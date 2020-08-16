function largestPrimeFactor(number) {
  let result = 0,num = number;
  for(let i=2;i<=number;i++){
    let count=0;
    for(let j=1;j<=i;j++){
      if(i%j==0){
        count += 1;
      }
    }
    if(count === 2){
        if(number%i==0){
      number /= i;
      result = i;
    }
      }
  }
  return result;
}
console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));

// output
// 2
// 3
// 5
// 7
// 2
// 29
