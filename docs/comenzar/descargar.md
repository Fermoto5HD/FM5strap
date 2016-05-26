---
layout: docs
title: Descargar
group: comenzar
---

**FM5strap v{{ site.current_version}}** está disponible en dos formatos.

<div class="row m-t-2">
  <div class="col-sm-6">
{% markdown %}
### Servido en bandeja
Sólo te bajás el CSS y JavaScript minificados, listos para aplicarlo en cualquier página. Esto no incluye la documentación ni nada extra. 

{% comment %}
<a href="{{ site.download.dist }}" class="btn btn-primary btn-lg" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download compiled');">Bajar FM5strap</a>
{% endcomment %}
<span class="text-muted">Bajar paquete express</span>
{% endmarkdown %}
  </div>
  <div class="col-sm-6">
{% markdown %}
### Ingredientes y herramientas
El paquete completo: los Sass originales, JavaScript, y documentación incluida. **Requerirá un compilador de Sass, [Autoprefixer](https://github.com/postcss/autoprefixer), y [un poco de instalación adicional]({{ site.baseurl }}/getting-started/build-tools/#tooling-setup).**

<a href="{{ site.download.source }}" class="btn btn-secondary btn-lg" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Bajar paquete completo</a>
{% endmarkdown %}
  </div>
</div>

## Con gestores de dependencias

Incluí los **archivos originales** de FM5strap dentro de cualquier proyecto con alguno de los gestores de dependencias más utilizados. No importa el gestor que vayas a usar, FM5strap al igual que Bootstrap va a **necesitar un compilador de Sass y [Autoprefixer](https://github.com/postcss/autoprefixer)** para una instalación similar acorde a las versiones más recientes.

Como decidí no hacer demasiado público esta variante, será necesario incluir la ruta completa al repositorio para poder usarlo con un gestor de dependencias. 

### Bower

Podrás usar y modificar los Sass y Javascript de FM5strap usando [Bower](http://bower.io).

{% highlight bash %}$ bower install https://github.com/fermoto5hd/fm5strap.git#v{{ site.current_version }}{% endhighlight %}

### npm

Implementá FM5strap en las aplicaciónes basadas en Node usando el [paquete npm](https://www.npmjs.org/package/fm5strap):

{% highlight bash %}$ npm install fm5strap@{{ site.current_version }}{% endhighlight %}

Al declarar `require('fm5strap')` cargará todos los plugins jQuery de Bootstrap en el objeto jQuery. El módulo `fm5strap` por si mismo no exporta nada. Podés cargar manualmente los plugins jQuery de Bootstrap cada uno por separado con cargar los archivos que están en `/js/*.js` dentro de los primeros directorios del paquete.

El `package.json` de FM5strap contiene algunos metadatos extras en estas etiquetas:

- `sass` - ruta hacia el [Sass](http://sass-lang.com/) principal de FM5strap
- `style` - ruta hacia el CSS no minificado de FM5strap que fue precompilado con el formato original (sin personalización agregada

### Meteor

{% highlight bash %}
$ meteor add Fermoto5HD:FM5strap@={{ site.current_version }}
{% endhighlight %}

### Composer

También podés instalar, usar y modificar los Sass y Javascript de FM5strap usando [Composer](https://getcomposer.org):

{% highlight bash %}
$ composer require Fermoto5HD/FM5strap
{% endhighlight %}

### NuGet

Si estás desarrollando en .NET, también podés instalar, usar y modificar los [CSS](https://www.nuget.org/packages/fm5strap/) o [Sass](https://www.nuget.org/packages/fm5strap.sass/) y JavaScript de FM5strap usando [NuGet](https://www.nuget.org):

{% highlight powershell %}
PM> Install-Package fm5strap
PM> Install-Package fm5strap.sass
{% endhighlight %}

## Partes originales de Bootstrap

Este framework está basado en Bootstrap v4. En caso de que necesites usar sólo la grilla, o usar Reboot u otra parte, podés visitar su página y bajar las partes que necesites. 

<a class="btn btn-primary btn-lg" href="http://v4-alpha.getbootstrap.com/getting-started/download#custom-builds">Ir a Bootstrap</a>