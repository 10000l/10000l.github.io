import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as u,b as l,d as s,f as n,a as e,w as t,e as p}from"./app-C9BeCxEA.js";const d={},r=s("h1",{id:"xtp关于l2行情数据回补功能的使用说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#xtp关于l2行情数据回补功能的使用说明"},[s("span",null,"XTP关于L2行情数据回补功能的使用说明")])],-1),k=p('<ul><li><a href="#xtp%E5%85%B3%E4%BA%8El2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E5%9B%9E%E8%A1%A5%E5%8A%9F%E8%83%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E">XTP关于L2行情数据回补功能的使用说明</a><ul><li><a href="#%E4%B8%80-%E6%96%B0%E5%A2%9E%E7%9A%84%E5%A4%B4%E6%96%87%E4%BB%B6">一. 新增的头文件</a></li><li><a href="#%E4%BA%8C-%E6%96%B0%E5%A2%9E%E7%9A%84%E5%87%BD%E6%95%B0">二. 新增的函数</a><ul><li><a href="#1-quoteapi%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3">1. QuoteAPI新增接口</a></li><li><a href="#2-quotespi%E6%96%B0%E5%A2%9E%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0">2. QuoteSpi新增回调函数</a></li></ul></li><li><a href="#%E4%B8%89-%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E5%8F%8A%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">三. 新增接口说明及使用示例</a><ul><li><a href="#1-logintorebuildquoteserver">1. LoginToRebuildQuoteServer</a></li><li><a href="#2-logoutfromrebuildquoteserver">2. LogoutFromRebuildQuoteServer</a></li><li><a href="#3-requestrebuildquote">3. RequestRebuildQuote</a><ul><li><a href="#1-%E8%AF%B7%E6%B1%82%E5%9B%9E%E8%A1%A5%E5%BF%AB%E7%85%A7%E6%95%B0%E6%8D%AE">（1） 请求回补快照数据</a></li><li><a href="#2-%E8%AF%B7%E6%B1%82%E5%9B%9E%E8%A1%A5%E9%80%90%E7%AC%94%E6%95%B0%E6%8D%AE">（2） 请求回补逐笔数据</a></li></ul></li><li><a href="#4-onrebuildquoteserverdisconnected">4. OnRebuildQuoteServerDisconnected</a></li><li><a href="#5-onrequestrebuildquote">5. OnRequestRebuildQuote</a></li><li><a href="#6-onrebuildtickbytick">6. OnRebuildTickByTick</a></li><li><a href="#7-onrebuildmarketdata">7. OnRebuildMarketData</a></li></ul></li><li><a href="#%E5%9B%9B-%E8%A1%8C%E6%83%85%E5%9B%9E%E8%A1%A5%E6%95%B0%E6%8D%AE%E9%80%BB%E8%BE%91">四. 行情回补数据逻辑</a></li><li><a href="#%E4%BA%94-%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">五. 注意事项</a></li></ul></li></ul>',1),m=p(`<h2 id="一-新增的头文件" tabindex="-1"><a class="header-anchor" href="#一-新增的头文件"><span>一. 新增的头文件</span></a></h2><br><table><thead><tr><th>文件名</th><th>详情</th></tr></thead><tbody><tr><td><code>xquote_api_rebuild_tbt_struct.h</code></td><td>行情回补所需结构体定义头文件。</td></tr></tbody></table><br><h2 id="二-新增的函数" tabindex="-1"><a class="header-anchor" href="#二-新增的函数"><span>二. 新增的函数</span></a></h2><h3 id="_1-quoteapi新增接口" tabindex="-1"><a class="header-anchor" href="#_1-quoteapi新增接口"><span>1. QuoteAPI新增接口</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>			<span class="token comment">///用户登录回补服务器请求</span>
			<span class="token comment">///@return 登录是否成功，“0”表示登录成功，“-1”表示连接服务器出错，此时用户可以调用GetApiLastError()来获取错误代码，“-2”表示已存在连接，不允许重复登录，如果需要重连，请先logout，“-3”表示输入有错误</span>
			<span class="token comment">///@param ip 服务器ip地址，类似“127.0.0.1”</span>
			<span class="token comment">///@param port 服务器端口号</span>
			<span class="token comment">///@param user 登陆用户名</span>
			<span class="token comment">///@param password 登陆密码</span>
			<span class="token comment">///@param sock_type “1”代表TCP，“2”代表UDP</span>
			<span class="token comment">///@param local_ip 本地网卡地址，类似“127.0.0.1”</span>
			<span class="token comment">///@remark 此函数为同步阻塞式，不需要异步等待登录成功，当函数返回即可进行后续操作，此api只能有一个连接。回补服务器会在无消息交互后定时断线，请注意仅在需要回补数据时才保持连接，回补完成后请及时logout</span>
			<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">LoginToRebuildQuoteServer</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ip<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> user<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> password<span class="token punctuation">,</span> XTP_PROTOCOL_TYPE sock_type<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> local_ip <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

			<span class="token comment">///登出回补服务器请求</span>
			<span class="token comment">///@return 登出是否成功，“0”表示登出成功，非“0”表示登出出错，此时用户可以调用GetApiLastError()来获取错误代码</span>
			<span class="token comment">///@remark 此函数为同步阻塞式，不需要异步等待登出，当函数返回即可进行后续操作</span>
			<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">LogoutFromRebuildQuoteServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

			<span class="token comment">///请求回补指定行情，包括快照和逐笔</span>
			<span class="token comment">///@return 请求回补指定频道的逐笔行情接口调用是否成功，“0”表示接口调用成功，非“0”表示接口调用出错</span>
			<span class="token comment">///@param rebuild_param 指定回补的参数信息，注意一次性回补最多1000个数据，超过1000需要分批次请求，一次只能指定一种类型的数据</span>
			<span class="token comment">///@remark 仅在逐笔行情丢包时或者确实快照行情时使用，回补的行情数据将从OnRebuildTickByTick或者OnRebuildMarketData()接口回调提供，与订阅的行情数据不在同一个线程内</span>
			<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-quotespi新增回调函数" tabindex="-1"><a class="header-anchor" href="#_2-quotespi新增回调函数"><span>2. QuoteSpi新增回调函数</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>			<span class="token comment">///当客户端与回补行情服务器通信连接断开时，该方法被调用。</span>
			<span class="token comment">///@param reason 错误原因，请与错误代码表对应</span>
			<span class="token comment">///@remark api不会自动重连，当断线发生时，请用户自行选择后续操作。回补服务器会在无消息交互后会定时断线，请注意仅在需要回补数据时才保持连接，无回补需求时，无需登陆。</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildQuoteServerDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///请求回补指定频道的逐笔行情的总体结果应答</span>
			<span class="token comment">///@param rebuild_result 当回补结束时被调用，如果回补结果失败，则msg参数表示失败原因</span>
			<span class="token comment">///@remark 需要快速返回，仅在回补数据发送结束后调用，如果请求数据太多，一次性无法回补完，那么rebuild_result.result_code = XTP_REBUILD_RET_PARTLY，此时需要根据回补结果继续发起回补数据请求</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildResultRsp<span class="token operator">*</span> rebuild_result<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///回补的逐笔行情数据</span>
			<span class="token comment">///@param tbt_data 回补的逐笔行情数据</span>
			<span class="token comment">///@remark 需要快速返回，此函数调用与OnTickByTick不在一个线程内，会在OnRequestRebuildQuote()之前回调</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///回补的快照行情数据</span>
			<span class="token comment">///@param md_data 回补的逐笔行情数据</span>
			<span class="token comment">///@remark 需要快速返回，此函数调用与OnDepthMarketData不在一个线程内，会在OnRequestRebuildQuote()之前回调</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>md_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-新增接口说明及使用示例" tabindex="-1"><a class="header-anchor" href="#三-新增接口说明及使用示例"><span>三. 新增接口说明及使用示例</span></a></h2><br><h3 id="_1-logintorebuildquoteserver" tabindex="-1"><a class="header-anchor" href="#_1-logintorebuildquoteserver"><span>1. LoginToRebuildQuoteServer</span></a></h3><br><p>用户登录回补服务器请求。</p><p>此函数为同步阻塞式，不需要异步等待登录成功，当函数返回即可进行后续操作，此api只能有一个连接。回补服务器会在无消息交互后定时断线，请注意仅在需要回补数据时才保持连接，回补完成后请及时logout。</p><p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">LoginToRebuildQuoteServer</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ip<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> user<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> password<span class="token punctuation">,</span> XTP_PROTOCOL_TYPE sock_type<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> local_ip <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>ip：服务器ip地址，类似&quot;127.0.0.1&quot;</p><p>port：服务器端口号</p><p>user：登录用户名</p><p>password：登录密码</p>`,22),v=s("strong",null,"此处仅支持TCP",-1),b=p(`<p>local_ip：本地网卡地址，类似&quot;127.0.0.1&quot;，可以为NULL</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// XTP_PROTOCOL_TYPE是通讯传输协议方式</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_PROTOCOL_TYPE</span>
<span class="token punctuation">{</span>
	XTP_PROTOCOL_TCP <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;采用TCP方式传输</span>
	XTP_PROTOCOL_UDP		<span class="token comment">///&lt;采用UDP方式传输(仅行情接口支持)</span>
<span class="token punctuation">}</span>XTP_PROTOCOL_TYPE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 3.返回</p><p>登陆是否成功，&quot;0&quot;表示登陆成功，非&quot;0&quot;表示登陆不成功。</p><p>◇ 4.调用示例</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 回补服务器的登出不能在回调线程中调用</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user_quote_api_<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 登录前参数设置</span>

	std<span class="token double-colon punctuation">::</span>string quote_rebuild_server_ip <span class="token operator">=</span> <span class="token string">&quot;xxx.xxx.xxx.xxx&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> quote_rebuild_server_port <span class="token operator">=</span> xxxx<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string quote_rebuild_username <span class="token operator">=</span> <span class="token string">&quot;xxxxxxxx&quot;</span><span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string quote_rebuild_password <span class="token operator">=</span> <span class="token string">&quot;xxxxxx&quot;</span><span class="token punctuation">;</span>

	<span class="token comment">// 登录</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> user_quote_api_<span class="token operator">-&gt;</span><span class="token function">LoginToRebuildQuoteServer</span><span class="token punctuation">(</span>quote_rebuild_server_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_rebuild_server_port<span class="token punctuation">,</span> quote_rebuild_username<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> quote_rebuild_password<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> XTP_PROTOCOL_TCP<span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// 登录失败，获取错误信息</span>
		XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> m_pQuoteApi<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to quote rebuild server error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 登录成功</span>
	<span class="token comment">//TODO: 用户逻辑，例如请求回补数据等   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-logoutfromrebuildquoteserver" tabindex="-1"><a class="header-anchor" href="#_2-logoutfromrebuildquoteserver"><span>2. LogoutFromRebuildQuoteServer</span></a></h3><br><p>用户登出回补服务器请求。</p><p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">LogoutFromRebuildQuoteServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>无</p><p>◇ 3.返回</p><p>登出是否成功，&quot;0&quot;表示登出成功，非&quot;0&quot;表示登出不成功。</p><p>◇ 4.调用示例</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 回补服务器的登出不能在回调线程中调用</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user_quote_api_<span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	<span class="token comment">// 登出</span>
	user_quote_api_<span class="token operator">-&gt;</span><span class="token function">LogoutFromRebuildQuoteServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-requestrebuildquote" tabindex="-1"><a class="header-anchor" href="#_3-requestrebuildquote"><span>3. RequestRebuildQuote</span></a></h3><br><p>请求回补指定行情，包括快照和逐笔。</p>`,22),_=p(`<p>由于回补服务器有定时断线机制，所以一般无需调用此接口。</p><p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>rebuild_param: 指定的需要回补数据的参数信息。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///实时行情回补请求结构体</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPQuoteRebuildReq</span>
<span class="token punctuation">{</span>
    <span class="token comment">///请求id 请求端自行管理定义</span>
    <span class="token keyword">int32_t</span>                     request_id<span class="token punctuation">;</span>
    <span class="token comment">///请求数据类型 1-快照 2-逐笔</span>
    XTP_QUOTE_REBUILD_DATA_TYPE data_type<span class="token punctuation">;</span>  
    <span class="token comment">///请求市场 1-上海  2-深圳</span>
    XTP_EXCHANGE_TYPE           exchange_id<span class="token punctuation">;</span> 
    <span class="token comment">///合约代码 以&#39;\\0&#39;结尾  沪深A股6位  期权8位</span>
    <span class="token keyword">char</span>                        ticker<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
    <span class="token comment">///data_type=逐笔 表示逐笔通道号</span>
    <span class="token keyword">int16_t</span>                     channel_number<span class="token punctuation">;</span>                
    <span class="token comment">///data_type=逐笔 表示序列号begin； =快照 表示时间begin(格式为YYYYMMDDHHMMSSsss)</span>
    <span class="token keyword">int64_t</span>                     begin<span class="token punctuation">;</span> 
    <span class="token comment">///data_type=逐笔 表示序列号end； =快照 表示时间end(格式为YYYYMMDDHHMMSSsss)   逐笔区间：[begin, end]前后闭区间  快照区间：[begin, end)  前闭后开区间      </span>
    <span class="token keyword">int64_t</span>                     end<span class="token punctuation">;</span>                    
<span class="token punctuation">}</span>XTPQuoteRebuildReq<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 3.返回</p><p>请求回补指定频道的逐笔行情接口调用是否成功，“0”表示接口调用成功，非“0”表示接口调用出错。</p><p>◇ 4.调用示例</p><h4 id="_1-请求回补快照数据" tabindex="-1"><a class="header-anchor" href="#_1-请求回补快照数据"><span>（1） 请求回补快照数据</span></a></h4><br><p>下面以请求回补沪市600000快照数据为例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">//请求回补沪市600000快照数据</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user_quote_api_<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//回补请求参数赋值</span>
	XTPQuoteRebuildReq req<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	req<span class="token punctuation">.</span>request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识此次查询请求</span>
	req<span class="token punctuation">.</span>data_type <span class="token operator">=</span> XTP_QUOTE_REBUILD_MD<span class="token punctuation">;</span><span class="token comment">//回补数据类型</span>
	req<span class="token punctuation">.</span>exchange_id <span class="token operator">=</span> XTP_EXCHANGE_SH<span class="token punctuation">;</span><span class="token comment">//交易所类型，用户根据实际情况修改</span>
	std<span class="token double-colon punctuation">::</span>string reqticker <span class="token operator">=</span> <span class="token string">&quot;600000&quot;</span><span class="token punctuation">;</span><span class="token comment">//请求回补的股票代码，此处以600000为例</span>
	<span class="token function">strcpy_s</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>ticker<span class="token punctuation">,</span> XTP_TICKER_LEN<span class="token punctuation">,</span> reqticker<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	req<span class="token punctuation">.</span>channel_number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//仅逐笔订阅时生效，对于快照可不赋值</span>
	req<span class="token punctuation">.</span>begin <span class="token operator">=</span> YYYYMMDDHHMMSSsss<span class="token punctuation">;</span><span class="token comment">//快照开始时间，闭区间，用户根据实际情况修改</span>
	req<span class="token punctuation">.</span>end <span class="token operator">=</span> YYYYMMDDHHMMSSsss<span class="token punctuation">;</span><span class="token comment">//快照结束时间，开区间，用户根据实际情况修改</span>
    <span class="token comment">// 发送请求</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> user_quote_api_<span class="token operator">-&gt;</span><span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-请求回补逐笔数据" tabindex="-1"><a class="header-anchor" href="#_2-请求回补逐笔数据"><span>（2） 请求回补逐笔数据</span></a></h4><br><p>下面以请求回补沪市频道号为2011，逐笔序列号在[20,78]区间内的逐笔数据为例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">//请求回补沪市频道号为2011，逐笔序列号在[20,78]区间内的逐笔数据</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user_quote_api_<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//回补请求参数赋值</span>
	XTPQuoteRebuildReq req<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	req<span class="token punctuation">.</span>request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识此次查询请求</span>
	req<span class="token punctuation">.</span>data_type <span class="token operator">=</span> XTP_QUOTE_REBUILD_TBT<span class="token punctuation">;</span><span class="token comment">//回补数据类型</span>
	req<span class="token punctuation">.</span>exchange_id <span class="token operator">=</span> XTP_EXCHANGE_SH<span class="token punctuation">;</span><span class="token comment">//交易所类型，用户根据实际情况修改</span>
	req<span class="token punctuation">.</span>channel_number <span class="token operator">=</span> <span class="token number">2011</span><span class="token punctuation">;</span><span class="token comment">//仅逐笔订阅时生效，对于快照可不赋值，用户根据实际情况修改</span>
	req<span class="token punctuation">.</span>begin <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token comment">//逐笔开始的序列号，闭区间，用户根据实际情况修改</span>
	req<span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token number">78</span><span class="token punctuation">;</span><span class="token comment">//逐笔结束的序列号，闭区间，用户根据实际情况修改</span>
    <span class="token comment">// 发送请求</span>
	<span class="token keyword">int</span> ret <span class="token operator">=</span> user_quote_api_<span class="token operator">-&gt;</span><span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 5.响应函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildResultRsp<span class="token operator">*</span> rebuild_result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 6.通知函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>md_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_4-onrebuildquoteserverdisconnected" tabindex="-1"><a class="header-anchor" href="#_4-onrebuildquoteserverdisconnected"><span>4. OnRebuildQuoteServerDisconnected</span></a></h3><br><p>当客户端与回补行情服务器通信连接断开时，该方法被调用。</p><p>Api不会自动重连，当断线发生时，请用户自行选择后续操作。回补服务器会在无消息交互后定时断线，请注意仅在需要回补数据时才保持连接，无回补需求时，无需登陆。</p>`,26),y=p(`<p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildQuoteServerDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>Reason：错误原因，现阶段无需关心</p><p>◇ 3.返回<br> 无</p><h3 id="_5-onrequestrebuildquote" tabindex="-1"><a class="header-anchor" href="#_5-onrequestrebuildquote"><span>5. OnRequestRebuildQuote</span></a></h3><br><p>请求回补指定频道的逐笔行情的总体结果应答。</p>`,8),E=p(`<p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildResultRsp<span class="token operator">*</span> rebuild_result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>rebuild_result: 当回补结束时被调用，如果回补结果失败，则msg参数表示失败原因</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///实时行情回补响应结构体</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPQuoteRebuildResultRsp</span>
<span class="token punctuation">{</span>
    <span class="token comment">///请求id 请求包带过来的id</span>
    <span class="token keyword">int32_t</span>                     request_id<span class="token punctuation">;</span>   
    <span class="token comment">///市场类型 上海 深圳</span>
    XTP_EXCHANGE_TYPE           exchange_id<span class="token punctuation">;</span> 
    <span class="token comment">///总共返回的数据条数</span>
    <span class="token keyword">uint32_t</span>                    size<span class="token punctuation">;</span>  
    <span class="token comment">///逐笔数据 通道号                </span>
    <span class="token keyword">int16_t</span>                     channel_number<span class="token punctuation">;</span>    
    <span class="token comment">///逐笔 表示序列号begin; 快照 表示时间begin(格式为YYYYMMDDHHMMSSsss)            </span>
    <span class="token keyword">int64_t</span>                     begin<span class="token punctuation">;</span>                  
    <span class="token comment">///逐笔 表示序列号end; 快照 表示时间end(格式为YYYYMMDDHHMMSSsss)</span>
    <span class="token keyword">int64_t</span>                     end<span class="token punctuation">;</span>    
    <span class="token comment">///结果类型码</span>
    XTP_REBUILD_RET_TYPE        result_code<span class="token punctuation">;</span>    
    <span class="token comment">///结果信息文本</span>
    <span class="token keyword">char</span>                        msg<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                   
<span class="token punctuation">}</span>XTPQuoteRebuildResultRsp<span class="token punctuation">;</span>

<span class="token comment">//交易所类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_EXCHANGE_TYPE</span>
<span class="token punctuation">{</span>
	XTP_EXCHANGE_SH <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;上证</span>
	XTP_EXCHANGE_SZ<span class="token punctuation">,</span>		<span class="token comment">///&lt;深证</span>
    XTP_EXCHANGE_UNKNOWN	<span class="token comment">///&lt;不存在的交易所类型</span>
<span class="token punctuation">}</span>XTP_EXCHANGE_TYPE<span class="token punctuation">;</span>

<span class="token comment">//回补返回结果类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_REBUILD_RET_TYPE</span> <span class="token punctuation">{</span>
    XTP_REBUILD_RET_COMPLETE    <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;全部数据</span>
    XTP_REBUILD_RET_PARTLY      <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;部分数据</span>
    XTP_REBUILD_RET_NO_DATA     <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;没有数据</span>
    XTP_REBUILD_RET_PARAM_ERR   <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;参数错误</span>
    XTP_REBUILD_RET_FREQUENTLY  <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;请求频繁</span>
<span class="token punctuation">}</span>XTP_REBUILD_RET_TYPE<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 3.返回</p><p>无</p><p>◇ 4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 5.示例代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnRequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildResultRsp <span class="token operator">*</span> rebuild_result<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//请求的回补数据是否已经完全回补完，如果没有完全的话，可以再次发起请求</span>
	<span class="token keyword">switch</span> <span class="token punctuation">(</span>rebuild_result<span class="token operator">-&gt;</span>result_code<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">case</span> XTP_REBUILD_RET_COMPLETE<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//此时回补数据完全</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_REBUILD_RET_PARTLY<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//TODO：此时回补数据不完整，需要再次发起请求</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_REBUILD_RET_NO_DATA<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//TODO：此时服务器也没有回补数据，此时可能服务器也缺少数据，需要等待一会儿再请求看看</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_REBUILD_RET_PARAM_ERR<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//TODO：此时请求的回补数据查询参数错误，需要检查查询参数是否正确，并重新发起查询</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_REBUILD_RET_FREQUENTLY<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//TODO：此时回补数据请求因为请求太频繁，而被服务器限频，请降低请求频率或者等待一会儿再请求</span>
	<span class="token punctuation">}</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_6-onrebuildtickbytick" tabindex="-1"><a class="header-anchor" href="#_6-onrebuildtickbytick"><span>6. OnRebuildTickByTick</span></a></h3><br><p>回补的逐笔行情数据通知。</p><p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>tbt_data: 回补的逐笔行情数据</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///逐笔委托</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPTickByTickEntrust</span> <span class="token punctuation">{</span>
    <span class="token comment">///频道代码</span>
    <span class="token keyword">int32_t</span> channel_no<span class="token punctuation">;</span>
    <span class="token comment">///SH: 委托序号(委托单独编号, 同一channel_no内连续)</span>
    <span class="token comment">///SZ: 委托序号(委托成交统一编号, 同一channel_no内连续)</span>
    <span class="token keyword">int64_t</span> seq<span class="token punctuation">;</span>
    <span class="token comment">///委托价格</span>
    <span class="token keyword">double</span>  price<span class="token punctuation">;</span>
    <span class="token comment">///SH: 剩余委托数量(balance)</span>
    <span class="token comment">///SZ: 委托数量</span>
    <span class="token keyword">int64_t</span> qty<span class="token punctuation">;</span>
    <span class="token comment">///SH: &#39;B&#39;:买; &#39;S&#39;:卖</span>
    <span class="token comment">///SZ: &#39;1&#39;:买; &#39;2&#39;:卖; &#39;G&#39;:借入; &#39;F&#39;:出借</span>
    <span class="token keyword">char</span>  side<span class="token punctuation">;</span>
    <span class="token comment">///SH: &#39;A&#39;: 增加; &#39;D&#39;: 删除</span>
    <span class="token comment">///SZ: 订单类别: &#39;1&#39;: 市价; &#39;2&#39;: 限价; &#39;U&#39;: 本方最优</span>
    <span class="token keyword">char</span> ord_type<span class="token punctuation">;</span>
    <span class="token comment">///SH: 原始订单号</span>
    <span class="token comment">///SZ: 无意义</span>
    <span class="token keyword">int64_t</span> order_no<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///逐笔成交</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPTickByTickTrade</span> <span class="token punctuation">{</span>
    <span class="token comment">///频道代码</span>
    <span class="token keyword">int32_t</span> channel_no<span class="token punctuation">;</span>
    <span class="token comment">///SH: 成交序号(成交单独编号, 同一channel_no内连续)</span>
    <span class="token comment">///SZ: 成交序号(委托成交统一编号, 同一channel_no内连续)</span>
    <span class="token keyword">int64_t</span> seq<span class="token punctuation">;</span>
    <span class="token comment">///成交价格</span>
    <span class="token keyword">double</span> price<span class="token punctuation">;</span>
    <span class="token comment">///成交量</span>
    <span class="token keyword">int64_t</span> qty<span class="token punctuation">;</span>
    <span class="token comment">///成交金额(仅适用上交所)</span>
    <span class="token keyword">double</span> money<span class="token punctuation">;</span>
    <span class="token comment">///买方订单号</span>
    <span class="token keyword">int64_t</span> bid_no<span class="token punctuation">;</span>
    <span class="token comment">///卖方订单号</span>
    <span class="token keyword">int64_t</span> ask_no<span class="token punctuation">;</span>
    <span class="token comment">/// SH: 内外盘标识(&#39;B&#39;:主动买; &#39;S&#39;:主动卖; &#39;N&#39;:未知)</span>
    <span class="token comment">/// SZ: 成交标识(&#39;4&#39;:撤; &#39;F&#39;:成交)</span>
    <span class="token keyword">char</span> trade_flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///逐笔状态订单</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPTickByTickStatus</span> <span class="token punctuation">{</span>
    <span class="token comment">///频道代码</span>
    <span class="token keyword">int32_t</span> channel_no<span class="token punctuation">;</span>
    <span class="token comment">///同一channel_no内连续</span>
    <span class="token keyword">int64_t</span> seq<span class="token punctuation">;</span>
    <span class="token comment">///状态信息</span>
    <span class="token keyword">char</span> flag<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///逐笔数据信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPTickByTickStruct</span> <span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span> ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">/// SH: 业务序号（委托成交统一编号，同一个channel_no内连续，此seq区别于联合体内的seq，channel_no等同于联合体内的channel_no）</span>
    <span class="token comment">/// SZ: 无意义</span>
    <span class="token keyword">int64_t</span> seq<span class="token punctuation">;</span>
    <span class="token comment">///委托时间 or 成交时间</span>
    <span class="token keyword">int64_t</span> data_time<span class="token punctuation">;</span>
    <span class="token comment">///委托 or 成交</span>
    XTP_TBT_TYPE type<span class="token punctuation">;</span>

    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        XTPTickByTickEntrust entrust<span class="token punctuation">;</span>
        XTPTickByTickTrade     trade<span class="token punctuation">;</span>
        XTPTickByTickStatus    state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPTBT<span class="token punctuation">;</span>

<span class="token comment">//交易所类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_EXCHANGE_TYPE</span>
<span class="token punctuation">{</span>
	XTP_EXCHANGE_SH <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;上证</span>
	XTP_EXCHANGE_SZ<span class="token punctuation">,</span>		<span class="token comment">///&lt;深证</span>
    XTP_EXCHANGE_UNKNOWN	<span class="token comment">///&lt;不存在的交易所类型</span>
<span class="token punctuation">}</span>XTP_EXCHANGE_TYPE<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 3.返回</p><p>无</p><p>◇ 4.请求函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_7-onrebuildmarketdata" tabindex="-1"><a class="header-anchor" href="#_7-onrebuildmarketdata"><span>7. OnRebuildMarketData</span></a></h3><br><p>回补的逐笔行情数据通知。</p><p>◇ 1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>md_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>◇ 2.参数</p><p>md_data: 回补的快照行情数据</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///股票、基金 等额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataStockExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///委托买入总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_bid_qty<span class="token punctuation">;</span>
    <span class="token comment">///委托卖出总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_ask_qty<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委买价格(SH,SZ)</span>
    <span class="token keyword">double</span> ma_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委卖价格(SH,SZ)</span>
    <span class="token keyword">double</span> ma_ask_price<span class="token punctuation">;</span>
    <span class="token comment">///债券加权平均委买价格(SH)</span>
    <span class="token keyword">double</span> ma_bond_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///债券加权平均委卖价格(SH)</span>
    <span class="token keyword">double</span> ma_bond_ask_price<span class="token punctuation">;</span>
    <span class="token comment">///债券到期收益率(SH)</span>
    <span class="token keyword">double</span> yield_to_maturity<span class="token punctuation">;</span>
    <span class="token comment">///基金实时参考净值(SH,SZ)</span>
    <span class="token keyword">double</span> iopv<span class="token punctuation">;</span>
    <span class="token comment">///ETF申购笔数(SH)</span>
    <span class="token keyword">int32_t</span> etf_buy_count<span class="token punctuation">;</span>
    <span class="token comment">///ETF赎回笔数(SH)</span>
    <span class="token keyword">int32_t</span> etf_sell_count<span class="token punctuation">;</span>
    <span class="token comment">///ETF申购数量(SH)</span>
    <span class="token keyword">double</span> etf_buy_qty<span class="token punctuation">;</span>
    <span class="token comment">///ETF申购金额(SH)</span>
    <span class="token keyword">double</span> etf_buy_money<span class="token punctuation">;</span>
    <span class="token comment">///ETF赎回数量(SH)</span>
    <span class="token keyword">double</span> etf_sell_qty<span class="token punctuation">;</span>
    <span class="token comment">///ETF赎回金额(SH)</span>
    <span class="token keyword">double</span> etf_sell_money<span class="token punctuation">;</span>
    <span class="token comment">///权证执行的总数量(SH)</span>
    <span class="token keyword">double</span> total_warrant_exec_qty<span class="token punctuation">;</span>
    <span class="token comment">///权证跌停价格（元）(SH)</span>
    <span class="token keyword">double</span> warrant_lower_price<span class="token punctuation">;</span>
    <span class="token comment">///权证涨停价格（元）(SH)</span>
    <span class="token keyword">double</span> warrant_upper_price<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单笔数(SH)</span>
    <span class="token keyword">int32_t</span> cancel_buy_count<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单笔数(SH)</span>
    <span class="token keyword">int32_t</span> cancel_sell_count<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单数量(SH)</span>
    <span class="token keyword">double</span> cancel_buy_qty<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单数量(SH)</span>
    <span class="token keyword">double</span> cancel_sell_qty<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单金额(SH)</span>
    <span class="token keyword">double</span> cancel_buy_money<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单金额(SH)</span>
    <span class="token keyword">double</span> cancel_sell_money<span class="token punctuation">;</span>
    <span class="token comment">///买入总笔数(SH)</span>
    <span class="token keyword">int64_t</span> total_buy_count<span class="token punctuation">;</span>
    <span class="token comment">///卖出总笔数(SH)</span>
    <span class="token keyword">int64_t</span> total_sell_count<span class="token punctuation">;</span>
    <span class="token comment">///买入委托成交最大等待时间(SH)</span>
    <span class="token keyword">int32_t</span> duration_after_buy<span class="token punctuation">;</span>
    <span class="token comment">///卖出委托成交最大等待时间(SH)</span>
    <span class="token keyword">int32_t</span> duration_after_sell<span class="token punctuation">;</span>
    <span class="token comment">///买方委托价位数(SH)</span>
    <span class="token keyword">int32_t</span> num_bid_orders<span class="token punctuation">;</span>
    <span class="token comment">///卖方委托价位数(SH)</span>
    <span class="token keyword">int32_t</span> num_ask_orders<span class="token punctuation">;</span>

    <span class="token comment">///基金T-1日净值(SZ)</span>
    <span class="token keyword">double</span> pre_iopv<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">int64_t</span> r1<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">int64_t</span> r2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///债券额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataBondExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///委托买入总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_bid_qty<span class="token punctuation">;</span>
    <span class="token comment">///委托卖出总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_ask_qty<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委买价格(SH,SZ)</span>
    <span class="token keyword">double</span> ma_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委卖价格(SH,SZ)</span>
    <span class="token keyword">double</span> ma_ask_price<span class="token punctuation">;</span>
    <span class="token comment">///债券加权平均委买价格(SH)</span>
    <span class="token keyword">double</span> ma_bond_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///债券加权平均委卖价格(SH)</span>
    <span class="token keyword">double</span> ma_bond_ask_price<span class="token punctuation">;</span>
    <span class="token comment">///债券到期收益率(SH)</span>
    <span class="token keyword">double</span> yield_to_maturity<span class="token punctuation">;</span>
	<span class="token comment">///匹配成交最近价(SZ)</span>
	<span class="token keyword">double</span> match_lastpx<span class="token punctuation">;</span>
    <span class="token comment">///债券加权平均价格(SH)</span>
    <span class="token keyword">double</span> ma_bond_price<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r2<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r3<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r4<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r5<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r6<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r7<span class="token punctuation">;</span>
    <span class="token comment">///预留</span>
    <span class="token keyword">double</span> r8<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单笔数(SH)</span>
    <span class="token keyword">int32_t</span> cancel_buy_count<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单笔数(SH)</span>
    <span class="token keyword">int32_t</span> cancel_sell_count<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单数量(SH)</span>
    <span class="token keyword">double</span> cancel_buy_qty<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单数量(SH)</span>
    <span class="token keyword">double</span> cancel_sell_qty<span class="token punctuation">;</span>
    <span class="token comment">///买入撤单金额(SH)</span>
    <span class="token keyword">double</span> cancel_buy_money<span class="token punctuation">;</span>
    <span class="token comment">///卖出撤单金额(SH)</span>
    <span class="token keyword">double</span> cancel_sell_money<span class="token punctuation">;</span>
    <span class="token comment">///买入总笔数(SH)</span>
    <span class="token keyword">int64_t</span> total_buy_count<span class="token punctuation">;</span>
    <span class="token comment">///卖出总笔数(SH)</span>
    <span class="token keyword">int64_t</span> total_sell_count<span class="token punctuation">;</span>
    <span class="token comment">///买入委托成交最大等待时间(SH)</span>
    <span class="token keyword">int32_t</span> duration_after_buy<span class="token punctuation">;</span>
    <span class="token comment">///卖出委托成交最大等待时间(SH)</span>
    <span class="token keyword">int32_t</span> duration_after_sell<span class="token punctuation">;</span>
    <span class="token comment">///买方委托价位数(SH)</span>
    <span class="token keyword">int32_t</span> num_bid_orders<span class="token punctuation">;</span>
    <span class="token comment">///卖方委托价位数(SH)</span>
    <span class="token keyword">int32_t</span> num_ask_orders<span class="token punctuation">;</span>
    <span class="token comment">///时段(SHL2)，L1快照数据没有此字段，具体字段说明参阅《上海新债券Level2行情说明.doc》文档</span>
    <span class="token keyword">char</span> instrument_status<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/// 期权额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataOptionExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///波段性中断参考价(SH)</span>
    <span class="token keyword">double</span>  auction_price<span class="token punctuation">;</span>
    <span class="token comment">///波段性中断集合竞价虚拟匹配量(SH)</span>
    <span class="token keyword">int64_t</span> auction_qty<span class="token punctuation">;</span>
    <span class="token comment">///最近询价时间(SH)</span>
    <span class="token keyword">int64_t</span> last_enquiry_time<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///行情快照数据类型，2.2.32以前版本所用</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_ACTUAL <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金/债券等)</span>
    XTP_MARKETDATA_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///行情快照数据类型，2.2.32版本新增字段</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE_V2</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_V2_INDEX  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 指数</span>
    XTP_MARKETDATA_V2_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
    XTP_MARKETDATA_V2_ACTUAL <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金等)</span>
    XTP_MARKETDATA_V2_BOND   <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 债券</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///行情</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 代码</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 价格</span>
	<span class="token comment">///最新价</span>
	<span class="token keyword">double</span>	last_price<span class="token punctuation">;</span>
	<span class="token comment">///昨收盘</span>
	<span class="token keyword">double</span>	pre_close_price<span class="token punctuation">;</span>
	<span class="token comment">///今开盘</span>
	<span class="token keyword">double</span>	open_price<span class="token punctuation">;</span>
	<span class="token comment">///最高价</span>
	<span class="token keyword">double</span>	high_price<span class="token punctuation">;</span>
	<span class="token comment">///最低价</span>
	<span class="token keyword">double</span>	low_price<span class="token punctuation">;</span>
    <span class="token comment">///今收盘</span>
    <span class="token keyword">double</span>	close_price<span class="token punctuation">;</span>

    <span class="token comment">// 期权数据</span>
    <span class="token comment">///昨日持仓量(张)(目前未填写)</span>
    <span class="token keyword">int64_t</span> pre_total_long_positon<span class="token punctuation">;</span>
    <span class="token comment">///持仓量(张)</span>
	<span class="token keyword">int64_t</span>	total_long_positon<span class="token punctuation">;</span>
    <span class="token comment">///昨日结算价（SH）</span>
    <span class="token keyword">double</span>	pre_settl_price<span class="token punctuation">;</span>
    <span class="token comment">///今日结算价（SH）</span>
	<span class="token keyword">double</span>	settl_price<span class="token punctuation">;</span>

	<span class="token comment">// 涨跌停</span>
	<span class="token comment">///涨停价</span>
	<span class="token keyword">double</span>	upper_limit_price<span class="token punctuation">;</span>
	<span class="token comment">///跌停价</span>
	<span class="token keyword">double</span>	lower_limit_price<span class="token punctuation">;</span>
	<span class="token comment">///预留</span>
	<span class="token keyword">double</span>	pre_delta<span class="token punctuation">;</span>
	<span class="token comment">///预留</span>
	<span class="token keyword">double</span>	curr_delta<span class="token punctuation">;</span>

    <span class="token comment">/// 时间类，格式为YYYYMMDDHHMMSSsss</span>
    <span class="token keyword">int64_t</span> data_time<span class="token punctuation">;</span>

    <span class="token comment">// 量额数据</span>
    <span class="token comment">///数量，为总成交量（单位股，与交易所一致）</span>
    <span class="token keyword">int64_t</span>	qty<span class="token punctuation">;</span>
    <span class="token comment">///成交金额，为总成交金额（单位元，与交易所一致）</span>
    <span class="token keyword">double</span>	turnover<span class="token punctuation">;</span>
    <span class="token comment">///预留(无意义)</span>
    <span class="token keyword">double</span>	avg_price<span class="token punctuation">;</span>

    <span class="token comment">// 买卖盘</span>
    <span class="token comment">///十档申买价</span>
    <span class="token keyword">double</span> bid<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申卖价</span>
    <span class="token keyword">double</span>	ask<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申买量</span>
    <span class="token keyword">int64_t</span>	bid_qty<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申卖量</span>
    <span class="token keyword">int64_t</span>	ask_qty<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 额外数据</span>
    <span class="token comment">///成交笔数</span>
    <span class="token keyword">int64_t</span> trades_count<span class="token punctuation">;</span>
    <span class="token comment">///当前交易状态说明，参阅《XTP API常见问题.doc》文档</span>
    <span class="token keyword">char</span> ticker_status<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///数据</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        XTPMarketDataStockExData  stk<span class="token punctuation">;</span>
        XTPMarketDataOptionExData opt<span class="token punctuation">;</span>
        XTPMarketDataBondExData  bond<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token punctuation">;</span>
    <span class="token comment">///决定了union是哪种数据类型 (2.2.32版本以前所用字段，仅为了保持兼容，不建议使用该字段)</span>
    XTP_MARKETDATA_TYPE data_type<span class="token punctuation">;</span>
    <span class="token comment">///决定了union是哪种数据类型（2.2.32版本新增字段，更详细区分了行情快照数据类型）</span>
    XTP_MARKETDATA_TYPE_V2 data_type_v2<span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPMD<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>◇ 3.返回</p><p>无</p><p>◇ 4.请求函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="四-行情回补数据逻辑" tabindex="-1"><a class="header-anchor" href="#四-行情回补数据逻辑"><span>四. 行情回补数据逻辑</span></a></h2><br>`,40),T=s("br",null,null,-1),w=s("h2",{id:"五-注意事项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#五-注意事项"},[s("span",null,"五. 注意事项")])],-1),h=s("br",null,null,-1),g=s("ul",null,[s("li",null,"请仅在UDP连接下发生行情丢包时连接。"),s("li",null,"服务器有定时断线机制，请不要一直保持连接或者在断线后重连。"),s("li",null,"一次请不要请求太多数据，行情回补服务器有请求数据上限。")],-1),R=s("br",null,null,-1);function P(q,A){const a=c("font");return i(),u("div",null,[r,l(" TOC "),k,l(" /TOC "),m,s("p",null,[n('sock_type："1"代表TCP，"2"代表UDP，'),e(a,{color:"#FF0000"},{default:t(()=>[v]),_:1})]),b,e(a,{color:"#FF0000"},{default:t(()=>[n("注意此函数不能在回调线程中调用")]),_:1}),n("。"),_,e(a,{color:"#FFA500"},{default:t(()=>[n("通常无需重写这个回调函数。")]),_:1}),y,s("p",null,[n("仅在回补数据发送结束后调用。 由于行情回补服务器对于每次请求的数据有数量上限限制，因此如果一次性请求数据太多，会导致行情数据无法一次性回补完，那么此时收到的应答消息中 "),e(a,{color:"#FFA500"},{default:t(()=>[n("rebuild_result.result_code = XTP_REBUILD_RET_PARTLY")]),_:1}),n("，用户需要根据回补结果继续发起回补数据请求。")]),E,n(" 当用户在UDP连接下订阅行情发现行情丢包时，可以使用回补数据服务器将丢失的数据回补。具体逻辑如下： "),s("ul",null,[s("li",null,[n("（1）调用"),e(a,{color:"#FFA500"},{default:t(()=>[n("LoginToRebuildQuoteServer()")]),_:1}),n("登陆数据回补服务器。")]),s("li",null,[n("（2）调用"),e(a,{color:"#FFA500"},{default:t(()=>[n("RequestRebuildQuote()")]),_:1}),n("请求回补数据。")]),s("li",null,[n("（3）回补数据通过"),e(a,{color:"#FFA500"},{default:t(()=>[n("OnRebuildTickByTick()")]),_:1}),n("或者"),e(a,{color:"#FFA500"},{default:t(()=>[n("OnRebuildMarketData()")]),_:1}),n("回调给用户。")]),s("li",null,[n("（4）回补结果通过"),e(a,{color:"#FFA500"},{default:t(()=>[n("OnRequestRebuildQuote()")]),_:1}),n("通知结果。 "),s("ul",null,[s("li",null,[n("当回补结果失败，且"),e(a,{color:"#FFA500"},{default:t(()=>[n("rebuild_result.result_code = XTP_REBUILD_RET_PARTLY")]),_:1}),n("时，再次发起回补数据请求。")])])])]),T,w,h,g,R])}const X=o(d,[["render",P],["__file","XTP关于L2行情数据回补功能的使用说明.html.vue"]]),f=JSON.parse('{"path":"/docs/API_DOC_XTP%E5%85%B3%E4%BA%8EL2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E5%9B%9E%E8%A1%A5%E5%8A%9F%E8%83%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/XTP%E5%85%B3%E4%BA%8EL2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E5%9B%9E%E8%A1%A5%E5%8A%9F%E8%83%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.html","title":"XTP关于L2行情数据回补功能的使用说明","lang":"zh-CN","frontmatter":{"description":"XTP关于L2行情数据回补功能的使用说明 XTP关于L2行情数据回补功能的使用说明 一. 新增的头文件 二. 新增的函数 1. QuoteAPI新增接口 2. QuoteSpi新增回调函数 三. 新增接口说明及使用示例 1. LoginToRebuildQuoteServer 2. LogoutFromRebuildQuoteServer 3. Req...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/API_DOC_XTP%E5%85%B3%E4%BA%8EL2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E5%9B%9E%E8%A1%A5%E5%8A%9F%E8%83%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/XTP%E5%85%B3%E4%BA%8EL2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E5%9B%9E%E8%A1%A5%E5%8A%9F%E8%83%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"XTP关于L2行情数据回补功能的使用说明"}],["meta",{"property":"og:description","content":"XTP关于L2行情数据回补功能的使用说明 XTP关于L2行情数据回补功能的使用说明 一. 新增的头文件 二. 新增的函数 1. QuoteAPI新增接口 2. QuoteSpi新增回调函数 三. 新增接口说明及使用示例 1. LoginToRebuildQuoteServer 2. LogoutFromRebuildQuoteServer 3. Req..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XTP关于L2行情数据回补功能的使用说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":2,"title":"一. 新增的头文件","slug":"一-新增的头文件","link":"#一-新增的头文件","children":[]},{"level":2,"title":"二. 新增的函数","slug":"二-新增的函数","link":"#二-新增的函数","children":[{"level":3,"title":"1. QuoteAPI新增接口","slug":"_1-quoteapi新增接口","link":"#_1-quoteapi新增接口","children":[]},{"level":3,"title":"2. QuoteSpi新增回调函数","slug":"_2-quotespi新增回调函数","link":"#_2-quotespi新增回调函数","children":[]}]},{"level":2,"title":"三. 新增接口说明及使用示例","slug":"三-新增接口说明及使用示例","link":"#三-新增接口说明及使用示例","children":[{"level":3,"title":"1.  LoginToRebuildQuoteServer","slug":"_1-logintorebuildquoteserver","link":"#_1-logintorebuildquoteserver","children":[]},{"level":3,"title":"2.  LogoutFromRebuildQuoteServer","slug":"_2-logoutfromrebuildquoteserver","link":"#_2-logoutfromrebuildquoteserver","children":[]},{"level":3,"title":"3.  RequestRebuildQuote","slug":"_3-requestrebuildquote","link":"#_3-requestrebuildquote","children":[]},{"level":3,"title":"4.  OnRebuildQuoteServerDisconnected","slug":"_4-onrebuildquoteserverdisconnected","link":"#_4-onrebuildquoteserverdisconnected","children":[]},{"level":3,"title":"5.  OnRequestRebuildQuote","slug":"_5-onrequestrebuildquote","link":"#_5-onrequestrebuildquote","children":[]},{"level":3,"title":"6.  OnRebuildTickByTick","slug":"_6-onrebuildtickbytick","link":"#_6-onrebuildtickbytick","children":[]},{"level":3,"title":"7.  OnRebuildMarketData","slug":"_7-onrebuildmarketdata","link":"#_7-onrebuildmarketdata","children":[]}]},{"level":2,"title":"四. 行情回补数据逻辑","slug":"四-行情回补数据逻辑","link":"#四-行情回补数据逻辑","children":[]},{"level":2,"title":"五. 注意事项","slug":"五-注意事项","link":"#五-注意事项","children":[]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":17.26,"words":5179},"filePathRelative":"docs/API_DOC_XTP关于L2行情数据回补功能的使用说明/XTP关于L2行情数据回补功能的使用说明.md","localizedDate":"2024年6月3日","autoDesc":true}');export{X as comp,f as data};
