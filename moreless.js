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

    const DEF_OPTS = {
        prompts: [ "▼", "▲" ],
        prompt_color: "teal",
        gradient: "linear-gradient( #ffffff22, #ffffffdd, #ffffffff, #ffffffff )",
    };

    globalThis.moreless = function( sel = ".moreless", opts = {} ) {

        opts = Object.assign( {}, DEF_OPTS, opts );

        const less = function( el ) {
            el.style.height = "8em";
            el.collapsed = true;
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 0 ];
            div.style.background = opts.gradient;
            setTimeout( () => {
                div.style.bottom = ( el.scrollHeight - el.clientHeight ) + "px";
            }, 260 );
        };

        const more = function( el ) {
            el.style.height = el.orig_height;
            el.collapsed = false;
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 1 ];
            div.style.background = "transparent";
            div.style.bottom = "0px";
        };

        const els = QS( sel );
        els.forEach( el => {

            el.style.transition = "height 0.25s ease-in-out";
            el.style.overflow = "hidden";

            const div = document.createElement( "div" );
            el.appendChild(div);

            div.style.padding = "1em 1em 0.5em 0";
            div.style.color = opts.prompt_color;
            div.style.cursor = "pointer";
            div.style.position = "relative";
            div.style.bottom = "0";
            div.style.textAlign = "right";
            div.innerText = opts.prompts[ 0 ];  // must do this so heights are correct

            el.moreless_div = div;

            el.orig_height = el.clientHeight + "px";

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

    console.log( "moreless -- Copyright 2022 Sleepless Inc. All Rights Reserved" );

})();
