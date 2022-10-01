const { log5, QS, QS1, o2j } = sleepless;
const L = console.log;
(function() {
    window.onload = () => {
        const less = function( el ) {
            const div = el.moreless_div;
            div.innerText = "Read more ...";
            el.style.height = "100px";
            el.collapsed = true;
            el.classList.add( "collapsed" );
        };

        const more = function( el ) {
            const div = el.moreless_div;
            el.style.height = el.scrollHeight + "px";
            div.innerText = "Read less ...";
            
            el.collapsed = false;
            el.classList.remove( "collapsed" );
        };

        const els = QS( ".moreLess" );
        els.forEach( el => {

            const div = document.createElement( "div" );
            div.classList.add( "toggle" );
            el.moreless_div = div;
            
            el.appendChild(div);

            less( el );

            div.onclick = () => {
                if( el.collapsed ) {
                    more( el );
                } else {
                    less( el );
                }
            }

        } );
    };
})();
