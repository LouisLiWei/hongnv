$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gettopics',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            var res = template('lianzi', {
                data: data
            });
            $('.zhuanti ul').html(res);
        }
    })
})