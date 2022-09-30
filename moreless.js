const { log5, QS, QS1, o2j } = sleepless;
const L = console.log;
(function() {
    window.onload = evt => {

        const LESS_LINES = 8;

        const less = function( el ) {
            el.style.height = ""+LESS_LINES+"em";
            el.style.overflow = "hidden";

            const div = el.moreless_div;
            div.remove( div );
            el.prepend( div );
            //div.style.top = ""+(LESS_LINES - 1)+"em";
            div.style.top = ( (el.clientHeight - div.clientHeight) + 1 ) + "px";

            el.lessened = true;
        };

        const more = function( el ) {
            el.style.height = el.orig_height;
            el.style.overflow = "default";

            const div = el.moreless_div;
            div.remove( div );
            div.style.top = "0";
            el.appendChild( div );

            el.lessened = false;
        };

        const els = QS( ".moreless" );
        els.forEach( el => {

            const div = document.createElement( "div" );
            const style = div.style;
            style.fontFamily = "sans-serif";
            style.fontWeight = "bold";
            style.color = "teal";
            style.background = "linear-gradient(0deg, white, rgba(255,255,255,0.9), transparent)";
            style.position = "relative";
            style.padding = "2.0em 2vw 0.0em 2vw"
            div.html( "Read more ..." );
            el.moreless_div = div;

            el.orig_height = el.style.height;

            less( el );

            el.onclick = evt => {
                if( el.lessened ) {
                    more( el );
                } else {
                    less( el );
                }
            }

        } );
    };
})();

