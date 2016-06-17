---
layout: docs
title: Browsers y dispositivos
group: comenzar
---

FM5strap soporta una gran variedad de browsers modernos y dispositivos, junto con algunos más viejos. Mirá cuales son los que son soportados, cómo hacerlos soportar en caso de no tener soporte y los errores conocidos en casos específicos..

## Contenidos

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Browsers soportados

FM5strap soporta las **últimas versiones estables** de la mayoría de los browsers y plataformas. En Windows **soporta Internet Explorer 9, 10 y 11, y Microsoft Edge**. Abajo hay más información específica del soporte de este framework. 

### Mobile

FM5strap soporta las últimas versiones de los browsers más utilizados en celulares. 

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Opera</th>
        <th>Safari</th>
        <th>Android Browser &amp; WebView</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Android</th>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-danger">No soportado</td>
        <td class="text-muted">Desconocido</td>
        <td class="text-success">Android v5.0+</td>
      </tr>
      <tr>
        <th scope="row">iOS</th>
        <td class="text-success">Soportado</td>
        <td class="text-muted">Desconocido</td>
        <td class="text-danger">No soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-muted">Desconocido</td>
      </tr>
    </tbody>
  </table>
</div>

### Escritorio

Situación similar, las últimas versiónes de los browser de escritorio están soportados. 

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <td></td>
        <th>Chrome</th>
        <th>Firefox</th>
        <th>Internet Explorer</th>
        <th>Microsoft Edge</th>
        <th>Opera</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Mac</th>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-muted">Desconocido</td>
        <td class="text-muted">Desconocido</td>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
      </tr>
      <tr>
        <th scope="row">Windows</th>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-success">Soportado</td>
        <td class="text-danger">No soportado</td>
      </tr>
    </tbody>
  </table>
</div>

