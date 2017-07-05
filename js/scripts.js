// Pole Trójk¹ta

//deklaracja zmiennych
var     a=prompt('a=?'),
	b=prompt('b=?'),
	mathFormula;

//wzór
mathFormula = (a*a)+(2*a*b)-(b*b)

//alert
alert('Wynik:' + mathFormula);

console.log('Wynik' + mathFormula);

if(mathFormula>0) {
	console.log('Wynik większy od zera');}
else if (mathFormula<0) {
	console.log('Wynik mniejszy od zera');}
else {
	console.log('Wynik równy zero'),
	alert('Wynik równy zero!');
}