import Vue from 'vue'

Vue.mixin({
    methods: {
        minLength(min) {
            return function(value) {
                if(value) {
                    return value.length >= min;
                } else {
                    return false;
                }
            }
        }
    }
});
