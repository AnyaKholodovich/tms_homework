'use strict'


// Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
// 	  Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных, 
// 	  значения придумайте сами). 

// - Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. Вызвать
// 	  данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.


function HouseBuilder (width, height, floors) {
    this.width = width;
    this.height = height;
    this.floors = floors;

};


let firstHouse = new HouseBuilder(12000, 2800, 2);
let secondHouse = new HouseBuilder(1500, 2780, 1);


HouseBuilder.prototype.calcArea = function(){
    this.totalArea = this.height * this.width * this.floors;
}

firstHouse.calcArea()
secondHouse.calcArea()


