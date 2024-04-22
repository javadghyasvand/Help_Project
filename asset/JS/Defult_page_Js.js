$('.share-page').click(function (e) {
	e.preventDefault();
	var Share_Text = $(this).attr('href');
	document.addEventListener('copy', function (e) {
		e.clipboardData.setData('text/plain', Share_Text);
		e.preventDefault();
	}, true);
	document.execCommand('copy');
	console.log('copied text : ', Share_Text);

});



$("#inputmudal").on("click", function () {
	var href = $("#inputmudal").text();
	$("#inputmudal").attr('target', '_blank');
	$("#inputmudal").attr("href", href);
});

function copy(e) {
	var textToCopy = document.querySelector(e);
	var textBox = document.querySelector(".clipboard");
	textBox.setAttribute('value', textToCopy.innerHTML);

	textBox.select();
	document.execCommand('copy');
}

function PrintElem() {


	var lang1 = window.location.href.search("fa")
	var lang2 = window.location.href.search("FA")
	var lang3 = window.location.href.search("AR")
	var lang4 = window.location.href.search("ar")


	if (lang1 != -1 || lang2 != -1 || lang3 != -1 || lang4 != -1) {
		let regex = /(?=:)([\s\S]*?)(index)+/
		let match = regex.exec(window.location.pathname);

		var mywindow = window.open('', 'PRINT', 'height=700,width=1024');
		//   mywindow.document.write('<html><head><title>' + document.title + '</title>') ;
		//   mywindow.document.write('</head><body >');
		//   mywindow.document.write('<h1>' + document.title + '</h1>');
		mywindow.document.write(' <link href="../../../../asset/CSS/PDF_style_FullVersion_RTL_V1.0.css" rel="stylesheet">');


		mywindow.document.write(document.getElementById('winchm_template_content').innerHTML);


		var images = document.getElementsByTagName('img');
		var srcList = [];
		for (var i = 0; i < images.length; i++) {
			srcList.push(images[i].src);
			mywindow.document.body.innerHTML = mywindow.document.body.innerHTML.replace("../../../../../", $('img').prop('src').split('Images')[0]);
		}

		mywindow.document.write('</body></html>');

		mywindow.document.close(); // necessary for IE >= 10
		mywindow.focus(); // necessary for IE >= 10*/
		sleep(800).then(() => {
			mywindow.print();
			mywindow.close();
		});

		return true;

		function sleep(time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}
	} else {
		let regex = /(?=:)([\s\S]*?)(index)+/
		let match = regex.exec(window.location.pathname);

		var mywindow = window.open('', 'PRINT', 'height=700,width=1024');
		//   mywindow.document.write('<html><head><title>' + document.title + '</title>') ;
		//   mywindow.document.write('</head><body >');
		//   mywindow.document.write('<h1>' + document.title + '</h1>');

		mywindow.document.write(document.getElementById('winchm_template_content').innerHTML);
		mywindow.document.write(' <link href="../../../../asset/CSS/PDF_style_FullVersion_LTR_V1.0.css" rel="stylesheet">');

		var images = document.getElementsByTagName('img');
		var srcList = [];
		for (var i = 0; i < images.length; i++) {
			srcList.push(images[i].src);
			mywindow.document.body.innerHTML = mywindow.document.body.innerHTML.replace("../../../../../", $('img').prop('src').split('Images')[0]);
		}

		mywindow.document.write('</body></html>');

		mywindow.document.close(); // necessary for IE >= 10
		mywindow.focus(); // necessary for IE >= 10*/
		sleep(800).then(() => {
			mywindow.print();
			mywindow.close();
		});

		return true;

		function sleep(time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}

	}
}
$(document).ready(function () {
	$('#toTop').fadeOut();
});

function GetTop() {
	document.body.scroll(0, 0);
}
var tid = setTimeout(mycode, 800);

