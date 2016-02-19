$(function(){
	var player = 1, compteur = 1;

	$('.enter').click(function(){
		var idname = $(this).attr('id');
		if(player === 1){
			caseCurrent = 'twit';
			player = 2;
		}else{
			caseCurrent = 'fcb';
			player = 1;
		}
		if(compteur <= 9){
			if(idname === ''){
				$(this).attr('id', caseCurrent);
				$(this).text('');
				compteur++;
			}

			Verified();
		}
	});

	// 49 - 57, 97 - 105

	$( "html" ).keypress(function(e) {
		var key = e.key;

		console.log( e );

		var numbers = [1,2,3,4,5,7,8,9];
		if( $.inArray( key, numbers ) ){

			var idname = $('.enter.case'+key).attr('id');
			if(player === 1){
				caseCurrent = 'twit';
				player = 2;
			}else{
				caseCurrent = 'fcb';
				player = 1;
			}
			if(compteur <= 9){
				if(idname === ''){
					$('.enter.case'+key).attr('id', caseCurrent).css('color', 'transparent');
					//$('.enter.case'+key).text('');
					compteur++;
				}

				Verified();
			}
		}
	});

	function Verified(){
		var idCaseOne 		= $('.case1').attr('id');
		var idCaseTwo 		= $('.case2').attr('id');
		var idCaseThree 	= $('.case3').attr('id');
		var idCaseFour 		= $('.case4').attr('id');
		var idCaseFive 		= $('.case5').attr('id');
		var idCaseSix 		= $('.case6').attr('id');
		var idCaseSeven 	= $('.case7').attr('id');
		var idCaseHeight 	= $('.case8').attr('id');
		var idCaseNine 		= $('.case9').attr('id');

		colorGain = 'rgb(147,101,184)';

		gain = '';

		if(idCaseOne === idCaseTwo && idCaseTwo === idCaseThree && idCaseOne != ''){ /* 1, 2, 3 */
			$('.case1, .case2, .case3').css('background-color', colorGain);
			gain = idCaseOne;
		}else if(idCaseOne === idCaseFour && idCaseFour === idCaseSeven && idCaseOne != ''){ /* 1, 4, 7 */
			$('.case1, .case4, .case7').css('background-color', colorGain);
			gain = idCaseOne;
		}else if(idCaseOne === idCaseFive && idCaseFive === idCaseNine && idCaseOne != ''){ /* 1, 5, 9 */
			$('.case1, .case5, .case9').css('background-color', colorGain);
			gain = idCaseOne;
		}else if(idCaseTwo === idCaseFive && idCaseFive === idCaseHeight && idCaseTwo != ''){ /* 2, 5, 8 */
			$('.case2, .case5, .case8').css('background-color', colorGain);
			gain = idCaseTwo;
		}else if(idCaseThree === idCaseSix && idCaseSix === idCaseNine && idCaseThree != ''){ /* 3, 6, 9 */
			$('.case3, .case6, .case9').css('background-color', colorGain);
			gain = idCaseThree;
		}else if(idCaseSeven === idCaseHeight && idCaseHeight === idCaseNine && idCaseSeven != ''){ /* 7, 8, 9 */
			$('.case7, .case8, .case9').css('background-color', colorGain);
			gain = idCaseThree;
		}else if(idCaseFour === idCaseFive && idCaseFive === idCaseSix && idCaseFour != ''){ /* 4, 5, 6 */
			$('.case4, .case5, .case6').css('background-color', colorGain);
			gain = idCaseThree;
		}else if(idCaseThree === idCaseFive && idCaseFive === idCaseSeven && idCaseThree != ''){ /* 3, 5, 7 */
			$('.case3, .case5, .case7').css('background-color', colorGain);
			gain = idCaseThree;
		}else if(compteur == 10){
			alert('Match nul !');
		}


		if(gain === 'twit'){
			alert('Twitter gagne !');
			compteur = 10; player = 0;
		}else if (gain === 'fcb'){
			alert('Facebook gagne !');
			compteur = 10; player = 0;

		}
	}

});