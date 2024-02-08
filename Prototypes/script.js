// Write your own methods using Prototypes

let str = `  Hello World      `;
String.prototype.findTrimmedResultStr = function () {
    return this.trim();
}

let arr = ['  aman  ', 'abhinava   ', '  brad', ' chris   ', ' xiao xu   '];
Array.prototype.findTrimmedResultArr = function () {
    return this.map((word) => {
        return word.trim();
    })
}

// str.__proto__ -> Object.prototype -> null
// arr.__proto__ -> Object.prototype -> null

// str and arr proto is Object Therefore we added a common method in Object so both can use
function getDataType (self) {
    return Object.prototype.toString.call(self).slice(8, -1).toLowerCase();
}

Object.prototype.findTrimmedResultObj = function () {
    let self = this;
    if (getDataType(self)==='string') {
        return self.trim();
    }
    if(getDataType(self)==='array') {
        return self.map((word) => {
            return word.trim();
        })
    }
} 

// ------------------------------------------------------------------------------------------

//  How to add/insert our own object in between prototype chain
//  before:  obj1 -> Object.prototype -> null


let obj1 = {
    name: 'vishnu'
}

let obj2 = {
    name: 'aman'
}

obj2.__proto__ = obj1; //   1. using __proto__ (not good for JS engine code optimization)

let obj3 = {
    name: 'shiva'
}

Object.setPrototypeOf(obj3, obj2); //   2. using setPrototypeOf (modern method)

let obj4 = Object.create(obj3, { // 3. using Object.create (modern method)
    name: {
        value: 'eshwar'
    }
})

let obj5 = {
    name: 'middle'
}

//  now:   obj4 -> obj3 -> obj2 -> obj1 -> Object.prototype -> null

// ------------------------------------------------------------------------------------------

//  insert obj5 in between
//  before:   obj4 -> obj3 -> obj2 -> obj1 -> Object.prototype -> null

Object.setPrototypeOf(obj3, obj5);
Object.setPrototypeOf(obj5, obj2);


//  now:   obj4 -> obj3 -> obj5 -> obj2 -> obj1 -> Object.prototype -> null


// ------------------------------------------------------------------------------------------

