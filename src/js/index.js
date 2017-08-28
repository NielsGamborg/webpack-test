import Vue from 'vue';
import Somebox from './somebox.js';
import Vueapp from './vueapp.js';

import _ from 'lodash';
import { hello, test, anotherFunction } from './functions.js';
import blah from './cron.js';

import '../css/style.css';
import '../css/style2.css';


//import without from 'lodash/without';

Vue.component('some-box', Somebox)
new Vue(Vueapp);

test();
anotherFunction('Yeah');
hello('my friend');
//task.start();