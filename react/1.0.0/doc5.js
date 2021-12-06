import{e as a,o as t,y as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Barrage \u5F39\u5E55</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8BDD\u8BED\u548C\u8BCD\u7EC4\u7684\u8F6E\u64AD\u5C55\u793A\uFF0C\u9002\u7528\u4E8E\u89C6\u9891\u4E2D\u6216\u5176\u4ED6\u7C7B\u4F3C\u9700\u6C42\u4E2D\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Barrage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD51</h3><pre><code class="language-tsx">&lt;h2&gt;\u57FA\u7840\u7528\u6CD5&lt;/h2&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Barrage</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{barrageRef}</span> <span class="hljs-attr">barrageList</span>=<span class="hljs-string">{list}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Barrage</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;test&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">textAlign:</span> &#39;<span class="hljs-attr">center</span>&#39; }}&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{addBarrage}</span>&gt;</span>\u968F\u673A\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">let</span> list = [<span class="hljs-string">&#39;\u753B\u7F8E\u4E0D\u770B&#39;</span>, <span class="hljs-string">&#39;\u4E0D\u660E\u89C9\u5389&#39;</span>, <span class="hljs-string">&#39;\u559C\u5927\u666E\u5954&#39;</span>, <span class="hljs-string">&#39;\u7537\u9ED8\u5973\u6CEA&#39;</span>, <span class="hljs-string">&#39;\u7D2F\u89C9\u4E0D\u7231&#39;</span>, <span class="hljs-string">&#39;\u7237\u9752\u7ED3-&#39;</span>]
<span class="hljs-keyword">const</span> barrageRef = useRef(<span class="hljs-literal">null</span>)
<span class="hljs-keyword">const</span> addBarrage = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">let</span> n = <span class="hljs-built_in">Math</span>.random()
  <span class="hljs-keyword">if</span> (barrageRef.current) {
    barrageRef.current.add(<span class="hljs-string">&#39;\u968F\u673A\u2014\u2014&#39;</span> + <span class="hljs-built_in">String</span>(n).substr(<span class="hljs-number">2</span>, <span class="hljs-number">10</span>))
  }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>barrageList</td><td>\u5F39\u5E55\u5217\u8868\u6570\u636E</td><td>Array</td><td>[]</td></tr><tr><td>frequency</td><td>\u53EF\u89C6\u533A\u57DF\u5185\u6BCF\u4E2A\u5F39\u5E55\u51FA\u73B0\u7684\u65F6\u95F4\u95F4\u9694</td><td>Number</td><td>500</td></tr><tr><td>speeds</td><td>\u6BCF\u4E2A\u5F39\u5E55\u7684\u6EDA\u52A8\u65F6\u95F4</td><td>Number</td><td>2000</td></tr><tr><td>rows</td><td>\u5F39\u5E55\u884C\u6570\uFF0C\u5206\u51E0\u884C\u5C55\u793A</td><td>Number</td><td>1</td></tr><tr><td>top</td><td>\u5F39\u5E55\u5782\u76F4\u8DDD\u79BB</td><td>Number</td><td>10</td></tr><tr><td>loop</td><td>\u662F\u5426\u5FAA\u73AF\u64AD\u653E</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>add</td><td>\u6DFB\u52A0\u6570\u636E</td><td>-</td></tr></tbody></table>`,14),r=[p],g={setup(e,{expose:s}){return s({frontmatter:{}}),(h,c)=>(t(),a("div",l,r))}};export{g as default};
