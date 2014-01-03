<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="¿Tu banco calcula correctamente tu hipoteca? Descubre qué fallo se comete habitualmente">
    <link rel="shortcut icon"  type="image/png" href="img/favicon.png">

    <title>Cálculo de hipoteca</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
	<link href='http://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700' rel='stylesheet' type='text/css'>  		
    <link href="css/estilo.css" rel="stylesheet">
	<script type="text/javascript" src="js/guion.js"></script>
  </head>

  <body>
  
     <!-- Wrap all page content here -->
    <div id="wrap">
  <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
          <ul class="nav navbar-nav">
                <li><a href="index.html.es#menuinicio"><span class="glyphicon glyphicon-home"></span> Volver al inicio</a></li>
                <li class="hidden-xs"><a href="index.html.es#menucalculo"><span class="glyphicon glyphicon-usd"></span> Aplicaciones de cálculo</a></li>
                <li class="hidden-xs"><a href="index.html.es#menufaq"><span class="glyphicon glyphicon-question-sign"></span> Preguntas frecuentes</a></li>
          </ul>

      </div>
    </div>
 
     <section id="menuinicio" class="seccion_calculadora">
    <div class="tablaCentrada">
 
      <center><h1>Cálculo de hipoteca</h1></center>
    
    <div id="contenido" > 
      <form id="formulario" method="post" action="calculoCuota.html" enctype="x-www-form-urlencoded">
        <table    >
          <tr> 
            <td> Capital </td>
            <td> <input type="text" name="capital" id="capital"/> </td>
          </tr>
          <tr> 
            <td> Duración </td>
            <td> <input type="text" name="duracion" id="duracion"/> </td>
          </tr>
          <tr> 
            <td> Interés </td>
            <td> <input type="text" name="interes" id="interes"/> </td>
          </tr>
          <tr> 
            <td colspan="2"> <br><input type="submit" class="btn btn-default" value="Enviar" name="bEnviar" id="bEnviar" onclick="enviar();return false;"/> 
							 <input type="hidden" name="idioma" id="idioma" value="es"/>	</td>
          </tr>  
        </table> 
      </form>
      </div>
      </section>
      <section class="seccion_calculadora">
      
      <div class="container">
     
	  <div id="resultado" style="display:none">

       <div class="container" id="menufaq">
       <div class="col-sm-6">
        <table class="table"  >
          <thead>
          <tr> 
            <td></td>
            <th> Interés anual </th>
            <th> Cuota mensual </th>
          </tr>
          </thead>
          <tbody>
          <tr> 
            <th> Hipoteca correcta </th>
            <td id="interesC"> _ </td>
            <td id="cuotaC"> _ </td>
          </tr>
          <tr> 
            <th> Hipoteca bancaria </th>
            <td id="interesB"> _ </td>
            <td id="cuotaB"> _ </td>
          </tr> 
          </tbody>
        </table>
        </div>
          <div class="col-sm-6">     
        <table  class="table">
        <thead>
          <tr>  
            <td></td>
            <th>Anual</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Pago extra</th>
            <td id="pagoA">_</td>
            <td id="pagoT">_</td>
          </tr>
          </tbody>
        </table>
           </div>
</div><br><br>
<div class="container">
<div class="col-sm-6">

              <table  class="table table-responsive table-condensed table-striped"  id="correcta">
<tbody>
              <tr>    
        
                <th colspan="5">Tabla correcta</th>
              </tr>
              <tr>
                <th> Año </th>
                <th> Mes </th>
                <th> Deuda </th>
                <th> Amortización </th>
                <th> Intereses </th>
              </tr>


</tbody>
              </table>
 </div>
 <div class="col-sm-6">  
            <table  class="table table-responsive table-condensed table-striped"  id="bancaria">
<tbody>
              <tr>
              <th colspan="6">Tabla bancaria</th>
              </tr>
              <tr>
                <th> Año </th>
                <th> Mes </th>
                <th> Deuda </th>
                <th> Amortización </th>
                <th> Intereses </th>
                <th>I.D.I.</th>
              </tr>
<tbody>
              </table>
              * I.D.I.: Intereses sobre deuda más los intereses pagados en el año          

      </div>
      </div>
	</div>
    </div>
	
			
  </div>
  </section>
  </div>
  </body>




</html>
