const exampleSet = new Set([1,1,1,1,1,2,2,2,2,2]);

exampleSet.add(5).add(91)

console.log(exampleSet.delete(5))
console.log(exampleSet.has(2))

console.log(exampleSet)

console.log(exampleSet.clear())