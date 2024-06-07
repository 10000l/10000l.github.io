import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as r,b as t,d as n,f as s,a as p,w as o,e as a}from"./app-C9BeCxEA.js";const u={},d=n("h1",{id:"xtp交易分页查询示例代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xtp交易分页查询示例代码"},[n("span",null,"XTP交易分页查询示例代码")])],-1),k=a('<ul><li><a href="#%E5%88%86%E9%A1%B5%E8%AF%B7%E6%B1%82%E6%9F%A5%E8%AF%A2%E6%89%80%E6%9C%89%E6%8A%A5%E5%8D%95">分页请求查询所有报单</a><ul><li><a href="#%E4%B8%80%E6%80%BB%E4%BD%93%E6%AD%A5%E9%AA%A4%E8%AF%B4%E6%98%8E">一、总体步骤说明</a><ul><li><a href="#1-%E7%BB%A7%E6%89%BFspi">继承Spi</a></li><li><a href="#2-%E5%88%9D%E5%A7%8B%E5%8C%96api">初始化Api</a></li><li><a href="#3-%E7%99%BB%E5%BD%95%E4%BA%A4%E6%98%93%E6%9C%8D%E5%8A%A1%E5%99%A8">登录交易服务器</a></li><li><a href="#4-%E8%B0%83%E7%94%A8%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3">调用分页查询接口</a></li><li><a href="#5-%E9%87%8D%E5%86%99%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E5%9B%9E%E8%B0%83%E6%8E%A5%E5%8F%A3">重写分页查询回调接口</a></li></ul></li><li><a href="#%E4%BA%8C%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">二、完整示例代码</a></li></ul></li></ul>',1),v=a('<p>XTP Trader API 中有很多查询函数，针对某些用户的一次性查询结果特别多的情况，特别提供了分页查询函数供用户使用。 目前有如下几个分页查询函数：</p><p>（1）int QueryOrdersByPage(const XTPQueryOrderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>（2）int QueryOrdersByPageEx(const XTPQueryOrderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>（3）int QueryTradesByPage(const XTPQueryTraderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>（4）int QueryOptionCombinedOrdersByPage(const XTPQueryOptCombOrderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>（5) int QueryOptionCombinedOrdersByPageEx(const XTPQueryOptCombOrderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>（6）int QueryOptionCombinedTradesByPage(const XTPQueryOptCombTraderByPageReq *query_param, uint64_t session_id, int request_id);</p><p>下面将以分页查询普通报单函数为例，向大家展示如何分页查询用户的所有报单，其余分页查询函数的使用可以参考该用法进行适当修改并应用。</p><h2 id="分页请求查询所有报单" tabindex="-1"><a class="header-anchor" href="#分页请求查询所有报单"><span>分页请求查询所有报单</span></a></h2><h3 id="一、总体步骤说明" tabindex="-1"><a class="header-anchor" href="#一、总体步骤说明"><span>一、总体步骤说明</span></a></h3><h4 id="_1-继承spi" tabindex="-1"><a class="header-anchor" href="#_1-继承spi"><span>1. 继承Spi</span></a></h4>',11),m=n("strong",null,"TraderSpi",-1),b=n("strong",null,"TraderApi",-1),_=a(`<p>(1) TraderApi类提供交易相关的请求接口，本示例中调用分页查询接口。</p><p>(2) TraderSpi类提供交易相关的回调接口，本示例需要继承该类并重写分页查询信息的回调接口。</p><h4 id="_2-初始化api" tabindex="-1"><a class="header-anchor" href="#_2-初始化api"><span>2. 初始化Api</span></a></h4><p>在方法（initialize）里完成MyTraderApi的初始化，创建TraderSpi实例，并向TraderApi实例注册；</p><h4 id="_3-登录交易服务器" tabindex="-1"><a class="header-anchor" href="#_3-登录交易服务器"><span>3. 登录交易服务器</span></a></h4><p>登录交易服务器，登录前设置必要参数，包括设置软件开发版本号，软件开发Key，心跳检测时间间隔等，登录接口返回会话ID表示登录成功；</p><h4 id="_4-调用分页查询接口" tabindex="-1"><a class="header-anchor" href="#_4-调用分页查询接口"><span>4. 调用分页查询接口</span></a></h4><p>初始化分页查询订单请求结构体XTPQueryOrderByPageReq，将索引参数reference置0，表示从头查询，设置需要查询的订单条数req_count后，调用QueryOrdersByPage方法开始查询。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 查询报单</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryOrdersByPage</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ref<span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 分页查询订单请求结构体</span>
        XTPQueryOrderByPageReq query_param<span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>query_param<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>query_param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 需要查询的订单条数</span>
        query_param<span class="token punctuation">.</span>req_count <span class="token operator">=</span> req_count<span class="token punctuation">;</span>
        <span class="token comment">// 上一次收到的查询订单结果中带回来的索引，如果是从头查询，请置0</span>
        query_param<span class="token punctuation">.</span>reference <span class="token operator">=</span> ref<span class="token punctuation">;</span>

       <span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//用户自定义的查询ID，用来定位</span>
        <span class="token comment">// 从索引初始开始分页查询count条报单</span>
        <span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryOrdersByPageEx</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>query_param<span class="token punctuation">,</span> session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
			<span class="token comment">//查询请求发送失败，打印失败原因</span>
            XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;query orders by pages error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg
                <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, req_count: &quot;</span> <span class="token operator">&lt;&lt;</span> req_count
                <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, reference: &quot;</span> <span class="token operator">&lt;&lt;</span> ref
                <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-重写分页查询回调接口" tabindex="-1"><a class="header-anchor" href="#_5-重写分页查询回调接口"><span>5. 重写分页查询回调接口</span></a></h4><p>根据分页查询报单响应方法OnQueryOrderByPageEx获取此页订单数据，若order_sequence为0，表明当次查询没有查到任何记录；</p><p>当is_last为true时，表示本次分页查询完成，缓存当前参数order_sequence和query_reference，或缓存收到的报单信息；</p><p>如果缓存参数order_sequence等于请求数量req_count，那么表示还有报单。将缓存的query_reference参数设为下次查询的结构体索引参数reference，再次分页查询（参考示例中queryOrdersByPage方法）；</p><p>直至查询完所有报单。</p><p>示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 分页查询报单数据缓存</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>XTPQueryOrderRsp<span class="token operator">&gt;</span> query_order_page_buffer_<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryOrderByPageEx</span><span class="token punctuation">(</span>XTPOrderInfoEx <span class="token operator">*</span>order_info<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> order_sequence<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> query_reference<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> order_info <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">==</span> order_sequence<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 表明本次查询没有查到任何数据，可以通知其他线程</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    query_order_page_buffer_<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token operator">*</span>order_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当次查询请求的最后一条回应消息</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>req_count <span class="token operator">!=</span> order_sequence<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 所有订单都查询完毕</span>
			<span class="token comment">// TODO:可以将缓存通知UI线程</span>

			<span class="token comment">// 缓存发送后可以清空缓存容器</span>
			query_order_page_buffer_<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
       
		<span class="token comment">// 还有后续的订单，需要通知进行下一次分页查询</span>
        <span class="token function">_f_query_order_by_page</span><span class="token punctuation">(</span>req_count<span class="token punctuation">,</span> query_reference<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、完整示例代码" tabindex="-1"><a class="header-anchor" href="#二、完整示例代码"><span>二、完整示例代码</span></a></h3><p>以下是MyTraderSpi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_trader_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xoms_api_struct.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;functional&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">void</span><span class="token punctuation">(</span><span class="token operator">*</span>QryOrderByPageFunc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int</span> ref<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyTraderSpi</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">TraderSpi</span></span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">explicit</span> <span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 分页请求查询报单响应</span>
    <span class="token keyword">void</span> <span class="token function">OnQueryOrderByPageEx</span><span class="token punctuation">(</span>XTPOrderInfoEx <span class="token operator">*</span>order_info<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> order_sequence<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> query_reference<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 单次分页请求完成通知</span>
	<span class="token keyword">void</span> <span class="token function">bindTraderFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span><span class="token punctuation">,</span> <span class="token keyword">int64_t</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span> _f_query_order_by_page <span class="token operator">=</span> f<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token comment">// 分页查询得到的报单数据缓存</span>
    std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>XTPOrderInfoEx<span class="token operator">&gt;</span> query_order_page_buffer_<span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span><span class="token punctuation">,</span> <span class="token keyword">int64_t</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> _f_query_order_by_page<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderSpi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderSpi.h&quot;</span></span>

<span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryOrderByPageEx</span><span class="token punctuation">(</span>XTPOrderInfoEx <span class="token operator">*</span>order_info<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> order_sequence<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> query_reference<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> order_info <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">==</span> order_sequence<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 表明本次查询没有查到任何数据，可以通知其他线程</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    query_order_page_buffer_<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token operator">*</span>order_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当次查询请求的最后一条回应消息</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>req_count <span class="token operator">!=</span> order_sequence<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 所有订单都查询完毕</span>
			<span class="token comment">// TODO:可以将缓存通知UI线程或者其他作用</span>

			<span class="token comment">// 订单缓存使用后可以清空缓存容器（也可选择在下一次查询开始的时候清空）</span>
			query_order_page_buffer_<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
       
		<span class="token comment">// 还有后续的订单，需要通知进行下一次分页查询</span>
        <span class="token function">_f_query_order_by_page</span><span class="token punctuation">(</span>req_count<span class="token punctuation">,</span> query_reference<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderApi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_trader_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderSpi.h&quot;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyTraderApi</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">explicit</span> <span class="token function">MyTraderApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">MyTraderApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化</span>
	<span class="token keyword">bool</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 释放</span>
	<span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 登录</span>
	<span class="token keyword">uint64_t</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 分页请求查询报单</span>
	<span class="token comment">// req_count - 一次分页查询的最大数量</span>
	<span class="token comment">// ref - 分页查询的起始参数</span>
    <span class="token keyword">void</span> <span class="token function">queryOrdersByPage</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ref<span class="token punctuation">)</span><span class="token punctuation">;</span>

	
<span class="token keyword">private</span><span class="token operator">:</span>
	TraderApi <span class="token operator">*</span>user_trade_api_<span class="token punctuation">;</span>
	MyTraderSpi <span class="token operator">*</span>m_trader_spi<span class="token punctuation">;</span>

	<span class="token keyword">uint64_t</span> session_id_<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderApi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderApi.h&quot;</span></span>

<span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">MyTraderApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	user_trade_api_ <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    m_trader_spi <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    session_id_ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyTraderApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_ <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user_trade_api_<span class="token operator">-&gt;</span><span class="token function">Logout</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">)</span><span class="token punctuation">;</span>
        user_trade_api_<span class="token operator">-&gt;</span><span class="token function">Release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">bool</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">// 创建并初始化交易API</span>
	user_trade_api_ <span class="token operator">=</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token double-colon punctuation">::</span><span class="token class-name">TraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">CreateTraderApi</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> XTP_LOG_LEVEL_DEBUG<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// 注册回调接口</span>
		m_trader_spi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		user_trade_api_<span class="token operator">-&gt;</span><span class="token function">RegisterSpi</span><span class="token punctuation">(</span>m_trader_spi<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 在spi实例化后绑定再次分页查询函数指针</span>
		m_trader_spi<span class="token operator">-&gt;</span><span class="token function">bindTraderFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>MyTraderApi<span class="token double-colon punctuation">::</span>queryOrdersByPage<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>placeholders<span class="token double-colon punctuation">::</span>_1<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>placeholders<span class="token double-colon punctuation">::</span>_2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 登录前参数设置</span>
		user_trade_api_<span class="token operator">-&gt;</span><span class="token function">SetHeartBeatInterval</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		user_trade_api_<span class="token operator">-&gt;</span><span class="token function">SetSoftwareKey</span><span class="token punctuation">(</span><span class="token string">&quot;xxxxxxxxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		user_trade_api_<span class="token operator">-&gt;</span><span class="token function">SetSoftwareVersion</span><span class="token punctuation">(</span><span class="token string">&quot;xx.xx.xx.xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 设置公有流（订单响应、成交回报）重传方式</span>
		user_trade_api_<span class="token operator">-&gt;</span><span class="token function">SubscribePublicTopic</span><span class="token punctuation">(</span>XTP_TERT_QUICK<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 释放</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_ <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user_trade_api_<span class="token operator">-&gt;</span><span class="token function">Logout</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 登录</span>
<span class="token keyword">uint64_t</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//以下参数需要用户去根据实际情况修改</span>
	std<span class="token double-colon punctuation">::</span>string trade_server_ip <span class="token operator">=</span> <span class="token string">&quot;xxx.xxx.xxx.xxx&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> trade_server_port <span class="token operator">=</span> xx<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string account_name <span class="token operator">=</span> <span class="token string">&quot;xxxxxxxx&quot;</span><span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string account_pw <span class="token operator">=</span> <span class="token string">&quot;xxxxxx&quot;</span><span class="token punctuation">;</span>
	
	<span class="token keyword">uint64_t</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">Login</span><span class="token punctuation">(</span>trade_server_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> trade_server_port<span class="token punctuation">,</span> account_name<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> account_pw<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> XTP_PROTOCOL_TCP<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 登录成功</span>
	<span class="token punctuation">{</span>
		session_id_ <span class="token operator">=</span> ret<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token comment">// 登录失败</span>
	<span class="token punctuation">{</span>
		XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;login to server error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询报单</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryOrdersByPage</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span> req_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ref<span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 分页查询订单请求结构体</span>
        XTPQueryOrderByPageReq query_param<span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>query_param<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>query_param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 需要查询的订单条数</span>
        query_param<span class="token punctuation">.</span>req_count <span class="token operator">=</span> req_count<span class="token punctuation">;</span>
        <span class="token comment">// 上一次收到的查询订单结果中带回来的索引，如果是从头查询，请置0</span>
        query_param<span class="token punctuation">.</span>reference <span class="token operator">=</span> ref<span class="token punctuation">;</span>

        <span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//用户自定义的查询ID，用来定位</span>
        <span class="token comment">// 从索引初始开始分页查询count条报单</span>
        <span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryOrdersByPageEx</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>query_param<span class="token punctuation">,</span> session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//查询请求发送失败，打印失败原因</span>
            XTPRI<span class="token operator">*</span> error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;query orders by pages error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg
                <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, req_count: &quot;</span> <span class="token operator">&lt;&lt;</span> req_count
                <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;, reference: &quot;</span> <span class="token operator">&lt;&lt;</span> ref
                <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是main.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderApi.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
	<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;windows.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
	<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	MyTraderApi <span class="token operator">*</span>pTraderApi <span class="token operator">=</span> <span class="token keyword">new</span> MyTraderApi<span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>pTraderApi<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">bool</span> b_ret <span class="token operator">=</span> pTraderApi<span class="token operator">-&gt;</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> b_ret<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 初始化失败程序退出</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">uint64_t</span> ret <span class="token operator">=</span> pTraderApi<span class="token operator">-&gt;</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 示例代码只做分页查询所有报单，并未展示查询到的报单数据</span>
			<span class="token comment">// 发起第一次分页查询，后续的查询将根据查询结果触发</span>
			pTraderApi<span class="token operator">-&gt;</span><span class="token function">queryOrdersByPage</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//主线程循环，防止进程退出</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
			<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
			<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,28);function y(f,g){const e=i("font");return l(),r("div",null,[d,t(" TOC "),k,t(" /TOC "),v,n("p",null,[s('代码通过#include "xtp_trader_api.h"，将xtptraderapi.lib中声明的类和数据类型包括进来，该头文件中有两个重要的基类：'),p(e,{color:"#ff0000"},{default:o(()=>[m]),_:1}),s("和"),p(e,{color:"#ff0000"},{default:o(()=>[b]),_:1}),s("。")]),_])}const w=c(u,[["render",y],["__file","XTP交易分页查询示例代码.html.vue"]]),A=JSON.parse('{"path":"/docs/API_DOC_XTP%E4%BA%A4%E6%98%93%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/XTP%E4%BA%A4%E6%98%93%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html","title":"XTP交易分页查询示例代码","lang":"zh-CN","frontmatter":{"description":"XTP交易分页查询示例代码 分页请求查询所有报单 一、总体步骤说明 继承Spi 初始化Api 登录交易服务器 调用分页查询接口 重写分页查询回调接口 二、完整示例代码 XTP Trader API 中有很多查询函数，针对某些用户的一次性查询结果特别多的情况，特别提供了分页查询函数供用户使用。 目前有如下几个分页查询函数： （1）int QueryOrd...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/API_DOC_XTP%E4%BA%A4%E6%98%93%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/XTP%E4%BA%A4%E6%98%93%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"XTP交易分页查询示例代码"}],["meta",{"property":"og:description","content":"XTP交易分页查询示例代码 分页请求查询所有报单 一、总体步骤说明 继承Spi 初始化Api 登录交易服务器 调用分页查询接口 重写分页查询回调接口 二、完整示例代码 XTP Trader API 中有很多查询函数，针对某些用户的一次性查询结果特别多的情况，特别提供了分页查询函数供用户使用。 目前有如下几个分页查询函数： （1）int QueryOrd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XTP交易分页查询示例代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":2,"title":"分页请求查询所有报单","slug":"分页请求查询所有报单","link":"#分页请求查询所有报单","children":[{"level":3,"title":"一、总体步骤说明","slug":"一、总体步骤说明","link":"#一、总体步骤说明","children":[]},{"level":3,"title":"二、完整示例代码","slug":"二、完整示例代码","link":"#二、完整示例代码","children":[]}]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":6.69,"words":2006},"filePathRelative":"docs/API_DOC_XTP交易分页查询示例代码/XTP交易分页查询示例代码.md","localizedDate":"2024年6月3日","autoDesc":true}');export{w as comp,A as data};
