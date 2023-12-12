

function paradit(){
	var vards = document.getElementById('vards').value;
	var uzvards = document.getElementById('uzvards').value;
	var epasts = document.getElementById('epasts').value;
	var age = document.getElementById('age').value;

window.confirm(
	"Lūdzu apstipriniet ievadīto informāciju: \n\n"
	+"Vārds: "+vards+
	"\nUzvārds: "+uzvards+
	"\nE-pasts: "+epasts+
	"\nVecums: "+age+" gadi");
	}	

