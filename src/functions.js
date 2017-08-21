function anotherFunction(param) {
    console.log('Message from external module ' + param)
}

function hello(param) {
    console.log('Hello ' + param);
    //console.log('Hello ' + param);
}

export { anotherFunction, hello }