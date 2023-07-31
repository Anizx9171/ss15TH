let input = prompt("Nhập vào chuỗi kí tự bất kì");
function isPalindrome(str) {
    str = str.toLowerCase().replace();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }
console.log(isPalindrome(input));