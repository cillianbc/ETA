$( document ).ready(function() {


	SetCharacterMessage('headline1', 'headline1_count_message', 30);
	SetCharacterMessage('headline2', 'headline2_count_message', 30);
	SetCharacterMessage('description', 'description_count_message', 80);
	SetCharacterMessage('path1', 'path1_count_message', 15);
	SetCharacterMessage('path2', 'path2_count_message', 15);

	$('#finalurl').keyup(function() {
		BuildAdvert();
	});


});
//

function SetCharacterMessage(elementID, messageID, maxchars)
{
	$('#' + messageID).html(maxchars);

	$('#' + elementID).keyup(function() {
	  var text_length = $('#' + elementID).val().length;
	  var text_remaining = maxchars - text_length;

	  $('#' + messageID).html(text_remaining);
	  if (text_remaining<0)
	  {
	  	$('#' + messageID).css("color", "#FF0000");
	  } else {
	  	$('#' + messageID).css("color", "#000000");
	  }

	  BuildAdvert();
	});
}

function BuildAdvert()
{
	let headline = document.getElementById('headline1')
	let headline2 = document.getElementById('headline2')
	let description = document.getElementById('description')
		if (headline.value.length>0)
	  	{
	  		$('#Desktop_Headline1').html(headline.value);
	  		$('#Mobile_Headline1').html(headline.value);
	  	}


	  	if ($('#Desktop_Headline2').val().length==0)
	  	{
	  		$('#Desktop_Headline2').html('');
	  		$('#Mobile_Headline2').html('');
	  	}


	  	if (headline2.value.length>0)
	  	{
	  		$('#Desktop_Headline2').html(' - ' + headline2.value);
	  		$('#Mobile_Headline2').html(' - ' + headline2.value);
	  	}


	  	if (description.value.length>0)
	  	{
	  		$('#Desktop_description').html(description.value);
	  		$('#Mobile_description').html(description.value);
	  	}


	  BuildURL();
}

function BuildURL()
{

	var AdText = $('#finalurl').val();

	var Prefix ='www.';
	if (AdText.substring(0,4)=='www.')
	{
		AdText = AdText.substring(4);
	}


	if (tldjs.getDomain(AdText))
	{
		AdText = tldjs.getDomain(AdText);
	}

	var Suffix='';
	if ($('#path1').val().length>0)
	{
		Suffix += "/" + $('#path1').val();

		if ($('#path2').val().length>0) //must have a path 1
		{
			Suffix += "/" + $('#path2').val();
		}
	}


	if (AdText.length>0)
	{
		$('#Desktop_finalurl').html(Prefix+AdText+Suffix);
		$('#Mobile_finalurl').html(Prefix+AdText+Suffix);
	}
	else
	{
		$('#Desktop_finalurl').html('www.example.com');
		$('#Mobile_finalurl').html(Prefix+AdText+Suffix);
	}
}
