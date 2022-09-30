const { log5, QS, QS1, o2j } = sleepless;
const L = console.log;
(function() {
    window.onload = evt => {

        const LESS_LINES = 8;

        const slide = function( el, target, cb ) {
            const current = el.clientHeight;
            const increment = ( target - current ) / 10;
            const remainder = ( target - current ) % 10;
            let tid = setInterval( () => {
                const next = el.clientHeight + increment
            }, 10 );
        };

        const less = function( el ) {

            el.style.overflow = "hidden";
            el.style.height = ""+LESS_LINES+"em";

            const div = el.moreless_div;
            div.remove( div );
            div.html( "Read more ..." );
            el.prepend( div );
            div.style.top = ((el.clientHeight - div.clientHeight) + 1) + "px";

            el.lessened = true;

        };

        const more = function( el ) {
            el.style.height = el.orig_height;
            el.style.overflow = "default";

            const div = el.moreless_div;
            div.remove( div );
            div.html( "Read less ..." );
            el.appendChild( div );
            div.style.top = "0";

            el.lessened = false;
        };

        const els = QS( ".moreless" );
        els.forEach( el => {

            const div = document.createElement( "div" );
            div.style.cursor = "pointer";
            div.style.fontFamily = "sans-serif";
            div.style.fontWeight = "bold";
            div.style.color = "teal";
            div.style.background = "linear-gradient(0deg, white, rgba(255,255,255,0.9), transparent)";
            div.style.position = "relative";
            div.style.padding = "2.0em 2vw 0.0em 2vw"
            el.moreless_div = div;

            el.orig_height = el.style.height;
            el.style.transition = "all 0.5s ease-out 0s";

            less( el );

            div.onclick = evt => {
                if( el.lessened ) {
                    more( el );
                } else {
                    less( el );
                }
            }

        } );
    };
})();

