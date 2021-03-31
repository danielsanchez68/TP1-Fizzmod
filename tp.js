/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará a terminar la función. Si se no se recibe un string retornará -1.
*/

function contarVocales(texto) {
  var cantidad = -1
  
  if(typeof texto == 'string') {
    var letras = texto.split('')
    cantidad = 0

    for(var letra of letras) {
      letra = letra.toLowerCase()
      switch(letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          cantidad++
      }
    }
  }
  return cantidad
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/danielsanchez68/repoprueba123.git"
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/

const crearClase = () => {
  class AnalizarTexto {
    static contadorInstancias
    constructor(texto) {
      this.texto = texto
      if(!AnalizarTexto.contadorInstancias) AnalizarTexto.contadorInstancias = 0
      AnalizarTexto.contadorInstancias++
    }

    contadorPalabras() {
      if(typeof this.texto != 'string') return -1
      if(this.texto.length == 0) return 0
      return this.texto.split(' ').length
    }

    hayNumeros() {
      if(typeof this.texto != 'string') return -1

      for(let caracter of this.texto) {
        if(caracter >= '0' && caracter <= '9') return true
      }
      return false
    }
  }
  return AnalizarTexto
}


module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
