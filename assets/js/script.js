var hour = 7;
var tenet = moment("7:00 am", "h:mn a")
 $.each($(".row"), function() {
     $(this).find(".hour").text(tenet.add(1, "h").format("h:mn a"))
     .attr("hour-id", hour);
     $(this).find("#hTask")
     .attr("hour-id", hour);
     $(this).find(".saveBtn")
     .attr("hour-id", hour++);
 })
 $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var textArea = $(this).parent().find('textarea').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, textArea);
  });


var saveActivities = function() {
    localStorage.setItem("activities", JSON.stringify(activities));
}
 var loadActivities = function() {
    activities = JSON.parse(localStorage.getItem("activities"));
    if(!activities) {
        activities = {
            7: {},
            8: {},
            9: {},
            10: {},
            11: {},
            12: {},
            1: {},
            2: {},
            3: {},
            4: {},
            5: {},
            6: {}
        };
    }
    $.each(activities, function(index, value) {
        var hour = value.time;
        var activity = value.activity;
        var hourMatch = $(`.hour[hour-id=${hour}]`).siblings("#hTask");
        hourMatch.text(activity); 
    });
}
loadActivities();
setInterval(function(){
    $("#currentDay").text(moment().format("lll")); 
    var hObj = parseInt(moment().format("H"));
    $.each($(".hTask"), function() {
        var hourId = parseInt($(this).attr("hour-id"));
        if (hObj > hourId) {
            $(this).addClass("past");
        } else if (hourId === hObj) {
            $(this).addClass("present");
            
        } else if (hObj < hourId) {
            $(this).addClass("future");
        }
    });
    console.log("checked")
}, 1000);

$('.txtAr0800').val(localStorage.getItem('8'));
$('.txtAr0900').val(localStorage.getItem('9'));
$('.txtAr1000').val(localStorage.getItem('10'));
$('.txtAr1100').val(localStorage.getItem('11'));
$('.txtAr1200').val(localStorage.getItem('12'));
$('.txtAr1300').val(localStorage.getItem('1'));
$('.txtAr1400').val(localStorage.getItem('2'));
$('.txtAr1500').val(localStorage.getItem('3'));
$('.txtAr1600').val(localStorage.getItem('4'));
$('.txtAr1700').val(localStorage.getItem('5'));
$('.txtAr1800').val(localStorage.getItem('6'));

$('.clearBtn').on('click', function (event) {
    event.preventDefault();

    if (confirm ('Are you sure you want to clear the entire form? This cannot be undone!') === true) {
    $('#8 .txtAr0800').val('');
    $('#9 .txtAr0900').val('');
    $('#10 .txtAr1000').val('');
    $('#11 .txtAr1100').val('');
    $('#12 .txtAr1200').val('');
    $('#1 .txtAr1300').val('');
    $('#2 .txtAr1400').val('');
    $('#3 .txtAr1500').val('');
    $('#4 .txtAr1600').val('');
    $('#5 .txtAr1700').val('');
      localStorage.clear();
    } else {
      return;
    }
  });
