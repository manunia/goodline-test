/**
 * Created by Admin on 19.06.2019.
 */

$("#send").click(function () {
    var tel = $('#telephone').val();
    var obj = {
        "tel": tel
    };
    var data = JSON.stringify(obj);

    $.ajax({
        url: "https://api.myjson.com/bins",
        type: "POST",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var json = JSON.stringify(data);
            console.log(json);
            alert(json);
        }
    });
});

$(function () {
    $("#telephone").mask("+7(999)999-9999", {placeholder: "+7 ___ ___ ____"});
})