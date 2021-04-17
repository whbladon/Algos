/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length < 3) return nums[0];

  let r = nums.length - 1;
  let l = 0;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m - 1] !== nums[m] && nums[m] !== nums[m + 1]) return nums[m];
    if (r - l === 2) {
      if (nums[l] === nums[m]) return nums[r];
      else return nums[l];
    }

    //if m is even, handle sameside search
    if (m % 2 == 0) {
      if (nums[m] === nums[m - 1]) r = m;
      else l = m;

      //otherwise handle oppositeside search
    } else {
      if (nums[m] === nums[m - 1]) l = m + 1;
      else r = m - 1;
    }
  }
};
