function Usuario2(
  nombre,
  apellidoP,
  apellidoM,
  rutNumero,
  rutDV,
  telefono,
  email,
  presupuesto
) {
  //Propiedades Privadas # _ $ => Corresponde a Encapsulamiento

  this._nombre = nombre;
  this._apellidoP = apellidoP;
  this._apellidoM = apellidoM;
  this._rutNumero = rutNumero;
  this._rutDv = rutDV;
  this._telefono = telefono;
  this._email = email;
  this._presupuesto = presupuesto;
  this._gastos = [];

  //Métodos públicos de accesibilidad y modiciación (getters y setters)

  //getters
  this.getNombreCompleto = function () {
    return `${this._nombre} ${this._apellidoP} ${this._apellidoM}`;
  };

  this.getNombre = function () {
    return this._nombre;
  };

  this.getApellidoPaterno = function () {
    return this._ApellidoP;
  };

  this.getApellidoMaterno = function () {
    return this._ApellidoM;
  };

  this.getEmail = function () {
    return this._email;
  };

  this.getTelefono = function () {
    return this._telefono;
  };

  this.getPresupuesto = function () {
    return this._presupuesto;
  };

  this.getGastos = function () {
    return this._gastos;
  };

  this.getRut = function () {
    return `${this._rutNumero}-${this._rutDv}`;
  };

  //Setters
  this.setNombre = function (nuevoNombre) {
    //validacion pendiente
    this._nombre = nuevoNombre;
  };

  this.setApellidoP = function (nuevoApellidoP) {
    //validacion pendiente
    this._apellidoP = nuevoApellidoP;
  };

  this.setApellidoM = function (nuevoApellidoM) {
    //validacion pendiente
    this._apellidoM = nuevoApellidoM;
  };
  this.setEmail = function (nuevoEmail) {
    //validacion pendiente
    this._email = nuevoEmail;
  };

  this.setTelefono = function (nuevoTelefono) {
    //validacion pendiente
    this._telefono = nuevoTelefono;
  };

  this.setPresupuesto = function (nuevoPresupuesto) {
    //validacion pendiente
    this._presupuesto = nuevoPresupuesto;
  };

  this.setGastos = function (nuevoGastos) {
    //validacion pendiente
    this._gastos = nuevoGastos;
  };

  this.setRut = function (nuevoRut) {
    //validacion pendiente
    this._rut = nuevoRut;
  };
}
/* 
const usuario2 = {};

usuario2._nombre = "Alejandro";
usuario2._apellidoP = "Beristain";
usuario2._apellidoM = "Araya"; */

const usuario2 = new Usuario2('Alejandro', 'Beristain', 'Araya')
console.log(usuario2);