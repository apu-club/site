const template = function(data){

    let raw = `
  <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>APU Talleres</title>
        <link rel="shortcut icon" href="../public/static/logos/APU-icon.png" type="image/png">
        <link rel="stylesheet" href="../public/static/layout.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet">
      </head>
      <body>
        <header id="modeloSubpag">
          <div id="pagPresentacion">
            <h1 class="h1modeloSubpag">TALLERES en el APU</h1>
            <input type="checkbox" id="checkboxHamburguesa" onclick="" name="" value="">
            <label for="checkboxHamburguesa" id="menuON">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <label id="botonLogoModeloSubpag" for="checkboxHamburguesa"></label>
            <img id="LogoApuModeloSubpag" src="../public/static/logos/Logo-APU.png" alt="Logo de Apu">
            <nav class="MenuDesplegable MenuDesplegableModeloSuppag">
      				<ul class="MenuDesplegable1">
                <li><a id="inicio" href="/">INICIO</a>
                </li>
      					<li><a id="actividades" href="#actividades">ACTIVIDADES</a>
                  <ul class="submenu">
                    <li><a href="talleres.html">TALLERES</a></li>
                    <li><a href="">EVENTOS</a></li>
                    <li><a href="">AGENDA</a></li>
                  </ul>
                </li>
      					<li><a id="contenidos" href="#contenidos">CONTENIDOS</a>
      						<ul class="submenu">
      							<li><a href="">YOUTUBE</a></li>
      							<li><a href="">PODSCATS</a></li>
      						</ul>
      					</li>
      					<li><a id="quienes" href="#quienes">QUIENES SOMOS</a>
      						<ul class="submenu">
      							<li><a href="">HISTORIA</a></li>
      							<li><a href="">ASOCIACION</a></li>
                    <li><a href="">COMO CONTRIBUIR</a></li>
      						</ul>
      					</li>
      					<li><a id="contacto" href="/ubicacion">CONTACTO<br>UBICACION</a>
                </li>
      				</ul>
      			</nav>
            <div class="textoUbicacionModelosubpag">
              <p>Ruta 89 s/n - Las Vegas - Potrerillos<br>Mendoza - ARGENTINA<br>
              Mail: <a href="mailto:apuclubdelmonte@gmail.com">apuclubdelmonte@gmail.com</a><br>
              Tel: <a href="tel:+5492613347020">261-3347020</a></p>
            </div>
            <div class="SocialLink">
              <a class="social-link-fb" href="https://www.facebook.com/apuclubsocialydeportivo" target="_blank" rel="noopener"><img src="../public/static/logos/f_logo_RGB-Black_250.png" alt="enlace a Facebook">
              </a>
              <a class="social-link-in" href="http://www.instagram.com/apuclubdemonte" target="_blank" rel="noopener"><img src="../public/static/logos/glyph-logo_May2016.png" alt="enlace a Instagram">
              </a>
              <a id="subscribe-button" href="mailto:apuclubdelmonte@gmail.com">Asociate</a>
            </div>
            <div class="entrada">
              <h2 class="tituloEntrada">Cierre de Talleres de Cerámica 2022</h2>
              <img class="imgPrincipal" src="../public/files/tallerCierreCeramica221202/afiche.jpg" alt="afiche del taller">
              <p class="contenidoEntrada">Algunas fotos de lo que fue el cierre de los talleres de cerámica de adultos y la niñez.<br>
                Hubo exposición de piezas realizadas durante el año y varias actividades. <br>
                Compartimos con ustedes este hermoso momento vivido!!</p>
              <div id="sliderModelo">
                  <img id="foto1" src="../public/files/imgFrontpage/0.jpg" alt="img 1">
                  <img src="https://drive.google.com/file/d/1U57IXPCrvNs5-aZJhH1o1zCOcMqSl_Cn/view?usp=share_link" alt="img 2: No anda. esta es la img copiada del enlace que da drive para compartir">
                  <img src="https://drive.google.com/uc?export=view&id=1U57IXPCrvNs5-aZJhH1o1zCOcMqSl_Cn" alt="img 3: esta es con el enlace transformado usando el ID">
                  <img src="https://drive.google.com/uc?id=16LHPctU7y6qZJZIDJ8DrcFPVVybPB-N5&export=download" alt="ESTA ES LA BUENA---img 4: enlace con direct link de Drive Explorer en hoja calculo drive">
                  <img src="https://drive.google.com/uc?id=16LHPctU7y6qZJZIDJ8DrcFPVVybPB-N5&export=view" alt="img 5: enlace con previuw link de Drive Explorer en hoja calculo drive">
              </div>
              <div class="text">
                <p id="demo"></p>
              </div>
            </div>
          </div>
        </header>
        <script type="text/javascript" src="/public/static/scripts/sliderModeloJSON.js"></script>
        <script type="text/javascript" src="/public/static/scripts/scriptCreadorDeFotosJson.js"></script>
      </body>
    </html>
    `;
    return raw;
}

module.exports = template;
