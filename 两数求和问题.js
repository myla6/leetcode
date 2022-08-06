// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// 原始方法
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 *  空间换时间，Map 来帮忙
 * */
// 自己写的
var twoSum1 = function (nums, target) {
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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 案例
 */
const twoSum2 = function (nums, target) {
  // 这里我用对象来模拟 map 的能力
  const diffs = {};
  // 缓存数组长度
  const len = nums.length;
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 判断当前值对应的 target 差值是否存在（是否已遍历过）
    if (diffs[target - nums[i]] !== undefined) {
      // 若有对应差值，那么答案get！
      return [diffs[target - nums[i]], i];
    }
    // 若没有对应差值，则记录当前值
    diffs[nums[i]] = i;
  }
};

// ES6 中的 Map

console.log("两数求和问题=====>", twoSum2([2, 7, 11, 15], 9));
