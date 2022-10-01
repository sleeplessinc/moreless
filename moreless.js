(function() {

    const toArray = function( coll ) {
        let arr = [];
        for(let i = 0; i < coll.length; i++) {
            arr.push( coll[ i ]);
        }
        return arr;
    };

    const QS = function( qs ) {
        return toArray( document.querySelectorAll( qs ) );
    };

    window.onload = () => {

        const less = function( el ) {

            const div = el.moreless_div;
            div.style.opacity = "0";
            div.innerText = "▼ Read more";

            //el.classList.add( "collapsed" );
            el.style.height = "8em";
            el.style.paddingBottom = "0em";

            el.collapsed = true;
            setTimeout( () => { div.style.opacity = "1.0"; }, 200 );
        };

        const more = function( el ) {
            const div = el.moreless_div;
            div.style.opacity = "0";
            div.innerText = "▲ Read less";

            //el.classList.remove( "collapsed" );
            el.style.height = el.scrollHeight + "px";

            el.collapsed = false;
            setTimeout( () => { div.style.opacity = "1.0"; }, 200 );
        };

        const els = QS( ".moreLess" );
        els.forEach( el => {
            
            el.style.position = "relative";
            el.style.transition = "all 0.25s ease-in-out";
            el.style.border = "dashed 1px lightgray";
            el.style.overflow = "hidden";
            el.style.paddingBottom = "2em";
            el.style.height = "default";

            const div = document.createElement( "div" );

            div.style.background = "linear-gradient( rgba(255,255,255,0.1), rgba(255,255,255,0.9), rgba(255,255,255,1.0))";
            div.style.padding = "2em 1em 0.5em 0";
            div.style.color = "teal";
            div.style.cursor = "pointer";
            div.style.position = "absolute";
            div.style.width = "100%";
            div.style.bottom = "0";
            div.style.right = "0";
            div.style.border = "dashed 1px #f0f";
            div.style.textAlign = "right";

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
