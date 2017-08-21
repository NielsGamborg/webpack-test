import Vue from 'vue';
import _ from 'lodash';
import { hello, test, anotherFunction } from './functions.js';

import '../css/style.css';
import '../css/style2.css';


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
            someInput: '42'
        }
    },
    methods: {
        gogo: function(param) {
            console.log('Go: ', param);
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

test();
anotherFunction('Yeah');
hello('my friend');