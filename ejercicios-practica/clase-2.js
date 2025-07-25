//Actividad 1: Transformando Arrays
// Implementar un polyfills del método map de los arrays. 
// Debemos suponer que los navegadores no son compatibles con este método 
// y debemos implementarlo para que todos puedan usarlo en nuestra aplicación.

if (!Array.prototype.map){
  Array.prototype.map = function (thisArg, callback){
    let result = new Array(this.length)
    for (let i = 0; i < length; i++){
      if (i in this){
        result [i] = callback.call (thisArg, this[i], i, this);
      }
    }
    return result;
  };
}


// let numeros = [1,2,3];
// let dobles = numeros.map(function(num){
//     return num*2;
// });
// console.log (dobles);



// Actividad 2: Filtrando Arrays
// Del mismo modo podemos implementar un polyfill para el método filter de los Arrays.

if (!Array.prototype.filter){
    Array.prototype.filter = function (thisArg, callback){
        let result = new Array(this.length)
        for (let i = 0; i < length; i++){   
            if (i in this){

                if(callback.call (thisArg, this[i], i, this)){
                result.push (this[i]);
                }
            }
        }
        return result;
    };
}


// let num = [1,2,3,4];
// let par = num.filter(function(num){
//     return (num%2==0);
// });
// console.log (par);


// Actividad 3: Botón Multiuso II
// En un componente botón no es tan cómodo establecer su label como si fuese un atributo, 
// sino que sería más fácil de entender si el texto lo escribo como hijo del componente. 
// Aplicar la prop children para esto






    


