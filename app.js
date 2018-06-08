function isValidCard(){
	var userInput = prompt("Digite o Numero do seu Cartão");
	var digitsArray = [];
	var sumElements = 0;



	for(var i = 1; i < userInput.length + 1; i++) {
		digitsArray[i] = userInput.charAt(i - 1);
	}
	//posições pares
	for(var j = 2; j < digitsArray.length; j = j+2) {

		if(digitsArray[j] * 2 >= 10)
		{
			sumElements = sumElements + parseInt((digitsArray[j] * 2) - 9)
		}
		else
		{
			sumElements = sumElements + parseInt(digitsArray[j] * 2);
		}
	}
	//posições impares
	for(var p = 1; p < digitsArray.length; p = p+2)
	{
		sumElements = sumElements + parseInt(digitsArray[p]);

	}
console.log(sumElements);


	if(sumElements % 10 === 0) {
		alert("Seu Cartão é válido");
		return true;
	} else if (sumElements === 0) {
		alert("Seu Cartão não é válido");
		return false;
	} else {
		alert("Seu Cartão não é válido");
		return false;
	}
}
