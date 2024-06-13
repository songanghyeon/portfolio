$(document).ready(function() {
    $('.img').hover(
        function() {
            $('.container4').addClass('dim'); // 전체 그리드에 dim 클래스를 추가
        },
        function() {
            $('.container4').removeClass('dim'); // 전체 그리드에서 dim 클래스를 제거
        }
    );
});

$(document).ready(function() {
    $('.item').hover(
        function() {
            $('.wrapper').addClass('dim'); // 전체 그리드에 dim 클래스를 추가
        },
        function() {
            $('.wrapper').removeClass('dim'); // 전체 그리드에서 dim 클래스를 제거
        }
    );
});
