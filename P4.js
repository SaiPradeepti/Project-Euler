//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two n-digit numbers.




function largestPalindromeProduct(n) {
  let product,revproduct;
 for(let i=Math.pow(10,n)-1;i>=Math.pow(10,n)-Math.pow(10,n-1);i--){
  for(let j=Math.pow(10,n)-1;j>=Math.pow(10,n)-Math.pow(10,n-1);j--){
    // console.log(i,j)
  product=i*j;
  revproduct = Number(String(product).split('').reverse().join(''))
  if(product === revproduct){
    return product;
  }
}
}
}
console.log(largestPalindromeProduct(3));
console.log(largestPalindromeProduct(2));

// output
// 906609
// 9009

// output
// 906609
// 9009
