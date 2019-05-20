const {inscribir, verInfoCursos, argv} = require('./datos.js');

if(argv._[0]=='inscribir'){
	inscribir(argv.i,argv.n,argv.c);
}
else {
	verInfoCursos();
}