import{e as t,o as a,y as n}from"./vendor.js";const e={class:"markdown-body"},l=n(`<h1>Price \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8E xxxxxxx</p><h3>\u5B89\u88C5</h3><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Price price={<span class="hljs-number">0</span>} needSymbol={<span class="hljs-literal">false</span>} thousands={<span class="hljs-literal">true</span>} /&gt;
</code></pre><h3>\u6709\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u65E0\u5343\u4F4D\u5206\u9694</h3><pre><code class="language-tsx">&lt;Price price={<span class="hljs-number">10010.01</span>} needSymbol={<span class="hljs-literal">true</span>} thousands={<span class="hljs-literal">false</span>} /&gt;
</code></pre><h3>\u5E26\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u6709\u5343\u4F4D\u5206\u9694\uFF0C\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D</h3><pre><code class="language-tsx">&lt;Price price={<span class="hljs-number">15213.1221</span>} decimalDigits={<span class="hljs-number">3</span>} needSymbol={<span class="hljs-literal">true</span>} thousands={<span class="hljs-literal">true</span>} /&gt;
</code></pre><h3>\u5F02\u6B65\u968F\u673A\u53D8\u66F4</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [price, setPrice] = useState(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">10000000</span>)
useEffect(<span class="hljs-function">() =&gt;</span> {
<span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
    setPrice(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">10000000</span>)
}, <span class="hljs-number">1000</span>)
<span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">clearInterval</span>(timer)
}
}, [])

&lt;Price price={price} decimal-digits={<span class="hljs-number">3</span>} need-symbol={<span class="hljs-literal">true</span>} thousands={<span class="hljs-literal">true</span>} /&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>price</td><td>\u4EF7\u683C\u6570\u91CF</td><td>Number</td><td>0</td></tr><tr><td>need-symbol</td><td>\u662F\u5426\u9700\u8981\u52A0\u4E0A symbol \u7B26\u53F7</td><td>Boolean</td><td>true</td></tr><tr><td>symbol</td><td>\u7B26\u53F7\u7C7B\u578B</td><td>String</td><td>\xA5</td></tr><tr><td>decimal-digits</td><td>\u5C0F\u6570\u4F4D\u4F4D\u6570</td><td>Number</td><td>2</td></tr><tr><td>thousands</td><td>\u662F\u5426\u6309\u7167\u5343\u5206\u53F7\u5F62\u5F0F\u663E\u793A</td><td>Boolean</td><td>false</td></tr></tbody></table>`,16),r=[l],i={setup(d,{expose:s}){return s({frontmatter:{}}),(p,h)=>(a(),t("div",e,r))}};export{i as default};
