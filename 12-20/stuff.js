var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}

var adder =  function(a,b) {
  return 'The sum of the 2 number is '+ a+b;
};

console.log(adder(5,6));
var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;