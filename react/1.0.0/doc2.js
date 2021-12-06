import{e as s,o as a,y as n}from"./vendor.js";const l={class:"markdown-body"},r=n(`<h1>Avatar \u5934\u50CF</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Avatar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h3>\u57FA\u672C\u7528\u6CD5</h3><p>\u5185\u7F6E smal / normal / large \u4E09\u79CD\u5C3A\u5BF8\u89C4\u683C</p><pre><code class="language-tsx">&lt;Avatar size=<span class="hljs-string">&quot;large&quot;</span> src=<span class="hljs-string">&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;</span>
&gt;&lt;/Avatar&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;normal&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Avatar</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Avatar</span>&gt;</span></span>  
</code></pre><h3>\u4FEE\u6539\u5F62\u72B6\u7C7B\u578B</h3><pre><code class="language-tsx">&lt;Avatar shape=<span class="hljs-string">&quot;square&quot;</span>&gt;&lt;/Avatar&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Avatar</span>&gt;</span></span>
</code></pre><h3>\u4FEE\u6539\u80CC\u666F\u8272</h3><pre><code class="language-tsx">&lt;Avatar bg-color=<span class="hljs-string">&quot;#f0250f&quot;</span>&gt;&lt;/Avatar&gt;
</code></pre><h3>\u4FEE\u6539\u80CC\u666Ficon</h3><pre><code class="language-tsx">&lt;Avatar icon=<span class="hljs-string">&quot;https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png&quot;</span>&gt;&lt;/Avatar&gt;
</code></pre><h3>\u8BBE\u7F6E\u5934\u50CF\u7684\u6587\u672C\u5185\u5BB9</h3><pre><code class="language-tsx">&lt;Avatar icon&gt;N&lt;/Avatar&gt;
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>bgColor</td><td>\u8BBE\u7F6E\u5934\u50CF\u80CC\u666F\u8272</td><td>String</td><td>#eee</td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F\uFF0C\u63D0\u4F9B\u4E09\u79CD\uFF1Alarge/normal/small\uFF0C\u652F\u6301\u76F4\u63A5\u8F93\u5165\u6570\u5B57</td><td>String</td><td>normal</td></tr><tr><td>shape</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6\uFF0C\u9ED8\u8BA4\u662F\u5706\u5F62\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3Asquare\u65B9\u5F62</td><td>String</td><td>round</td></tr><tr><td>src</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684\u80CC\u666F\u56FE\u7247</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>icon</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684icon\u56FE\u6807, \u4F18\u5148\u7EA7\u4F4E\u4E8Esrc,\u7C7B\u4F3CIcon\u7EC4\u4EF6\u7684name\u5C5E\u6027\uFF0C\u652F\u6301\u540D\u79F0\u548C\u94FE\u63A5</td><td>String</td><td>\u2018\u2019</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onClick</td><td>\u70B9\u51FB\u56FE\u7247\u89E6\u53D1\u4E8B\u4EF6</td><td>Function</td><td>event</td></tr></tbody></table>`,21),p=[r],g={setup(e,{expose:t}){return t({frontmatter:{}}),(o,d)=>(a(),s("div",l,p))}};export{g as default};
