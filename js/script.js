jQuery(function($) {
//
// 変数を定義
//------------------------------------
	var $body = $('body'),
		$header = $('.l-header'),
		$headerHeight = $header.outerHeight(),
		$menuButton = $('.l-menu__button'),
		$headerNav = $('.l-header__nav'),
		desktopMode = ($menuButton.css('display') != 'none');
		function headerHeight() {
			$headerHeight = $header.outerHeight();
			return $headerHeight;
		}

//
// viewport resize
//-----------------------------------
$(window).on('resize orientationchange', function() {
	if ($menuButton.css('display') == 'none') {
		if (!desktopMode) {
			desktopMode = true;
			$('head').find('meta[name="viewport"]').attr('content', 'width=1240');
		}
	} else {
		if (desktopMode) {
			desktopMode = false;
			$('head').find('meta[name="viewport"]').attr('content', 'width=device-width,initial-scale=1,user-scalable=yes');
		}
	}
	$(this).trigger('scroll');
}).trigger('resize');


//
// pagetop
//------------------------------------
	var $pagetop = $('#pagetop');
	$pagetop.find('> a').click(function() {
		$('body,html').stop().animate({scrollTop: 0}, 500);
		return false;
	});

//
// スクロール
//------------------------------------
	$(window).on('scroll', function() {
		pagereserve()
		scrollCurrent();
	});

	function pagereserve() {
		if( $('body').hasClass('index') ) {
			var scrollTop = $(this).scrollTop();
			var $pagereserve = $('#js-reservation'),
			mainvisualHeight = $('.c-mainvisual').outerHeight(),
			footerHeight = $('.l-footer').outerHeight(),
			innerHeight = $(window).height();
			if (scrollTop > 200) {
				$pagereserve.addClass('js-fixed');
			} else {
				$pagereserve.removeClass('js-fixed');
			}
			if (scrollTop > $body.height() - innerHeight - footerHeight) {
				$pagereserve.addClass('is-footer');
			} else {
				$pagereserve.removeClass('is-footer');
			}
		}
	}

// 
// スムーススクロール関係js ここから
//------------------------------------
	// ページ内リンク要
	$('a[href^="#"], a[href*="#"], area[href^="#"]').not('a[href="#"], area[href="#"]').not('[href="#0"]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top - headerHeight();
				$('body,html').stop().animate({
					scrollTop: targetOffset
				}, 500);
				return false;
			}
		}
	});
	$(window).on('load', function (){
		if (location.hash) {
			var targetOffset = $(location.hash).offset().top - $headerHeight;
			$('body,html').stop().animate({
				scrollTop: targetOffset
			}, 0);
		}
	})

	//
	if( $('body').hasClass('reserve_index') ) {
		$('.js-count').change(function(){
			jsCount();
		})
		$(window).on('load scroll', function (){
			jsCount();
		})
	}

	function jsCount() {
		var count = $('.js-count').val();
		if(count == 1) {
			$('.js-countShow.--count1').show();
			$('.js-countShow.--count2').hide();
			$('.js-countShow.--count3').hide();
		} else if (count == 2){
			$('.js-countShow.--count1').show();
			$('.js-countShow.--count2').show();
			$('.js-countShow.--count3').hide();
		} else if (count == 3){
			$('.js-countShow.--count1').show();
			$('.js-countShow.--count2').show();
			$('.js-countShow.--count3').show();
		} else {
			$('.js-countShow.--count1').hide();
			$('.js-countShow.--count2').hide();
			$('.js-countShow.--count3').hide();
		}
	}

});