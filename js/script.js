// Event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi tujuan
	var tujuan = $(this).attr('href');
	// tangkap element ybs
	var elementTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});

// Parallax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	if (wScroll > $('.portfolio').offset().top - 400) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul')
			}, 200 * (i+1));	
		});
	};

	if (wScroll < 800) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).removeClass('muncul')
			}, 200 * (i+1));	
		});
	};
});