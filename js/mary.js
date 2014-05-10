
function hideAllSections() {
	$('section.who').hide();
	$('section.what').hide();
	$('section.where').hide();
	$('section.home').hide();
	$('section.contact').hide();
	}

hideAllSections();

$('section.home').show();

$('a.menu').click(
	function(){
		$('a.menu').css('color', '#333');
		hideAllSections();

		if ( $(this).hasClass ("who")) {
		$(this).css('color', 'white');
			console.log("who clicked");
			$('section.who').fadeIn(400);
			$('body').css('background-color', '#ABF4DC')
			}

		if ( $(this).hasClass ("what")) {
		$(this).css('color', 'white');
			console.log("what clicked");
			$('section.what').fadeIn(400);
			$('body').css('background-color', '#F4BBA4')
			}

		if ( $(this).hasClass ("where")) {
			console.log("where clicked");
			$(this).css('color', 'white');
			$('body').css('background-color', '#97CFE8')
			$('section.where').fadeIn(400);
			}

		if ( $(this).hasClass ("contact")) {
		
			$(this).css('color', 'white');

			console.log("contact clicked");
			$('body').css('background-color', '#CECECE')
			$('section.contact').fadeIn(400);
			}

		var bodyColour = $('body').css('background-color');
		//$('.icons').css('border-color', bodyColour);
		//$('hr').css('background-color', bodyColour);

	}
	);