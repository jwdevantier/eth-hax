# eth-hax

Hey guys - we had to leave early so here's a small, somewhat limited client.
PLEAAASE don't take this as a best-practice JS front-end or back-end :D

## scripts.js -- the javascript front-end

### How we switch pages (sorta)
We have a few pages - deposit, withdraw and so on. THis is implemented like so:


```
$("#nav li").on('click', function() {
        var content = document.getElementById(this.id + "-content")
        $(".container").css('display', 'none');
        $(content).css('display', 'initial');
    })
```

This part is used to change which div block is shown in the HTML page.

Every "sub-page" on the HTML page has an id, e.g. `deposit-content` - that's why
we concatenate the id from the list entry (`li`) we click on (e.g. 'deposit') with
'-content'.

We then hide all the `div`'s before explicitly showing (display: initial) the
div corresponding to the `li` you just clicked on.

### What happens when you submit a form

See `scripts.js` and find the entry `$(".form").submit(function(e)`, this is the
code that is invoked whenever a form is submitted.

We treat the form as an array of elements (using `serializeArray`) and loop through it,
adding each element's name and value as an entry in the javascript object `values`.

Finally, each form in the `form.html` page is given a unique id, `deposit`, `withdraw`
and so on, and we get the id of the submitted form, store it in `typeOfForm` which
we branch on to determine which function to run for sending the request to the backend.

The functions, `deposit`, `withdraw` and `check` are defined. But only `deposit` is
implemented to send anything back to the backend.
To help with this, we implemented a function, `Request` which takes a HTTP verb
(GET, POST, ...) and some data (generally all the values of the form!) and some
callback function to run in event of the request being a success.


Super simple, written in JQuery.

## run.js -- the Node backend server


`run.js` houses a simple node HTTP backend server - we tried without any
libraries but it was too complex so it uses [ExpressJs](https://expressjs.com/).

Note, expressJS generally is used to make it easier to handle requests AND have
sensible routing (that is, separate functions to handle requests on separate routes)
but we already had a half-working solution so we stuck with a single request handling
function.

The server will listen on `8080` - deposit/withdraw requests (where a data is sent to
the server via HTTTP POST) eventually branches out to either `deposit` or `withdraw`.

**NOTE** you have to expand these functions to return some form of response - if not,
your browser will think that the request timed out!!

**NOTE**: ethJS is configured to talk to a local etherreum network - change to use testnet, for example.

Next steps: use Eth-JS :)
