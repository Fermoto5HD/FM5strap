---
layout: docs
title: Codigo
description: Estilos para agregar porciones pequeñas o grandes de código. 
group: contenido
---

## Contenidos

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Alineado con el texto

Podés escribir pedazos de código en una misma línea de texto usando `code`. Para escapar las aperturas y cierres de las etiquetas HTML usá `&lt;` y `&gt;`.

{% example html %}
Por ejemplo, <code>&lt;section&gt;</code> tendría que mostrarse como código en línea con este texto.
{% endexample %}

## Bloques de código

Usá la etiqueta `<pre>` para usar múltiples líneas de código. Once again, be sure to escape any angle brackets in the code for proper rendering. You may optionally add the `.pre-scrollable` class, which will set a max-height of 350px and provide a y-axis scrollbar.

{% example html %}
<pre>&lt;p&gt;Un poco de texto de ejemplo acá...&lt;/p&gt;</pre>
{% endexample %}

## Variables

Para indicar variables podés usar la etiqueta `<var>`.

{% example html %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endexample %}

## Teclas

Usá la etiqueta `<kbd>` para indicar el uso de teclas.

{% example html %}
Para cambiar de directorio tipeá <kbd>cd</kbd> seguido del nombre del directorio al que te vas a mover.<br>
Para cambiar las opciones presioná <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endexample %}

## Sample output

For indicating blocks sample output from a program use the `<samp>` tag.

{% example html %}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{% endexample %}
