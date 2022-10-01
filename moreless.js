const { log5, QS, QS1, o2j } = sleepless;
const L = console.log;
(function() {
    window.onload = () => {

        const less = function( el ) {
            const div = el.moreless_div;
            div.style.opacity = "0";
            div.innerText = "▼ Read more";
            el.style.height = "8em";
            el.collapsed = true;
            el.classList.add( "collapsed" );
            setTimeout( () => { div.style.opacity = "1.0"; }, 200 );
        };

        const more = function( el ) {
            const div = el.moreless_div;
            div.style.opacity = "0";
            el.style.height = el.scrollHeight + "px";
            div.innerText = "▲ Read less";
            el.collapsed = false;
            el.classList.remove( "collapsed" );
            setTimeout( () => { div.style.opacity = "1.0"; }, 200 );
        };

        const els = QS( ".moreLess" );
        els.forEach( el => {

            const div = document.createElement( "div" );
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
