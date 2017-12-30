import React from 'react';

export default ({ result = {id: '', street: '??', number: '???'}}) => (
  <div className="col-md-6">
    <div className="result panel panel-primary">
      <div class="panel-heading">
        <p class="text-capitalize text-center">
        {result.province} - {result.area} - {result.street} {result.number} {result.extra.piso}{(() => {if (/^\d+$/.test(result.extra.piso)){return 'º';}}).call(this)} {result.extra.dpto}
        </p>
      </div>
      <div class="panel-body">
        <h1 class="text-center">
          <span class="label label-info">${result.valuation}</span>
          {(() => {if (result.surface != 0){return <span class="label label-info">{result.surface}m²</span>;}}).call(this)}
        </h1>
        <h4 class="text-center">
          {(() => {if (result.extra.amb_cocina){return <span class="label label-success">Cocina</span>;}}).call(this)}
          {(() => {if (result.extra.amb_lavadero){return <span class="label label-success">Lavadero</span>;}}).call(this)}
          {(() => {if (result.extra.amb_living){return <span class="label label-success">Living</span>;}}).call(this)}
          {(() => {if (result.extra.amb_patio){return <span class="label label-success">Patio</span>;}}).call(this)}
          {(() => {if (result.extra.amb_comedordiario){return <span class="label label-success">Comedor diario</span>;}}).call(this)}
        </h4>
        <p>
          {(() => {if (result.extra.cantbanos){return "Baños: " + result.extra.cantbanos + " ";}}).call(this)}
          {(() => {if (result.extra.cantdorm){return "Dormitorios: " + result.extra.cantdorm + " ";}}).call(this)}
          {(() => {if (result.extra.cantcocheras){return "Cocheras: " + result.extra.cantcocheras + " ";}}).call(this)}
          {(() => {if (result.extra.cantpisoedif){return "Pisos en el edificio: " + result.extra.cantpisoedif + " ";}}).call(this)}
          {(() => {if (result.extra.cantplantas){return "Plantas: " + result.extra.cantplantas + " ";}}).call(this)}
          {(() => {if (result.extra.antiguedad){return "Antigüedad: " + result.extra.antiguedad + " años ";}}).call(this)}
          {(() => {if (result.extra.disposicion){return "Disposición: " + result.extra.disposicion + " ";}}).call(this)}
          {(() => {if (result.extra.estadoedif){return "Estado edificio: " + result.extra.estadoedif + " ";}}).call(this)}
          {(() => {if (result.extra.estadoinmueble){return "Estado inmueble: " + result.extra.estadoinmueble + " ";}}).call(this)}
          {(() => {if (result.extra.expensas){return "Expensas: $" + result.extra.expensas + ", ";}}).call(this)}
          {(() => {if (result.extra.estadoedif){return "Estado edificio: " + result.extra.estadoedif + " ";}}).call(this)}
          {(() => {if (result.extra.frenteterreno){return "Frente terreno: " + result.extra.frenteterreno + " ";}}).call(this)}
          {(() => {if (result.extra.largoterreno){return "Largo terreno: " + result.extra.largoterreno + " ";}}).call(this)}
          {(() => {if (result.extra.luminosidad){return "Luminosidad: " + result.extra.luminosidad + " ";}}).call(this)}
          {(() => {if (result.extra.orientacion){return "Orientación: " + result.extra.orientacion + " ";}}).call(this)}
          {(() => {if (result.extra.supcub){return "Superficie cubierta: " + result.extra.supcub + " ";}}).call(this)}
          {(() => {if (result.extra.tipoedificio){return "Tipo edificio: " + result.extra.tipoedificio + " ";}}).call(this)}
          {(() => {if (result.extra.tipotecho){return "Tipo techo: " + result.extra.tipotecho + " ";}}).call(this)}

        </p>
      </div>
    </div>
  </div>
);