function mycode() {
	if (document.body.scrollTop == 0) {
		$('#toTop').fadeOut();
	} else {
		$('#toTop').fadeIn();
	}
	tid = setTimeout(mycode, 800);
}

function GetSearch() {
	var name = document.getElementById("page_search").value;
	var pattern = name.toLowerCase();
	var targetId = "";
	var divs = document.getElementsByClassName("card-panel hoverable");
	if (pattern != "") {
		for (var i = 0; i < divs.length; i++) {
			var para = divs[i].getElementsByTagName("p");
			var page = para;
			var pageText = document.getElementsByClassName("card-panel hoverable")[i].innerHTML.replace("<span class='highlight'>", "").replace("</span>");
			var newht = document.getElementsByClassName("card-panel hoverable")[i].innerHTML.replace("highlight", "");
			document.getElementsByClassName("card-panel hoverable")[i].innerHTML = newht;
			//document.body.innerHTML = document.body.innerHTML.replace("highlight","");
			var index = para[0].innerText.toLowerCase().indexOf(pattern);
			if (index != -1) {
				targetId = divs[i].parentNode.id;
				console.log(document.getElementsByClassName("card-panel hoverable")[i].innerText);
				var searchedText = pattern;
				document.getElementsByClassName("card-panel hoverable")[i].innerHTML.replace("<span class='highlight'>", "").replace("</span>");
				var theRegEx = new RegExp("(" + searchedText + ")", "igm");
				var newHtml = newht.replace(theRegEx, "<span class='highlight'>$1</span>");
				document.getElementsByClassName("card-panel hoverable")[i].scrollIntoView();
				document.getElementsByClassName("card-panel hoverable")[i].innerHTML = newHtml;
				break;
			}
		}
	}
}

function checkServer() {
	var width = screen.width;
	if (width <= 700) {
		$("#modalplay").removeAttr("data-toggle");
		$("#modalplay").removeAttr("data-target");
		var href = $("#playmp4").attr("href");
		$("#modalplay").attr("target", "_Blank");
		$("#modalplay").attr("href", href);

	} else {
		let socket = new WebSocket("ws://127.0.0.1:8181");
		var tid = setTimeout(mycode, 650);

		function mycode() {

			switch (socket.readyState) {
				case 0:
					$('#serverstatus').text('   Server status : Server is Connecting');
					$('.serverstatus').attr('style', 'background-color:orange;color:black;text-align:Left;');
					$('.modal-header').attr('style', 'background-color:orange;')
					console.log("CONNECTING");
					tid = setTimeout(mycode, 650);
					break;
				case 1:
					$('#serverstatus').text('   Server status : Server is Connected');
					$('.serverstatus').attr('style', 'background-color:green;color:black;text-align:Left;');
					$('.modal-header').attr('style', 'background-color:green;')
					console.log("Open");
					tid = setTimeout(mycode, 650);
					break;
				default:
					$('#serverstatus').text('   Server status : Server is Closed , Please Reopen Download Box After Start " AMPRO Application " ');
					$('.serverstatus').attr('style', 'background-color:orange;color:black;text-align:Left;');
					console.log("CLOSED");
					break;
			}
		}
	}


}

function abortTimer() {
	clearTimeout(tid);
}


$('.copy_text').click(function (e) {
	e.preventDefault();
	var copyText = $(this).attr('href');
	let socket = new WebSocket("ws://127.0.0.1:8181");
	socket.onopen = function (e) {
		socket.send(copyText);
	};
	socket.onmessage = function (event) { };
	socket.onclose = function (event) {
		if (event.wasClean) {
			// alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
		} else { }
	};
	socket.onerror = function (error) { };
	document.addEventListener('copy', function (e) {
		e.clipboardData.setData('text/plain', copyText);
		e.preventDefault();
	}, true);
	document.execCommand('copy');
	console.log('copied text : ', copyText);
	//alert('copied text: ' + copyText); 
});