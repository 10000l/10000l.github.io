import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as i,b as a,a as l,w as u,f as e,d as n,e as s}from"./app-C9BeCxEA.js";const r={},d=n("h2",{id:"quotespi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quotespi"},[n("span",null,"QuoteSpi")])],-1),k=n("p",null,"目录",-1),m=s('<ul><li><a href="#1-%E6%8E%A5%E5%8F%A3">1. 接口</a></li><li><a href="#2-%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">2. 示例代码</a></li><li><a href="#3-ondisconnected">3. OnDisconnected</a></li><li><a href="#4-onerror">4. OnError</a></li><li><a href="#5-onsubmarketdata">5. OnSubMarketData</a></li><li><a href="#6-onunsubmarketdata">6. OnUnSubMarketData</a></li><li><a href="#7-ondepthmarketdata">7. OnDepthMarketData</a></li><li><a href="#8-onsuborderbook">8. OnSubOrderBook</a></li><li><a href="#9-onunsuborderbook">9. OnUnSubOrderBook</a></li><li><a href="#10-onorderbook">10. OnOrderBook</a></li><li><a href="#11-onsubtickbytick">11. OnSubTickByTick</a></li><li><a href="#12-onunsubtickbytick">12. OnUnSubTickByTick</a></li><li><a href="#13-ontickbytick">13. OnTickByTick</a></li><li><a href="#14-onsubscribeallmarketdata">14. OnSubscribeAllMarketData</a></li><li><a href="#15-onunsubscribeallmarketdata">15. OnUnSubscribeAllMarketData</a></li><li><a href="#16-onsubscribeallorderbook">16. OnSubscribeAllOrderBook</a></li><li><a href="#17-onunsubscribeallorderbook">17. OnUnSubscribeAllOrderBook</a></li><li><a href="#18-onsubscribealltickbytick">18. OnSubscribeAllTickByTick</a></li><li><a href="#19-onunsubscribealltickbytick">19. OnUnSubscribeAllTickByTick</a></li><li><a href="#20-onqueryalltickers">20. OnQueryAllTickers</a></li><li><a href="#21-onquerytickerspriceinfo">21. OnQueryTickersPriceInfo</a></li><li><a href="#22-onsubscribealloptionmarketdata">22. OnSubscribeAllOptionMarketData</a></li><li><a href="#23-onunsubscribealloptionmarketdata">23. OnUnSubscribeAllOptionMarketData</a></li><li><a href="#24-onsubscribealloptionorderbook">24. OnSubscribeAllOptionOrderBook</a></li><li><a href="#25-onunsubscribealloptionorderbook">25. OnUnSubscribeAllOptionOrderBook</a></li><li><a href="#26-onsubscribealloptiontickbytick">26. OnSubscribeAllOptionTickByTick</a></li><li><a href="#27-onunsubscribealloptiontickbytick">27. OnUnSubscribeAllOptionTickByTick</a></li><li><a href="#28-onqueryalltickersfullinfo">28. OnQueryAllTickersFullInfo</a></li><li><a href="#29-onrebuildquoteserverdisconnected">29. OnRebuildQuoteServerDisconnected</a></li><li><a href="#30-onrequestrebuildquote">30. OnRequestRebuildQuote</a></li><li><a href="#31-onrebuildtickbytick">31. OnRebuildTickByTick</a></li><li><a href="#32-onrebuildmarketdata">32. OnRebuildMarketData</a></li><li><a href="#33-onqueryallnqtickersfullinfo">33. OnQueryAllNQTickersFullInfo</a></li><li><a href="#34-ontickbyticklossrange">34. OnTickByTickLossRange</a></li><li><a href="#35-onetfiopvdata">35. OnETFIOPVData</a></li></ul>',1),v=s(`<p><br><br></p><p>QuoteSpi类提供了行情相关的回调接口，用户需要继承该类并重写这些接口，以获取响应数据。</p><h3 id="_1-接口" tabindex="-1"><a class="header-anchor" href="#_1-接口"><span>1. 接口</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">namespace</span> XTP <span class="token punctuation">{</span>
	<span class="token keyword">namespace</span> API <span class="token punctuation">{</span>
		<span class="token keyword">class</span> <span class="token class-name">QuoteSpi</span>
		<span class="token punctuation">{</span>
		<span class="token keyword">public</span><span class="token operator">:</span>

			<span class="token comment">///当客户端与行情后台通信连接断开时，该方法被调用。</span>
			<span class="token comment">///@param reason 错误原因，请与错误代码表对应</span>
			<span class="token comment">///@remark api不会自动重连，当断线发生时，请用户自行选择后续操作。可以在此函数中调用Login重新登录。注意用户重新登录后，需要重新订阅行情</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


			<span class="token comment">///错误应答</span>
			<span class="token comment">///@param error_info 当服务器响应发生错误时的具体的错误代码和错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 此函数只有在服务器发生错误时才会调用，一般无需用户处理</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnError</span><span class="token punctuation">(</span>XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token comment">///逐笔丢包应答</span>
			<span class="token comment">///@param begin_seq 当逐笔出现丢包时，丢包区间下限（可能与上限一致）</span>
			<span class="token comment">///@param end_seq 当逐笔出现丢包时，丢包区间上限（可能与下限一致）</span>
			<span class="token comment">///@remark 此函数只有在逐笔发生丢包时才会有调用，如果丢包的上下限一致，表示仅丢失了一个包，注意此包仅为数据包，包含1个或者多个逐笔数据</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnTickByTickLossRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> begin_seq<span class="token punctuation">,</span> <span class="token keyword">int</span> end_seq<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅行情应答，包括股票、指数和期权</span>
			<span class="token comment">///@param ticker 详细的合约订阅情况</span>
			<span class="token comment">///@param error_info 订阅合约发生错误时的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubMarketData</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订行情应答，包括股票、指数和期权</span>
			<span class="token comment">///@param ticker 详细的合约取消订阅情况</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次取消订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubMarketData</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///深度行情通知，包含买一卖一队列</span>
			<span class="token comment">///@param market_data 行情数据</span>
			<span class="token comment">///@param bid1_qty 买一队列数据</span>
			<span class="token comment">///@param bid1_count 买一队列的有效委托笔数，即bid1_qty数组的长度，最大为50</span>
			<span class="token comment">///@param max_bid1_count 买一队列总委托笔数</span>
			<span class="token comment">///@param ask1_qty 卖一队列数据</span>
			<span class="token comment">///@param ask1_count 卖一队列的有效委托笔数，即ask1_qty数组的长度，最大为50</span>
			<span class="token comment">///@param max_ask1_count 卖一队列总委托笔数</span>
			<span class="token comment">///@remark 需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnDepthMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>market_data<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> bid1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> bid1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_bid1_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ask1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> ask1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_ask1_count<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token comment">/// ETF的IOPV通知</span>
			<span class="token comment">/// @param iopv ETF的参考单位基金净值数据，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnETFIOPVData</span><span class="token punctuation">(</span>IOPV <span class="token operator">*</span>iopv<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅行情订单簿应答，包括股票</span>
			<span class="token comment">///@param ticker 详细的合约订阅情况</span>
			<span class="token comment">///@param error_info 订阅合约发生错误时的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubOrderBook</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订行情订单簿应答，包括股票</span>
			<span class="token comment">///@param ticker 详细的合约取消订阅情况</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次取消订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubOrderBook</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///行情订单簿通知，包括股票</span>
			<span class="token comment">///@param order_book 行情订单簿数据，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnOrderBook</span><span class="token punctuation">(</span>XTPOB <span class="token operator">*</span>order_book<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅逐笔行情应答，包括股票</span>
			<span class="token comment">///@param ticker 详细的合约订阅情况</span>
			<span class="token comment">///@param error_info 订阅合约发生错误时的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubTickByTick</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订逐笔行情应答，包括股票</span>
			<span class="token comment">///@param ticker 详细的合约取消订阅情况</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次取消订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token comment">///@remark 每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubTickByTick</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///逐笔行情通知，包括股票</span>
			<span class="token comment">///@param tbt_data 逐笔行情数据，包括逐笔委托和逐笔成交，此为共用结构体，需要根据type来区分是逐笔委托还是逐笔成交，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的股票行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的股票行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的股票行情订单簿应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的股票行情订单簿应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的股票逐笔行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的股票逐笔行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


			<span class="token comment">///查询合约部分静态信息的应答</span>
			<span class="token comment">///@param ticker_info 合约部分静态信息</span>
			<span class="token comment">///@param error_info 查询合约部分静态信息时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次查询合约部分静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllTickers</span><span class="token punctuation">(</span>XTPQSI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///查询合约的最新价格信息应答</span>
			<span class="token comment">///@param ticker_info 合约的最新价格信息</span>
			<span class="token comment">///@param error_info 查询合约的最新价格信息时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryTickersPriceInfo</span><span class="token punctuation">(</span>XTPTPI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的期权行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的期权行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的期权行情订单簿应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的期权行情订单簿应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///订阅全市场的期权逐笔行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///退订全市场的期权逐笔行情应答</span>
			<span class="token comment">///@param exchange_id 表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</span>
			<span class="token comment">///@param error_info 取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@remark 需要快速返回</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///查询合约完整静态信息的应答</span>
			<span class="token comment">///@param ticker_info 合约完整静态信息</span>
			<span class="token comment">///@param error_info 查询合约完整静态信息时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次查询合约完整静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllTickersFullInfo</span><span class="token punctuation">(</span>XTPQFI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

			<span class="token comment">///查询新三板合约完整静态信息的应答</span>
			<span class="token comment">///@param ticker_info 合约完整静态信息</span>
			<span class="token comment">///@param error_info 查询合约完整静态信息时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</span>
			<span class="token comment">///@param is_last 是否此次查询合约完整静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllNQTickersFullInfo</span><span class="token punctuation">(</span>XTPNQFI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			
			<span class="token comment">///当客户端与回补行情服务器通信连接断开时，该方法被调用。</span>
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
			<span class="token comment">///@param md_data 回补的快照行情数据</span>
			<span class="token comment">///@remark 需要快速返回，此函数调用与OnDepthMarketData不在一个线程内，会在OnRequestRebuildQuote()之前回调</span>
			<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>md_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>		
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-示例代码" tabindex="-1"><a class="header-anchor" href="#_2-示例代码"><span>2. 示例代码</span></a></h3><p>MyQuoteSpi继承QuoteSpi</p><p>以下是MyQuoteSpi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_quote_api.h&quot;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyQuoteSpi</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">QuoteSpi</span></span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">explicit</span> <span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//接收行情</span>
    <span class="token keyword">void</span> <span class="token function">OnDepthMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>market_data<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> bid1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> bid1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_bid1_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ask1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> ask1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_ask1_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyQuoteSpi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyQuoteSpi.h&quot;</span></span>

<span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">//接收行情</span>
<span class="token keyword">void</span> <span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnDepthMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>market_data<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> bid1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> bid1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_bid1_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ask1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> ask1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_ask1_count<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;OnDepthMarketData.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3-ondisconnected" tabindex="-1"><a class="header-anchor" href="#_3-ondisconnected"><span>3. OnDisconnected</span></a></h3><p>当客户端与行情后台通信连接断开时，该方法被调用。</p><p>Api不会自动重连，当断线发生时，请用户自行选择后续操作。可以在此函数中调用Login重新登录。注意用户重新登录后，需要重新订阅行情。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>Reason：错误原因，目前仅一个原因，可不用参考</p><p>3.返回</p><p>4.示例代码 以下是MyQuoteSpi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_quote_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;functional&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyQuoteSpi</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">QuoteSpi</span></span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">explicit</span> <span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">void</span> <span class="token function">bindfunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _disconnect <span class="token operator">=</span> f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> _disconnect<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyQuoteSpi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyQuoteSpi.h&quot;</span></span>

<span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">MyQuoteSpi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">MyQuoteSpi</span><span class="token double-colon punctuation">::</span><span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;quote is disconnected.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
	<span class="token comment">// 重连通知</span>
	<span class="token function">_disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyQuoteApi.h文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;xtp_quote_api.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyQuoteSpi.h&quot;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token punctuation">;</span>

<span class="token comment">// 行情登录信息缓存</span>
<span class="token keyword">struct</span> <span class="token class-name">LoginQuoteInfo</span>
<span class="token punctuation">{</span>
    <span class="token function">LoginQuoteInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        quote_server_port <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    std<span class="token double-colon punctuation">::</span>string quote_server_ip<span class="token punctuation">;</span>
    <span class="token keyword">int</span> quote_server_port<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string quote_username<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string quote_password<span class="token punctuation">;</span>
    XTP_PROTOCOL_TYPE quote_sock_type<span class="token punctuation">;</span>
	std<span class="token double-colon punctuation">::</span>string local_ip<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyQuoteApi</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span> 
	<span class="token keyword">explicit</span> <span class="token function">MyQuoteApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">MyQuoteApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 重连函数</span>
	<span class="token keyword">void</span> <span class="token function">reloginQuote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span> 

	LoginQuoteInfo m_loginQuoteInfo<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是MyQuoteApi.cpp文件</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyQuoteApi.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;windows.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token class-name">MyQuoteApi</span><span class="token double-colon punctuation">::</span><span class="token function">MyQuoteApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建并初始化交易API</span>
<span class="token keyword">bool</span> <span class="token class-name">MyQuoteApi</span><span class="token double-colon punctuation">::</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	user_quote_api_ <span class="token operator">=</span> XTP<span class="token double-colon punctuation">::</span>API<span class="token double-colon punctuation">::</span><span class="token class-name">QuoteApi</span><span class="token double-colon punctuation">::</span><span class="token function">CreateQuoteApi</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> log_level<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_quote_api_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 注册回调接口</span>
		m_quote_spi <span class="token operator">=</span> <span class="token keyword">new</span> MyQuoteSpi<span class="token punctuation">;</span>
		user_quote_api_<span class="token operator">-&gt;</span><span class="token function">RegisterSpi</span><span class="token punctuation">(</span>m_quote_spi<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 在spi实例化后绑定重连函数指针</span>
		m_quote_spi<span class="token operator">-&gt;</span><span class="token function">bindfunc</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>MyQuoteApi<span class="token double-colon punctuation">::</span>reloginQuote<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重连函数，若最多只允许重连3次，每次重连间隔5秒</span>
<span class="token keyword">void</span> <span class="token class-name">MyQuoteApi</span><span class="token double-colon punctuation">::</span><span class="token function">reloginQuote</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>m_loginQuoteInfo<span class="token punctuation">.</span>quote_server_ip<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>m_loginQuoteInfo<span class="token punctuation">.</span>quote_server_port <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>m_loginQuoteInfo<span class="token punctuation">.</span>quote_username<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>m_loginQuoteInfo<span class="token punctuation">.</span>quote_password<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token comment">//重连次数</span>
		<span class="token keyword">int</span> i_counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i_counter <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i_counter<span class="token operator">++</span><span class="token punctuation">;</span>
			
            <span class="token keyword">int</span> ret <span class="token operator">=</span> user_quote_api_<span class="token operator">-&gt;</span><span class="token function">Login</span><span class="token punctuation">(</span>m_loginQuoteInfo<span class="token punctuation">.</span>quote_server_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                             m_loginQuoteInfo<span class="token punctuation">.</span>quote_server_port<span class="token punctuation">,</span>
                                             m_loginQuoteInfo<span class="token punctuation">.</span>quote_username<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                             m_loginQuoteInfo<span class="token punctuation">.</span>quote_password<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                             m_loginQuoteInfo<span class="token punctuation">.</span>quote_sock_type<span class="token punctuation">,</span>
                                             m_loginQuoteInfo<span class="token punctuation">.</span>local_ip<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;relogin success.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;relogin failed.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">_WIN32</span></span>
                <span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
                <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;relogin failed over 3 times.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;relogin info missing.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无 <br></p><h3 id="_4-onerror" tabindex="-1"><a class="header-anchor" href="#_4-onerror"><span>4. OnError</span></a></h3><p>错误应答。</p><p>此函数只有在服务器发生错误时才会调用，一般无需用户处理。</p>`,32),b=s(`<p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnError</span><span class="token punctuation">(</span>XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>error_info：当服务器响应发生错误时的具体的错误代码和错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///错误信息的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_ERR_MSG_LEN</span>  <span class="token expression"><span class="token number">124</span></span></span>
<span class="token comment">///响应信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPRspInfoStruct</span>
<span class="token punctuation">{</span>
	<span class="token comment">///错误代码</span>
	<span class="token keyword">int32_t</span>	error_id<span class="token punctuation">;</span>
	<span class="token comment">///错误信息</span>
	<span class="token keyword">char</span>	error_msg<span class="token punctuation">[</span>XTP_ERR_MSG_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPRI<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无 <br></p><h3 id="_5-onsubmarketdata" tabindex="-1"><a class="header-anchor" href="#_5-onsubmarketdata"><span>5. OnSubMarketData</span></a></h3><p>订阅行情应答，包括股票、指数和期权。</p><p>每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubMarketData</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>Ticker：详细的合约订阅情况</p><p>error_info：查询资金账户发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>request_id：用于用户定位查询响应的ID，由用户自定义</p><p>is_last：是否此次订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>

<span class="token comment">///XTP_EXCHANGE_TYPE是交易所类型，行情里使用</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_EXCHANGE_TYPE</span>
<span class="token punctuation">{</span>
	XTP_EXCHANGE_SH <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;上证</span>
	XTP_EXCHANGE_SZ<span class="token punctuation">,</span>		<span class="token comment">///&lt;深证</span>
	XTP_EXCHANGE_NQ<span class="token punctuation">,</span>		<span class="token comment">///&lt;新三板 全国中小企业股份转让系统</span>
    XTP_EXCHANGE_UNKNOWN	<span class="token comment">///&lt;不存在的交易所类型</span>
<span class="token punctuation">}</span>XTP_EXCHANGE_TYPE<span class="token punctuation">;</span>

<span class="token comment">/// 存放证券代码的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_TICKER_LEN</span> <span class="token expression"><span class="token number">16</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅行情，包括股票、指数和期权</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeMarketData</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_6-onunsubmarketdata" tabindex="-1"><a class="header-anchor" href="#_6-onunsubmarketdata"><span>6. OnUnSubMarketData</span></a></h3><p>退订行情应答，包括股票、指数和期权。</p><p>每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubMarketData</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>Ticker：详细的合约订阅情况</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次取消订阅的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><p>session_id：资金账户对应的session_id，登录时得到</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订行情，包括股票、指数和期权</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeMarketData</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_7-ondepthmarketdata" tabindex="-1"><a class="header-anchor" href="#_7-ondepthmarketdata"><span>7. OnDepthMarketData</span></a></h3><p>深度行情通知，包含买一卖一队列。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnDepthMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>market_data<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> bid1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> bid1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_bid1_count<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> ask1_qty<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int32_t</span> ask1_count<span class="token punctuation">,</span> <span class="token keyword">int32_t</span> max_ask1_count<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>market_data：行情数据</p><p>bid1_qty：买一队列数据</p><p>bid1_count：买一队列的有效委托笔数</p><p>max_bid1_count：买一队列总委托笔数</p><p>ask1_qty：卖一队列数据</p><p>ask1_count：卖一队列的有效委托笔数</p><p>max_ask1_count：卖一队列总委托笔数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///行情</span>
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

<span class="token comment">///股票、基金等额外数据</span>
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

<span class="token comment">///期权额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataOptionExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///波段性中断参考价(SH)</span>
    <span class="token keyword">double</span>  auction_price<span class="token punctuation">;</span>
    <span class="token comment">///波段性中断集合竞价虚拟匹配量(SH)</span>
    <span class="token keyword">int64_t</span> auction_qty<span class="token punctuation">;</span>
    <span class="token comment">///最近询价时间(SH)</span>
    <span class="token keyword">int64_t</span> last_enquiry_time<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///债券额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataBondExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///委托买入总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_bid_qty<span class="token punctuation">;</span>
    <span class="token comment">///委托卖出总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_ask_qty<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委买价格(SZ)</span>
    <span class="token keyword">double</span> ma_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委卖价格(SZ)</span>
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
    <span class="token comment">///匹配成交成交量(SZ)</span>
    <span class="token keyword">int64_t</span> match_qty<span class="token punctuation">;</span>
    <span class="token comment">///匹配成交成交金额(SZ)</span>
    <span class="token keyword">double</span> match_turnover<span class="token punctuation">;</span>
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

<span class="token comment">///XTP_MARKETDATA_TYPE是行情快照数据类型，2.2.32以前版本所用</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_ACTUAL <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金/债券等)</span>
    XTP_MARKETDATA_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///XTP_MARKETDATA_TYPE_V2是行情快照数据类型，2.2.32版本新增字段</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE_V2</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_V2_INDEX  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 指数</span>
    XTP_MARKETDATA_V2_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
    XTP_MARKETDATA_V2_ACTUAL <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金等)</span>
    XTP_MARKETDATA_V2_BOND   <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 债券</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.订阅函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅行情快照，包括股票、指数和期权</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeMarketData</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的股票行情快照</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的期权行情快照</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_8-onsuborderbook" tabindex="-1"><a class="header-anchor" href="#_8-onsuborderbook"><span>8. OnSubOrderBook</span></a></h3><p>订阅行情订单簿应答。</p><p>每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubOrderBook</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker：详细的合约订阅情况</p><p>error_info：订阅合约发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>request_id：用于用户定位查询响应的ID，由用户自定义</p><p>is_last：是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><p>session_id：资金账户对应的session_id，登录时得到</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅行情订单簿，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeOrderBook</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_9-onunsuborderbook" tabindex="-1"><a class="header-anchor" href="#_9-onunsuborderbook"><span>9. OnUnSubOrderBook</span></a></h3><p>退订行情订单簿应答。</p><p>每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubOrderBook</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker：详细的合约取消订阅情况</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订行情订单簿，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeOrderBook</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_10-onorderbook" tabindex="-1"><a class="header-anchor" href="#_10-onorderbook"><span>10. OnOrderBook</span></a></h3><p>行情订单簿通知，包括股票。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnOrderBook</span><span class="token punctuation">(</span>XTPOB <span class="token operator">*</span>order_book<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>order_book：行情订单簿数据</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///订单薄</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">OrderBookStruct</span> <span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span>    ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">///最新价</span>
    <span class="token keyword">double</span> last_price<span class="token punctuation">;</span>
    <span class="token comment">///数量，为总成交量</span>
    <span class="token keyword">int64_t</span> qty<span class="token punctuation">;</span>
    <span class="token comment">///成交金额，为总成交金额</span>
    <span class="token keyword">double</span>  turnover<span class="token punctuation">;</span>
    <span class="token comment">///成交笔数</span>
    <span class="token keyword">int64_t</span> trades_count<span class="token punctuation">;</span>

    <span class="token comment">// 买卖盘</span>
    <span class="token comment">///十档申买价</span>
    <span class="token keyword">double</span> bid<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申卖价</span>
    <span class="token keyword">double</span>  ask<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申买量</span>
    <span class="token keyword">int64_t</span> bid_qty<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///十档申卖量</span>
    <span class="token keyword">int64_t</span> ask_qty<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">/// 时间类</span>
    <span class="token keyword">int64_t</span> data_time<span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPOB<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.订阅函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅行情订单簿，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeOrderBook</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的股票行情订单簿</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的期权行情订单簿（目前期权没有OB数据）</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_11-onsubtickbytick" tabindex="-1"><a class="header-anchor" href="#_11-onsubtickbytick"><span>11. OnSubTickByTick</span></a></h3><p>订阅逐笔行情应答。</p><p>每条订阅的合约均对应一条订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubTickByTick</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker：详细的合约订阅情况</p><p>error_info：订阅合约发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅逐笔行情，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeTickByTick</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_12-onunsubtickbytick" tabindex="-1"><a class="header-anchor" href="#_12-onunsubtickbytick"><span>12. OnUnSubTickByTick</span></a></h3><p>退订逐笔行情应答，包括股票</p><p>每条取消订阅的合约均对应一条取消订阅应答，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubTickByTick</span><span class="token punctuation">(</span>XTPST <span class="token operator">*</span>ticker<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker：详细的合约取消订阅情况</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///指定的合约</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPSpecificTickerStruct</span>
<span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息）例如&quot;600000&quot;，不带空格，以&#39;\\0&#39;结尾</span>
	<span class="token keyword">char</span>	ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订逐笔行情，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeTickByTick</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_13-ontickbytick" tabindex="-1"><a class="header-anchor" href="#_13-ontickbytick"><span>13. OnTickByTick</span></a></h3><p>逐笔行情通知，包括股票。</p><p>逐笔行情数据，包括逐笔委托和逐笔成交，此为共用结构体，需要根据type来区分是逐笔委托还是逐笔成交，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>tbt_data 逐笔行情数据，包括逐笔委托和逐笔成交，此为共用结构体，需要根据type来区分是逐笔委托还是逐笔成交</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///逐笔数据信息</span>
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

<span class="token comment">///XTP_TBT_TYPE是一个逐笔回报类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_TBT_TYPE</span> <span class="token punctuation">{</span>
	XTP_TBT_ENTRUST <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;逐笔委托</span>
	XTP_TBT_TRADE <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>		<span class="token comment">///&lt;逐笔成交</span>
	XTP_TBT_STATE <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>      <span class="token comment">///&lt;逐笔状态订单</span>
<span class="token punctuation">}</span>XTP_TBT_TYPE<span class="token punctuation">;</span>

<span class="token comment">///逐笔委托</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.订阅函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅逐笔行情，包括股票</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeTickByTick</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的股票逐笔行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的期权逐笔行情（目前期权没有逐笔数据）</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_14-onsubscribeallmarketdata" tabindex="-1"><a class="header-anchor" href="#_14-onsubscribeallmarketdata"><span>14. OnSubscribeAllMarketData</span></a></h3><p>订阅全市场的股票行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的股票行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_15-onunsubscribeallmarketdata" tabindex="-1"><a class="header-anchor" href="#_15-onunsubscribeallmarketdata"><span>15. OnUnSubscribeAllMarketData</span></a></h3><p>退订全市场的股票行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前退订的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的股票行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_16-onsubscribeallorderbook" tabindex="-1"><a class="header-anchor" href="#_16-onsubscribeallorderbook"><span>16. OnSubscribeAllOrderBook</span></a></h3><p>订阅全市场的股票行情订单簿应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的股票行情订单簿</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_17-onunsubscribeallorderbook" tabindex="-1"><a class="header-anchor" href="#_17-onunsubscribeallorderbook"><span>17. OnUnSubscribeAllOrderBook</span></a></h3><p>退订全市场的股票行情订单簿应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的股票行情订单簿</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_18-onsubscribealltickbytick" tabindex="-1"><a class="header-anchor" href="#_18-onsubscribealltickbytick"><span>18. OnSubscribeAllTickByTick</span></a></h3><p>阅全市场的股票逐笔行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的股票逐笔行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_19-onunsubscribealltickbytick" tabindex="-1"><a class="header-anchor" href="#_19-onunsubscribealltickbytick"><span>19. OnUnSubscribeAllTickByTick</span></a></h3><p>退订全市场的股票逐笔行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的股票逐笔行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_20-onqueryalltickers" tabindex="-1"><a class="header-anchor" href="#_20-onqueryalltickers"><span>20. OnQueryAllTickers</span></a></h3><p>查询合约部分静态信息的应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllTickers</span><span class="token punctuation">(</span>XTPQSI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker_info：合约部分静态信息</p><p>error_info：查询合约部分静态信息时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询合约部分静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///股票行情静态信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPQuoteStaticInfo</span> <span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span>    ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">/// 合约名称</span>
    <span class="token keyword">char</span>    ticker_name<span class="token punctuation">[</span>XTP_TICKER_NAME_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">/// 合约类型</span>
	XTP_TICKER_TYPE ticker_type<span class="token punctuation">;</span>
    <span class="token comment">///昨收盘</span>
    <span class="token keyword">double</span>  pre_close_price<span class="token punctuation">;</span>
    <span class="token comment">///涨停板价</span>
    <span class="token keyword">double</span>  upper_limit_price<span class="token punctuation">;</span>
    <span class="token comment">///跌停板价</span>
    <span class="token keyword">double</span>  lower_limit_price<span class="token punctuation">;</span>
	<span class="token comment">///最小变动价位</span>
	<span class="token keyword">double</span>  price_tick<span class="token punctuation">;</span>
    <span class="token comment">/// 合约最小交易量(买)</span>
    <span class="token keyword">int32_t</span>  buy_qty_unit<span class="token punctuation">;</span>
    <span class="token comment">/// 合约最小交易量(卖)</span>
	<span class="token keyword">int32_t</span> sell_qty_unit<span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPQSI<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取当前交易日合约部分静态信息</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">QueryAllTickers</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_21-onquerytickerspriceinfo" tabindex="-1"><a class="header-anchor" href="#_21-onquerytickerspriceinfo"><span>21. OnQueryTickersPriceInfo</span></a></h3><p>查询合约的最新价格信息应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryTickersPriceInfo</span><span class="token punctuation">(</span>XTPTPI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker_info：合约的最新价格信息</p><p>error_info：查询合约的最新价格信息发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///供查询的最新信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPTickerPriceInfo</span> <span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span> ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">///最新价</span>
    <span class="token keyword">double</span> last_price<span class="token punctuation">;</span>
<span class="token punctuation">}</span> XTPTPI<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取合约的最新价格信息</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">QueryTickersPriceInfo</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 获取所有合约的最新价格信息</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">QueryAllTickersPriceInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_22-onsubscribealloptionmarketdata" tabindex="-1"><a class="header-anchor" href="#_22-onsubscribealloptionmarketdata"><span>22. OnSubscribeAllOptionMarketData</span></a></h3><p>订阅全市场的期权行情快照应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的期权行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_23-onunsubscribealloptionmarketdata" tabindex="-1"><a class="header-anchor" href="#_23-onunsubscribealloptionmarketdata"><span>23. OnUnSubscribeAllOptionMarketData</span></a></h3><p>退订全市场的期权行情快照应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的期权行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllOptionMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_24-onsubscribealloptionorderbook" tabindex="-1"><a class="header-anchor" href="#_24-onsubscribealloptionorderbook"><span>24. OnSubscribeAllOptionOrderBook</span></a></h3><p>订阅全市场的期权行情订单簿应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>目前期权没有OB数据。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的期权行情订单簿</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_25-onunsubscribealloptionorderbook" tabindex="-1"><a class="header-anchor" href="#_25-onunsubscribealloptionorderbook"><span>25. OnUnSubscribeAllOptionOrderBook</span></a></h3><p>退订全市场的期权行情订单簿应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。<br> 目前期权没有OB数据。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span>
XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的期权行情订单簿</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllOptionOrderBook</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_26-onsubscribealloptiontickbytick" tabindex="-1"><a class="header-anchor" href="#_26-onsubscribealloptiontickbytick"><span>26. OnSubscribeAllOptionTickByTick</span></a></h3><p>订阅全市场的期权逐笔行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>目前期权没有逐笔数据。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnSubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅全市场的期权逐笔行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_27-onunsubscribealloptiontickbytick" tabindex="-1"><a class="header-anchor" href="#_27-onunsubscribealloptiontickbytick"><span>27. OnUnSubscribeAllOptionTickByTick</span></a></h3><p>退订全市场的期权逐笔行情应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。<br> 目前期权没有逐笔数据。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnUnSubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">,</span>
XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.参数</p><p>exchange_id：表示当前全订阅的市场，如果为XTP_EXCHANGE_UNKNOWN，表示沪深全市场（不包括新三板），XTP_EXCHANGE_SH表示为上海全市场，XTP_EXCHANGE_SZ表示为深圳全市场，XTP_EXCHANGE_NQ表示新三板</p><p>error_info：取消订阅合约时发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 退订全市场的期权逐笔行情</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">UnSubscribeAllOptionTickByTick</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_28-onqueryalltickersfullinfo" tabindex="-1"><a class="header-anchor" href="#_28-onqueryalltickersfullinfo"><span>28. OnQueryAllTickersFullInfo</span></a></h3><p>查询合约完整静态信息的应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllTickersFullInfo</span><span class="token punctuation">(</span>XTPQFI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker_info：合约完整静态信息</p><p>error_info：查询资金账户发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询合约完整静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///股票行情全量静态信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPQuoteFullInfo</span> <span class="token punctuation">{</span>
	XTP_EXCHANGE_TYPE  exchange_id<span class="token punctuation">;</span>							<span class="token comment">///&lt;交易所代码</span>
	<span class="token keyword">char</span>               ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>				<span class="token comment">///&lt;证券代码</span>
	<span class="token keyword">char</span>               ticker_name<span class="token punctuation">[</span>XTP_TICKER_NAME_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>	<span class="token comment">///&lt;证券名称</span>
	XTP_SECURITY_TYPE      security_type<span class="token punctuation">;</span>					<span class="token comment">///&lt;合约详细类型</span>
	XTP_QUALIFICATION_TYPE ticker_qualification_class<span class="token punctuation">;</span>		<span class="token comment">///&lt;合约适当性类别</span>
	<span class="token keyword">bool</span> is_registration<span class="token punctuation">;</span>									<span class="token comment">///&lt;是否注册制(仅适用创业板股票，创新企业股票及存托凭证)</span>
	<span class="token keyword">bool</span> is_VIE<span class="token punctuation">;</span>											<span class="token comment">///&lt;是否具有协议控制架构(仅适用创业板股票，创新企业股票及存托凭证)</span>
	<span class="token keyword">bool</span> is_noprofit<span class="token punctuation">;</span>										<span class="token comment">///&lt;是否尚未盈利(仅适用创业板股票，创新企业股票及存托凭证)</span>
	<span class="token keyword">bool</span> is_weighted_voting_rights<span class="token punctuation">;</span>							<span class="token comment">///&lt;是否存在投票权差异(仅适用创业板股票，创新企业股票及存托凭证)</span>
	<span class="token keyword">bool</span> is_have_price_limit<span class="token punctuation">;</span>								<span class="token comment">///&lt;是否有涨跌幅限制(注：不提供具体幅度，可通过涨跌停价和昨收价来计算幅度)</span>
	<span class="token keyword">double</span> upper_limit_price<span class="token punctuation">;</span>								<span class="token comment">///&lt;涨停价（仅在有涨跌幅限制时有效）</span>
	<span class="token keyword">double</span> lower_limit_price<span class="token punctuation">;</span>								<span class="token comment">///&lt;跌停价（仅在有涨跌幅限制时有效）</span>
	<span class="token keyword">double</span> pre_close_price<span class="token punctuation">;</span>									<span class="token comment">///&lt;昨收价</span>
	<span class="token keyword">double</span> price_tick<span class="token punctuation">;</span>										<span class="token comment">///&lt;价格最小变动价位</span>
	<span class="token keyword">int32_t</span> bid_qty_upper_limit<span class="token punctuation">;</span>							<span class="token comment">///&lt;限价买委托数量上限</span>
	<span class="token keyword">int32_t</span> bid_qty_lower_limit<span class="token punctuation">;</span>							<span class="token comment">///&lt;限价买委托数量下限</span>
	<span class="token keyword">int32_t</span> bid_qty_unit<span class="token punctuation">;</span>									<span class="token comment">///&lt;限价买数量单位</span>
	<span class="token keyword">int32_t</span> ask_qty_upper_limit<span class="token punctuation">;</span>							<span class="token comment">///&lt;限价卖委托数量上限</span>
	<span class="token keyword">int32_t</span> ask_qty_lower_limit<span class="token punctuation">;</span>							<span class="token comment">///&lt;限价卖委托数量下限</span>
	<span class="token keyword">int32_t</span> ask_qty_unit<span class="token punctuation">;</span>									<span class="token comment">///&lt;限价卖数量单位</span>
	<span class="token keyword">int32_t</span> market_bid_qty_upper_limit<span class="token punctuation">;</span>						<span class="token comment">///&lt;市价买委托数量上限</span>
	<span class="token keyword">int32_t</span> market_bid_qty_lower_limit<span class="token punctuation">;</span>						<span class="token comment">///&lt;市价买委托数量下限</span>
	<span class="token keyword">int32_t</span> market_bid_qty_unit<span class="token punctuation">;</span>							<span class="token comment">///&lt;市价买数量单位</span>
	<span class="token keyword">int32_t</span> market_ask_qty_upper_limit<span class="token punctuation">;</span>						<span class="token comment">///&lt;市价卖委托数量上限</span>
	<span class="token keyword">int32_t</span> market_ask_qty_lower_limit<span class="token punctuation">;</span>						<span class="token comment">///&lt;市价卖委托数量上限</span>
	<span class="token keyword">int32_t</span> market_ask_qty_unit<span class="token punctuation">;</span>							<span class="token comment">///&lt;市价卖数量单位</span>
	XTP_SECURITY_STATUS security_status<span class="token punctuation">;</span>                    <span class="token comment">///&lt;证券状态</span>
	<span class="token keyword">uint32_t</span> unknown1<span class="token punctuation">;</span>                                      <span class="token comment">///&lt;保留字段</span>
	<span class="token keyword">uint64_t</span> unknown<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                                    <span class="token comment">///&lt;保留字段</span>
<span class="token punctuation">}</span>XTPQFI<span class="token punctuation">;</span>

<span class="token comment">///XTP_SECURITY_TYPE是一个证券详细分类枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_SECURITY_TYPE</span> <span class="token punctuation">{</span>
	<span class="token comment">/// 主板股票</span>
	XTP_SECURITY_MAIN_BOARD <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token comment">/// 中小板股票</span>
	XTP_SECURITY_SECOND_BOARD<span class="token punctuation">,</span>
	<span class="token comment">/// 创业板股票</span>
	XTP_SECURITY_STARTUP_BOARD<span class="token punctuation">,</span>
	<span class="token comment">/// 指数</span>
	XTP_SECURITY_INDEX<span class="token punctuation">,</span>
	<span class="token comment">/// 科创板股票(上海)</span>
	XTP_SECURITY_TECH_BOARD <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token comment">/// 国债</span>
	XTP_SECURITY_STATE_BOND <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
	<span class="token comment">/// 企业债</span>
	XTP_SECURITY_ENTERPRICE_BOND <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
	<span class="token comment">/// 公司债</span>
	XTP_SECURITY_COMPANEY_BOND <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
	<span class="token comment">/// 转换债券</span>
	XTP_SECURITY_CONVERTABLE_BOND <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>
	<span class="token comment">/// 国债逆回购</span>
	XTP_SECURITY_NATIONAL_BOND_REVERSE_REPO <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span>
	<span class="token comment">/// 本市场股票 ETF</span>
	XTP_SECURITY_ETF_SINGLE_MARKET_STOCK <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">,</span>
	<span class="token comment">/// 跨市场股票 ETF</span>
	XTP_SECURITY_ETF_INTER_MARKET_STOCK<span class="token punctuation">,</span>
	<span class="token comment">/// 跨境股票 ETF</span>
	XTP_SECURITY_ETF_CROSS_BORDER_STOCK <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">,</span>
	<span class="token comment">/// 本市场实物债券 ETF</span>
	XTP_SECURITY_ETF_SINGLE_MARKET_BOND <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">,</span>
    <span class="token comment">/// 现金债券ETF</span>
    XTP_SECURITY_TYPE_ETF_CASH_BOND <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token comment">/// 黄金 ETF</span>
	XTP_SECURITY_ETF_GOLD <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">,</span>
	<span class="token comment">/// 分级基金子基金</span>
	XTP_SECURITY_STRUCTURED_FUND_CHILD <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">,</span>
	<span class="token comment">/// 深交所仅申赎基金</span>
	XTP_SECURITY_SZSE_RECREATION_FUND <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">,</span>
	<span class="token comment">/// 个股期权</span>
	XTP_SECURITY_STOCK_OPTION <span class="token operator">=</span> <span class="token number">29</span><span class="token punctuation">,</span>
	<span class="token comment">/// ETF期权</span>
	XTP_SECURITY_ETF_OPTION <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span>
	<span class="token comment">/// 配股</span>
	XTP_SECURITY_ALLOTMENT <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>

	<span class="token comment">/// 上交所申赎型货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SHCR <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">,</span>
	<span class="token comment">/// 上交所交易型货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SHTR <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">,</span>
	<span class="token comment">/// 深交所货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SZ <span class="token operator">=</span> <span class="token number">112</span><span class="token punctuation">,</span>

	<span class="token comment">/// 其他</span>
	XTP_SECURITY_OTHERS <span class="token operator">=</span> <span class="token number">255</span>
<span class="token punctuation">}</span>XTP_SECURITY_TYPE<span class="token punctuation">;</span>

<span class="token comment">///XTP_QUALIFICATION_TYPE是一个证券适当性枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span>  <span class="token class-name">XTP_QUALIFICATION_TYPE</span>
<span class="token punctuation">{</span>
	XTP_QUALIFICATION_PUBLIC <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>			<span class="token comment">///&lt;公众投资者，合格投资者与机构投资者均可</span>
	XTP_QUALIFICATION_COMMON <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>			<span class="token comment">///&lt;仅合格投资者与公众投资者</span>
	XTP_QUALIFICATION_ORGANIZATION <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>		<span class="token comment">///&lt;仅限机构投资者</span>
	XTP_QUALIFICATION_UNKNOWN <span class="token operator">=</span> <span class="token number">3</span>		<span class="token comment">///&lt;未知，期权等可能为此种类型</span>
<span class="token punctuation">}</span>XTP_QUALIFICATION_TYPE<span class="token punctuation">;</span>

<span class="token comment">///XTP_SECURITY_STATUS是一个证券状态枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span>  <span class="token class-name">XTP_SECURITY_STATUS</span>
<span class="token punctuation">{</span>
	XTP_SECURITY_STATUS_ST <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>         <span class="token comment">///&lt; 风险警示板</span>
	XTP_SECURITY_STATUS_N_IPO<span class="token punctuation">,</span>          <span class="token comment">///&lt; 首日上市</span>
	XTP_SECURITY_STATUS_COMMON<span class="token punctuation">,</span>         <span class="token comment">///&lt; 普通</span>
	XTP_SECURITY_STATUS_RESUME<span class="token punctuation">,</span>         <span class="token comment">///&lt; 恢复上市</span>
	XTP_SECURITY_STATUS_DELISTING <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">///&lt; 退市整理期</span>
	XTP_SECURITY_STATUS_OTHERS <span class="token operator">=</span> <span class="token number">255</span>    <span class="token comment">///&lt; 其他</span>
<span class="token punctuation">}</span>XTP_SECURITY_STATUS<span class="token punctuation">;</span>

<span class="token comment">/// 存放证券代码的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_TICKER_LEN</span> <span class="token expression"><span class="token number">16</span></span></span>
<span class="token comment">/// 存放证券名称的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_TICKER_NAME_LEN</span> <span class="token expression"><span class="token number">64</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取所有合约的详细静态信息，包括指数等非可交易的</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">QueryAllTickersFullInfo</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_29-onrebuildquoteserverdisconnected" tabindex="-1"><a class="header-anchor" href="#_29-onrebuildquoteserverdisconnected"><span>29. OnRebuildQuoteServerDisconnected</span></a></h3><p>当客户端与回补行情服务器通信连接断开时，该方法被调用。</p><p>Api不会自动重连，当断线发生时，请用户自行选择后续操作。回补服务器会在无消息交互后会定时断线，请注意仅在需要回补数据时才保持连接，无回补需求时，无需登陆。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnDisconnected</span><span class="token punctuation">(</span><span class="token keyword">int</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>Reason：错误原因，目前仅一个原因，可不用参考</p><p>3.返回</p><p>无</p><h3 id="_30-onrequestrebuildquote" tabindex="-1"><a class="header-anchor" href="#_30-onrequestrebuildquote"><span>30. OnRequestRebuildQuote</span></a></h3><p>请求回补指定频道的逐笔行情的总体结果应答。</p><p>需要快速返回，仅在回补数据发送结束后调用，如果请求数据太多，一次性无法回补完，那么rebuild_result.result_code = XTP_REBUILD_RET_PARTLY，此时需要根据回补结果继续发起回补数据请求。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildResultRsp<span class="token operator">*</span> rebuild_result<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>rebuild_result：当回补结束时被调用，如果回补结果失败，则msg参数表示失败原因</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///实时行情回补响应结构体</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///XTP_REBUILD_RET_TYPE 实时行情回补返回结果类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_REBUILD_RET_TYPE</span> <span class="token punctuation">{</span>
    XTP_REBUILD_RET_COMPLETE    <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;全部数据</span>
    XTP_REBUILD_RET_PARTLY      <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;部分数据</span>
    XTP_REBUILD_RET_NO_DATA     <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;没有数据</span>
    XTP_REBUILD_RET_PARAM_ERR   <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;参数错误</span>
    XTP_REBUILD_RET_FREQUENTLY  <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;请求频繁</span>
<span class="token punctuation">}</span>XTP_REBUILD_RET_TYPE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///请求回补指定行情，包括快照和逐笔</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_31-onrebuildtickbytick" tabindex="-1"><a class="header-anchor" href="#_31-onrebuildtickbytick"><span>31. OnRebuildTickByTick</span></a></h3><p>回补的逐笔行情数据。</p><p>需要快速返回，此函数调用与OnTickByTick不在一个线程内，会在OnRequestRebuildQuote()之前回调。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildTickByTick</span><span class="token punctuation">(</span>XTPTBT <span class="token operator">*</span>tbt_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>tbt_data：回补的逐笔行情数据</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///逐笔数据信息</span>
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

<span class="token comment">///XTP_TBT_TYPE是一个逐笔回报类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_TBT_TYPE</span> <span class="token punctuation">{</span>
	XTP_TBT_ENTRUST <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>	<span class="token comment">///&lt;逐笔委托</span>
	XTP_TBT_TRADE <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>		<span class="token comment">///&lt;逐笔成交</span>
	XTP_TBT_STATE <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>      <span class="token comment">///&lt;逐笔状态订单</span>
<span class="token punctuation">}</span>XTP_TBT_TYPE<span class="token punctuation">;</span>

<span class="token comment">///逐笔委托</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///请求回补指定行情，包括快照和逐笔</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_32-onrebuildmarketdata" tabindex="-1"><a class="header-anchor" href="#_32-onrebuildmarketdata"><span>32. OnRebuildMarketData</span></a></h3><p>回补的快照行情数据。</p><p>需要快速返回，此函数调用与OnDepthMarketData不在一个线程内，会在OnRequestRebuildQuote()之前回调。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnRebuildMarketData</span><span class="token punctuation">(</span>XTPMD <span class="token operator">*</span>md_data<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>md_data：回补的快照行情数据</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///行情</span>
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

<span class="token comment">///股票、基金等额外数据</span>
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

<span class="token comment">///期权额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataOptionExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///波段性中断参考价(SH)</span>
    <span class="token keyword">double</span>  auction_price<span class="token punctuation">;</span>
    <span class="token comment">///波段性中断集合竞价虚拟匹配量(SH)</span>
    <span class="token keyword">int64_t</span> auction_qty<span class="token punctuation">;</span>
    <span class="token comment">///最近询价时间(SH)</span>
    <span class="token keyword">int64_t</span> last_enquiry_time<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///债券额外数据</span>
<span class="token keyword">struct</span> <span class="token class-name">XTPMarketDataBondExData</span> <span class="token punctuation">{</span>
    <span class="token comment">///委托买入总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_bid_qty<span class="token punctuation">;</span>
    <span class="token comment">///委托卖出总量(SH,SZ)</span>
    <span class="token keyword">int64_t</span> total_ask_qty<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委买价格(SZ)</span>
    <span class="token keyword">double</span> ma_bid_price<span class="token punctuation">;</span>
    <span class="token comment">///加权平均委卖价格(SZ)</span>
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
    <span class="token comment">///匹配成交成交量(SZ)</span>
    <span class="token keyword">int64_t</span> match_qty<span class="token punctuation">;</span>
    <span class="token comment">///匹配成交成交金额(SZ)</span>
    <span class="token keyword">double</span> match_turnover<span class="token punctuation">;</span>
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

<span class="token comment">///XTP_MARKETDATA_TYPE是行情快照数据类型，2.2.32以前版本所用</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_ACTUAL <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金/债券等)</span>
    XTP_MARKETDATA_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">///XTP_MARKETDATA_TYPE_V2是行情快照数据类型，2.2.32版本新增字段</span>
<span class="token keyword">enum</span> <span class="token class-name">XTP_MARKETDATA_TYPE_V2</span> <span class="token punctuation">{</span>
    XTP_MARKETDATA_V2_INDEX  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 指数</span>
    XTP_MARKETDATA_V2_OPTION <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 期权</span>
    XTP_MARKETDATA_V2_ACTUAL <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 现货(股票/基金等)</span>
    XTP_MARKETDATA_V2_BOND   <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 债券</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///请求回补指定行情，包括快照和逐笔</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">RequestRebuildQuote</span><span class="token punctuation">(</span>XTPQuoteRebuildReq<span class="token operator">*</span> rebuild_param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_33-onqueryallnqtickersfullinfo" tabindex="-1"><a class="header-anchor" href="#_33-onqueryallnqtickersfullinfo"><span>33. OnQueryAllNQTickersFullInfo</span></a></h3><p>查询新三板合约完整静态信息的应答。</p><p>需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnQueryAllNQTickersFullInfo</span><span class="token punctuation">(</span>XTPNQFI<span class="token operator">*</span> ticker_info<span class="token punctuation">,</span> XTPRI <span class="token operator">*</span>error_info<span class="token punctuation">,</span> <span class="token keyword">bool</span> is_last<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>ticker_info：新三板合约完整静态信息</p><p>error_info：查询资金账户发生错误时返回的错误信息，当error_info为空，或者error_info.error_id为0时，表明没有错误</p><p>is_last：是否此次查询合约完整静态信息的最后一个应答，当为最后一个的时候为true，如果为false，表示还有其他后续消息响应</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///新三板全量静态信息</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">XTPQuoteNQFullInfo</span> <span class="token punctuation">{</span>
    XTP_EXCHANGE_TYPE  exchange_id<span class="token punctuation">;</span>					    <span class="token comment">///&lt;交易所代码</span>
	<span class="token keyword">char</span> ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>				        <span class="token comment">///&lt;证券代码</span>
	<span class="token keyword">char</span> ticker_name<span class="token punctuation">[</span>XTP_TICKER_NAME_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>	            <span class="token comment">///&lt;证券名称</span>
    XTP_SECURITY_TYPE      security_type<span class="token punctuation">;</span>			    <span class="token comment">///&lt;合约详细类型</span>
    XTP_QUALIFICATION_TYPE ticker_qualification_class<span class="token punctuation">;</span>  <span class="token comment">///&lt;合约适当性类别</span>
    <span class="token keyword">char</span> ticker_abbr_en<span class="token punctuation">[</span>XTP_TICKER_NAME_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>           <span class="token comment">///&lt;英文简称</span>
    <span class="token keyword">char</span> base_ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>                   <span class="token comment">///&lt;基础证券</span>
    <span class="token keyword">char</span> industry_type<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                              <span class="token comment">///&lt;行业种类</span>
    <span class="token keyword">char</span> currency_type<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                              <span class="token comment">///&lt;货币种类</span>
    <span class="token keyword">int32_t</span> trade_unit<span class="token punctuation">;</span>                                 <span class="token comment">///&lt;交易单位</span>
    <span class="token keyword">int32_t</span> hang_out_date<span class="token punctuation">;</span>                              <span class="token comment">///&lt;挂牌日期</span>
    <span class="token keyword">int32_t</span> value_date<span class="token punctuation">;</span>                                 <span class="token comment">///&lt;起息日期</span>
    <span class="token keyword">int32_t</span> maturity_date<span class="token punctuation">;</span>                              <span class="token comment">///&lt;到期日</span>
    <span class="token keyword">int32_t</span> per_limit_vol<span class="token punctuation">;</span>                              <span class="token comment">///&lt;每笔限量</span>
    <span class="token keyword">int32_t</span> buy_vol_unit<span class="token punctuation">;</span>                               <span class="token comment">///&lt;买数量单位</span>
    <span class="token keyword">int32_t</span> sell_vol_unit<span class="token punctuation">;</span>                              <span class="token comment">///&lt;卖数量单位</span>
    <span class="token keyword">int32_t</span> mini_declared_vol<span class="token punctuation">;</span>                          <span class="token comment">///&lt;最小申报数量</span>
    <span class="token keyword">int32_t</span> limit_price_attr<span class="token punctuation">;</span>                           <span class="token comment">///&lt;限价参数性质</span>
    <span class="token keyword">int32_t</span> market_maker_quantity<span class="token punctuation">;</span>                      <span class="token comment">///&lt;做市商数量</span>
    <span class="token keyword">double</span> price_gear<span class="token punctuation">;</span>                                  <span class="token comment">///&lt;价格档位</span>
    <span class="token keyword">double</span> first_limit_trans<span class="token punctuation">;</span>                           <span class="token comment">///&lt;首笔交易限价参数</span>
    <span class="token keyword">double</span> subsequent_limit_trans<span class="token punctuation">;</span>                      <span class="token comment">///&lt;后续交易限价参数</span>
    <span class="token keyword">double</span> limit_upper_price<span class="token punctuation">;</span>                           <span class="token comment">///&lt;涨停价格</span>
    <span class="token keyword">double</span> limit_lower_price<span class="token punctuation">;</span>                           <span class="token comment">///&lt;跌停价格</span>
    <span class="token keyword">double</span> block_trade_upper<span class="token punctuation">;</span>                           <span class="token comment">///&lt;大宗交易价格上限(预留，默认0)</span>
    <span class="token keyword">double</span> block_trade_lower<span class="token punctuation">;</span>                           <span class="token comment">///&lt;大宗交易价格下限(预留，默认0)</span>
    <span class="token keyword">double</span> convert_into_ration<span class="token punctuation">;</span>                         <span class="token comment">///&lt;折合比例</span>
    XTP_TRADE_STATUS        trade_status <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>           <span class="token comment">///&lt;交易状态</span>
    XTP_SECURITY_LEVEL      security_level <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>         <span class="token comment">///&lt;证券级别</span>
    XTP_TRADE_TYPE          trade_type <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>             <span class="token comment">///&lt;交易类型</span>
    XTP_SUSPEND_FLAG        suspend_flag <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>           <span class="token comment">///&lt;停牌标志</span>
    XTP_EX_DIVIDEND_FLAG    ex_dividend_flag <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>       <span class="token comment">///&lt;除权除息标志</span>
    XTP_SECURITY_LAYER_TYPE layer_type <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">;</span>             <span class="token comment">///&lt;分层信息</span>
    <span class="token keyword">int32_t</span> reserved1 <span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">;</span>                             <span class="token comment">///&lt;保留字段</span>
    <span class="token keyword">char</span> trade_places<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                               <span class="token comment">///&lt;交易场所 预留</span>
    <span class="token keyword">char</span> is_rzbd<span class="token punctuation">;</span>                                       <span class="token comment">///&lt;是否融资标的 Y是 N否</span>
    <span class="token keyword">char</span> is_rqbd<span class="token punctuation">;</span>                                       <span class="token comment">///&lt;是否融券标的 Y是 N否</span>
    <span class="token keyword">char</span> is_drrz<span class="token punctuation">;</span>                                       <span class="token comment">///&lt;是否当日可融资 Y是 N否</span>
    <span class="token keyword">char</span> is_drrq<span class="token punctuation">;</span>                                       <span class="token comment">///&lt;是否当日可融券 Y是 N否</span>
    <span class="token keyword">char</span> reserved<span class="token punctuation">;</span>                                      <span class="token comment">///&lt;保留字段</span>
    <span class="token keyword">uint64_t</span> unknown<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                                <span class="token comment">///&lt;保留字段  </span>
<span class="token punctuation">}</span>XTPNQFI<span class="token punctuation">;</span>

<span class="token comment">///XTP_SECURITY_TYPE是一个证券详细分类枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_SECURITY_TYPE</span> <span class="token punctuation">{</span>
	<span class="token comment">/// 主板股票</span>
	XTP_SECURITY_MAIN_BOARD <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token comment">/// 中小板股票</span>
	XTP_SECURITY_SECOND_BOARD<span class="token punctuation">,</span>
	<span class="token comment">/// 创业板股票</span>
	XTP_SECURITY_STARTUP_BOARD<span class="token punctuation">,</span>
	<span class="token comment">/// 指数</span>
	XTP_SECURITY_INDEX<span class="token punctuation">,</span>
	<span class="token comment">/// 科创板股票(上海)</span>
	XTP_SECURITY_TECH_BOARD <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token comment">/// 国债</span>
	XTP_SECURITY_STATE_BOND <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
	<span class="token comment">/// 企业债</span>
	XTP_SECURITY_ENTERPRICE_BOND <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
	<span class="token comment">/// 公司债</span>
	XTP_SECURITY_COMPANEY_BOND <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
	<span class="token comment">/// 转换债券</span>
	XTP_SECURITY_CONVERTABLE_BOND <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>
	<span class="token comment">/// 国债逆回购</span>
	XTP_SECURITY_NATIONAL_BOND_REVERSE_REPO <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span>
	<span class="token comment">/// 本市场股票 ETF</span>
	XTP_SECURITY_ETF_SINGLE_MARKET_STOCK <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">,</span>
	<span class="token comment">/// 跨市场股票 ETF</span>
	XTP_SECURITY_ETF_INTER_MARKET_STOCK<span class="token punctuation">,</span>
	<span class="token comment">/// 跨境股票 ETF</span>
	XTP_SECURITY_ETF_CROSS_BORDER_STOCK <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">,</span>
	<span class="token comment">/// 本市场实物债券 ETF</span>
	XTP_SECURITY_ETF_SINGLE_MARKET_BOND <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">,</span>
    <span class="token comment">/// 现金债券ETF</span>
    XTP_SECURITY_TYPE_ETF_CASH_BOND <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token comment">/// 黄金 ETF</span>
	XTP_SECURITY_ETF_GOLD <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">,</span>
	<span class="token comment">/// 分级基金子基金</span>
	XTP_SECURITY_STRUCTURED_FUND_CHILD <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">,</span>
	<span class="token comment">/// 深交所仅申赎基金</span>
	XTP_SECURITY_SZSE_RECREATION_FUND <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">,</span>
	<span class="token comment">/// 个股期权</span>
	XTP_SECURITY_STOCK_OPTION <span class="token operator">=</span> <span class="token number">29</span><span class="token punctuation">,</span>
	<span class="token comment">/// ETF期权</span>
	XTP_SECURITY_ETF_OPTION <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span>
	<span class="token comment">/// 配股</span>
	XTP_SECURITY_ALLOTMENT <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>

	<span class="token comment">/// 上交所申赎型货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SHCR <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">,</span>
	<span class="token comment">/// 上交所交易型货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SHTR <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">,</span>
	<span class="token comment">/// 深交所货币基金</span>
	XTP_SECURITY_MONETARY_FUND_SZ <span class="token operator">=</span> <span class="token number">112</span><span class="token punctuation">,</span>

	<span class="token comment">/// 其他</span>
	XTP_SECURITY_OTHERS <span class="token operator">=</span> <span class="token number">255</span>
<span class="token punctuation">}</span>XTP_SECURITY_TYPE<span class="token punctuation">;</span>

<span class="token comment">///XTP_QUALIFICATION_TYPE是一个证券适当性枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span>  <span class="token class-name">XTP_QUALIFICATION_TYPE</span>
<span class="token punctuation">{</span>
	XTP_QUALIFICATION_PUBLIC <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>			<span class="token comment">///&lt;公众投资者，合格投资者与机构投资者均可</span>
	XTP_QUALIFICATION_COMMON <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>			<span class="token comment">///&lt;仅合格投资者与公众投资者</span>
	XTP_QUALIFICATION_ORGANIZATION <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>		<span class="token comment">///&lt;仅限机构投资者</span>
	XTP_QUALIFICATION_UNKNOWN <span class="token operator">=</span> <span class="token number">3</span>		<span class="token comment">///&lt;未知，期权等可能为此种类型</span>
<span class="token punctuation">}</span>XTP_QUALIFICATION_TYPE<span class="token punctuation">;</span>

<span class="token comment">///XTP_SECURITY_STATUS是一个证券状态枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span>  <span class="token class-name">XTP_SECURITY_STATUS</span>
<span class="token punctuation">{</span>
	XTP_SECURITY_STATUS_ST <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>         <span class="token comment">///&lt; 风险警示板</span>
	XTP_SECURITY_STATUS_N_IPO<span class="token punctuation">,</span>          <span class="token comment">///&lt; 首日上市</span>
	XTP_SECURITY_STATUS_COMMON<span class="token punctuation">,</span>         <span class="token comment">///&lt; 普通</span>
	XTP_SECURITY_STATUS_RESUME<span class="token punctuation">,</span>         <span class="token comment">///&lt; 恢复上市</span>
	XTP_SECURITY_STATUS_DELISTING <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">///&lt; 退市整理期</span>
	XTP_SECURITY_STATUS_OTHERS <span class="token operator">=</span> <span class="token number">255</span>    <span class="token comment">///&lt; 其他</span>
<span class="token punctuation">}</span>XTP_SECURITY_STATUS<span class="token punctuation">;</span>

<span class="token comment">///XTP_TRADE_STATUS是一个交易状态枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_TRADE_STATUS</span> 
<span class="token punctuation">{</span>
	XTP_TRADE_STATUS_UNKNOW <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 		<span class="token comment">///&lt; 未知状态</span>
	XTP_TRADE_STATUS_N<span class="token punctuation">,</span>					<span class="token comment">///&lt; 正常状态</span>
	XTP_TRADE_STATUS_Y<span class="token punctuation">,</span>					<span class="token comment">///&lt; 首日挂牌</span>
	XTP_TRADE_STATUS_D<span class="token punctuation">,</span>					<span class="token comment">///&lt; 新增股票挂牌交易 </span>
	XTP_TRADE_STATUS_I<span class="token punctuation">,</span>					<span class="token comment">///&lt; 询价</span>
	XTP_TRADE_STATUS_F<span class="token punctuation">,</span>					<span class="token comment">///&lt; 申购</span>
<span class="token punctuation">}</span>XTP_TRADE_STATUS<span class="token punctuation">;</span>

<span class="token comment">///XTP_SECURITY_LEVEL是一个证券级别枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_SECURITY_LEVEL</span>
<span class="token punctuation">{</span>
	XTP_SECURITY_LEVEL_UNKNOW <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 		<span class="token comment">///&lt; 未知类型</span>
	XTP_SECURITY_LEVEL_T<span class="token punctuation">,</span>				<span class="token comment">///&lt; 挂牌公司股票</span>
	XTP_SECURITY_LEVEL_B<span class="token punctuation">,</span>				<span class="token comment">///&lt; 两网公司及退市股票</span>
	XTP_SECURITY_LEVEL_O<span class="token punctuation">,</span>				<span class="token comment">///&lt; 仅提供行权功能的期权</span>
	XTP_SECURITY_LEVEL_P<span class="token punctuation">,</span>				<span class="token comment">///&lt; 持有人数存在200人限制的证券</span>
	XTP_SECURITY_LEVEL_R<span class="token punctuation">,</span>				<span class="token comment">///&lt; 其他类型的业务</span>
	XTP_SECURITY_LEVEL_F<span class="token punctuation">,</span>				<span class="token comment">///&lt; 发行业务</span>
<span class="token punctuation">}</span>XTP_SECURITY_LEVEL<span class="token punctuation">;</span>

<span class="token comment">///XTP_TRADE_TYPE是一个交易类型枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_TRADE_TYPE</span> 
<span class="token punctuation">{</span>
	XTP_TRADE_TYPE_UNKNOW <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>			<span class="token comment">///&lt; 未知类型</span>
	XTP_TRADE_TYPE_T<span class="token punctuation">,</span>					<span class="token comment">///&lt; 协议交易方式</span>
	XTP_TRADE_TYPE_M<span class="token punctuation">,</span>					<span class="token comment">///&lt; 做市交易方式</span>
	XTP_TRADE_TYPE_B<span class="token punctuation">,</span>					<span class="token comment">///&lt; 集合竞价+连续交易方式</span>
	XTP_TRADE_TYPE_C<span class="token punctuation">,</span>					<span class="token comment">///&lt; 集合竞价交易方式</span>
	XTP_TRADE_TYPE_P<span class="token punctuation">,</span>					<span class="token comment">///&lt; 发行方式</span>
	XTP_TRADE_TYPE_O<span class="token punctuation">,</span>					<span class="token comment">///&lt; 其他类型</span>
<span class="token punctuation">}</span>XTP_TRADE_TYPE<span class="token punctuation">;</span>

<span class="token comment">///XTP_SUSPEND_FLAG是一个停牌标志枚举类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_SUSPEND_FLAG</span> 
<span class="token punctuation">{</span>
	XTP_SUSPEND_FLAG_UNKNOW <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>		<span class="token comment">///&lt; 未知状态</span>
	XTP_SUSPEND_FLAG_F<span class="token punctuation">,</span>					<span class="token comment">///&lt; 正常交易</span>
	XTP_SUSPEND_FLAG_T<span class="token punctuation">,</span>					<span class="token comment">///&lt; 停牌，不接受申报</span>
	XTP_SUSPEND_FLAG_H<span class="token punctuation">,</span>					<span class="token comment">///&lt; 停牌，接受申报</span>
<span class="token punctuation">}</span>XTP_SUSPEND_FLAG<span class="token punctuation">;</span>

<span class="token comment">///XTP_EX_DIVIDEND_FLAG是一个除权除息标志枚举类型</span>

<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">XTP_EX_DIVIDEND_FLAG</span>
<span class="token punctuation">{</span>
	XTP_EX_DIVIDEND_FLAG_UNKNOW <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>	<span class="token comment">///&lt; 未知状态</span>
	XTP_EX_DIVIDEND_FLAG_N<span class="token punctuation">,</span>				<span class="token comment">///&lt; 正常状态</span>
	XTP_EX_DIVIDEND_FLAG_E<span class="token punctuation">,</span>				<span class="token comment">///&lt; 除权</span>
	XTP_EX_DIVIDEND_FLAG_D<span class="token punctuation">,</span>				<span class="token comment">///&lt; 除息</span>
	XTP_EX_DIVIDEND_FLAG_A<span class="token punctuation">,</span>				<span class="token comment">///&lt; 除权除息</span>
<span class="token punctuation">}</span>XTP_EX_DIVIDEND_FLAG<span class="token punctuation">;</span>

<span class="token comment">/// 存放证券代码的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_TICKER_LEN</span> <span class="token expression"><span class="token number">16</span></span></span>
<span class="token comment">/// 存放证券名称的字符串长度</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">XTP_TICKER_NAME_LEN</span> <span class="token expression"><span class="token number">64</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.触发函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取所有新三板合约的详细静态信息，包括指数等非可交易的</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">QueryAllNQTickersFullInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_34-ontickbyticklossrange" tabindex="-1"><a class="header-anchor" href="#_34-ontickbyticklossrange"><span>34. OnTickByTickLossRange</span></a></h3><p>逐笔丢包应答。</p><p>此函数只有在逐笔发生丢包时才会有调用，如果丢包的上下限一致，表示仅丢失了一个包，注意此包仅为数据包，包含1个或者多个逐笔数据。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnTickByTickLossRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> begin_seq<span class="token punctuation">,</span> <span class="token keyword">int</span> end_seq<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数<br> begin_seq: 当逐笔出现丢包时，丢包区间下限（可能与上限一致）</p><p>end_seq: 当逐笔出现丢包时，丢包区间上限（可能与下限一致）</p><p>3.返回</p><p>无<br><br></p><h3 id="_35-onetfiopvdata" tabindex="-1"><a class="header-anchor" href="#_35-onetfiopvdata"><span>35. OnETFIOPVData</span></a></h3><p>ETF的IOPV通知，订阅ETF后调用。</p><p>1.函数原型</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">OnETFIOPVData</span><span class="token punctuation">(</span>IOPV <span class="token operator">*</span>iopv<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.参数</p><p>iopv: ETF的参考单位基金净值数据，需要快速返回，否则会堵塞后续消息，当堵塞严重时，会触发断线</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">//IOPV数据结构</span>
<span class="token keyword">struct</span> <span class="token class-name">IOPV</span> <span class="token punctuation">{</span>
    <span class="token comment">///交易所代码</span>
    XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">;</span>
    <span class="token comment">///合约代码（不包含交易所信息），不带空格，以&#39;\\0&#39;结尾</span>
    <span class="token keyword">char</span>    ticker<span class="token punctuation">[</span>XTP_TICKER_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">/// 时间</span>
    <span class="token keyword">int64_t</span> data_time<span class="token punctuation">;</span>
    <span class="token comment">/// iopv值</span>
    <span class="token keyword">double</span> iopv<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.返回</p><p>无</p><p>4.订阅函数</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 订阅行情快照，包括股票、指数和期权</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeMarketData</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>ticker<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">,</span> XTP_EXCHANGE_TYPE exchange_id<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 订阅全市场的股票行情快照</span>
<span class="token keyword">virtual</span> <span class="token keyword">int</span> <span class="token function">SubscribeAllMarketData</span><span class="token punctuation">(</span>XTP_EXCHANGE_TYPE exchange_id <span class="token operator">=</span> XTP_EXCHANGE_UNKNOWN<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><br>`,435);function _(T,y){const t=c("font");return o(),i("div",null,[d,k,a(" TOC "),m,a(" /TOC "),v,l(t,{color:"#FF0000"},{default:u(()=>[e("**目前此函数不会被调用**")]),_:1}),e("。"),b])}const X=p(r,[["render",_],["__file","QuoteSpi.html.vue"]]),P=JSON.parse('{"path":"/docs/API_DOC_XTP_API%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E4%B8%8E%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%20-%20XAlgo/QuoteSpi.html","title":"","lang":"zh-CN","frontmatter":{"description":"QuoteSpi 目录 1. 接口 2. 示例代码 3. OnDisconnected 4. OnError 5. OnSubMarketData 6. OnUnSubMarketData 7. OnDepthMarketData 8. OnSubOrderBook 9. OnUnSubOrderBook 10. OnOrderBook 11. OnS...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/API_DOC_XTP_API%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E4%B8%8E%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%20-%20XAlgo/QuoteSpi.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:description","content":"QuoteSpi 目录 1. 接口 2. 示例代码 3. OnDisconnected 4. OnError 5. OnSubMarketData 6. OnUnSubMarketData 7. OnDepthMarketData 8. OnSubOrderBook 9. OnUnSubOrderBook 10. OnOrderBook 11. OnS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":2,"title":"QuoteSpi","slug":"quotespi","link":"#quotespi","children":[{"level":3,"title":"1. 接口","slug":"_1-接口","link":"#_1-接口","children":[]},{"level":3,"title":"2. 示例代码","slug":"_2-示例代码","link":"#_2-示例代码","children":[]},{"level":3,"title":"3. OnDisconnected","slug":"_3-ondisconnected","link":"#_3-ondisconnected","children":[]},{"level":3,"title":"4. OnError","slug":"_4-onerror","link":"#_4-onerror","children":[]},{"level":3,"title":"5. OnSubMarketData","slug":"_5-onsubmarketdata","link":"#_5-onsubmarketdata","children":[]},{"level":3,"title":"6. OnUnSubMarketData","slug":"_6-onunsubmarketdata","link":"#_6-onunsubmarketdata","children":[]},{"level":3,"title":"7. OnDepthMarketData","slug":"_7-ondepthmarketdata","link":"#_7-ondepthmarketdata","children":[]},{"level":3,"title":"8. OnSubOrderBook","slug":"_8-onsuborderbook","link":"#_8-onsuborderbook","children":[]},{"level":3,"title":"9. OnUnSubOrderBook","slug":"_9-onunsuborderbook","link":"#_9-onunsuborderbook","children":[]},{"level":3,"title":"10. OnOrderBook","slug":"_10-onorderbook","link":"#_10-onorderbook","children":[]},{"level":3,"title":"11. OnSubTickByTick","slug":"_11-onsubtickbytick","link":"#_11-onsubtickbytick","children":[]},{"level":3,"title":"12. OnUnSubTickByTick","slug":"_12-onunsubtickbytick","link":"#_12-onunsubtickbytick","children":[]},{"level":3,"title":"13. OnTickByTick","slug":"_13-ontickbytick","link":"#_13-ontickbytick","children":[]},{"level":3,"title":"14. OnSubscribeAllMarketData","slug":"_14-onsubscribeallmarketdata","link":"#_14-onsubscribeallmarketdata","children":[]},{"level":3,"title":"15. OnUnSubscribeAllMarketData","slug":"_15-onunsubscribeallmarketdata","link":"#_15-onunsubscribeallmarketdata","children":[]},{"level":3,"title":"16. OnSubscribeAllOrderBook","slug":"_16-onsubscribeallorderbook","link":"#_16-onsubscribeallorderbook","children":[]},{"level":3,"title":"17. OnUnSubscribeAllOrderBook","slug":"_17-onunsubscribeallorderbook","link":"#_17-onunsubscribeallorderbook","children":[]},{"level":3,"title":"18. OnSubscribeAllTickByTick","slug":"_18-onsubscribealltickbytick","link":"#_18-onsubscribealltickbytick","children":[]},{"level":3,"title":"19. OnUnSubscribeAllTickByTick","slug":"_19-onunsubscribealltickbytick","link":"#_19-onunsubscribealltickbytick","children":[]},{"level":3,"title":"20. OnQueryAllTickers","slug":"_20-onqueryalltickers","link":"#_20-onqueryalltickers","children":[]},{"level":3,"title":"21. OnQueryTickersPriceInfo","slug":"_21-onquerytickerspriceinfo","link":"#_21-onquerytickerspriceinfo","children":[]},{"level":3,"title":"22. OnSubscribeAllOptionMarketData","slug":"_22-onsubscribealloptionmarketdata","link":"#_22-onsubscribealloptionmarketdata","children":[]},{"level":3,"title":"23. OnUnSubscribeAllOptionMarketData","slug":"_23-onunsubscribealloptionmarketdata","link":"#_23-onunsubscribealloptionmarketdata","children":[]},{"level":3,"title":"24. OnSubscribeAllOptionOrderBook","slug":"_24-onsubscribealloptionorderbook","link":"#_24-onsubscribealloptionorderbook","children":[]},{"level":3,"title":"25. OnUnSubscribeAllOptionOrderBook","slug":"_25-onunsubscribealloptionorderbook","link":"#_25-onunsubscribealloptionorderbook","children":[]},{"level":3,"title":"26. OnSubscribeAllOptionTickByTick","slug":"_26-onsubscribealloptiontickbytick","link":"#_26-onsubscribealloptiontickbytick","children":[]},{"level":3,"title":"27. OnUnSubscribeAllOptionTickByTick","slug":"_27-onunsubscribealloptiontickbytick","link":"#_27-onunsubscribealloptiontickbytick","children":[]},{"level":3,"title":"28. OnQueryAllTickersFullInfo","slug":"_28-onqueryalltickersfullinfo","link":"#_28-onqueryalltickersfullinfo","children":[]},{"level":3,"title":"29. OnRebuildQuoteServerDisconnected","slug":"_29-onrebuildquoteserverdisconnected","link":"#_29-onrebuildquoteserverdisconnected","children":[]},{"level":3,"title":"30. OnRequestRebuildQuote","slug":"_30-onrequestrebuildquote","link":"#_30-onrequestrebuildquote","children":[]},{"level":3,"title":"31. OnRebuildTickByTick","slug":"_31-onrebuildtickbytick","link":"#_31-onrebuildtickbytick","children":[]},{"level":3,"title":"32. OnRebuildMarketData","slug":"_32-onrebuildmarketdata","link":"#_32-onrebuildmarketdata","children":[]},{"level":3,"title":"33. OnQueryAllNQTickersFullInfo","slug":"_33-onqueryallnqtickersfullinfo","link":"#_33-onqueryallnqtickersfullinfo","children":[]},{"level":3,"title":"34. OnTickByTickLossRange","slug":"_34-ontickbyticklossrange","link":"#_34-ontickbyticklossrange","children":[]},{"level":3,"title":"35. OnETFIOPVData","slug":"_35-onetfiopvdata","link":"#_35-onetfiopvdata","children":[]}]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":53.87,"words":16162},"filePathRelative":"docs/API_DOC_XTP_API接口说明与示例代码 - XAlgo/QuoteSpi.md","localizedDate":"2024年6月3日","autoDesc":true}');export{X as comp,P as data};
