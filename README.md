
# moreless

So this thing just lets you make an existing HTML element expandable with a "read more" sort of widget.

You include the moreless.js file in your page, and then call:

    moreless( selector, options )

and it goes out and finds any elements that match the selector, and sets them up to be expandable.

For example:

    window.onload = function() {
        moreless( ".moreless", { prompt_color: "blue" } );
    }

It's not the most amazing thing you've ever seen, but it's definitely something that you've seen.

Open test.html in a browser to see how it works.


## options

Default options:

    {
        prompts: [ "▼", "▲" ],
        prompt_color: "teal",
        gradient: "linear-gradient( #ffffff22, #ffffffdd, #ffffffff, #ffffffff )",
    }

You can pass in an object that will override any of the defaults


