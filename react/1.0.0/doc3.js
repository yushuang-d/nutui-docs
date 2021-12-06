import{e as s,o as d,y as a}from"./vendor.js";const n={class:"markdown-body"},e=a(`<h1>BackTop \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u8F83\u957F\u7684\u9875\u9762\u5FEB\u6377\u8FD4\u56DE\u9876\u90E8\u529F\u80FD\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { BackTop } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5 1</h3><pre><code class="language-js">&lt;BackTop elId=<span class="hljs-string">&quot;elId&quot;</span> /&gt;
</code></pre><h3>\u8BBE\u7F6E\u51FA\u73B0\u4F4D\u7F6E</h3><pre><code class="language-js">&lt;BackTop elId=<span class="hljs-string">&quot;elId&quot;</span> distance={<span class="hljs-number">200</span>} bottom={<span class="hljs-number">50</span>} /&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-js">&lt;BackTop elId=<span class="hljs-string">&quot;elId&quot;</span> distance={<span class="hljs-number">200</span>} bottom={<span class="hljs-number">50</span>} children={<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u65E0<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>} /&gt;
</code></pre><h3>click \u4E8B\u4EF6</h3><pre><code class="language-js">&lt;BackTop
  elId=<span class="hljs-string">&quot;elId&quot;</span>
  distance={<span class="hljs-number">200</span>}
  backTopClick={<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u89E6\u53D1\u8FD4\u56DE\u9876\u90E8&#39;</span>)
  }}
/&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>elId</td><td>\u83B7\u53D6\u76D1\u542C\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20</td><td>String</td><td>-</td></tr><tr><td>bottom</td><td>\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB</td><td>Number</td><td><code>20</code></td></tr><tr><td>right</td><td>\u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u8DDD\u79BB</td><td>Number</td><td><code>10</code></td></tr><tr><td>distance</td><td>\u9875\u9762\u5782\u76F4\u6EDA\u52A8\u591A\u9AD8\u540E\u51FA\u73B0</td><td>Number</td><td><code>200</code></td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E\u7EC4\u4EF6\u9875\u9762\u5C42\u7EA7</td><td>Number</td><td><code>10</code></td></tr><tr><td>isAnimation</td><td>\u662F\u5426\u6709\u52A8\u753B,\u548C duration \u53C2\u6570\u4E92\u65A5</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>duration</td><td>\u8BBE\u7F6E\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td>Number</td><td><code>1000</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>backTopClick</td><td>\u6309\u94AE\u70B9\u51FB\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>event: MouseEvent</td></tr></tbody></table>`,19),o=[e],i={setup(c,{expose:t}){return t({frontmatter:{}}),(r,p)=>(d(),s("div",n,o))}};export{i as default};
