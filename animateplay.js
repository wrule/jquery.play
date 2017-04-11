jQuery.fn.extend({
    play: function (css3, fun) {
        $(this).removeClass(css3)
               .addClass(css3)
               .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                   $(this).removeClass(css3);
                   fun();
               });
    }
});