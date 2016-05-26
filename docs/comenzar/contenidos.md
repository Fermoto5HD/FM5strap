---
layout: docs
title: Contenido
group: comenzar
---

FM5strap puede venir en uno o dos formatos, como código precompilado o como código original. Learn more about each flavor's contents and structure below. Remember, no matter the implementation flavor, **Bootstrap's JavaScript plugins require jQuery**.

## FM5strap precompilado

Una vez descargado extraé los archivos y vas a ver esta disposición de directorios: 

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. -->

{% highlight bash %}
fm5strap/
├── css/
│   ├── fm5strap.css
│   ├── fm5strap.css.map
│   ├── fm5strap.min.css
│   └── fm5strap.min.css.map
└── js/
    ├── fm5strap.js
    └── fm5strap.min.js
{% endhighlight %}

This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`bootstrap.*.map`) are available for use with certain browsers' developer tools.

## FM5strap original

El código original de FM5strap incluye los assets CSS y Javascript ya precompilados, junto con los Sass, Javascript y documentación original. Más específicamente, se incluye esto y más: 

{% highlight bash %}
fm5strap/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └── examples/
├── js/
└── scss/
{% endhighlight %}

Los directorios `scss/` y `js/` son los códigos base para el CSS y Javascript finales. El directorio `dist/` incluye todo lo listado en la sección FM5strap compilado. El directorio `docs/` incluye el código base para la documentación del framework, y `examples/` con ejemplos de uso o para arrancar ya de una con una de esas plantillas. Y, aparte de lo mncionado, también se incluyen archivos que permiten la instalación de paquetes, gestores de desarrollo y automaización, y la licencia.