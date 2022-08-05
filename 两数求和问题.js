// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// 原始方法
var total = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 空间换时间，Map 来帮忙
var mapTotal = function (nums, target) {
  const flag = {};
  for (var i = 0; i < nums.length; i++) {
    flag[i] = nums[i];
    const flagIndex =
      Object.values(flag) && Object.values(flag).indexOf(target - nums[i]);
    if (flagIndex !== -1) {
      return [flagIndex, i];
    }
  }
};

console.log("两数求和问题=====>", mapTotal([2, 7, 11, 15], 9));
