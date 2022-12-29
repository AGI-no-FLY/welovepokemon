'use strict';


//spグローバルナビゲーション

//ドロップダウンの設定を関数でまとめる
		$(".has-child>a").on('click', function() {
			var parentElem =  $(this).parent();
			$(parentElem).toggleClass('active');
			$(parentElem).children('ul').stop().slideToggle(500);
			return false;
		});


// ページ内リンク

$('.page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); 
    var pos = $(elmHash).offset().top; 
    $('body,html').animate({scrollTop: pos}, 500); 
    return false;
  });
