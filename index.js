/**
 * Created by azu on 2014/02/08.
 * LICENSE : MIT
 */

function Person(firstName, lastName) {
    if (firstName != null) {
        this.firstName = firstName;
    }
    if (lastName != null) {
        this.lastName = lastName;
    }
}
Person.prototype = {
    constructor : Person,
    firstName: '',
    lastName: '',
    getFullName: function () {
        return this.lastName + ' ' + this.firstName;
    }
};

var ukyo = new Person('右京', '杉下');
var toru = new Person('亨', '甲斐');
ukyo.getFullName(); // => "杉下 右京"
toru.getFullName(); // => "甲斐 亨"
ukyo.constructor; // => Person


// `Object.create`
var ukyo_o = Object.create(Person.prototype, {
    firstName:{
        value : "右京"
    },
    lastName:{
        value : "杉下"
    }
});
var toru_o = Object.create(Person.prototype, {
    firstName:{
        value : "亨"
    },
    lastName:{
        value : "甲斐"
    }
});

ukyo_o.getFullName(); // => "杉下 右京"
toru_o.getFullName(); // => "甲斐 亨"
ukyo_o.constructor; // => Person
