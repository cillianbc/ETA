// (function () {
	let finalUrl = document.getElementById('finalurl')
	let headline = document.getElementById('headline1')
	let headline2 = document.getElementById('headline2')
	let headline3 = document.getElementById('headline3')
	let description = document.getElementById('description')

	let desktopUrl = document.getElementById('Desktop_finalurl')
	let desktopHeadline1 = document.getElementById('Desktop_Headline1')
	let desktopHeadline2 = document.getElementById('Desktop_Headline2')
	let desktopHeadline3 = document.getElementById('Desktop_Headline3')
	let desktopDescription = document.getElementById('Desktop_description')

	let mobileUrl = document.getElementById('Mobile_finalurl')
	let mobileHeadline1 = document.getElementById('Mobile_Headline1')
	let mobileHeadline2 = document.getElementById('Mobile_Headline2')
	let mobileHeadline3 = document.getElementById('Mobile_Headline3')
	let mobileDescription = document.getElementById('Mobile_description')

	let path1 = document.getElementById('path1')
	let path2 = document.getElementById('path2')

	SetCharacterMessage('headline1', 'headline1_count_message', 30);
	SetCharacterMessage('headline2', 'headline2_count_message', 30);
	SetCharacterMessage('headline3', 'headline3_count_message', 30);
	SetCharacterMessage('description', 'description_count_message', 80);
	SetCharacterMessage('path1', 'path1_count_message', 15);
	SetCharacterMessage('path2', 'path2_count_message', 15);


	finalUrl.onkeyup = function(){
		BuildAdvert()
	}
	// $('#finalurl').keyup(function() {
	// 	BuildAdvert();
	// });

//

	function SetCharacterMessage(elementID, messageID, maxchars)
	{
		document.getElementById(messageID).innerHTML = maxchars;

		document.getElementById(elementID).addEventListener("keyup",function() {
		  var text_length = document.getElementById(elementID).value.length;
		  var text_remaining = maxchars - text_length;

		  document.getElementById(messageID).innerHTML = text_remaining;
		  if (text_remaining<0)
		  {
			document.getElementById(messageID).style.color ="#FF0000";
		  } else {
			document.getElementById(messageID).style.color = "#000000";
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
			  if (headline.value.length==0)
		  	{
		  		desktopHeadline1.innerHTML = 'Headline 1';
		  		mobileHeadline1.innerHTML = 'Headline 1';
		  	}


		  	if (headline2.value.length==0)
		  	{
		  		desktopHeadline2.innerHTML = ' | Headline 2';
		  		mobileHeadline2.innerHTML = '| Headline 2';
		  	}


		  	if (headline2.value.length>0)
		  	{
		  		desktopHeadline2.innerHTML = ' | ' + headline2.value;
		  		mobileHeadline2.innerHTML = ' | ' + headline2.value;
			}
			  
			  if (headline3.value.length==0)
		  	{
		  		desktopHeadline3.innerHTML = ' | Headline 3';
		  		mobileHeadline3.innerHTML = ' | Headline 3';
		  	}


		  	if (headline3.value.length>0)
		  	{
		  		desktopHeadline3.innerHTML = ' | ' + headline3.value;
		  		mobileHeadline3.innerHTML = ' | ' + headline3.value;
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

	var AdText = finalUrl.value;

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
	if (path1.value.length>0)
	{
		Suffix += "/" + path1.value;

		if (path2.value.length>0) //must have a path 1
		{
			Suffix += "/" + path2.value;
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
// })();
