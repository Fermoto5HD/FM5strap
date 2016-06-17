---
layout: docs
title: Accesibilidad
group: comenzar
---

Al igual que Bootstrap, FM5strap sigue estándares web y con un mínimo esfuerzo extra se pueden armar páginas que sean accesibles para aquellos que usan <abbr title="Tecnología Asistida" class="initialism">TA</abbr>.

## Requerimientos en los componentes

Algunos elementos en común en HTML son siempre utilizados con algunos agregados de accesibilidad básicas mediante `role`s y atributos Aria. 
Abajo hay un listado de algunos de los más usados. 

{% callout info %}
**Atención** Esto se va a ir actualizando conforme a cómo de vaya actualizando Bootstrap v4, quizás en alguna futura release del proyecto original se incluya el listado completo. 
{% endcallout %}

### Botoneras agrupadas

Para hacer que las tecnologías asistidas detecten las series de botoneras agrupadas es necesario agregar un `role` apropiado. Para las botoneras agrupadas normales será `role="group"`, mientras que para las ubicadas en navbars o en barras de herramientas será `role="toolbar"`. 

También los grupos y barras tienen que tener un label explícito, sino la mayoría de las tecnologías asistidas no podrían hacer mención de esos componentes, por más que hayas puesto el atributo correcto en `role`. En los ejemplos que están acá usamos `aria-label` aunque también se puede usar `aria-labelledby`. 

## Saltar navegación

Si tu menú de navegación tiene muchos links y está puesto antes del contenido principal de la página, agregá un link de `Saltar al contenido principal` antes del menú de navegación (si querés saber el porqué de esto visitá el [artículo del Proyecto A11Y sobre el saltar los links de navegación (en inglés)](http://a11yproject.com/posts/skip-nav-links/)). Usando la clase `.sr-only` ocultará visualmente el link para saltar, y la clase <code>.sr-only-focusable</code> te va a asegurar que ese link se hará visible una vez seleccionado en pantalla (para usuarios con teclados especiales).

{% callout danger %}
Due to long-standing shortcomings/bugs in Chrome (see [issue 262171 in the Chromium bug tracker](https://code.google.com/p/chromium/issues/detail?id=262171 "Chromium bug tracker - Issue 262171: Focus should cycle from named anchor")) and Internet Explorer (see this article on [in-page links and focus order](http://accessibleculture.org/articles/2010/05/in-page-links/)), you will need to make sure that the target of your skip link is at least programmatically focusable by adding `tabindex="-1"`.

In addition, you may want to explicitly suppress a visible focus indication on the target (particularly as Chrome currently also sets focus on elements with `tabindex="-1"` when they are clicked with the mouse) with `#content:focus { outline: none; }`.

Note that this bug will also affect any other in-page links your site may be using, rendering them useless for keyboard users. You may consider adding a similar stop-gap fix to all other named anchors / fragment identifiers that act as link targets.
{% endcallout %}

{% highlight html %}
<body>
  <a href="#content" class="sr-only sr-only-focusable">Saltar al contenido principal</a>
  ...
  <div class="container" id="content" tabindex="-1">
    <!-- El contenido principal -->
  </div>
</body>
{% endhighlight %}

## Encabezados tabulados

Al tabular los encabezados (`<h1>` - `<h6>`), el encabezado principal de la página tiene que ser un `<h1>`. Los encabezados que le siguen tienen que estar ordenados según su prioridad en el rango de los `<h2>` - `<h6>` así los screen readers pueden armar correctamente una tabla de contenidos para las páginas.

Podés saber más en [HTML CodeSniffer (en inglés)](http://squizlabs.github.io/HTML_CodeSniffer/Standards/Section508/) y en [Penn State's Accessability (en inglés)](http://accessibility.psu.edu/headings).

## Recursos adicionales (en inglés) 

- ["Documentación de accesibilidad de Bootstrap"](http://v4-alpha.getbootstrap.com/getting-started/accesibility)
- [Bookmarklet "HTML Codesniffer" para identificar problemas de accesibilidad](https://github.com/squizlabs/HTML_CodeSniffer)
- [El Proyecto A11Y](http://a11yproject.com/)
- [Documentación de accesibilidad de MDN](https://developer.mozilla.org/en-US/docs/Accessibility)
