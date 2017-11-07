function Docx({path, size, name, extension}) {
	this.path      = path      || '';
	this.size      = size      || 0;
	this.name      = name      || "document";
	this.extension = extension || "docx";
}

function Xls({path, size, name, extension}) {
	this.path      = path      || '';
	this.size      = size      || 0;
	this.name      = name      || "document";
	this.extension = extension || "xls";
}

function Ppt({path, size, name, extension}) {
	this.path      = path      || '';
	this.size      = size      || 0;
	this.name      = name      || "document";
	this.extension = extension || "ppt";
}

function DocumentFactory() {}

DocumentFactory.prototype.documentClass = Docx;

DocumentFactory.prototype.createDocument = (options) => {
	switch (options.extension) {
		case "docx":
		this.documentClass = Docx;
		break;
		case "xls":
		this.documentClass = Xls;
		break;
		case "ppt":
		this.documentClass = Ppt;
		break;
	}
	return new this.documentClass(options);
};

function printDocument({extension, name, size, path}) {
	console.log(`Soy un objeto ${extension} implementando DocumentFactory. 
	Name: ${name}
	Size: ${size} Mb
	Path: ${path}
	----------------------------------------------`);
}

const documentFactory = new DocumentFactory();
const xls = documentFactory.createDocument({
	path: 'C:/Users/User/xls folder/',
	size: 10,
	name: 'Hoja de calculos',
	extension: 'xls'
});

const ppt = documentFactory.createDocument({
	path: 'C:/Users/User/ppt folder/',
	size: 6,
	name: 'Soy un Power Point',
	extension: 'ppt'
});

const docx = documentFactory.createDocument({
	path: 'C:/Users/User/docx folder/',
	size: 8,
	name: 'Curriculum',
	extension: 'docx'
});

printDocument(xls);
printDocument(ppt);
printDocument(docx);