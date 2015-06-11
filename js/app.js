var clearConfirm = document.getElementById('clear');
var undoLast = document.getElementById('undo');

clearConfirm.addEventListener('click', function (event) {
	event.preventDefault();
	if (confirm('This will delete all tasks ! Are you sure ?')) {
		window.location = this.href;
	};
},false);


undoLast.addEventListener('click', function (event) {
	event.preventDefault();
	if (confirm('Undo last action ?')) {
		window.location = this.href;
	};
},false);