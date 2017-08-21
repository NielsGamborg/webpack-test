import Vue from 'vue';
import _ from 'lodash';
import { anotherFunction, hello } from './functions.js';

import '../css/style.css';
import Metal from '../img/metal.jpg'

//import without from 'lodash/without';

Vue.component('some-box', {
    props: ['someArray', 'someFilteredArray'],
    template: `
    <div id="ox">
        <h3>Go</h3>
        <input id="query" type="text" v-model="someInput" autofocus> 
        <button id="searchButton" v-on:click="gogo(someInput)">Go</button>
        <div id="ontainer">
            <div class="left">
                <p>Array</p>
                <ul>
                    <li v-for="item in someArray">{{item}}</li>
                </ul>
            </div>
            <div class="left">
                <p>Array filtered</p>
                <ul>
                    <li v-for="item in someFilteredArray">{{item}}</li>
                </ul>
            </div>
        </div>    
    </div>`,
    data: function() {
        return {
            someInput: ''
        }
    },
    created: function() {
        console.log('created')
    },
    methods: {
        gogo: function(param) {
            alert(param)
        }
    }
})

var app = new Vue({
    el: '#wrapper',
    data: {
        someArray: [2, 3, 5, 7, 11, 13, 13, 13, 17, 19],
        someFilteredArray: [],
    },
    methods: {
        testFunction: function() {
            this.someFilteredArray = _.without(this.someArray, 13, 5);
        },


    },
    created: function() {
        this.testFunction();
    }
});






function test() {
    var myArray = [1, 2, 3, 5, 7, 11, 13]
    var myArrayFiltered = _.without(myArray, 1, 2);
    console.log('myArray: ', myArray);
    console.log('myArrayFiltered: ', myArrayFiltered);


    var myImage = new Image();
    myImage.src = Metal;
    myImage.height = 150;

    document.getElementById('image').appendChild(myImage);

}

test();
anotherFunction('Yeah');
hello('Jens Hansen');