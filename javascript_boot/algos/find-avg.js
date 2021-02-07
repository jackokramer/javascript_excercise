// [3, 7, 9, 9, 1, 3, 2, 6]  <- image
// [5  9  2  4; 2  0  1  2
// [7  3; 2  1
// [5;-2

// [5 -2  2  1  2  0  1  2]  <- encoded_image

// avg = (a + b) / 2
// diff = avg - a



// [3, 7, 9, 9, 1, 3, 2, 6] -> [5  9  2  4]

function encode(image) { 
  for(let x = 0; image.length>x; x++){
    let a = image[x];
    let b = image.length-1;
    let avg =  (image[x]+ image.length-1)/2;
    let newList = avg(image[x]+image[x]);
    // sum of each pair to attain that average
    // [3,7]+10 /2 
    return avg;
  }
}

let image = [3, 7, 9, 9, 1, 3, 2, 6];

let encoded_image = encode(image);
console.log(encoded_image)  // [5  9  2  4]






// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');