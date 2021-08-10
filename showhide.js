$(".btn").click(function() {
    $(this).next(".smallContents").stop().slideToggle(1100);
    $(this).next(".smallContents").siblings(".smallContents").slideUp(1100);
});