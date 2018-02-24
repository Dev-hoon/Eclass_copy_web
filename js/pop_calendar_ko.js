/*
 * jquery를 이용한 달력팝업
 * jquery.js와 jquery-ui.js와 같이 사용해야 함.
 */
$.datepicker.setDefaults({

    //monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
    monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    showMonthAfterYear:true,
    showOn: "focus",   // focus, button, both
    showAnim: "slideDown", // blind, clip, drop, explode, fold, puff, slide, scale, size, pulsate, bounce, highlight, shake, transfer
    showOptions: {},
    duration: 200,
    dateFormat: 'yy.mm.dd',
    //buttonImage: "/ilos/images/icon/calendar.gif",
    buttonText: "달력",
    buttonImageOnly: true,
    changeMonth:true,changeYear:true,
    onSelect: function(date) {
        var date_arr = date.split('-');
        if (date_arr.length==3){
            var date_str = date_arr[0]+'년 '+date_arr[1]+'월 '+date_arr[2]+'일';
            $("#span_in_last_date").html(date_str);
        }
    }
});

/*
$.datepicker.setDefaults({
    //monthNames:['1월','2월','3월','4월','5월','6월','7 월','8월','9월','10월','11월','12월'],
    //monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
    //dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNamesShort:['1월','2월','3월','4월','5월','6 월','7월','8월','9월','10월','11월','12월'],
    showMonthAfterYear:true,
    dateFormat: 'yy.mm.dd',
    buttonText: "달력"
  });
*/

//이미지에 달력 팝업을 넣는다.
function addCalendar(id) {
    $("#"+id).datepicker();
}