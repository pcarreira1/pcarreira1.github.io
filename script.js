$(document).ready(function(){
	//console.log('ready');

	//opção 1 - hover.
	/*$( ".overlay-container" )
	.mouseenter(function() {
		//console.log('hover');
		$('.img-overlay', this).show(300);
	})
	.mouseleave(function() {
		//console.log('unhover');
		$('.img-overlay', this).hide(300);
	});
	$('.overlay-container a').on('click',function(event){
		event.preventDefault();
	});*/

	
	//opção 2 - click 
	$('.overlay-container a').on('click',function(event){
		event.preventDefault();
		if(!$(this).hasClass('shown')){
			$(this).addClass('shown');
			$('.img-overlay', this).show(300);	
		}
		else{
			$(this).removeClass('shown');
			$('.img-overlay', this).hide(300);
		}
		
	});
	
	$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
	
	
	var dir="./img/team/";
	var team=["01_andrepires.gif","02_vitorteixeira.gif","03_joaobandeira.gif","04luismagalhaes.gif","05_joaocosta.gif","06_nunoduarte.gif","07_pedrocarreira.gif","08_joaosoares.gif","09_lilianaribeiro.gif","10_DiogoGomes.gif","11_miguelnunes.gif","12_ricardoloureiro.gif","13_AnaAlves.gif","14_beatrizcavaleiro.gif","15_andrepeixoto.gif","16_miguelsandim.gif","17_ricardofigueiredo.gif","18_matheus.gif","19_claudiomonteiro.gif","20_andrebordalo.gif","21_joaocardoso.gif","22_carolinafaria.gif","23_guilherme.gif","24_andreregado.gif","25_anaritaferreira.gif","26_brunoalves.gif","27_JoaoPereira.gif","28_CarlosPereira.gif","29_JoseCardoso.gif","30_AnaísDias.gif","31_RaquelCorreia.gif","32_RitaLima.gif","33_DanielCouceiro.gif","34_JoaoFernandes.gif"];
	
	for(i=0;i<team.length;i++){
		$("#teamImg").append('<button type="button" class="btn btn-default orange-circle-button blueCircle" style="background: url('+dir+team[i]+') no-repeat center;background-size: cover;"><div></div></button>');
	}


});

/*
//works chrome
$('.overlay-container').hover(
	function(){
		console.log('hover');
		$('.img-overlay', this).show(300);
		console.log('hover');
	},
	function(){
		$('.img-overlay', this).hide(300);
});

//works chrome
$(document).on('mouseenter','.overlay-container', function (event) {
    console.log('new');
    $('.img-overlay', this).show();
}).on('mouseleave','.overlay-container',  function(){
    $('.img-overlay', this).hide();
});
*/


