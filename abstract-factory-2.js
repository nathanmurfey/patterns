/*

Abstract Factory Design Pattern

Intent -    interface for creating families without concrete classes
            many possible platforms and the construction of a suite of products.
            the new operator considered harmful

Factory object has the responsiblity for providing creation services for the platform family.
This makes changing product families easy because the class of the factory appears only once.
*you can replace the entire family by instantiating a different instance of the factory.

define a factory method per product each with a new operator

Case :

take different models of cars, they all have to have doors, hoods and wheels made - just different types

1. is platform independence and creation services the current source of pain
2. map out a matrix of platforms versus products
3. Define a factory interface that consists of a factory method per product.
4. Define a factory derived class for each platform that encapsulates all references to the new operator.
5. The client should retire all references to new and use the factory methods to create the product objects.

*/

function Employee(name) {
    this.name = name;

    this.say = function() {
        log.add("I am employee " + name);
    };
}

function EmployeeFactory() {
    
    this.create = function(name) {
        return new Employee(name);
    }

}

function Vendor(name) {
    this.name = name;

    this.say = function () {
        log.add("I am vendor " + name);
    }
}

function VendorFactory() {
    
    this.create = function(name) {
        return new Vendor(name);
    }
}

// helper method
var log = (function() {
    var log = "";
    
    return {
        add: function (msg) {log += msg + "/n";},
        show: function () {alert(log); log = "";}
    }
})();