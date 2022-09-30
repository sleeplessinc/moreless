const { log5, QS, QS1, o2j } = sleepless;
const L = console.log;
(function() {
    
    const COLLAPSED_LINES = 3;

    window.onload = evt => {

        const els = QS( ".moreless" );
        els.forEach( el => {

            L( el );

            el.collapsed = true;
            el.styles.height = ""+COLLAPSED_LINES+"em";

            el.onclick = evt => {
                if( el.collapsed ) {
                    // expand it
                    el.collapsed = false;
                } else {
                    // collapse it
                    el.collapsed = true;
                }
            }

        } );
    };

})();

