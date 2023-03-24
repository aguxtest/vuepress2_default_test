import{_ as m,M as a,p as v,q as h,R as i,t as e,O as n,V as t,a1 as o}from"./framework-24a298fe.js";const g={},b=i("h2",{id:"a-ver",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#a-ver","aria-hidden":"true"},"#"),e(" A ver")],-1),_=i("p",null,"que onda esto no tiene niiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiiiniiiiiiii",-1),f=i("h2",{id:"badges",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#badges","aria-hidden":"true"},"#"),e(" Badges")],-1),y=i("p",null,"Botoncitos al lado del texto",-1),k=o(`<h3 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a> Custom containers</h3><p>Unas barritas de contenedores con cosas muy útiles que se colocan con una sintaxis especial de 3 colons. Es un plugin</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a dangerous warning with dangerous code</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><details class="custom-container details"><p>This is a details block</p></details>`,6),x=i("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[i("pre",{class:"language-typescript"},[i("code",null,[i("span",{class:"token keyword"},"const"),e(" foo "),i("span",{class:"token operator"},"="),e(),i("span",{class:"token string"},"'foo'"),e(`
`)])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"})])],-1),q=i("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[i("pre",{class:"language-typescript"},[i("code",null,[i("span",{class:"token keyword"},"const"),e(" bar "),i("span",{class:"token operator"},"="),e(),i("span",{class:"token string"},"'bar'"),e(`
`)])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"})])],-1),P=i("ul",null,[i("li",null,"Agregar una searchbox con el plugin")],-1),w=o(`<h2 id="reemplazando-componentes-nativos" tabindex="-1"><a class="header-anchor" href="#reemplazando-componentes-nativos" aria-hidden="true">#</a> Reemplazando componentes nativos</h2><p>No he podido pisar por ejemplo &quot;hero.vue&quot; yo. Hay 2 formas, una es ir a client.js y editarlo y darle</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;./layouts/Layout.vue&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>y en config</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    Layout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Entonces con esto definimos un layout después en el que podemos pisar con un div y una clase, ALGUNOS componentes como navbar, sidebar y footer (están en el archivo listado el cómo se puede pisar). El footer es sobretodo útil porque las páginas normales (no de tipo home) no tienen footer.</p><p>La otra es reemplazar los componentes nativos que son componentes de vue meramente con un alias. Vamos a config.js y pondríamos en defineUserConfig sin importar nada nuevo</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token string-property property">&#39;@theme/HomeFooter.vue&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components/client/components/HomeFooterCustom.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Acá estoy pisando con @theme los componentes nativos, en este un HomeFooter.vue con un HomeFooterCustom.vue . La idea sería copiar el código fuente original del .vue y empezar a modificarlo a gusto, que podemos mirar en este link mientras aún exista https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components . Yo hice una copia igual dentro de la carpeta esta, la version sería v2.0.0-beta.61 .</p><h2 id="usando-componentes-de-vue-externos-en-detalle" tabindex="-1"><a class="header-anchor" href="#usando-componentes-de-vue-externos-en-detalle" aria-hidden="true">#</a> Usando COMPONENTES DE Vue Externos en detalle</h2><p>Vamos a probar algunos. Recordemos deben registrarse con el plugin y registrando el plugin en config.js. Estarán en la carpeta docs/.vuepress/components. Dentro de los componentes se tiene acceso a los markdwon con $site, $page y dentro de cada uno podemos hacer page.frontmatter por ejemplo para acceder a variables del frontmatter definidos dentro de cada uno!</p><h3 id="componente-de-tarjetas-articulo-con-liks" tabindex="-1"><a class="header-anchor" href="#componente-de-tarjetas-articulo-con-liks" aria-hidden="true">#</a> Componente de tarjetas / artículo con liks</h3><p>Lo que hace es tener archivos llamado &quot;article.md&quot; y el frontmatter de cada uno le mete un &quot;type=article&quot;, tiene un for dentro del vue component y con esto los reconoce! O sea hay interaccion entre markdwon y vue con frontmatter. Es el &quot;Posts.vue&quot;</p>`,13),C=o(`<h2 id="prueba-simple-interactuando-vue-con-frontmatter" tabindex="-1"><a class="header-anchor" href="#prueba-simple-interactuando-vue-con-frontmatter" aria-hidden="true">#</a> Prueba simple interactuando vue con frontmatter</h2><p>En el siguiente es ejemplo es un componente super tonto que se pone un header, una imagen y un paragraph. Lo copado es que pongo una variable en el frontmatter &quot;variableinventada: true&quot;, y con un atributo v-if le digo que ponga la imagen únicamente si es true es variable.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>img v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot; $page.frontmatter.variableinventada=true&quot;</span> src<span class="token operator">=</span><span class="token string">&#39;/images/paisaje_hero.png&#39;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Resultado</p>`,4),E=i("h2",{id:"prueba-de-posts-interactuando-con-frontmatter",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#prueba-de-posts-interactuando-con-frontmatter","aria-hidden":"true"},"#"),e(' Prueba de "Posts" interactuando con frontmatter')],-1),N=i("p",null,"Saquemos directamente las variables que queremos definidas en frontmatter y que las printee en las tarjetas y listo! Mirar PostsFm.vue (NO lo hice andar aún) (OJO, si nos olvidamos de declarar las variables en el frontmatter no va a arrancar y nadie nos va a tirar un error!)",-1);function V(j,B){const s=a("Badge"),r=a("CodeGroupItem"),c=a("CodeGroup"),l=a("SearchBox"),p=a("Posts"),d=a("test"),u=a("PostsFm");return v(),h("div",null,[b,_,f,y,i("ul",null,[i("li",null,[e("VuePress - "),n(s,{type:"tip",text:"v2",vertical:"top"})]),i("li",null,[e("VuePress - "),n(s,{type:"warning",text:"v2",vertical:"middle"})]),i("li",null,[e("VuePress - "),n(s,{type:"danger",text:"v2",vertical:"bottom"})])]),k,n(c,null,{default:t(()=>[n(r,{title:"FOO"},{default:t(()=>[x]),_:1}),n(r,{title:"BAR"},{default:t(()=>[q]),_:1})]),_:1}),P,n(l),w,n(p),C,n(d),E,N,n(u)])}const F=m(g,[["render",V],["__file","home_custom.html.vue"]]);export{F as default};
