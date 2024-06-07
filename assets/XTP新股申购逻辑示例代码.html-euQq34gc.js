import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as u,b as p,d as s,f as n,a as e,w as o,e as a}from"./app-C9BeCxEA.js";const r={},k=a('<ul><li><a href="#%E4%B8%80%E6%80%BB%E4%BD%93%E6%AD%A5%E9%AA%A4%E8%AF%B4%E6%98%8E">一、总体步骤说明</a><ul><li><a href="#1-%E7%BB%A7%E6%89%BFspi">1.继承Spi</a></li><li><a href="#2-%E5%88%9D%E5%A7%8B%E5%8C%96api">2.初始化Api</a></li><li><a href="#3-%E7%99%BB%E5%BD%95%E4%BA%A4%E6%98%93%E6%9C%8D%E5%8A%A1%E5%99%A8">3.登录交易服务器</a></li><li><a href="#4-%E8%B0%83%E7%94%A8%E6%9F%A5%E8%AF%A2%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%A2%9D%E5%BA%A6%E4%BF%A1%E6%81%AF%E6%8E%A5%E5%8F%A3queryipoquotainfo">4. 调用查询新股申购额度信息接口QueryIPOQuotaInfo</a></li><li><a href="#5-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0onqueryipoquotainfo%E4%B8%AD%E7%BC%93%E5%AD%98%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%A2%9D%E5%BA%A6%E4%BF%A1%E6%81%AF">5. 回调函数OnQueryIPOQuotaInfo中缓存新股申购额度信息</a></li><li><a href="#6-%E8%B0%83%E7%94%A8%E6%9F%A5%E8%AF%A2%E5%BD%93%E6%97%A5%E6%96%B0%E8%82%A1%E4%BF%A1%E6%81%AF%E6%8E%A5%E5%8F%A3queryipoinfolist">6. 调用查询当日新股信息接口QueryIPOInfoList</a></li><li><a href="#7-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0onqueryipoinfolist%E4%B8%AD%E7%BC%93%E5%AD%98%E6%96%B0%E8%82%A1%E4%BF%A1%E6%81%AF">7. 回调函数OnQueryIPOInfoList中缓存新股信息</a></li><li><a href="#8-%E8%AE%A1%E7%AE%97%E5%87%BA%E5%8F%AF%E7%94%B3%E8%B4%AD%E7%9A%84%E6%96%B0%E8%82%A1%E4%BF%A1%E6%81%AF">8. 计算出可申购的新股信息</a></li><li><a href="#9-%E6%8A%A5%E5%8D%95">9. 报单</a></li></ul></li><li><a href="#%E4%BA%8C%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">二、完整示例代码</a></li></ul>',1),d=a('<h1 id="新股申购逻辑示例代码" tabindex="-1"><a class="header-anchor" href="#新股申购逻辑示例代码"><span>新股申购逻辑示例代码</span></a></h1><h3 id="一、总体步骤说明" tabindex="-1"><a class="header-anchor" href="#一、总体步骤说明"><span>一、总体步骤说明</span></a></h3><h4 id="_1-继承spi" tabindex="-1"><a class="header-anchor" href="#_1-继承spi"><span>1. 继承Spi</span></a></h4>',3),v=s("strong",null,"TraderSpi",-1),m=s("strong",null,"TraderApi",-1),b=a(`<p>TraderApi类提供交易相关的请求接口，本示例中调用查询新股申购信息列表、查询新股额度信息和报单接口。</p><p>TraderSpi类提供交易相关的回调接口，本示例需要继承该类并重写查询新股申购信息列表和额度信息的回调接口。</p><h4 id="_2-初始化api" tabindex="-1"><a class="header-anchor" href="#_2-初始化api"><span>2. 初始化Api</span></a></h4><p>在方法（initialize）里完成MyTraderApi的初始化，创建TraderSpi实例，并向TraderApi实例注册；</p><h4 id="_3-登录交易服务器" tabindex="-1"><a class="header-anchor" href="#_3-登录交易服务器"><span>3. 登录交易服务器</span></a></h4><p>登录交易服务器，登录前设置必要参数，包括设置软件开发版本号，软件开发Key，心跳检测时间间隔等，登录接口返回会话ID表示登录成功；</p><h4 id="_4-调用查询新股申购额度信息接口queryipoquotainfo" tabindex="-1"><a class="header-anchor" href="#_4-调用查询新股申购额度信息接口queryipoquotainfo"><span>4. 调用查询新股申购额度信息接口QueryIPOQuotaInfo</span></a></h4><p>调用api的QueryIPOQuotaInfo方法发出查询新股申购额度信息的请求。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 查询用户新股申购额度信息</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryIPOQuotaInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识查询</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryIPOQuotaInfo</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
			XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; query ipo quota error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="_5-回调函数onqueryipoquotainfo中缓存新股申购额度信息" tabindex="-1"><a class="header-anchor" href="#_5-回调函数onqueryipoquotainfo中缓存新股申购额度信息"><span>5. 回调函数OnQueryIPOQuotaInfo中缓存新股申购额度信息</span></a></h4><p>在spi的回调函数OnQueryIPOQuotaInfo中缓存新股申购额度信息并缓存备用。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">int32_t</span> quota_sh<span class="token punctuation">;</span> <span class="token comment">//沪市新股申购额度</span>
<span class="token keyword">int32_t</span> quota_tech<span class="token punctuation">;</span><span class="token comment">//科创板新股申购额度</span>
<span class="token keyword">int32_t</span> quota_sz<span class="token punctuation">;</span><span class="token comment">//深市新股申购额度</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryIPOQuotaInfo</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp <span class="token operator">*</span>quota_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>error_info<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//查询有错误，输出错误信息</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;OnQueryIPOQuotaInfo error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//存储各个市场的新股申购额度</span>
	<span class="token function">calcIPOquota</span><span class="token punctuation">(</span>quota_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 示例代码只是spi实例通知parent去获取新股信息，方便api实例继续运行</span>
		<span class="token function">_f_get_ipo_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//存储各个市场的新股申购额度</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">calcIPOquota</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

	<span class="token keyword">switch</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>market<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">case</span> XTP_MKT_SZ_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		quota_sz <span class="token operator">=</span> data<span class="token operator">-&gt;</span>quantity<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_MKT_SH_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		quota_tech <span class="token operator">=</span> data<span class="token operator">-&gt;</span>tech_quantity<span class="token punctuation">;</span>
		quota_sh <span class="token operator">=</span> data<span class="token operator">-&gt;</span>quantity<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="_6-调用查询当日新股信息接口queryipoinfolist" tabindex="-1"><a class="header-anchor" href="#_6-调用查询当日新股信息接口queryipoinfolist"><span>6. 调用查询当日新股信息接口QueryIPOInfoList</span></a></h4><p>调用api的QueryIPOInfoList方法发出查询新股申购信息列表请求。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 查询今日新股申购信息列表</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryIPOInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识查询</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryIPOInfoList</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
			XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; query ipo info error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="_7-回调函数onqueryipoinfolist中缓存新股信息" tabindex="-1"><a class="header-anchor" href="#_7-回调函数onqueryipoinfolist中缓存新股信息"><span>7. 回调函数OnQueryIPOInfoList中缓存新股信息</span></a></h4><p>在spi的回调函数OnQueryIPOInfoList中获取到新股申购信息列表并缓存备用。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>
<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryIPOInfoList</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp <span class="token operator">*</span>ipo_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//查询有错误，输出错误信息</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>error_info<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;OnQueryIPOInfoList error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//计算每只新股的可申购额度</span>
	<span class="token function">calIPOInfoAvaQty</span><span class="token punctuation">(</span>ipo_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">/// TODO:缓存数据发送至UI线程</span>

		<span class="token comment">// 数据使用完后清空容器</span>
		ipo_info_buffer_<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="_8-计算出可申购的新股信息" tabindex="-1"><a class="header-anchor" href="#_8-计算出可申购的新股信息"><span>8. 计算出可申购的新股信息</span></a></h4><p>根据新股信息和新股申购额度信息，比较后，取小值，并根据申购单元倍数计算出此新股的可申购数量。将计算后的数据缓存至ipo_info_buffer_备用。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 根据申购额度，申购单元和最大申购量计算可申购量</span>
<span class="token comment">//计算每只新股的最后可申购额度</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">calIPOInfoAvaQty</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

	<span class="token keyword">int32_t</span> qty_ava <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">switch</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>market<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">case</span> XTP_MKT_SH_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>ticker_type <span class="token operator">==</span> XTP_TICKER_TYPE_TECH_STOCK<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_tech<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span>
		<span class="token punctuation">{</span>
			qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_sh<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_MKT_SZ_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_sz<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//按照最小申购单元处理申购额度</span>
	<span class="token keyword">int</span> num <span class="token operator">=</span> qty_ava <span class="token operator">%</span> data<span class="token operator">-&gt;</span>unit<span class="token punctuation">;</span>
	qty_ava <span class="token operator">-=</span> num<span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>qty_ava <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">//如果申购数量为0，就跳过，无需申购</span>

	MyIpoInfo ipo_info<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ipo_info<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>MyIpoInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memcpy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ipo_info<span class="token punctuation">.</span>ipo_info<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	ipo_info<span class="token punctuation">.</span>qty_available <span class="token operator">=</span> qty_ava<span class="token punctuation">;</span>
	
	<span class="token comment">//缓存新股申购信息</span>
	ipo_info_buffer_<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>ipo_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-报单" tabindex="-1"><a class="header-anchor" href="#_9-报单"><span>9. 报单</span></a></h4><p>在spi收到最后一条查询结果时，通知api报单。 遍历缓存数据，根据其可申购数量，做新股申购。 示例代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 报送新股申购订单</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">insertOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>MyIpoInfo<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> m_trader_spi<span class="token operator">-&gt;</span><span class="token function">getIPOInfoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> m_trader_spi<span class="token operator">-&gt;</span><span class="token function">getIPOInfoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>

		<span class="token comment">// XTPOrderInsertInfo报单结构体初始化</span>
		XTPOrderInsertInfo order_info<span class="token punctuation">;</span>
		<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order_info<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>order_info<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 参数赋值</span>
		order_info<span class="token punctuation">.</span>market <span class="token operator">=</span> it<span class="token operator">-&gt;</span>ipo_info<span class="token punctuation">.</span>market<span class="token punctuation">;</span>
		<span class="token function">strcpy_s</span><span class="token punctuation">(</span>order_info<span class="token punctuation">.</span>ticker<span class="token punctuation">,</span> XTP_TICKER_LEN<span class="token punctuation">,</span> it<span class="token operator">-&gt;</span>ipo_info<span class="token punctuation">.</span>ticker<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// XTP_TICKER_LEN:存放证券代码的字符串长度</span>
		order_info<span class="token punctuation">.</span>business_type <span class="token operator">=</span> XTP_BUSINESS_TYPE_IPOS<span class="token punctuation">;</span>          <span class="token comment">// XTP_BUSINESS_TYPE_IPOS为新股申购的业务类型</span>
		order_info<span class="token punctuation">.</span>side <span class="token operator">=</span> XTP_SIDE_BUY<span class="token punctuation">;</span>            <span class="token comment">// 买</span>
		order_info<span class="token punctuation">.</span>position_effect <span class="token operator">=</span> XTP_POSITION_EFFECT_INIT<span class="token punctuation">;</span>      <span class="token comment">// position_effect开平标志，除期权以外，都使用该值</span>
		order_info<span class="token punctuation">.</span>price_type <span class="token operator">=</span> XTP_PRICE_LIMIT<span class="token punctuation">;</span>   <span class="token comment">// 价格类型为限价</span>
		order_info<span class="token punctuation">.</span>quantity <span class="token operator">=</span> it<span class="token operator">-&gt;</span>qty_available<span class="token punctuation">;</span>                   <span class="token comment">// 申购单位，深证500股，上证1000股，科创板500，委托数量是这些单位的整数倍</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_ <span class="token operator">&amp;&amp;</span> session_id_ <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// InsertOrder下单接口</span>
			<span class="token keyword">uint64_t</span> xtp_id <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">InsertOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order_info<span class="token punctuation">,</span> session_id_<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> xtp_id<span class="token punctuation">)</span><span class="token comment">//=0说明下单发送失败</span>
			<span class="token punctuation">{</span>
				<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
				XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; insert ipo orders error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、完整示例代码" tabindex="-1"><a class="header-anchor" href="#二、完整示例代码"><span>二、完整示例代码</span></a></h3><p>首先初始化MyTraderApi类，后连接服务端设置参数，执行登录，查询新股信息，报单等操作。</p><p>完整示例代码如下：</p><br><p>以下是MyTraderSpi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_trader_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xoms_api_struct.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;functional&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token comment">//每只新股的可申购信息结构体</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">MyIPOInfo</span> <span class="token punctuation">{</span>
	XTPQueryIPOTickerRsp ipo_info<span class="token punctuation">;</span>
	<span class="token keyword">int32_t</span> qty_available<span class="token punctuation">;</span>
<span class="token punctuation">}</span> MyIpoInfo<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyTraderSpi</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">TraderSpi</span></span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">explicit</span> <span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 请求查询今日新股申购信息列表的响应</span>
	<span class="token keyword">void</span> <span class="token function">OnQueryIPOInfoList</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp <span class="token operator">*</span>ipo_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 请求查询用户新股申购额度信息的响应</span>
	<span class="token keyword">void</span> <span class="token function">OnQueryIPOQuotaInfo</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp <span class="token operator">*</span>quota_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 查询请求完成后，通知获取新股信息</span>
	<span class="token keyword">void</span> <span class="token function">bindTraderGetIPOInfoFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span> _f_get_ipo_info <span class="token operator">=</span> f<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token comment">// 查询请求完成通知报单</span>
	<span class="token keyword">void</span> <span class="token function">bindTraderInsertOrderFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span> _f_insert_order <span class="token operator">=</span> f<span class="token punctuation">;</span> <span class="token punctuation">}</span>

	<span class="token comment">// 数据</span>
	std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>MyIpoInfo<span class="token operator">&gt;</span> <span class="token operator">*</span><span class="token function">getIPOInfoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">&amp;</span>ipo_info_buffer_<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">protected</span><span class="token operator">:</span>
	<span class="token comment">// 计算市场的申购额度</span>
	<span class="token keyword">void</span> <span class="token function">calcIPOquota</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp<span class="token operator">*</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 计算每只新股的可申购数量</span>
	<span class="token keyword">void</span> <span class="token function">calIPOInfoAvaQty</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp<span class="token operator">*</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>
	std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>MyIpoInfo<span class="token operator">&gt;</span> ipo_info_buffer_<span class="token punctuation">;</span>

	std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> _f_get_ipo_info<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> _f_insert_order<span class="token punctuation">;</span>

	<span class="token keyword">int32_t</span> quota_sh<span class="token punctuation">;</span> <span class="token comment">//沪市新股申购额度</span>
	<span class="token keyword">int32_t</span> quota_tech<span class="token punctuation">;</span><span class="token comment">//科创板新股申购额度</span>
	<span class="token keyword">int32_t</span> quota_sz<span class="token punctuation">;</span><span class="token comment">//深市新股申购额度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderSpi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderSpi.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>

<span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	quota_sh <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	quota_tech <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	quota_sz <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyTraderSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryIPOInfoList</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp <span class="token operator">*</span>ipo_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//查询有错误，输出错误信息</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>error_info<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;OnQueryIPOInfoList error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//计算每只新股的可申购额度</span>
	<span class="token function">calIPOInfoAvaQty</span><span class="token punctuation">(</span>ipo_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">/// TODO:缓存数据发送至UI线程</span>

		<span class="token comment">// 示例代码只是spi实例通知parent去报新股申购订单，方便api实例继续运行</span>
		<span class="token function">_f_insert_order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 报单后清空容器</span>
		ipo_info_buffer_<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnQueryIPOQuotaInfo</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp <span class="token operator">*</span>quota_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">int</span> request_id<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">,</span> <span class="token keyword">uint64_t</span> session_id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>error_info<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//查询有错误，输出错误信息</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;OnQueryIPOQuotaInfo error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//存储各个市场的新股申购额度</span>
	<span class="token function">calcIPOquota</span><span class="token punctuation">(</span>quota_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 示例代码只是spi实例通知parent去获取新股信息，方便api实例继续运行</span>
		<span class="token function">_f_get_ipo_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">calcIPOquota</span><span class="token punctuation">(</span>XTPQueryIPOQuotaRsp <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

	<span class="token keyword">switch</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>market<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">case</span> XTP_MKT_SZ_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		quota_sz <span class="token operator">=</span> data<span class="token operator">-&gt;</span>quantity<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_MKT_SH_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		quota_tech <span class="token operator">=</span> data<span class="token operator">-&gt;</span>tech_quantity<span class="token punctuation">;</span>
		quota_sh <span class="token operator">=</span> data<span class="token operator">-&gt;</span>quantity<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//计算每只新股的最后可申购额度</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderSpi</span><span class="token double-colon punctuation">::</span><span class="token function">calIPOInfoAvaQty</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

	<span class="token keyword">int32_t</span> qty_ava <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">switch</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>market<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">case</span> XTP_MKT_SH_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>ticker_type <span class="token operator">==</span> XTP_TICKER_TYPE_TECH_STOCK<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_tech<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span>
		<span class="token punctuation">{</span>
			qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_sh<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> XTP_MKT_SZ_A<span class="token operator">:</span>
	<span class="token punctuation">{</span>
		qty_ava <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>data<span class="token operator">-&gt;</span>qty_upper_limit<span class="token punctuation">,</span> quota_sz<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//按照最小申购单元处理申购额度</span>
	<span class="token keyword">int</span> num <span class="token operator">=</span> qty_ava <span class="token operator">%</span> data<span class="token operator">-&gt;</span>unit<span class="token punctuation">;</span>
	qty_ava <span class="token operator">-=</span> num<span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>qty_ava <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">//如果申购数量为0，就跳过，无需申购</span>

	MyIpoInfo ipo_info<span class="token punctuation">;</span>
	<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ipo_info<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>MyIpoInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">memcpy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ipo_info<span class="token punctuation">.</span>ipo_info<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>XTPQueryIPOTickerRsp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	ipo_info<span class="token punctuation">.</span>qty_available <span class="token operator">=</span> qty_ava<span class="token punctuation">;</span>
	
	<span class="token comment">//缓存新股申购信息</span>
	ipo_info_buffer_<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>ipo_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderApi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_trader_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderSpi.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
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

	<span class="token comment">// 请求查询今日新股申购信息列表</span>
	<span class="token keyword">void</span> <span class="token function">queryIPOInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 请求查询用户新股申购额度信息</span>
	<span class="token keyword">void</span> <span class="token function">queryIPOQuotaInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 报单</span>
	<span class="token keyword">void</span> <span class="token function">insertOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>
	TraderApi <span class="token operator">*</span>user_trade_api_<span class="token punctuation">;</span>
	MyTraderSpi <span class="token operator">*</span>m_trader_spi<span class="token punctuation">;</span>

	<span class="token keyword">uint64_t</span> session_id_<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyTraderApi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyTraderApi.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>

<span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">MyTraderApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	user_trade_api_ <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
	m_trader_spi <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>

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
		m_trader_spi<span class="token operator">-&gt;</span><span class="token function">bindTraderGetIPOInfoFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>MyTraderApi<span class="token double-colon punctuation">::</span>queryIPOInfoList<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		m_trader_spi<span class="token operator">-&gt;</span><span class="token function">bindTraderInsertOrderFunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>MyTraderApi<span class="token double-colon punctuation">::</span>insertOrder<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
	<span class="token comment">// 用户请根据实际情况修改登录参数</span>
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

<span class="token comment">// 查询今日新股申购信息列表</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryIPOInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识查询</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryIPOInfoList</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
			XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; query ipo info error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询用户新股申购额度信息</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">queryIPOQuotaInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> request_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户自定义，用来标识查询</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> ret <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">QueryIPOQuotaInfo</span><span class="token punctuation">(</span>session_id_<span class="token punctuation">,</span> request_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
			XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; query ipo quota error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报送新股申购订单</span>
<span class="token keyword">void</span> <span class="token class-name">MyTraderApi</span><span class="token double-colon punctuation">::</span><span class="token function">insertOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>MyIpoInfo<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> m_trader_spi<span class="token operator">-&gt;</span><span class="token function">getIPOInfoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> m_trader_spi<span class="token operator">-&gt;</span><span class="token function">getIPOInfoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>

		<span class="token comment">// XTPOrderInsertInfo报单结构体初始化</span>
		XTPOrderInsertInfo order_info<span class="token punctuation">;</span>
		<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order_info<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>order_info<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 参数赋值</span>
		order_info<span class="token punctuation">.</span>market <span class="token operator">=</span> it<span class="token operator">-&gt;</span>ipo_info<span class="token punctuation">.</span>market<span class="token punctuation">;</span>
		<span class="token function">strcpy_s</span><span class="token punctuation">(</span>order_info<span class="token punctuation">.</span>ticker<span class="token punctuation">,</span> XTP_TICKER_LEN<span class="token punctuation">,</span> it<span class="token operator">-&gt;</span>ipo_info<span class="token punctuation">.</span>ticker<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// XTP_TICKER_LEN:存放证券代码的字符串长度</span>
		order_info<span class="token punctuation">.</span>business_type <span class="token operator">=</span> XTP_BUSINESS_TYPE_IPOS<span class="token punctuation">;</span>          <span class="token comment">// XTP_BUSINESS_TYPE_IPOS为新股申购的业务类型</span>
		order_info<span class="token punctuation">.</span>side <span class="token operator">=</span> XTP_SIDE_BUY<span class="token punctuation">;</span>            <span class="token comment">// 买</span>
		order_info<span class="token punctuation">.</span>position_effect <span class="token operator">=</span> XTP_POSITION_EFFECT_INIT<span class="token punctuation">;</span>      <span class="token comment">// position_effect开平标志，除期权以外，都使用该值</span>
		order_info<span class="token punctuation">.</span>price_type <span class="token operator">=</span> XTP_PRICE_LIMIT<span class="token punctuation">;</span>   <span class="token comment">// 价格类型为限价</span>
		order_info<span class="token punctuation">.</span>quantity <span class="token operator">=</span> it<span class="token operator">-&gt;</span>qty_available<span class="token punctuation">;</span>                   <span class="token comment">// 申购单位，深证500股，上证1000股，科创板500，委托数量是这些单位的整数倍</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>user_trade_api_ <span class="token operator">&amp;&amp;</span> session_id_ <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// InsertOrder下单接口</span>
			<span class="token keyword">uint64_t</span> xtp_id <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">InsertOrder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order_info<span class="token punctuation">,</span> session_id_<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> xtp_id<span class="token punctuation">)</span><span class="token comment">//=0说明下单发送失败</span>
			<span class="token punctuation">{</span>
				<span class="token comment">// 下单发送失败，获取下单发送失败的错误码</span>
				XTPRI <span class="token operator">*</span>error_info <span class="token operator">=</span> user_trade_api_<span class="token operator">-&gt;</span><span class="token function">GetApiLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; insert ipo orders error, &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_id <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">&lt;&lt;</span> error_info<span class="token operator">-&gt;</span>error_msg <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是main.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
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
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b_ret<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 初始化失败程序退出</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">uint64_t</span> ret <span class="token operator">=</span> pTraderApi<span class="token operator">-&gt;</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// 先查询新股额度，后续查询和报单将在回调函数中触发</span>
			pTraderApi<span class="token operator">-&gt;</span><span class="token function">queryIPOQuotaInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function _(y,f){const t=i("font");return l(),u("div",null,[p(" TOC "),k,p(" /TOC "),d,s("p",null,[n('代码通过#include "xtp_trader_api.h"，将xtptraderapi.lib中声明的类和数据类型包括进来，该头文件中有两个重要的基类：'),e(t,{color:"#ff0000"},{default:o(()=>[v]),_:1}),n("和"),e(t,{color:"#ff0000"},{default:o(()=>[m]),_:1}),n("。")]),b])}const I=c(r,[["render",_],["__file","XTP新股申购逻辑示例代码.html.vue"]]),h=JSON.parse('{"path":"/docs/API_DOC_XTP%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%80%BB%E8%BE%91%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/XTP%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%80%BB%E8%BE%91%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html","title":"新股申购逻辑示例代码","lang":"zh-CN","frontmatter":{"description":"一、总体步骤说明 1.继承Spi 2.初始化Api 3.登录交易服务器 4. 调用查询新股申购额度信息接口QueryIPOQuotaInfo 5. 回调函数OnQueryIPOQuotaInfo中缓存新股申购额度信息 6. 调用查询当日新股信息接口QueryIPOInfoList 7. 回调函数OnQueryIPOInfoList中缓存新股信息 8. ...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/API_DOC_XTP%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%80%BB%E8%BE%91%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/XTP%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD%E9%80%BB%E8%BE%91%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"新股申购逻辑示例代码"}],["meta",{"property":"og:description","content":"一、总体步骤说明 1.继承Spi 2.初始化Api 3.登录交易服务器 4. 调用查询新股申购额度信息接口QueryIPOQuotaInfo 5. 回调函数OnQueryIPOQuotaInfo中缓存新股申购额度信息 6. 调用查询当日新股信息接口QueryIPOInfoList 7. 回调函数OnQueryIPOInfoList中缓存新股信息 8. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"新股申购逻辑示例代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":3,"title":"一、总体步骤说明","slug":"一、总体步骤说明","link":"#一、总体步骤说明","children":[]},{"level":3,"title":"二、完整示例代码","slug":"二、完整示例代码","link":"#二、完整示例代码","children":[]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":9.92,"words":2975},"filePathRelative":"docs/API_DOC_XTP新股申购逻辑示例代码/XTP新股申购逻辑示例代码.md","localizedDate":"2024年6月3日","autoDesc":true}');export{I as comp,h as data};
