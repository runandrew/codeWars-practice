// Fun with trees

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {
    if (!array.length) return;
    const nodeArray = [];
    let arrayIdx = 0;
    let head;

    if (!nodeArray.length) {
        head = addNewNode(array[arrayIdx]);
    }

    while (areValuesLeft(array, arrayIdx)) {
        let currNode = nodeArray.shift();
        while (!currNode.right && areValuesLeft(array, arrayIdx)) {
            if (!currNode.left) {
                currNode.left = addNewNode(array[arrayIdx]);
            } else {
                currNode.right = addNewNode(array[arrayIdx]);
            }
        }
    }

    // Helper functions
    function addNewNode(value) {
        let newNode = new TreeNode(value);
        nodeArray.push(newNode);
        arrayIdx++;
        return newNode;
    }

    function areValuesLeft(arr, currIdx) {
        return currIdx <= arr.length - 1;
    }

    return head;
}

// function addToTree(tree, value) {
//
//
// }


console.log(arrayToTree([17, 0, -4, 3, 15]));
