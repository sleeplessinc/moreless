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
            el.style.height = "8em";
            el.collapsed = true;
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 0 ];
            div.style.background = opts.gradient;
            //div.style.position = "relative";
            setTimeout( () => {
                div.style.bottom = ( el.scrollHeight - el.clientHeight ) + "px";
            }, 260 );
        };

        const more = function( el ) {
            el.style.height = el.orig_height; //el.orig_height+"px"; //el.scrollHeight + "px";
            el.collapsed = false;
            const div = el.moreless_div;
            div.innerText = opts.prompts[ 1 ];
            div.style.background = "transparent";
            //setTimeout( () => {
                div.style.bottom = "0px"; //div.clientHeight + "px"; //div.orig_position; //"relative";
            //}, 260 );
        };

        const els = QS( sel );
        els.forEach( el => {

            //let old_opacity = el.style.opacity;
            //el.style.opacity = 0;

            //el.style.position = "relative";
            el.style.transition = "height 0.25s ease-in-out";
//el.style.border = "dashed 2px #f00";
            el.style.overflow = "hidden";
            //el.style.height = "default";

            const div = document.createElement( "div" );
            el.appendChild(div);

            //div.orig_position = div.style.position;
            //div.orig_background = div.style.background;

            //div.style.transition = "bottom 1.30s ease-in-out";
            div.style.padding = "1em 1em 0.5em 0";
            div.style.color = opts.prompt_color;
            div.style.cursor = "pointer";
            //div.style.position = "absolute";
            div.style.position = "relative";
            //div.style.width = "100%";
            div.style.bottom = "0";
            //div.style.right = "0";
//div.style.border = "dashed 2px #00f";
            div.style.textAlign = "right";
            div.innerText = opts.prompts[ 0 ];  // must do this so heights are correct

            el.moreless_div = div;

            el.orig_height = el.clientHeight + "px"; //el.style.height;
            

            less( el );

            div.onclick = () => {
                if( el.collapsed ) {
                    more( el );
                } else {
                    less( el );
                }
            }

            //el.style.opacity = old_opacity;

        } );
    };

    console.log( "moreless -- Copyright 2022 Sleepless Inc. All Rights Reserved" );

})();
