$( document ).ready(function() {

    $("#nav li").on('click', function() {
        var content = document.getElementById(this.id + "-content")
        $(".container").css('display', 'none');
        $(content).css('display', 'initial');
    })

    var Request = function(method, data, cb) {
        
        const reqConf = {
            url: "http://localhost:8080",
            type: method || "GET",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var resp = JSON.parse(response)
                cb(resp)
            },
            error: function (xhr, status) {
                console.error("error", status, JSON.stringify(xhr, null, 2));
            }
        }

        if (method !== "GET") {
            reqConf['data'] = JSON.stringify(data)
        }

        $.ajax(reqConf);
    }

    var deposit = function(values) {
        Request("POST", values, function(rsp) {
            console.log(rsp)
        })
    }

    var withdraw = function(values) {
        alert("withdraw handler called - I am not implemented!")
    }

    var check = function(values) {
        alert("check handler called - I am not implemented!")
    }
    
    //triggered when "submit" is clicked - the form is sent along
    $(".form").submit(function(e) {
        e.preventDefault()

        var typeOfForm = $(this).attr('id')
        var values = {typeOfForm}
        $.each($(this).serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });

        switch (typeOfForm) {
            case "deposit": return deposit(values)
            case "withdraw": return withdraw(values)
            case "check": return check(values)
            default: return false
        }
    })

    // $("form").on('submit', function(e) {
    //     e.preventDefault()
    //     var data = {}
    //     $(this).each(function() {
    //         var input = $(this).find(":input")
    //         console.log(input)
    //         data[input.attr("name")] = input.val()
    //     })
    //     console.log(data)
    // })

});