function navbarFix($window) {
    var $win = angular.element($window);

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var offsetTop = element.offset().top - 115;

            $win.on('scroll', function(e) {
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass('fixed-top');
                } else {
                    element.removeClass('fixed-top');
                }
            });
        }
    };
}
