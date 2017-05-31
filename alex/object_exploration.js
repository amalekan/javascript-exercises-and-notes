/* jshint esversion: 6*/
//Let's create a car
//Properties
//color, make, model, hasAC
const Car = {
  color: 'green',
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, //technically, all of the left side is a string!
  paint: function (newColor) {
    this.color = newColor; //inside of the object, 'this' refers to the object
  },
  fixAC: function () {
    this.hasAC = true;
  }
};
console.log('Car: ', Car);
//I want to fix the AC
Car.hasAC = true;
console.log('Car: ', Car);

//Alternatively
Car['hasAC'] = false;
console.log('Car: ', Car);

//I want to check the color
console.log('Color of Car: ',Car.color);

//Paint the Car
Car.paint('orange');
console.log('Car: ', Car);

//Fix the AC
Car.fixAC();
console.log('Car after AC fix:', Car);



//Shirt Object
//You need at least 3 properties from your plan.
//You need at least 3 methods from your plan.
//One of your methods should modify a property such as 'paint' above.
const Shirt = {
  color: 'white',
  size:  'XL',
  isItDirty:  false,
  isItBeingWorn: false,
  wash: function () {

    if(!isItBeingWorn) {
    console.log("This shirt is dirty! Let's wash it right now.");
    this.isItDirty = false;
  }
    else
    {
      console.log('You need to take the shirt off first!');
    }
  },

  wear: function () {
    this.isItDirty = true;
    console.log('I am wearing the shirt');
  },

  takeShirtOff: function () {
    isItBeingWorn = false;
    console.log('I am no longer wearing the shirt');
  },

  showColor: function () {
    console.log('This shirt is', this.color);
  },

};
Shirt.showColor();
Shirt.wear();
Shirt.takeShirtOff();
Shirt.wash();




//