Para Firefox, aparte del soporte en las últimas versiones estables, también soporta la última [Versión de Soporte Extendido (ESR)](https://www.mozilla.org/en-US/firefox/organizations/faq/) de Firefox.

Extraoficialemente, FM5strap debería verse y andar bien en Chromium y Chrome para Linux, Firefox para Linux e Internet Explorer 8 y demás, por más que no estén soportados oficialmente. 

Podés ver un listado de algunos de los errores en browsers que FM5strap y Bootstrap tiene que lidiar en el [Muro de errores de los browsers]({{ site.baseurl }}/browser-bugs/).

## Internet Explorer 9

Internet Explorer 9 está apenas soportado, igualmente fijate que hay algunas propiedades CSS3 y elementos HTML5 que no los soporta del todo.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Propiedad</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"><code>border-radius</code></a></th>
        <td class="text-success">Soportado</td>
      </tr>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"><code>box-shadow</code></a></th>
        <td class="text-success">Soportado</td>
      </tr>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"><code>transform</code></a></th>
        <td class="text-success">Soportado, con el prefijo <code>-ms</code></td>
      </tr>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition"><code>transition</code></a></th>
        <td class="text-danger">No soportado</td>
      </tr>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a></th>
        <td class="text-danger">No soportado</td>
      </tr>
      <tr>
        <th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">Flexbox</a></th>
        <td class="text-danger">No soportado</td>
      </tr>
    </tbody>
  </table>
</div>

Entrá en [Can I use...](http://caniuse.com/) para más detalles de qué funciones anda y cuales no anda en el browser.

## Soporte Internet Explorer 8

Bootstrap v4 no soporta más IE8, por lo tanto FM5strap tampoco lo soporta. **Si necesitás usar esa asquerosa versión del infierno podés usar Bootstrap v3** el cual seguirá siendo soportado por un tiempo más pero no se agregará nada nuevo. 

Aunque, podés agregar un poco de scripts extra para que FM5strap sea soportado por IE8. Vas a necesitar esto:

* [The HTML5 shiv](https://en.wikipedia.org/wiki/HTML5_Shiv)
* [Respond.js](https://github.com/scottjehl/Respond)
* [Rem unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

No habrá soporte para esto, aunque podés obtener un poco de ayuda de la comunidad en [el canal de Slack de Bootstrap]({{ site.slack }}).

**Aunque... no te parece mejor presionar al usuario a que cambie ese horrendo navegador?**

## Modos de compatibilidad de IE

Por supuesto, FM5strap no soporta los modos de compatibilidad anteriores de Internet Explorer. Por las dudas, fijate de estar usando el renderizador más reciente para IE, y considerá el uso de la etiqueta `<meta>` en el código: 

{% highlight html %}
<meta http-equiv="X-UA-Compatible" content="IE=edge">
{% endhighlight %}

Confirmá el modo de visualización abriendo el inspector de elementos presionando <kbd>F12</kbd> y verificando en "Modo de visualización".

Esta etiqueta está en toda la documentación y ejemplos para asegurarte de que se renderiza lo mejor posible en cada versión soportada de Internet Explorer. 

Mirá [esta pregunta en StackOverflow](https://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge) para más información.

## Internet Explorer 10 en Windows Phone 8

Internet Explorer 10 en Windows Phone 8 con versiones anteriores a la [Update 3 (a.k.a. GDR3)](http://blogs.windows.com/windows_phone/b/wpdev/archive/2013/10/14/introducing-windows-phone-preview-for-developers.aspx) no diferencia el **ancho del dispositivo** del **ancho del viewport** en las reglas `@-ms-viewport`, y esto hace que los media queries (tanto de los CSS de FM5strap como el de Bootstrap) no se apliquen correctamente. Para solventarlo, tenés que **incluir el siguiente Javascript para solventar el bug**.

{% highlight js %}
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}
{% endhighlight %}

Para más información y lineamientos de uso, leé [Windows Phone 8 y el ancho de dispositivo (en inglés)](http://timkadlec.com/2013/01/windows-phone-8-and-device-width/).

Como aclaración, incluyo esto en to(ooo)da la documentación y ejemplos de FM5strap para demostraciones. 

## Modals, navbars, y teclados virtuales

### Overflow y scrolling

El soporte de `overflow: hidden;` en el elemento `<body>` es un poco limitado en iOS y en Android. Para ese fin, cuando scrolleás por arriba o por abajo de un modal en cualquiera de los browsers de esos dispositivos, el contenido de `<body>` comenzará a scrollearse.

### Teclados virtuales

Además, si estás usando una barra anclada o usando inputs en un modal, en iOS se va a renderizar mal porque no actualiza la posición de los elementos anclados o fixeados al activarse el teclado virtual. Unos ligeros métodos para corregirlo es transformar los elementos a `position: absolute` o llamar un temporizador para corregir la posición en forma manual mediante Javascript. Esto no está incorporado ni en FM5strap ni en Bootstrap, asi que tendrás que ver qué solución vas a tomar para el caso que estés manejando. 

### Menús contextuales en los Navbar

El elemento `.dropdown-backdrop` no es utilizado en iOS en los nav por la complejidad al momento de ordenarlo en el eje z (o z-indexing). Sumado a que para cerrar los dropdowns en los navbars tenés que hacer click en el elemento del dropdown (o [cualquier otro elemento que ejecute un evento de click (en inglés)](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile)).

## Browser zooming

El zoom en las páginas inevitablemente presenta problemas al renderizar algunos componentes, tanto en FM5strap como en el resto de la web. Dependiendo del problema, puede ser posible arreglarlo (primero buscalo en el tracker y luego abrí un issue en caso de ser necesario, en el repositorio de Bootstrap). Aunque, generalmente se tiende a omitir los issues referidos a este problema ya que el equipo de Bootstrap lo intenta solventar con algunos trucos de CSS al no encontrar una solución directa.

## `:hover`/`:focus` pegados en mobile 
Por más que el hovering real no sea posible en la mayoría de las pantallas táctiles, muchos browsers mobile emulan un soporte de hovering y hacen que el `:hover` quede como "pegado". En otras palabras, los estilos para `:hover` se aplican después de tocar un elemento y esos estilos con hover se van cuando tocás en otro elemento. En sitios del estilo mobile-first este error es normalmente indeseable.

FM5strap y Bootstrap incluyen un arreglo para esto, por más que esté desactivado por defecto. Con setear `$enable-hover-media-query` en `true` cuando lo compilás en Sass, FM5strap usará [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim) para deshabilitar los estilos `:hover` en browsers que emulan el hovering, y previenen que los estilos `:hover` se queden "pegados". 

## Imprimiendo

Incluso en algunos browsers modernos la impresión puede ser un problemita. 

En particular, como Chrome v32 y su configuración de márgenes, Chrome usa un ancho de viewport bastante chico comprarado al tamaño de papel al momento de resolver las media queries al querer imprimir una página web. Esto puede resultar en que los elementos `col-xs-??` se activen de la nada al momento de imprimir. [Ver bug #12078 de Bootstrap para más detalles.](https://github.com/twbs/bootstrap/issues/12078) Algunas soluciones:

Also, as of Safari v8.0, fixed-width <code>.container</code>s can cause Safari to use an unusually small font size when printing. See <a href="https://github.com/twbs/bootstrap/issues/14868">#14868</a> for more details. One potential workaround for this is adding the following CSS:

{% highlight css %}
@media print {
  .container {
    width: auto;
  }
}
{% endhighlight %}

## Browser stock (o de fábrica) de Android

En Android 4.1 (y en algunas versiones más recientes de Android también) vienen con un Browser o Navegador integrado de fábrica. Desafortunadamente, tiene un montón de bugs e inconsistencias con el CSS en general.

#### Menú Select

En los elementos `<select>`, el browser de fábrica (o stock) de Android no podría mostrar los controles del costado si hay un  `border-radius` y/o un `border` aplicado. (Sino mirá [esta pregunta en StackOverflow](https://stackoverflow.com/questions/14744437/html-select-box-not-showing-drop-down-arrow-on-android-version-4-0-when-set-with) para más detalles.) Usá el extracto de código de acá debajo para sacar el CSS conflictivo y renderizar el `select` como un elemento sin estilo alguno en el browser de fábrica (o stock) de Android. El cambio del user agent evita interferencias con los browsers Chrome, Safari, y Mozilla.

{% highlight html %}
<script>
$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
</script>
{% endhighlight %}

¿Querés ver un ejemplo? [Miralo en esta demo en JS Bin.](http://jsbin.com/OyaqoDO/2)

## Validadores

Para ofrecer la mejor experiencia de navegación para los browsers viejos y recontra bugueados (hola Internet Explorer), FM5strap y Bootstrap usa [CSS browser hacks](http://browserhacks.com) en lugares puntuales para hacer bypass a algunos bugs de CSS en algunos browsers y mostrarlos correctamente. Estos hacks por algún motivo hacen que los validadores de CSS hinchen un poco diciendo que son inválidos. En un par de lugares usa también características de bleeding-edge en los CSS que aún no fueron estandarizados pero que son usados puramente para mejorarlos progresivamente.

Estas advertencias de validación no importan mucho en la práctica desde que la part sin hack del CSS no valida totalmente y la parte con hack no interfiere con el funcionamiento correcto de la parte sin hack, siendo este el motivo del porqué se ignoran estas advertencias puntuales. 

La documentación HTML tiene algunas advertencias de validación triviales e interconsecuenciales debido a la inclusión de un pequeño arreglo para [un error puntual en Firefox (en inglés)](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
