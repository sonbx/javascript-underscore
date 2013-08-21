define( ['underscore'], function ( _ ) {

    function init() {

        var hits = [5, 35, 17, 1000, 345, 300, 2, 900];


        var hits2 = [15, 56, 100, 102, 345, 301, 12, 900];


        console.log( _( hits ).min() );
        console.log( _( hits ).max() );
    }
    
    return init;
} );
