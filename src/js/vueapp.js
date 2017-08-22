export default{
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
}