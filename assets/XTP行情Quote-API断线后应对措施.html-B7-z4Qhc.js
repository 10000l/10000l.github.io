import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as r,b as p,d as n,f as s,a as t,w as e,e as o}from"./app-C9BeCxEA.js";const u={},d=n("h1",{id:"xtp行情quote-api断线后应对措施",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xtp行情quote-api断线后应对措施"},[n("span",null,[n("strong",null,"XTP行情Quote-API断线后应对措施")])])],-1),k=o('<ul><li><a href="#%E4%B8%80%E4%B8%8E%E8%A1%8C%E6%83%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%AD%E8%BF%9E%E7%8E%B0%E8%B1%A1">一.与行情服务器断连现象</a></li><li><a href="#%E4%BA%8C%E4%B8%8Etcp%E8%A1%8C%E6%83%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%AD%E8%BF%9E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD">二.与TCP行情服务器断连应对措施</a></li><li><a href="#%E4%B8%89%E4%B8%8Eudp%E8%A1%8C%E6%83%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%AD%E8%BF%9E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD">三.与UDP行情服务器断连应对措施</a><ul><li><a href="#1%E5%90%8E%E7%BB%AD%E4%B8%8D%E5%86%8D%E6%9C%89%E6%9F%A5%E8%AF%A2%E9%9C%80%E6%B1%82">1.后续不再有查询需求</a></li><li><a href="#2%E5%90%8E%E7%BB%AD%E6%9C%89%E6%9F%A5%E8%AF%A2%E9%9C%80%E6%B1%82">2.后续有查询需求</a></li><li><a href="#3%E5%9B%9E%E8%A1%A5%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE">3.回补行情数据</a></li></ul></li></ul>',1),m=n("br",null,null,-1),v=n("h2",{id:"一-与行情服务器断连现象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-与行情服务器断连现象"},[n("span",null,"一.与行情服务器断连现象")])],-1),E=n("br",null,null,-1),_=n("h2",{id:"二-与tcp行情服务器断连应对措施",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二-与tcp行情服务器断连应对措施"},[n("span",null,"二.与TCP行情服务器断连应对措施")])],-1),b=n("strong",null,"OnDisconnected()",-1),A=n("strong",null,"Login()",-1),h=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//行情服务器断线后，此函数会被调用</span>
	<span class="token comment">//TODO:重新login，并在login成功后，再次订阅</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Disconnect from quote server. &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">//重新登陆行情服务器</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		ret <span class="token operator">=</span> m_pQuoteApi<span class="token operator">-&gt;</span><span class="token function">Login</span><span class="token punctuation">(</span>quote_server_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_server_port<span class="token punctuation">,</span> quote_username<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_password<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> protocol_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 登录失败，获取错误信息</span>
			XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> m_pQuoteApi<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to server error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

			<span class="token comment">//等待10s以后再次连接，可修改此等待时间，建议不要小于3s</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
			<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
			<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// _WIN32	</span></span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//重连成功</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to server success. &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token comment">//再次订阅行情快照</span>
	<span class="token function">subscribeMarketData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="三-与udp行情服务器断连应对措施" tabindex="-1"><a class="header-anchor" href="#三-与udp行情服务器断连应对措施"><span>三.与UDP行情服务器断连应对措施</span></a></h2>`,3),f=n("br",null,null,-1),g=o(`<h3 id="_1-后续不再有查询需求" tabindex="-1"><a class="header-anchor" href="#_1-后续不再有查询需求"><span>1.后续不再有查询需求</span></a></h3><p>如果用户在断连后没有查询行情静态数据的需求，此时可以不用重连。 <br></p><h3 id="_2-后续有查询需求" tabindex="-1"><a class="header-anchor" href="#_2-后续有查询需求"><span>2.后续有查询需求</span></a></h3><p>如果用户在断连后有查询行情静态数据的需求，可以参考TCP断线重连方式进行重连，无需在登陆后重新 订阅。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//行情服务器断线后，此函数会被调用</span>
	<span class="token comment">//TODO:重新login，并在login成功后，再次订阅</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Disconnect from quote server. &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">//重新登陆行情服务器</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		ret <span class="token operator">=</span> m_pQuoteApi<span class="token operator">-&gt;</span><span class="token function">Login</span><span class="token punctuation">(</span>quote_server_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_server_port<span class="token punctuation">,</span> quote_username<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_password<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> protocol_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 登录失败，获取错误信息</span>
			XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> m_pQuoteApi<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to server error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

			<span class="token comment">//等待10s以后再次连接，可修改此等待时间，建议不要小于3s</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
			<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
			<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// _WIN32	</span></span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//重连成功</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to server success. &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-回补行情数据" tabindex="-1"><a class="header-anchor" href="#_3-回补行情数据"><span>3.回补行情数据</span></a></h3>`,7);function P(B,D){const a=l("font");return i(),r("div",null,[d,p(" TOC "),k,p(" /TOC "),m,n("p",null,[s("在程序运行过程中，不可避免出现与行情服务器断连的情况，下面就断连时出现的回调通知，以及应对措施加以说明（适用于"),t(a,{color:"#FF0000"},{default:e(()=>[s("2.2.33.5")]),_:1}),s("以上版本api）。 如果使用的是2.2.33.5以下版本的api（不包含2.2.33.5版本），无论行情服务器是TCP还是UDP的，都请参考以下文中的"),t(a,{color:"#FFA000"},{default:e(()=>[s("第二章节：与TCP行情服务器断连应对措施")]),_:1}),s(" 进行断线重连。")]),v,n("p",null,[s("当API与行情服务器出现断线时，"),t(a,{color:"#FF0000"},{default:e(()=>[s("OnDisconnected()")]),_:1}),s("回调函数将会被触发。 "),E]),_,n("p",null,[s("当用户与行情服务器之间采用的是TCP连接时，为了后续收到行情数据，需要重写"),t(a,{color:"#FF0000"},{default:e(()=>[b]),_:1}),s("回调函数。 回调函数中的总体思路是循环调用"),t(a,{color:"#FF0000"},{default:e(()=>[A]),_:1}),s("，直至重连成功后，重新订阅快照行情。 示例代码如下：")]),h,n("p",null,[s("对于UDP行情服务器来说，行情是通过UDP组播来接收的，"),t(a,{color:"#FF0000"},{default:e(()=>[s("OnDisconnected()")]),_:1}),s("回调函数被触发时，其实只是表明TCP连接的断连，不会影响UDP组播接收行情数据。因此需要用户根据实际情况来决定是否需要建立TCP的重连。 "),f]),g,n("p",null,[s("通常发生断线的时候，可能是网路状态不好导致，此时可能会有行情丢包发生。 如果发现有行情丢包情形发生，可以通过调用请求回补行情接口，将丢失的数据回补回去。 注意：回补功能与行情服务器是否断连没有任何关联，可以单独使用，即使不登陆行情服务器，也是可以使用回补行情数据功能的。 具体回补行情的用法可以参阅"),t(a,{color:"#FFA500"},{default:e(()=>[s("《XTP关于L2行情数据回补功能的使用说明》")]),_:1}),s("文档。")])])}const C=c(u,[["render",P],["__file","XTP行情Quote-API断线后应对措施.html.vue"]]),F=JSON.parse('{"path":"/docs/API_DOC%20XTP%E8%A1%8C%E6%83%85Quote-API%E6%96%AD%E7%BA%BF%E5%90%8E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD/XTP%E8%A1%8C%E6%83%85Quote-API%E6%96%AD%E7%BA%BF%E5%90%8E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD.html","title":"XTP行情Quote-API断线后应对措施","lang":"zh-CN","frontmatter":{"description":"XTP行情Quote-API断线后应对措施 一.与行情服务器断连现象 二.与TCP行情服务器断连应对措施 三.与UDP行情服务器断连应对措施 1.后续不再有查询需求 2.后续有查询需求 3.回补行情数据 在程序运行过程中，不可避免出现与行情服务器断连的情况，下面就断连时出现的回调通知，以及应对措施加以说明（适用于以上版本api）。 如果使用的是2.2....","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/API_DOC%20XTP%E8%A1%8C%E6%83%85Quote-API%E6%96%AD%E7%BA%BF%E5%90%8E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD/XTP%E8%A1%8C%E6%83%85Quote-API%E6%96%AD%E7%BA%BF%E5%90%8E%E5%BA%94%E5%AF%B9%E6%8E%AA%E6%96%BD.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"XTP行情Quote-API断线后应对措施"}],["meta",{"property":"og:description","content":"XTP行情Quote-API断线后应对措施 一.与行情服务器断连现象 二.与TCP行情服务器断连应对措施 三.与UDP行情服务器断连应对措施 1.后续不再有查询需求 2.后续有查询需求 3.回补行情数据 在程序运行过程中，不可避免出现与行情服务器断连的情况，下面就断连时出现的回调通知，以及应对措施加以说明（适用于以上版本api）。 如果使用的是2.2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XTP行情Quote-API断线后应对措施\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":2,"title":"一.与行情服务器断连现象","slug":"一-与行情服务器断连现象","link":"#一-与行情服务器断连现象","children":[]},{"level":2,"title":"二.与TCP行情服务器断连应对措施","slug":"二-与tcp行情服务器断连应对措施","link":"#二-与tcp行情服务器断连应对措施","children":[]},{"level":2,"title":"三.与UDP行情服务器断连应对措施","slug":"三-与udp行情服务器断连应对措施","link":"#三-与udp行情服务器断连应对措施","children":[{"level":3,"title":"1.后续不再有查询需求","slug":"_1-后续不再有查询需求","link":"#_1-后续不再有查询需求","children":[]},{"level":3,"title":"2.后续有查询需求","slug":"_2-后续有查询需求","link":"#_2-后续有查询需求","children":[]},{"level":3,"title":"3.回补行情数据","slug":"_3-回补行情数据","link":"#_3-回补行情数据","children":[]}]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"docs/API_DOC XTP行情Quote-API断线后应对措施/XTP行情Quote-API断线后应对措施.md","localizedDate":"2024年6月3日","autoDesc":true}');export{C as comp,F as data};
