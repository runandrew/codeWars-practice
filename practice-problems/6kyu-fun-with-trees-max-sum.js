// Fun with trees: max sum

function maxSum(root) {
    if (!root) return 0;
    let leftSum = 0, rightSum = 0;
    if (root.left) leftSum = maxSum(root.left);
    if (root.right) rightSum = maxSum(root.right);

    let highestBranch = leftSum >= rightSum ? leftSum : rightSum;
    return highestBranch + root.value;
}
