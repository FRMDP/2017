function line(){
	console.log("-------------------------------------------------------------")
}

function ok(){
	console.log("The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal.")
}

function notok(){
	console.log("This is because the Revealing Module Pattern is unable to reference the private methods.")
}

const Revealer = (()=> {

	let counter = 0;
	const name = 'Revealing';
	const moduletype = 'Module Pattern';
	const genius = 'Addy Osmani';
	const author = 'Reynoso Matias';

	const plusPrivate =(()=>{
		console.log("you are inside a private method, and just added +1 to counter ");
		counter++;
	}); 

	const counterValuePrivate=(()=>{
		console.log(counter);
	});

	const namePrivate=(()=>{
		console.log(name);
	});

	const moduletypePrivate=(()=>{
		console.log(moduletype);
	});

	const geniusPrivate=(()=>{
		console.log(genius);
	});

	const authorPrivate=(()=>{
		console.log(author);
	})

	return{

		definition: "Is a pattern where we would simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.",
		advantages: "This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.",
		disadvantages: "A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.",
		defined: "let counter, const name, const moduletype, const genius, const author",
		initialValues : "0 , 'Revealing', 'Module Pattern', 'Addy Osmani', 'Reynoso Matias'",
		methods: "plusPrivate, counterValuePrivate, namePrivate, moduletypePrivate, geniusPrivate, authorPrivate",
		plus : plusPrivate,
		plusSyntax : "const plusPrivate =(()=>{console.log('acabas de sumar uno en un metodo privado'); counter++;}); ",
		counterValue: counterValuePrivate,
		name : namePrivate,
		moduletype : moduletypePrivate,
		genius : geniusPrivate,
		author: authorPrivate,

	}
})();

console.log("The Revealing Module Pattern");

console.log(Revealer.definition);

line();

console.log("I made a 'Revealer' class and defined:");
console.log(Revealer.defined);
console.log("with this initial values:");
console.log(Revealer.initialValues);
console.log("and this methods:");
console.log(Revealer.methods);

line();

console.log("lets start with Revealer.plus:");

Revealer.plus(); 

console.log("this is ok, but first lets see the plusPrivate syntax:");

console.log(Revealer.plusSyntax);

ok();

line();

console.log("now I'm trying (try - catch) to call directly the 'counterValuePrivate' method and the result is: ");
	try{
		Revealer.counterValuePrivate();	
	}
	catch(error){
		console.log("error: "+ error.message);
	}

notok();

console.log("to see the value, I must call 'counterValue' and the result is: ");

Revealer.counterValue();

line();

console.log("Now, the following methods");
console.log("Revealer.name, Revealer.moduletype, Revealer.genius");
Revealer.name();
Revealer.moduletype();
Revealer.genius();

line();

console.log("the advantages of this pattern:");
console.log(Revealer.advantages);

line();

console.log("the disadvantages of this pattern:");
console.log(Revealer.disadvantages);

line();

console.log("author: ");
Revealer.author();

