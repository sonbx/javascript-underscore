( function ( ) {
    "use strict";

    var loader = new Script( "lib/requirejs/require.min.js" );

    loader.onload = function ( ) {

        require.config( {
            baseUrl: ".",
            paths: {
                'underscore': 'lib/underscore/underscore-min'
            },
        } );

        require( ["app/main"], function ( main ) {
            console.log( "main" );
            main();
        } );
    };
} )();