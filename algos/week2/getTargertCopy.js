/**
 * Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
 */

const getTargertCopy = (original, cloned, target) =>{
    let queue = [[original, cloned]]
    while(queue.length){
        let [root1, root2] = queue.shift()
        if(root1 == target)return root2
        if(root1.left){
            queue.push([root1.left, root2.left])
        }
        if(root1.right){
            queue.push([root1.right, root2.right])
        }
    }
}
