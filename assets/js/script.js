var hour = 7;
var tenet = ("7:00 am", "h:mn a")
 $.each($(".row"), function() {
     $(this).find(".hour").text(tenet.add(1, "h").format("h:mn a"))
     .attr("hour", hour);
     $(this).find("#hTask")
     .attr("hour", hour);
     $(this).find(".saveBtn")
     .attr("hour", hour++);
 }

