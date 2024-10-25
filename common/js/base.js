// ハンバーガーメニュー
$(".ham-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".ham-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

jQuery(function($){
	$(window).on('scroll', function(){
	  if ($(window).scrollTop() > 30) {
		$('.scrolldown4').fadeOut(400);
	  } else {
		$('.scrolldown4').fadeIn(400);
	  }
	});
  });
  
