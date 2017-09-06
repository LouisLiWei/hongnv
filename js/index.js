$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            $('.slide1 a').attr('href', data[0].url);
            $('.slide1 img').attr('src', data[0].img);
            $('.slide1 p').html(data[0].title);
            $('.slide2 a').attr('href', data[1].url);
            $('.slide2 img').attr('src', data[1].img);
            $('.slide2 p').html(data[1].title);
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/1',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            var res = template('add', {
                data: data
            });
            $('#home ul').html(res);

        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/2',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            var res = template('add2', {
                data: data
            });
            $('#profile ul').html(res);

        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/3',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            var res = template('add3', {
                data: data
            });
            $('#messages ul').html(res);

        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/4',
        datatype: 'json',
        success: function (data) {
            // console.log(data);
            var res = template('add4', {
                data: data
            });
            $('#settings ul').html(res);

        }
    })

    $('.head-menu').click(function () {
        $('.menu-list').slideToggle(500);
    })
})