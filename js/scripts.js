var nottri1 = function(side1, side2) {
  return side1 + side2;
};
var nottri2 = function(side2, side3) {
  return side2 + side3;
};
var nottri3 = function(side1, side3) {
  return side1 + side3;
};



$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var sum1  = nottri1(side1, side2);
    var sum2  = nottri2(side2, side3);
    var sum3  = nottri3(side1, side3);



    if (side1 === side2 && side1 === side3) {
    alert("You got an equilateral triangle");
}   else if (side1 === side2 && side1 != side3 && sum1 > side3 || side2 === side3 && side2 != side1 && sum2 > side1 || side1 === side3 && side1 != side2 && sum3 > side2) {
    alert("You got an isosceles triangle");
}   else if (side1 != side2 != side3 && sum1 > side3 && sum2 > side1 && sum3 > side2) {
    alert("You got a scalene triangle");
}   else if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
    alert("This isn't a triangle!");
}


  });
});
