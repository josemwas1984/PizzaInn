/*$("button").click(function (any) {
	var client = document.getElementById('nameDetail').value;
	alert(' Dear ' + ' esteemed ' + name + ' we have received your message. ' + ' Feel free to reach us anytime');
	name.preventDefault();
  });*/
  $("button").click(function (any) {
	var client = document.getElementById('nameDetail').value;
	alert(' Dear ' + ' esteemed ' + name + ' we have received your order. ' + ' We shall deliver it very soon');
	name.preventDefault();
  });
  $("button").on('click', function () {
	$('form').each(function () {
	  this.reset();
	});
});