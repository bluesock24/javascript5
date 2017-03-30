function getTriangleArea(a,h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2
	}
	else {
		console.log('Nieprawidłowe dane');
	}
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
console.log('Pole trójkąta1 to:' + triangle1Area)

var triangle2Area = getTriangleArea(3, 4);
console.log('Pole trójkąta2 to:' + triangle2Area)

var triangle3Area = getTriangleArea(169, 152);
console.log('Pole trójkąta3 to:' + triangle3Area)