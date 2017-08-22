export default {
    props: ['someArray', 'someFilteredArray'],
    template: `
    <div id="ox">
        <h3>Go</h3>
        <p>
            <input id="query" type="text" v-model="someInput" autofocus> 
            <button id="searchButton" v-on:click="go(someInput)">Go</button>
        </p>
        <p>
            <button id="searchButton" v-on:click="gogo(someInput)">Dice</button>
            {{ dice }}
        </p>
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
            someInput: '42',
            dice: ''
        }
    },
    methods: {
        gogo: function(param) {
            this.dice = Math.floor(Math.random() * 6 + 1);
        },
        go: function(param) {
            console.log(param);
        }
    }
}