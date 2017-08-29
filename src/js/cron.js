let cron = require('node-cron');
import { parrot } from './functions.js'

let secondlyCron = '*/5 * * * * *';
let minutelyCron = '* * * * *';
let dailyCron = '0 17 8 * * *';
let weeklyCron = '0 48 7 * * 7';
//let monthlyCron = '0 48 7 * 1 *';


/* Validate that the given string is a valid cron expression. */
let valid = cron.validate(dailyCron);
console.log('cron string: ' + dailyCron + 'validates: ', valid);

/* Run Cron jobs */
cron.schedule(secondlyCron, function() {
    parrot();
});


//task.start();




/* Documentation 

┌────────────── second (optional)
│ ┌──────────── minute
│ │ ┌────────── hour
│ │ │ ┌──────── day of month
│ │ │ │ ┌────── month
│ │ │ │ │ ┌──── day of week
│ │ │ │ │ │
│ │ │ │ │ │
* * * * * *

second 	0-59
minute 	0-59
hour 	0-23
day of month 	1-31
month 	1-12 (or names)
day of week 	0-7 (or names, 0 or 7 are sunday)

cron.schedule('1,2,4,5 * * * *', function(){
  console.log('running every minute 1, 2, 4 and 5');
});

cron.schedule('1-5 * * * *', function(){
  console.log('running every minute to 1 from 5');
});

let cron = require('node-cron');
 
let task = cron.schedule('* * * * *', function() {
  console.log('immediately started');
}, false);
 
task.start();

*/