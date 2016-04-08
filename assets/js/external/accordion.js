$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-chevron-right").addClass("fa-chevron-down");
});

//The reverse of the above on hidden event:

$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-right");
});
