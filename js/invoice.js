window.addEventListener('load', () => {

	const params = (new URL(document.location)).searchParams;
	const name = params.get('name');
	const price = params.get('rate');
	const playerId = params.get('playerId')

	document.getElementById('namePerson').innerHTML = name
	document.getElementById('playerID').innerHTML = playerId
	document.getElementById('priceINR').innerHTML = price
})