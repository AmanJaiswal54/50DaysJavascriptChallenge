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