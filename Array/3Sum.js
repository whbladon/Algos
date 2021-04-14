/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const output = [];

  nums = nums.sort((a, b) => a - b);

  //make sure take 2 off nums.length because that is last triple possible
  for (let l = 0; l < nums.length - 2; l++) {
    //conditional passes if first iteration OR the prevoius and current ele arent equal
    if (l === 0 || nums[l] > nums[l - 1]) {
      let m = l + 1;
      let r = nums.length - 1;

      //loop until pointers touch

      while (m < r) {
        const left = nums[l];
        const middle = nums[m];
        const right = nums[r];

        let sum = left + right + middle;

        //if match found, enter push to output
        if (sum === 0) {
          output.push([left, middle, right]);
        }

        //if sum is too small
        if (sum < 0) {
          let temp = m;
          m++;

          //loop keeps incrementing is duplicated are found
          while (nums[m] === nums[temp] && m < r) {
            m++;
          }
        } else {
          let temp = r;
          r--;

          while (nums[r] === nums[temp] && m < r) {
            r--;
          }
        }
      }
    }
  }

  return output;
};
