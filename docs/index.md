---
lang: en-US

title: Crazy Title

description: Description of this page
---

<!-- Esto de arriba es un "frontmatter" -->

<!-- https://v2.vuepress.vuejs.org/reference/frontmatter.html -->

# Hola mundillinO
Sepamos que esto es una librería tipo SSG (static site generators) que puede generar html a partir de markdown. Además por ser de vue soporta componentes de vue enteros con css y js si queremos en medio de los archivitos estos.

## Comienzo

### Tablilla
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

~~This was mistaken text~~

[LINK DE PRUEBA a más LINKS](./guide/markdown.md)

Prueba de emojis
VuePress 2 is out :tada: !
Hola
Anda pero no en red así es la vida

<!-- Tabla de contenidos con toc -->
[[toc]]

### Código como string
<!-- Lo que sigue NO es código a ejecutar -->
<!-- si no un string que se muestra con highlighting -->
<!-- en las lineas 1, y de 6 a 8 como mencionado -->
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

### Comparacion con numeros de linea y sin
```ts
// line-numbers is enabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### Compilacion del codigo versus no compilar
(v-pre vs :no-v-pre)
```md
<!-- This will be kept as is by default -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- This will be compiled by Vue -->
<!-- :no-v-pre -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### Traer código de otros archivos para renderizarlo únicamente
Podemos traer todo el código
<!-- minimal syntax -->
@[code](../foo.js)
O bien una parte nomás.
Si colocamos explícitamnete el tipo de archivo lo interpeta mejor
@[code{1-2} js](../foo.js)

Por último el más complicado, línea 1 a 2, javascript, highlight linea 2
"@[code{1-2} js{1}:no-line-numbers](../foo.js)"
@[code{1-2} js{1}:no-line-numbers](../foo.js)


## Usando Vue en markdown

### Template syntax con llaves
Markdown soporta html. Vue template es html con atributos custom.
Entonces markdown soport vue template.

`One plus one equals: {{ 1 + 1 }}`

One plus one equals: {{ 1 + 1 }}

### Elemento span con v-for
`<span v-for="i in 3"> span: {{ i }} </span>`

<span v-for="i in 3"> span: {{ i }} </span>

### Vue component EN markdown (tremendo)

```This is default theme built-in `<Badge />` component <Badge text="demo" />```

This is default theme built-in `<Badge />` component <Badge text="demo" />


_Hello, {{ msg }}_

<RedDiv>

_Current count is: {{ count }}_

</RedDiv>

<button @click="count++">Click Me!</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Vue in Markdown'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>

@[code vue](./components/test.vue)

## Asset handling

### URL relativas
Se manejan con el "./". Son carpetas relativas únicamente y está ok!
![An image](./image.png)

### Public Files
Bueno son copiados en el deployment junto con el html y js de output en una misma carpeta.
Es IGUAL que vue todo esto. Esta dentro de .vuepress/public la carpeta publica, y se accede con "/" a secas.

![VuePress Logo](/images/hero.png)

### BASE
Igual que vue, en config.js debemos colocar la base.
Hay un temita que después no busca bien la BASE (por ej agux.gihub.com/labase).
En vez de import.meta.env.base, vuepress nos da el método "withBase" para usar desde un html por ej
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">

### Aliases
Alias de paths, los definimos en el config.js

```ts
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  alias: {
    '@imagenes_publicas': path.resolve(__dirname, './public/images'),
  },
}
```
![Image from path alias](@imagenes_publicas/hero.png)

### Diferentes Idiomas / Locales
