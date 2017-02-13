
let finalUrl = document.getElementById('finalurl')
let headline = document.getElementById('headline1')
let headline2 = document.getElementById('headline2')
let description = document.getElementById('description')

let desktopUrl = document.getElementById('Desktop_finalurl')
let desktopHeadline1 = document.getElementById('Desktop_Headline1')
let desktopHeadline2 = document.getElementById('Desktop_Headline2')
let desktopDescription = document.getElementById('Desktop_description')

let mobileUrl = document.getElementById('Mobile_finalurl')
let mobileHeadline1 = document.getElementById('Mobile_Headline1')
let mobileHeadline2 = document.getElementById('Mobile_Headline2')
let mobileDescription = document.getElementById('Mobile_description')

$( document ).ready(function() {


	SetCharacterMessage('headline1', 'headline1_count_message', 30);
	SetCharacterMessage('headline2', 'headline2_count_message', 30);
	SetCharacterMessage('description', 'description_count_message', 80);
	SetCharacterMessage('path1', 'path1_count_message', 15);
	SetCharacterMessage('path2', 'path2_count_message', 15);


	finalUrl.onkeyup = function(){
		BuildAdvert()
	}
	// $('#finalurl').keyup(function() {
	// 	BuildAdvert();
	// });


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

		if (headline.value.length>0)
	  	{
	  		desktopHeadline1.innerHTML = headline.value;
	  		mobileHeadline1.innerHTML = headline.value;
	  	}


	  	if (headline2.value.length==0)
	  	{
	  		desktopHeadline2.innerHTML = '';
	  		mobileHeadline2.innerHTML = '';
	  	}


	  	if (headline2.value.length>0)
	  	{
	  		desktopHeadline2.innerHTML = ' - ' + headline2.value;
	  		mobileHeadline2.innerHTML = ' - ' + headline2.value;
	  	}


	  	if (description.value.length>0)
	  	{
	  		desktopDescription.innerHTML = description.value;
	  		mobileDescription.innerHTML = description.value;
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
		desktopUrl.innerHTML = Prefix+AdText+Suffix
		mobileUrl.innerHTML = Prefix+AdText+Suffix;
	}
	else
	{
		desktopUrl.innerHTML = 'www.example.com';
		mobileUrl.innerHTML = Prefix+AdText+Suffix;
	}
}
