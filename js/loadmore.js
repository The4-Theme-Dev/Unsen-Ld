$(function(){
    $("tr").slice(0, 10).css("display", "table-row").addClass("tb-show").removeClass("tb-hidden"); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $(".tb-hidden").slice(0, 10).css("display", "table-row").addClass("tb-show").removeClass("tb-hidden");// select next 10 hidden divs and show them
        if($(".tb-hidden").length == 0){ // check if any hidden divs still exist
            $("#load").hide();
        }
    });
});
