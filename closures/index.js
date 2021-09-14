//All functions will return the same value, because that the time that are being
//created, all reference to the same variable (reference)
var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(v1);
  };
}
obj1[0]();
obj1[1]();
obj1[2]();


//Avoid use the shared variable
var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function () {
    console.log(this.v1);
  }).bind({v1});
}
obj1[0]();
obj1[1]();
obj1[2]();

var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function (v2) {
      return function () {
        console.log(v2);
      };
  })(v1); //Used to generate a new scope chain
}
obj1[0]();
obj1[1]();
obj1[2]();
//Avoid use the shared variable