//Decorating Objects With Multiple Decorators

function MacBook() {
	this.cost = () => { 
		return 15000 
	};
	this.screensize = () => { 
		return 14.6	
	};
}

//Decorator 1
function memory( macbook ){
	let cost = macbook.cost();
	macbook.cost = () => {
		return cost + 2000;
	}
}

//Decorator 2
function engraving( macbook ){
	let cost = macbook.cost();
	macbook.cost = () => {
		return cost + 1750;
	}
}

//Decorator 3
function insurance( macbook ){
	let cost = macbook.cost();
	macbook.cost = () => {
		return cost + 2500;
	}
}

//Decorator 4
function bluray( macbook ){
	let cost = macbook.cost();
	macbook.cost = () => {
		return cost + 1500;
	}
}

//Decorator 5
function inalambricMouse( macbook ){
	let cost = macbook.cost();
	macbook.cost = () => {
		return cost + 1000;
	}
}

const macbook = new MacBook();
memory(macbook);
engraving(macBook);
insurance(macbook);
bluray(macbook);
inalambricMouse(macBook);