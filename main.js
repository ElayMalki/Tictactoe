var element = ['✕', '◯'];
var win = ["✕✕✕", "◯◯◯"];

var winArr = [[1,1,1] , [2,2,2]];
var next = element[0];
var inGame = true;
var marked = [
[0,0,0],
[0,0,0],
[0,0,0]
];
var winOp = [];

$('.square').one("click", function(e) {
	inGame ? drawAndPlay(e) : false;
	theWinner(e);
});
$('button').click(function() {
    location.reload();
});
$()
function drawAndPlay (e) {

	$('<span>', {
		text: next
	}).appendTo(e.target);

	next = (next == element[0]) ? element[1] : element[0];
	

	$('.row').each(function(key, value){
		for(i=0 ; i<3; i++){
			console.log(value.children[i].textContent);
			if(value.children[i].textContent == '✕')
				marked[key][i]= 1
			else if(value.children[i].textContent =='◯')
				marked[key][i]= 2
			else marked[key][i]=0;
		}
	});

	console.log(marked);

	// $('.row').each(function(key, value){
	// 	value = (value.children[0]) ? value.children[0].textCon2ent : "";
	// 	marked[key] = value;
	// 	console.log(value);
	// })
}


function theWinner(e) {

	//We will check the array for the winner
	if (isWin(1)) {
		console.log('X wins')
		$('h1').html('X wins !!');

		stopMatch();
	} 
		else if (isWin(2)) { 
			console.log('O wins')
			$('h1').html('O wins !!');
			console.log($('h1'));
			stopMatch();
		}
	
}

function isWin(win){
		for(i = 0 ; i < 3; i ++){
		if(marked[i][0] == marked[i][1] &&  marked[i][1] == marked[i][2] && marked[i][2] == win)
		return true;

	if(marked[0][i] == marked[1][i] &&  marked[1][i] == marked[2][i] && marked[2][i] == win)
		return true;

	}

	if(marked[0][0] == marked[1][1] && marked[1][1] == marked[2][2] && marked[2][2] == win) 
		return true;

		if(marked[0][2] == marked[1][1] && marked[1][1] == marked[2][0] && marked[2][0] == win) 
		return true;

	return false;
}


function stopMatch() {

	inGame = 0;
}
// fucntion power(a,n){
// 	if(n ==0 ) return 1;
// 	return a * power(a,n-1);
// }
// how stack working javascript









// function theWinner (e) {
// 	for(var i = 0; i < 8; i++){
// 		winOp[i] = "";
// 	}
// 	for (var i = 0; i < marked.length; i++) {
// 		winOp[Math.floor(i/3)] += marked[i];
// 		var col = i + 3 - Math.floor(i/3) * 3; //order i position by column
// 		winOp[col] += marked[i];
// 		console.log(marked);
// 	}

// 	var x = 0; // Starting diagonal \
// 	var y = 2; // Starting diagonal /
// 	winOp[6] = marked[x] + marked[x + 4] + marked[x + 4*2]; // win diagonal \
// 	winOp[7] = marked[y] + marked[y + 2] + marked[y + 2*2]; // win diagonal /

// 	console.log(winOp);
// 	$.each(winOp, function(key, value){
// 		if (value == win[0]) {
// 			console.log(element[0] + ' WON! 🏆');
// 			$('h1').text(element[0] + ' WON! 🏆');
// 			$('h1').addClass("larger");
// 		} else if (value == win[1]) {
// 			console.log(element[1] + ' WON! 🏆');
// 			$('h1').text(element[1] + ' WON! 🏆');
// 			$('h1').addClass("larger");
// 		}
// 	})
// }