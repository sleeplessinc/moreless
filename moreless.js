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
        gradient: "#cccccccc",
    };

    globalThis.moreless = function( sel = ".moreless", opts = {} ) {

        opts = Object.assign( {}, DEF_OPTS, opts );

        const less = function( el ) {
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 0 ];
            div.style.background = opts.gradient; //"linear-gradient( rgba(255,255,255,0.1), rgba(255,255,255,0.9), rgba(255,255,255,1.0))";
            el.style.height = "8em";
            //el.style.paddingBottom = "0em";
            el.collapsed = true;
        };

        const more = function( el ) {
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 1 ];
            div.style.background = "transparent";
            el.style.height = el.scrollHeight + "px";
            //el.style.paddingBottom = "0.0em";
            el.collapsed = false;
        };

        const els = QS( sel );
        els.forEach( el => {

            let old_opacity = el.style.opacity;
            el.style.opacity = 0;
            
            el.style.position = "relative";
            el.style.transition = "height 0.25s ease-in-out";
            //el.style.border = "dashed 1px lightgray";
            el.style.overflow = "hidden";
            //el.style.paddingBottom = "2em";
            el.style.height = "default";

            const div = document.createElement( "div" );

            div.style.padding = "2em 1em 0.5em 0";
            div.style.color = opts.prompt_color;
            div.style.cursor = "pointer";
            div.style.position = "absolute";
            div.style.width = "100%";
            div.style.bottom = "0";
            div.style.right = "0";
            //div.style.border = "dashed 1px #f0f";
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

            el.style.opacity = old_opacity;

        } );
    };

    console.log( "moreless -- Copyright 2022 Sleepless Inc. All Rights Reserved" );

})();
