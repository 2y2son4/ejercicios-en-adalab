"use strict";

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};
adalaber1.showBio = function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
}
console.log(adalaber1.showBio());



//console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`);

const adalaber2 = {
    name: 'Katya',
    age: 83,
    job: 'mocatriz'
};

adalaber2.showBio = function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
}
console.log(adalaber2.showBio());

//console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`);