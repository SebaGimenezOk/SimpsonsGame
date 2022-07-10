var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["flanders.png", "apu.png"],
  ["lisa.png", "fish.png"],
  ["krusty.png", "profesor.png", "moe.png", "monty.png"],
  ["ayudante.png", "otto.png", "homero.png", "marge.png"],
  ["troy.png", "milhouse.png", "tony.png", "rafa.png"],
];

var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 12,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 16,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
  },
];


