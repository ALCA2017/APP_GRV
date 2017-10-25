interface IDUsuario {
  idUsuario: number;
}

interface ISObtenerCorreoContactos {
  correos: string[];
}

interface ISFormatoExcelContactos {
  archivoExcel: string;
}

// RETORNO
interface IRespuesta {
  msj?: IMensaje;
  dato?: any;
}

interface IMensaje {
  codigo?: number;
  mensaje?: string;
  tipo?: number;
}

interface ISAContarContactoExcel {
	archivoExcelContactos?:string;
}


