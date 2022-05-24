var getTargetCopy = function(original, cloned, target) {
    let queue = [[original, cloned]];
    while (queue.length) {
        let [root1, root2] = queue.shift();
        if (root1 == target) return root2;
        if (root1.left) {
            queue.push([root1.left, root2.left])
        }
        if (root1.right) {
            queue.push([root1.right, root2.right]);
        }
    }
};