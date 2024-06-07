import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,b as s,d as n,e as i}from"./app-C9BeCxEA.js";const c="/assets/4-djI_xkiR.png",l={},p=n("h1",{id:"xtp支持上海level2逐笔委托说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xtp支持上海level2逐笔委托说明"},[n("span",null,"XTP支持上海Level2逐笔委托说明")])],-1),o=n("ul",null,[n("li",null,[n("a",{href:"#%E4%B8%80quoteapi%E5%85%B3%E4%BA%8Eshl2%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE%E8%AF%B4%E6%98%8E"},"一、QuoteAPI关于SHL2行情数据说明")]),n("li",null,[n("a",{href:"#%E4%BA%8C%E7%9B%98%E5%90%8E%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E8%AF%B4%E6%98%8E"},"二、盘后测试环境说明")]),n("li",null,[n("a",{href:"#%E4%B8%89%E5%AE%9E%E7%9B%98%E7%8E%AF%E5%A2%83%E8%AF%B4%E6%98%8E"},"三、实盘环境说明")])],-1),r=i(`<h3 id="一、quoteapi关于shl2行情数据说明" tabindex="-1"><a class="header-anchor" href="#一、quoteapi关于shl2行情数据说明"><span>一、QuoteAPI关于SHL2行情数据说明</span></a></h3><h4 id="_1-shl2逐笔数据结构体" tabindex="-1"><a class="header-anchor" href="#_1-shl2逐笔数据结构体"><span>1. SHL2逐笔数据结构体</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">///逐笔委托</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（1）</strong>：针对上交所Level2逐笔行情，目前有三种消息类型：<strong>XTPTickByTickEntrust逐笔委托消息</strong>、<strong>XTPTickByTickTrade逐笔成交消息</strong>以及<strong>XTPTickByTickStatus逐笔状态消息</strong>，三种消息均是通过QuoteSPI中的回调函数OnTickByTick()进行推送。在接收逐笔行情时，客户可以通过XTPTBT.type字段判定消息类型，然后再对逐笔消息进行处理。</p><p><strong>（2）</strong>：逐笔合并前，仅推送逐笔成交消息和逐笔委托消息，<strong>不推送XTPTickByTickStatus逐笔状态消息</strong>；逐笔合并后，才会推送三种逐笔消息，因此在接收逐笔消息时，请确定行情是否为逐笔合并行情。</p><p><strong>（3）</strong>：逐笔合并前后，逐笔委托、逐笔成交、逐笔状态以及逐笔数据信息结构体中的seq有不同的意义（具体说明参见2），因此使用前需确定行情是否为逐笔合并行情；逐笔委托和逐笔成交的先后顺序，直接会影响原始报单数量的计算（具体说明参见3），因此逐笔合并前请根据XTPTBT.seq字段对逐笔消息进行排序，排序完成后再进行处理；逐笔合并后逐笔委托、逐笔成交以及逐笔状态消息是有序的，用户无需再排序。</p><h4 id="_2-上交所逐笔序号seq的说明" tabindex="-1"><a class="header-anchor" href="#_2-上交所逐笔序号seq的说明"><span>2. 上交所逐笔序号seq的说明</span></a></h4><p><strong>（1）</strong>：<strong>逐笔合并前</strong>，仅有逐笔委托和逐笔成交消息，在同一个channel中<strong>有不同的seq</strong>：</p><p>（a）XTPTBT.seq表示逐笔委托和逐笔成交的统一编号，对应上交所逐笔数据中的BizIndex字段，从1开始，按channel连续；</p><p>（b）XTPTickByTickEntrust.seq表示逐笔委托序号，对应上交所逐笔委托中的OrderIndex字段，从1开始，按channel连续；</p><p>（c）XTPTickByTickTrade.seq表示逐笔成交序号，对应上交所逐笔委托数据中的TradeIndex字段，从1开始，按channel连续；</p><p>逐笔合并前逐笔委托消息与逐笔成交消息属于不同的消息，逐笔序号相互独立，<strong>没有固定的到达先后次序关系</strong>，需通过XTPTBT.seq字段判断逐笔委托消息与逐笔成交消息产生的先后顺序。</p><p><strong>（2）</strong>：<strong>逐笔合并后</strong>，逐笔委托、逐笔成交以及逐笔状态消息均属于逐笔合并消息，同一个channel下，有<strong>统一的seq</strong>：<strong>XTPTBT.seq == XTPTickByTickEntrust.seq/XTPTickByTickTrade.seq/XTPTickByTickStatus.seq</strong>，均对应于上交所逐笔合并数据中的BizIndex字段，从1开始，同一个Channel中连续。因此逐笔合并后逐笔委托、逐笔成交以及逐笔状态消息是有序的，用户无需再排序。</p><h4 id="_3-上交所逐笔数据中qty的说明" tabindex="-1"><a class="header-anchor" href="#_3-上交所逐笔数据中qty的说明"><span>3. 上交所逐笔数据中qty的说明</span></a></h4><p>上交所的逐笔委托数据中的qty数量不同于深交所逐笔委托数据中的qty，它代表的是经过一次成交撮合后剩余数量：<strong>上交所收到一笔委托订单后，首先进行一次撮合，然后推送撮合后产生的成交数据，最后推送剩余的委托数据</strong>，后续撮合再产生的剩余委托就不再发送。当某一个订单经过一次撮合全部成交的话，就没有对应的逐笔委托数据，只有逐笔成交数据。</p><p>（1）假如订单原始报单数量是1000，第一次撮合后，全成。此种情况下，对于这笔报单，只会有一笔qty=1000的逐笔成交。</p><p>（2）假如订单原始报单数量是1000，第一次撮合后，部成200。此种情况下，对于这笔报单，会先有一笔qty=200的逐笔成交，后有一笔qty=800的逐笔委托。</p><p>（3）假如订单原始报单数量是1000，第一次撮合后，没有任何成交，后续撮合的时候部成200。此种情况下，对于这笔报单，会先有一笔qty=1000的逐笔委托，后有一笔qty=200的逐笔成交。</p><p>（4）假如订单原始报单数量是1000，第一次撮合后，部成了200，然后撤单800。此种情况下，对于这笔报单，会先有一笔qty=200的逐笔成交，后有一笔qty=800，XTPTickByTickEntrust.ord_type=’A’的逐笔委托，最后有一笔qty=800，XTPTickByTickEntrust.ord_type=’D’的撤单逐笔委托。</p><p>由上面4种情况可以看出，不同的委托和成交顺序，代表的意思不同。因此<strong>逐笔合并前</strong>处理数据时，请根据XTPTBT.seq字段对逐笔消息进行排序，然后再进行处理；<strong>逐笔合并后</strong>，无需对逐笔消息排序，可直接处理。</p><h3 id="二、盘后测试环境说明" tabindex="-1"><a class="header-anchor" href="#二、盘后测试环境说明"><span>二、盘后测试环境说明</span></a></h3><p>在上海金桥机房和深圳南方中心机房，分别启动行情测试服务器，供客户测试上交所Level2的行情数据。</p><p>行情测试服务器将在盘后对含有SHL2行情数据的历史数据进行回放，并使用组播对外推送行情，具体服务器接入地址和端口号，请以测试环境邮件为准。</p><p>行情测试服务器采用多个组播组（2个）方式对外组播，具体组播安排情况，请以测试环境邮件为准。</p><h3 id="三、实盘环境说明" tabindex="-1"><a class="header-anchor" href="#三、实盘环境说明"><span>三、实盘环境说明</span></a></h3><p>实盘L2服务器有目前有4个组播组推送上交所行情，分别是TBT逐笔数据、MD行情快照数据、OrderBook数据以及OPTMD期权行情数据。</p><p>如果绑核话，需要绑定8个核（MD的接收线程和UDP解析线程各一个，TBT的接收线程和UDP解析线程各一个，OB的接收线程和UDP解析线程各一个以及OPTMD接收线程和UDP解析线程各一个）</p><p>目前实盘回调函数线程如下：</p><figure><img src="`+c+'" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure>',29);function d(u,m){return e(),t("div",null,[p,s(" TOC "),o,s(" /TOC "),r])}const T=a(l,[["render",d],["__file","XTP支持上海Level2逐笔委托说明.html.vue"]]),b=JSON.parse('{"path":"/docs/XTP%E6%94%AF%E6%8C%81%E4%B8%8A%E6%B5%B7Level2%E9%80%90%E7%AC%94%E5%A7%94%E6%89%98%E8%AF%B4%E6%98%8E/XTP%E6%94%AF%E6%8C%81%E4%B8%8A%E6%B5%B7Level2%E9%80%90%E7%AC%94%E5%A7%94%E6%89%98%E8%AF%B4%E6%98%8E.html","title":"XTP支持上海Level2逐笔委托说明","lang":"zh-CN","frontmatter":{"description":"XTP支持上海Level2逐笔委托说明 一、QuoteAPI关于SHL2行情数据说明 二、盘后测试环境说明 三、实盘环境说明 一、QuoteAPI关于SHL2行情数据说明 1. SHL2逐笔数据结构体 （1）：针对上交所Level2逐笔行情，目前有三种消息类型：XTPTickByTickEntrust逐笔委托消息、XTPTickByTickTrade逐...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/XTP%E6%94%AF%E6%8C%81%E4%B8%8A%E6%B5%B7Level2%E9%80%90%E7%AC%94%E5%A7%94%E6%89%98%E8%AF%B4%E6%98%8E/XTP%E6%94%AF%E6%8C%81%E4%B8%8A%E6%B5%B7Level2%E9%80%90%E7%AC%94%E5%A7%94%E6%89%98%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"XTP支持上海Level2逐笔委托说明"}],["meta",{"property":"og:description","content":"XTP支持上海Level2逐笔委托说明 一、QuoteAPI关于SHL2行情数据说明 二、盘后测试环境说明 三、实盘环境说明 一、QuoteAPI关于SHL2行情数据说明 1. SHL2逐笔数据结构体 （1）：针对上交所Level2逐笔行情，目前有三种消息类型：XTPTickByTickEntrust逐笔委托消息、XTPTickByTickTrade逐..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XTP支持上海Level2逐笔委托说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":3,"title":"一、QuoteAPI关于SHL2行情数据说明","slug":"一、quoteapi关于shl2行情数据说明","link":"#一、quoteapi关于shl2行情数据说明","children":[]},{"level":3,"title":"二、盘后测试环境说明","slug":"二、盘后测试环境说明","link":"#二、盘后测试环境说明","children":[]},{"level":3,"title":"三、实盘环境说明","slug":"三、实盘环境说明","link":"#三、实盘环境说明","children":[]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":6.47,"words":1942},"filePathRelative":"docs/XTP支持上海Level2逐笔委托说明/XTP支持上海Level2逐笔委托说明.md","localizedDate":"2024年6月3日","autoDesc":true}');export{T as comp,b as data};
