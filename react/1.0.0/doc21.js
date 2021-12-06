import{e as s,o as a,y as d}from"./vendor.js";const e={class:"markdown-body"},l=d(`<h1>Overlay \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u901A\u5E38\u7528\u4E8E\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { OverLay } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Overlay visible={<span class="hljs-literal">true</span>} zindex={<span class="hljs-number">2000</span>}&gt;&lt;/Overlay&gt;
</code></pre><h3>\u5D4C\u5957\u5185\u5BB9</h3><pre><code class="language-tsx">&lt;nut-overlay visible={<span class="hljs-literal">true</span>} zIndex={<span class="hljs-number">2000</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u6B63\u6587<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/nut-overlay&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>zIndex</td><td>\u906E\u7F69\u5C42\u7EA7</td><td>Number</td><td>2000</td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2</td><td>Number</td><td>0.3</td></tr><tr><td>overlayClass</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>overlayStyle</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>lockScroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>closeOnClickOverlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onClick</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,15),n=[l],i={setup(r,{expose:t}){return t({frontmatter:{}}),(c,p)=>(a(),s("div",e,n))}};export{i as default};
