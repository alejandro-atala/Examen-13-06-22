let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let meses: string[] = ["enero", "febrero", "marzo"];
let vendedores: string[] = ["Camila", "Franco", "Sofía", "Matías", "Agustina"];
/*
function obtenerVendedor(array: string[], num: number) {
  switch (num) {
    case 1:
      console.log(array[0]);
      break;
    case 2:
      console.log(array[1]);
      break;
    case 3:
      console.log(array[2]);
      break;
    case 4:
      console.log(array[3]);
      break;
    case 5:
      console.log(array[4]);
  }
}
*/
function obetenerMes(array: string[], num: number): string {
  let mes: string = "";
  if (num >= 0 && num < 4) {
    mes = "Enero";
  } else if (num > 4 && num < 8) {
    mes = "Febrero";
  } else mes = "Marzo";

  return mes;
}

function obtenerMaximaVenta(array: number[], meses: string[]): string {
  let max: number = 0;
  let mesMayor: string = " ";
  let texto: string = " ";
  let i: number = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      mesMayor = obetenerMes(meses, i);
    }
  }

  texto = `La venta maxima fue: ${max} y fue en el mes ${mesMayor}`;
  return texto;
}

function obtenerMinimaVenta(array: number[], meses: string[]): string {
  let min: number = 100000;
  let mesMenor: string = " ";
  let texto: string = " ";
  let i: number = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      mesMenor = obetenerMes(meses, i);
    }
  }
  texto = `La venta minima fue de : ${min} y fue en el mes ${mesMenor}`;
  return texto;
}

function obtenerPromedioMensual(
  array: number[],
  num1: number,
  num2: number,
  num3: number,
  num4: number
): number {
  let suma: number = 0;
  let promedio: number = 0;

  suma += array[num1] + array[num2] + array[num3] + array[num4];

  promedio = suma / 3;
  return promedio.toFixed(0);
}

function obtenerPromedioTrimestral(array: number[]): number {
  let suma: number = 0;
  let promedio: number = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  promedio = suma / array.length;
  return promedio.toFixed(0);
}

//----------------------------------------HASTA ACA LLEGUE --------------------
function acomodarVendedoresSemana(num: number): number[] {
  let todosVendedores: number[] = new Array(5);

  todosVendedores[0] = vendedor1[num];
  todosVendedores[1] = vendedor2[num];
  todosVendedores[2] = vendedor3[num];
  todosVendedores[3] = vendedor4[num];
  todosVendedores[4] = vendedor5[num];

  return todosVendedores;
}

function vendedoresSemanal(num: number): number {
  let mejor: number;
  mejor = Math.max(...acomodarVendedoresSemana(num));
  return mejor;
}

//----------------------------------------HASTA ACA LLEGUE --------------------

//Punto 1
//Venta máxima indicando semana y mes de la misma
console.log("Camila " + obtenerMaximaVenta(vendedor1, meses));
console.log("Franco " + obtenerMaximaVenta(vendedor2, meses));
console.log("Sofia " + obtenerMaximaVenta(vendedor3, meses));
console.log("Matias " + obtenerMaximaVenta(vendedor4, meses));
console.log("Agustina " + obtenerMaximaVenta(vendedor5, meses));

//Punto 2
//Venta minima indicando semana y mes de la misma
console.log("Camila " + obtenerMinimaVenta(vendedor1, meses));
console.log("Franco " + obtenerMinimaVenta(vendedor2, meses));
console.log("Sofia " + obtenerMinimaVenta(vendedor3, meses));
console.log("Matias " + obtenerMinimaVenta(vendedor4, meses));
console.log("Agustina " + obtenerMinimaVenta(vendedor5, meses));

//Punto 3
//Promedio trimestral
console.log(
  "Promedio trimestral de Camila ",
  obtenerPromedioTrimestral(vendedor1)
);
console.log(
  "Promedio trimestral de Franco ",
  obtenerPromedioTrimestral(vendedor2)
);
console.log(
  "Promedio trimestral de Sofia ",
  obtenerPromedioTrimestral(vendedor3)
);
console.log(
  "Promedio trimestral de Matias ",
  obtenerPromedioTrimestral(vendedor4)
);
console.log(
  "Promedio trimestral de Agustina ",
  obtenerPromedioTrimestral(vendedor5)
);

//Punto 4
//promedio mensual de ventas

console.log(
  "Promedio mensual de Camila ",
  obtenerPromedioMensual(vendedor1, 0, 1, 2, 3),
  obtenerPromedioMensual(vendedor1, 4, 5, 6, 7),
  obtenerPromedioMensual(vendedor1, 8, 9, 10, 11)
);
console.log(
  "Promedio mensual de Franco ",
  obtenerPromedioMensual(vendedor2, 0, 1, 2, 3),
  obtenerPromedioMensual(vendedor2, 4, 5, 6, 7),
  obtenerPromedioMensual(vendedor2, 8, 9, 10, 11)
);
console.log(
  "Promedio mensual de Sofia ",
  obtenerPromedioMensual(vendedor3, 0, 1, 2, 3),
  obtenerPromedioMensual(vendedor3, 4, 5, 6, 7),
  obtenerPromedioMensual(vendedor3, 8, 9, 10, 11)
);
console.log(
  "Promedio mensual de Matias ",
  obtenerPromedioMensual(vendedor4, 0, 1, 2, 3),
  obtenerPromedioMensual(vendedor4, 4, 5, 6, 7),
  obtenerPromedioMensual(vendedor4, 8, 9, 10, 11)
);
console.log(
  "Promedio mensual de Agustina ",
  obtenerPromedioMensual(vendedor5, 0, 1, 2, 3),
  obtenerPromedioMensual(vendedor5, 4, 5, 6, 7),
  obtenerPromedioMensual(vendedor5, 8, 9, 10, 11)
);

//Punto5
//nombre y monto vendido del mejor vendedor de cada semana

console.log(
  "monto vendido del mejor vendedor de cada semana " + vendedoresSemanal(0)
);
console.log(
  "monto vendido del mejor vendedor de cada semana " + vendedoresSemanal(1)
);
console.log(
  "monto vendido del mejor vendedor de cada semana " + vendedoresSemanal(2)
);
console.log(
  "monto vendido del mejor vendedor de cada semana " + vendedoresSemanal(3)
);
console.log(
  "monto vendido del mejor vendedor de cada semana " + vendedoresSemanal(4)
);
