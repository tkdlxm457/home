// getJSON(url, callBackFn)
// 날씨 데이터를 요청한다.
$.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?id=1835848&APPID=26e66815441c3a677bfc8d96bbfae95d&units=metric',
    function (data) {
        // 최저기온
        let $minTemp = data.main.temp_min;
        // 최고기온
        let $maxTemp = data.main.temp_max;
        // 현재온도
        let $cTemp = data.main.temp;
        // 날씨 아이콘
        let $wIcon = data.weather[0].icon;

        // 현재 scope가 달라서 그럼
        // window.alert('hi');

        $('.clowtemp').append($minTemp)
        $('.ctemp').append($cTemp)
        $('.chightemp').append($maxTemp)

        // template string을 사용해 img태그를 cicon태그의 자식태그로 넣는다.
        $('.cicon').append(`<img src = "http://openweathermap.org/img/wn/${$wIcon}@2x.png"/>`);
});