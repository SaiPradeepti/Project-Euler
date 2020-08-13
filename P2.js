function fiboEvenSum(n) {

var a = 0, b = 1, sum = 0, result=0;

while(sum<=n){
  sum = a + b;  
  if(sum%2==0)
  result+=sum;
  
  a = b;
  b = sum;
}

return result;

}

console.log(fiboEvenSum(10));
console.log(fiboEvenSum(34));
console.log(fiboEvenSum(60));
console.log(fiboEvenSum(1000));
console.log(fiboEvenSum(100000));
console.log(fiboEvenSum(4000000));

//output
//10
//44
//44
//798
//60696
//4613732
