// 定义被反转的字符串
const str = "juejin";
const res = str.split("").reverse().join("");
console.log("%c 🍫 res", "color:#3f7cff", res);

// 判断一个字符串是否是回文字符串
// 自己思路
const isSeem = (str) => {
  const revertStr = str.split("").reverse().join("");
  // if (str === revertStr) {
  //   return true;
  // } else {
  //   return false;
  // }
  return str === revertStr;
};

// 案例
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split("").reverse().join("");
  // 判断反转前后是否相等
  return reversedStr === str;
}
console.log("%c 🍬 isSeem", "color:#ed9ec7", isSeem("yessey"));

// 两个字串在内容上是否完全对称
const isSymmetry = (str) => {
  const strArr = str.split("");
  const len = strArr.length;
  for (let i = 0; i < len / 2; i++) {
    if (strArr[i] !== strArr[len - i - 1]) {
      return false;
    }
    return true;
  }
};
// 案例
function isPalindrome1(str) {
  // 缓存字符串的长度
  const len = str.length;
  // 遍历前半部分，判断和后半部分是否对称
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log("%c 🍡 isSymmetry", "color:#f5ce50", isSymmetry("yessey"));
console.log("%c 🍯 isPalindrome1", "color:#2eafb0", isPalindrome1("yessey"));
