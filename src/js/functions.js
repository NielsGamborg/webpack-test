import Bee from '../img/bee.jpg'

function hello(param) {
    console.log('Hello ' + param);
    //console.log('Hello ' + param);
}


function test() {
    var myArray = [1, 2, 3, 5, 7, 11, 13]
    var myArrayFiltered = _.without(myArray, 1, 2);
    console.log('myArray: ', myArray);
    console.log('myArrayFiltered: ', myArrayFiltered);


    var myImage = new Image();
    myImage.src = Bee;
    myImage.height = 150;

    document.getElementById('image').appendChild(myImage);

}

function anotherFunction(param) {
    console.log('Message from external module ' + param)
}

function parrot() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    console.log('Hello Hello Hello', minutes);
}


export { hello, test, anotherFunction, parrot }