$(function(){
	//veiwport
	$(window).on("load resize", function() {
		detection();
		getViewports();
	});

	//scroll
	var headerFix = $('#header').outerHeight(),
		gnbScrollTop = 0,
		delta = 80;
	$(window).on("load scroll", function(e) {
		var st = $(this).scrollTop();

		scrollCheck();
		if (Math.abs(gnbScrollTop - st) <= delta) return;

		//header Tix
		if (st > headerFix) {
			$("#header").addClass("fixed");
			$("#content").addClass("header-fixed");
		} else {
			$("#header").removeClass("fixed");
			$("#content").removeClass("header-fixed");
		}

		gnbScrollTop = st;
	});

	$('.overlay .btn-close, .overlay .confirm').on('click', function(e) {
		e.preventDefault();
		var target = $(this).closest('.overlay');
		modalClose(target);
	});

	$('.btn.open-pop').on('click', function(e) {
		var pTag = $(this).prop('tagName');
		if (pTag == 'A'){
			var target = $(this).attr('href');
		} else if (pTag == 'BUTTON'){
			var target = $(this).attr('pop-target');
		}
		modalOpen(target);
	});

	//TAB
	tabLink();


	AOS.init({
		easing: 'ease-out-back',
		duration: 1500,
	});

	// 선택완료/선택하기
    $('.player-box .btn').on('click',function(e){
    	e.preventDefault();
	    if(!$(this).hasClass('gold')){
	       $(this).addClass('gold').removeClass('black').text('선택완료');
	    }else{
	       $(this).removeClass('gold').addClass('black').text('선택하기');
	    }

	})

    // 더보기
    $('.more-wrap .btn.more02').on('click', function(e){
    	e.preventDefault();
    	$(this).parent().addClass('active');
    });
  	$('.more-wrap .state .btn.close02').on('click', function(e){
    	e.preventDefault();
		$(this).parents('.more-wrap').removeClass('active');
  	})

  	// 추천하기 버튼
  	$('.article-primary .btn-area .btn.recommend').on('click', function(){
  		if($(this).hasClass('bdr-grey')){
	  		$(this).removeClass('bdr-grey');
	  		$(this).addClass('gold');
	  		$(this).children('.ico').addClass('active');
  		} else{
  			$(this).addClass('bdr-grey');
	  		$(this).removeClass('gold');
	  		$(this).children('.ico').removeClass('active');
  		}
  	});

  	// 검색 텍스트 삭제
	$('.input-search').keyup(function(){
		$(this).val() != '' ? $('.input.search .btn.delete').removeClass('hide') : $('.input.search .btn.delete').addClass('hide');
	})
	$('.input.search .btn.delete').click(function(){
		$('.input-search').val('');
		$(this).addClass('hide')
	})

	//파일명 삭제
	$('.input-file .btn.delete').on('click', function(){
		$(this).parent().parent().hide();
	});

})

//tabLink
function tabLink() {
	$('.tabs > li a, .tabs > li button').each(function(){
		var tabTarget=$(this).attr('href');
		$(this).click(function(e){
			if($(this).parents().hasClass('flex')){
				$('html, body').animate({
		        scrollTop: $(this).parents('.tabs').offset().top - 20 + "vw"}, 100);
			}
			e.preventDefault();
			$(this).parent('li').addClass('current');
			$(this).parent('li').siblings('li').removeClass('current');
			$(tabTarget).addClass('active').siblings('.tab-content').removeClass('active');
		});
	});
}

// modalOpen
function modalOpen(popId){
	$(popId).addClass("active");
	$('body').addClass("modal-opened");
}
// modalClose
function modalClose(popId){
	$(popId).removeClass("active");
	$('body').removeClass("modal-opened");
}

//accordion
function accordion(targetN) {
	$('.js-accordion-switche').click(function(e) {
		e.preventDefault();

		var container = $(this).parent();
		var slideContent = $(container).children('.js-accordion-content');

		if ($(container).hasClass('active')){
			accordionClose();
		} else {
			if(targetN == 1){
				siblingsClose();
			}
			accordionOpen();
		}

		function accordionOpen() {
			$(container).addClass('active');
			$(slideContent).slideDown(300);
		}

		function accordionClose() {
			$(container).removeClass('active');
			$(slideContent).slideUp(300);
		}

		function siblingsClose() {
			$(container).siblings().removeClass('active');
			$(container).siblings().children('.js-accordion-content').slideUp(300);
		}
	});
}

//getViewports
function getViewports() {
	var windowWidth = $(window).width(),
		windowHeight = $(window).height(),
		headerHeight = $('#header').height(),
		navHeight = $('#menu').height(),
		conHeight = windowHeight - navHeight - navHeight;

	if(windowWidth > 750) {
		$('html').addClass('is-desktop').removeClass('is-mobile');
	} else {
		$('html').addClass('is-mobile').removeClass('is-desktop');
	}

	if ($('html').hasClass('is-mobile')){
		if ($('#content').hasClass('login')){
			$('#content').css({'min-height': windowHeight - headerHeight});
		} else{
			$('#content').css({'min-height': conHeight});
		}
	}
}

//detection
function detection() {
	var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
		browser;
	if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
		browser = "ie";
	} else {
		browser = ua[1].toLowerCase();
	}
	$("html").addClass('is-'+browser);

	if (browser == "safari") {
		$('.input-text, textarea').bind('focus',function() {
			$('html').addClass('opened-keyboard');
		});
		$('.input-text, textarea').bind('blur', function() {
			$('html').removeClass('opened-keyboard');
		});
	}

	var is_iPad = navigator.userAgent.match(/iPad/i) != null;
	function is_iPhone_or_iPod(){
		return navigator.platform.match(/i(Phone|Pod))/i)
	}
	if (is_iPad) {
		$('html').addClass('is-ipad');
	}
}

//scrollCheck
function scrollCheck() {
	var winsc = $(this).scrollTop();
	if (winsc == 0) {
		$("body").addClass("scroll-zero").removeClass("scroll-has");
	} else {
		$("body").addClass("scroll-has").removeClass("scroll-zero");
	}
}


// 파일 찾기
function openfileDialog() {
    $("#fileLoader").click();
}

// number maxlength
function maxLengthCheck(object){
	if (object.value.length > object.maxLength){
	  //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
	  object.value = object.value.slice(0, object.maxLength);
	}
}