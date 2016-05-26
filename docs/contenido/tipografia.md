---
layout: docs
title: Tipografia
group: contenido
---

FM5strap usa **Open Sans** como tipografía principal del framework y la misma es de código abierto. Actualmente estoy estudiando en cambiarla a **Gidole**, también de código abierto. 
Este framework, al igual que Bootstrap, incluye lineamientos determinados para armar encabezados, párrafos, listas y más. Para personalizarlo aún más leé las [clases útiles para textos]({{ site.baseurl }}/components/utilities/).

## Contenidos

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Global settings

Bootstrap sets basic global display, typography, and link styles. Specifically, we:

- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default)
- Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base
- Set the global link color via `$link-color` and apply link underlines only on `:hover`

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`.


## Encabezados

Todos los encabezados en HTML, desde `<h1>` hasta `<h6>`, están disponibles. También están disponibles en formato de clases, desde `.h1` hast `.h6`, para cuando querés hacer que el texto siga siendo del tipo inline pero que contenga un estilo de encabezado.

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><h1>h1. Encabezado de FM5strap</h1></td>
        <td class="type-info">Seminegrita a 36px</td>
      </tr>
      <tr>
        <td><h2>h2. Encabezado de FM5strap</h2></td>
        <td class="type-info">Seminegrita a 30px</td>
      </tr>
      <tr>
        <td><h3>h3. Encabezado de FM5strap</h3></td>
        <td class="type-info">Seminegrita a 24px</td>
      </tr>
      <tr>
        <td><h4>h4. Encabezado de FM5strap</h4></td>
        <td class="type-info">Seminegrita a 18px</td>
      </tr>
      <tr>
        <td><h5>h5. Encabezado de FM5strap</h5></td>
        <td class="type-info">Seminegrita a 14px</td>
      </tr>
      <tr>
        <td><h6>h6. Encabezado de FM5strap</h6></td>
        <td class="type-info">Seminegrita a 12px</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<h1>h1. Encabezado de FM5strap</h1>
<h2>h2. Encabezado de FM5strap</h2>
<h3>h3. Encabezado de FM5strap</h3>
<h4>h4. Encabezado de FM5strap</h4>
<h5>h5. Encabezado de FM5strap</h5>
<h6>h6. Encabezado de FM5strap</h6>
{% endhighlight %}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.

{% example html %}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endexample %}

## Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style.

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><h1 class="display-1">Display 1</h1></td>
      </tr>
      <tr>
      <td><h1 class="display-2">Display 2</h1></td>
      </tr>
      <tr>
      <td><h1 class="display-3">Display 3</h1></td>
      </tr>
      <tr>
      <td><h1 class="display-4">Display 4</h1></td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
{% endhighlight %}

## Lead

Make a paragraph stand out by adding `.lead`.

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

## Elementos para textos en inline

Algunos estilos para textos en línea con tags HTML5.

{% example html %}
<p>Podés usar la etiqueta mark para <mark>resaltar</mark> textos.</p>
<p><del>Esta línea debería estar tachada.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>Esta línea tiene que estar renderizada con un subrayado.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>Esta línea tiene que estar renderizada en negrita.</strong></p>
<p><em>Esta línea tiene que estar en cursiva.</em></p>
{% endexample %}

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a `title` attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{% example html %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endexample %}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{% example html %}
<blockquote class="blockquote">
  <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{% example html %}
<blockquote class="blockquote">
  <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### Reverse layout

Add `.blockquote-reverse` for a blockquote with right-aligned content.

{% example html %}
<blockquote class="blockquote blockquote-reverse">
  <p class="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

## Listados

### Sin estilo

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{% example html %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Inline

Place all list items on a single line with `display: inline-block;` and some basic margin between.

{% example html %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endexample %}

### Horizontal description

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{% example html %}
<dl class="dl-horizontal">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd class="col-sm-9 col-sm-offset-3">Donec id elit non mi porta gravida at eget metus.</dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
{% endexample %}

## Responsive typography

*Responsive typography* refers to scaling text and components by simply adjusting the root element's `font-size` within a series of media queries. Bootstrap doesn't do this for you, but it's fairly easy to add if you need it.

Here's an example of it in practice. Choose whatever `font-size`s and media queries you wish.

{% highlight scss %}
html {
  font-size: 14px;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 16px;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 20px;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 28px;
  }
}
{% endhighlight %}
