---
layout: docs
title: Introducción
group: comenzar
redirect_from: "/comenzar/"
---

FM5strap es, como ya te habré comentado en la página inicial, un framework basado de Bootstrap v4, es decir, tiene la misma base de Bootstrap pero con modificaciones hechas a medida para utilizarlo en los sitios que voy realizando, sin necesidad de tener que copiar un archivo, pegar otro, aplicar los mismos estilos, transportar estos estilos hacia el otro archivo y generar incongruencias de estilos entre uno y otro. 

Este framework tiene la particularidad de priorizar la navegación nocturna, priorizando los fondos oscuros para que no te queme la vista. 

Muy bien. Vamos a los bifes así armás la página al toque. 

## Contenidos

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Vamos de una

Si neceistás arrancar de una con un proyecto y querés usar esta base, tenés que tener instalado Bower y saber distribuir los archivos que necesitás o con Grunt o con Gulp. 

¿No querés instalar mucho? Bajate el archivo comprimido. 
[Descargar FM5strap]({{ site.baseurl }}/getting-started/download)

Y por supuesto, para que funcione el JavaScript de FM5strap es necesario que incluyas antes del mismo, el script de jQuery. 
Te recomiendo que los incluyas al final del documento, más precisamente al cierre de la etiqueta `</body>`. 


{% highlight html %}
<script src="{{ site.cdn.jquery }}"></script>
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

Y eso es todo, estás listo para arrancar a prototipar y programar el sitio con mi framework. Si no tenés ni idea de cómo es la estructura de las páginas te va a venir perfecto que sigas leyendo con la sección "Plantilla de aranque". 

## Plantilla de arranque

Tené en cuenta de tener bien en claro estos conceptos de diseño y desarrollo: 

* Tipo de documento HTML5 
* Forcing Internet Explorer to use its latest rendering mode ([read more](http://stackoverflow.com/q/6771258))
* And, utilizing the viewport meta tag.

Put it all together and your pages should look like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Bootstrap JS. -->
    <script src="{{ site.cdn.jquery }}"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements. Visit the [Layout docs]({{ site.baseurl }}/layout/overview) or [our official examples]({{ site.baseurl }}/examples/) to start laying out your site's content and components.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like including Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements—including generated content via `:before` and `:after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Normalize.css

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices. We further build on this with our own, slightly more opinionated styles with [Reboot]({{ site.baseurl }}/content/reboot/).

## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog]({{ site.blog }}).
- Join [the official Slack room]({{ site.slack }}).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) for the latest gossip and awesome music videos.
