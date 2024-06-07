import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as d,b as i,d as e,e as n}from"./app-C9BeCxEA.js";const r={},a=e("h1",{id:"xtp交易业务报单接口参数说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xtp交易业务报单接口参数说明"},[e("span",null,"XTP交易业务报单接口参数说明")])],-1),t=n('<ul><li><a href="#%E4%B8%80%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A5%E5%8F%A3">一、客户端接口</a><ul><li><a href="#%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3">报单接口</a></li><li><a href="#%E6%92%A4%E5%8D%95%E6%8E%A5%E5%8F%A3">撤单接口</a></li></ul></li><li><a href="#%E4%BA%8C%E5%8F%82%E6%95%B0%E4%BB%8B%E7%BB%8D">二、参数介绍</a><ul><li><a href="#1-%E8%82%A1%E7%A5%A8%E4%BA%A4%E6%98%93">股票交易</a><ul><li><a href="#%E4%B9%B0%E5%85%A5%E8%82%A1%E7%A5%A8">买入股票</a></li><li><a href="#%E5%8D%96%E5%87%BA%E8%82%A1%E7%A5%A8">卖出股票</a></li></ul></li><li><a href="#%E6%92%A4%E5%8D%95">撤单</a></li><li><a href="#2-%E4%B8%A4%E8%9E%8D%E4%B8%9A%E5%8A%A1">两融业务</a><ul><li><a href="#%E8%9E%8D%E8%B5%84%E4%B9%B0%E5%85%A5%E8%82%A1%E7%A5%A8-%E9%9C%80%E8%A6%81%E8%82%A1%E7%A5%A8%E6%94%AF%E6%8C%81%E8%9E%8D%E8%B5%84%E8%9E%8D%E5%88%B8%E4%B8%9A%E5%8A%A1">融资买入股票 需要股票支持融资融券业务</a></li><li><a href="#%E5%8D%96%E5%88%B8%E8%BF%98%E6%AC%BE">卖券还款</a></li><li><a href="#%E7%8E%B0%E9%87%91%E8%BF%98%E6%AC%BE">现金还款</a></li><li><a href="#%E8%9E%8D%E5%88%B8%E5%8D%96%E5%87%BA%E8%82%A1%E7%A5%A8-%E9%9C%80%E8%A6%81%E8%82%A1%E7%A5%A8%E6%94%AF%E6%8C%81%E8%9E%8D%E8%B5%84%E8%9E%8D%E5%88%B8%E4%B8%9A%E5%8A%A1">融券卖出股票 需要股票支持融资融券业务</a></li><li><a href="#%E4%B9%B0%E5%88%B8%E8%BF%98%E5%88%B8">买券还券</a></li><li><a href="#%E7%8E%B0%E5%88%B8%E8%BF%98%E5%88%B8">现券还券</a></li><li><a href="#%E4%BD%99%E5%88%B8%E5%88%92%E8%BD%AC">余券划转</a></li><li><a href="#%E4%B9%B0%E5%85%A5%E6%8B%85%E4%BF%9D%E5%93%81">买入担保品</a></li><li><a href="#%E5%8D%96%E5%87%BA%E6%8B%85%E4%BF%9D%E5%93%81">卖出担保品</a></li><li><a href="#%E6%8B%85%E4%BF%9D%E5%93%81%E8%BD%AC%E5%85%A5">担保品转入</a></li><li><a href="#%E6%8B%85%E4%BF%9D%E5%93%81%E8%BD%AC%E5%87%BA">担保品转出</a></li></ul></li><li><a href="#3-etf%E7%94%B3%E8%B5%8E">ETF申赎</a><ul><li><a href="#%E7%94%B3%E8%B4%ADetf">申购ETF</a></li><li><a href="#%E8%B5%8E%E5%9B%9Eetf">赎回ETF</a></li></ul></li><li><a href="#4-%E5%85%B6%E5%AE%83%E4%BA%A4%E6%98%93">其它交易</a><ul><li><a href="#%E6%96%B0%E8%82%A1%E7%94%B3%E8%B4%AD">新股申购</a></li><li><a href="#%E9%85%8D%E8%82%A1">配股</a></li><li><a href="#%E5%9B%BD%E5%80%BA%E9%80%86%E5%9B%9E%E8%B4%AD">国债逆回购</a></li></ul></li><li><a href="#5-%E6%9C%9F%E6%9D%83%E4%B8%9A%E5%8A%A1">期权业务</a><ul><li><a href="#%E4%B9%B0%E5%85%A5%E5%BC%80%E4%BB%93">买入开仓</a></li><li><a href="#%E5%8D%96%E5%87%BA%E5%BC%80%E4%BB%93">卖出开仓</a></li><li><a href="#%E4%B9%B0%E5%85%A5%E5%B9%B3%E4%BB%93">买入平仓</a></li><li><a href="#%E5%8D%96%E5%87%BA%E5%B9%B3%E4%BB%93">卖出平仓</a></li><li><a href="#%E9%94%81%E5%AE%9A">锁定</a></li><li><a href="#%E8%A7%A3%E9%94%81">解锁</a></li><li><a href="#%E8%A1%8C%E6%9D%83">行权</a></li></ul></li></ul></li><li><a href="#%E4%B8%89%E8%B5%84%E9%87%91%E5%88%92%E8%BD%AC">三、资金划转</a><ul><li><a href="#%E5%88%92%E8%BD%AC%E6%8E%A5%E5%8F%A3">划转接口</a></li><li><a href="#%E5%8F%82%E6%95%B0">参数</a></li><li><a href="#%E8%BD%AC%E5%87%BAxtp">转出XTP</a></li><li><a href="#%E8%BD%AC%E5%85%A5xtp">转入XTP</a></li><li><a href="#%E8%B7%A8%E8%8A%82%E7%82%B9%E8%BD%AC%E5%87%BA">跨节点转出</a></li><li><a href="#%E8%B7%A8%E8%8A%82%E7%82%B9%E8%BD%AC%E5%85%A5">跨节点转入</a></li></ul></li><li><a href="#%E5%9B%9B%E7%BB%84%E5%90%88%E7%AD%96%E7%95%A5%E6%9C%9F%E6%9D%83%E5%8F%8A%E5%90%88%E5%B9%B6%E8%A1%8C%E6%9D%83">四、组合策略期权及合并行权</a><ul><li><a href="#1%E6%8E%A5%E5%8F%A3">接口</a></li><li><a href="#%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3">报单接口</a></li><li><a href="#%E6%92%A4%E5%8D%95%E6%8E%A5%E5%8F%A3">撤单接口</a></li><li><a href="#2%E6%B6%89%E5%8F%8A%E7%9A%84%E7%BB%93%E6%9E%84%E4%BD%93">涉及的结构体</a></li><li><a href="#3%E7%BB%84%E5%90%88">组合</a></li><li><a href="#4%E6%8B%86%E5%88%86">拆分</a></li><li><a href="#5%E5%90%88%E5%B9%B6%E8%A1%8C%E6%9D%83">合并行权</a></li></ul></li></ul>',1),l=n(`<h3 id="一、客户端接口" tabindex="-1"><a class="header-anchor" href="#一、客户端接口"><span>一、客户端接口</span></a></h3><h4 id="报单接口" tabindex="-1"><a class="header-anchor" href="#报单接口"><span>报单接口</span></a></h4><p>///报单录入请求</p><p>///@return 报单在XTP系统中的ID,如果为‘0’表示报单发送失败，此时用户可以调用GetApiLastError()来获取错误代码，非“0”表示报单发送成功，用户需要记录下返回的order_xtp_id，它保证一个交易日内唯一，不同的交易日不保证唯一性</p><p>///@param order 报单录入信息，其中order.order_client_id字段是用户自定义字段，用户输入什么值，订单响应OnOrderEvent()返回时就会带回什么值，类似于备注，方便用户自己定位订单。当然，如果你什么都不填，也是可以的。order.order_xtp_id字段无需用户填写，order.ticker必须不带空格，以&#39;\\0&#39;结尾</p><p>///@param session_id 资金账户对应的session_id,登录时得到</p><p>///@remark 交易所接收订单后，会在报单响应函数OnOrderEvent()中返回报单未成交的状态，之后所有的订单状态改变（除了部成状态）都会通过报单响应函数返回</p><p>virtual uint64_t InsertOrder(XTPOrderInsertInfo *order, uint64_t session_id) = 0;</p><h4 id="撤单接口" tabindex="-1"><a class="header-anchor" href="#撤单接口"><span>撤单接口</span></a></h4><p>///报单操作请求</p><p>///@return 撤单在XTP系统中的ID,如果为‘0’表示撤单发送失败，此时用户可以调用GetApiLastError()来获取错误代码，非“0”表示撤单发送成功，用户需要记录下返回的order_cancel_xtp_id，它保证一个交易日内唯一，不同的交易日不保证唯一性</p><p>///@param order_xtp_id 需要撤销的委托单在XTP系统中的ID</p><p>///@param session_id 资金账户对应的session_id,登录时得到</p><p>///@remark 如果撤单成功，会在报单响应函数OnOrderEvent()里返回原单部撤或者全撤的消息，如果不成功，会在OnCancelOrderError()响应函数中返回错误原因</p><p>virtual uint64_t CancelOrder(const uint64_t order_xtp_id, uint64_t session_id) = 0;</p><h3 id="二、参数介绍" tabindex="-1"><a class="header-anchor" href="#二、参数介绍"><span>二、参数介绍</span></a></h3><p>灰色的文字表示此种业务不需要此参数，需将该参数置为0</p><h4 id="_1-股票交易" tabindex="-1"><a class="header-anchor" href="#_1-股票交易"><span>1. 股票交易</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
};
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="买入股票" tabindex="-1"><a class="header-anchor" href="#买入股票"><span>买入股票</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 股票代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1，2，3，4，5，6，7，8（不同的委托方式，详见文档或程序源码）</p><p>Side = 1</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 0</p><p>session_id 登录时返回的id</p><h5 id="卖出股票" tabindex="-1"><a class="header-anchor" href="#卖出股票"><span>卖出股票</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 股票代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1，2，3，4，5，6，7，8（不同的委托方式，详见文档或程序源码）</p><p>Side = 2</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 0</p><p>session_id 登录时返回的id</p><h5 id="撤单" tabindex="-1"><a class="header-anchor" href="#撤单"><span>撤单</span></a></h5><p>order_xtp_id 报单后返回的id</p><p>session_id 登录时返回的id</p><h4 id="_2-两融业务" tabindex="-1"><a class="header-anchor" href="#_2-两融业务"><span>2. 两融业务</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
};
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="融资买入股票-需要股票支持融资融券业务" tabindex="-1"><a class="header-anchor" href="#融资买入股票-需要股票支持融资融券业务"><span>融资买入股票 需要股票支持融资融券业务</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 21</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="卖券还款" tabindex="-1"><a class="header-anchor" href="#卖券还款"><span>卖券还款</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 23</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><p>除常规的InsertOrder接口外，当需要还指定负债合约的息费的时候，还有CreditSellStockRepayDebtInterestFee()接口可供使用</p><h5 id="现金还款" tabindex="-1"><a class="header-anchor" href="#现金还款"><span>现金还款</span></a></h5><p>有专门的现金还款接口CreditCashRepay() 和 CreditCashRepayDebtInterestFee()</p><h5 id="融券卖出股票-需要股票支持融资融券业务" tabindex="-1"><a class="header-anchor" href="#融券卖出股票-需要股票支持融资融券业务"><span>融券卖出股票 需要股票支持融资融券业务</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 22</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="买券还券" tabindex="-1"><a class="header-anchor" href="#买券还券"><span>买券还券</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 24</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="现券还券" tabindex="-1"><a class="header-anchor" href="#现券还券"><span>现券还券</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 26</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="余券划转" tabindex="-1"><a class="header-anchor" href="#余券划转"><span>余券划转</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量 （需要跟可划转余券数量一致）</p><p>price_type = 1</p><p>Side = 27</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="买入担保品" tabindex="-1"><a class="header-anchor" href="#买入担保品"><span>买入担保品</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 1</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="卖出担保品" tabindex="-1"><a class="header-anchor" href="#卖出担保品"><span>卖出担保品</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 2</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="担保品转入" tabindex="-1"><a class="header-anchor" href="#担保品转入"><span>担保品转入</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 28</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h5 id="担保品转出" tabindex="-1"><a class="header-anchor" href="#担保品转出"><span>担保品转出</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 29</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 4</p><p>session_id 登录时返回的id</p><h4 id="_3-etf申赎" tabindex="-1"><a class="header-anchor" href="#_3-etf申赎"><span>3. ETF申赎</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
    };
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="申购etf" tabindex="-1"><a class="header-anchor" href="#申购etf"><span>申购ETF</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 7</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 3</p><p>session_id 登录时返回的id</p><h5 id="赎回etf" tabindex="-1"><a class="header-anchor" href="#赎回etf"><span>赎回ETF</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 8</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 3</p><p>session_id 登录时返回的id</p><h4 id="_4-其它交易" tabindex="-1"><a class="header-anchor" href="#_4-其它交易"><span>4. 其它交易</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
    };
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="新股申购" tabindex="-1"><a class="header-anchor" href="#新股申购"><span>新股申购</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 1</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 1</p><p>session_id 登录时返回的id</p><h5 id="配股" tabindex="-1"><a class="header-anchor" href="#配股"><span>配股</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 1</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 6</p><p>session_id 登录时返回的id</p><h5 id="国债逆回购" tabindex="-1"><a class="header-anchor" href="#国债逆回购"><span>国债逆回购</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
    };
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 2</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 2</p><p>session_id 登录时返回的id</p><h5 id="债转股" tabindex="-1"><a class="header-anchor" href="#债转股"><span>债转股</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 债券代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量（10张的整数倍）</p><p>price_type = 1（限价单）</p><p>Side = 2（卖出）</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 15</p><p>session_id 登录时返回的id</p><h4 id="_5-期权业务" tabindex="-1"><a class="header-anchor" href="#_5-期权业务"><span>5. 期权业务</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///合约代码 客户端请求不带空格，以&#39;\\0&#39;结尾
    char                    ticker[XTP_TICKER_LEN];
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///价格
    double                  price;
    ///止损价（保留字段）
    double                  stop_price;
    ///数量(股票单位为股，逆回购单位为张)
    int64_t                 quantity;
    ///报单价格
    XTP_PRICE_TYPE          price_type;
    union{
        uint32_t            u32;
        struct {
            ///买卖方向
            XTP_SIDE_TYPE               side;
            ///开平标志
            XTP_POSITION_EFFECT_TYPE    position_effect;
			///预留字段1
            uint8_t                     reserved1;
			///预留字段2
			uint8_t                     reserved2;
        };
    };
	///业务类型
	XTP_BUSINESS_TYPE       business_type;
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="买入开仓" tabindex="-1"><a class="header-anchor" href="#买入开仓"><span>买入开仓</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 1</p><p>position_effect = 1</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="卖出开仓" tabindex="-1"><a class="header-anchor" href="#卖出开仓"><span>卖出开仓</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 2</p><p>position_effect = 1</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="买入平仓" tabindex="-1"><a class="header-anchor" href="#买入平仓"><span>买入平仓</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 1</p><p>position_effect = 2</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="卖出平仓" tabindex="-1"><a class="header-anchor" href="#卖出平仓"><span>卖出平仓</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 价格</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 2</p><p>position_effect = 2</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="锁定" tabindex="-1"><a class="header-anchor" href="#锁定"><span>锁定</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 12</p><p>position_effect = 1</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="解锁" tabindex="-1"><a class="header-anchor" href="#解锁"><span>解锁</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 1</p><p>Side = 12</p><p>position_effect = 2</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 10</p><p>session_id 登录时返回的id</p><h5 id="行权" tabindex="-1"><a class="header-anchor" href="#行权"><span>行权</span></a></h5><p>order_xtp_id = 0</p><p>order_client_id = 用户自定义</p><p>Ticker = 代码</p><p>Market = 市场代码</p><p>Price = 0</p><p>stop_price = 0</p><p>Quantity = 数量</p><p>price_type = 0</p><p>Side = 0</p><p>position_effect = 0</p><p>reserved1 = 0</p><p>reserved2 = 0</p><p>business_type = 11</p><p>session_id 登录时返回的id</p><h3 id="三、资金划转" tabindex="-1"><a class="header-anchor" href="#三、资金划转"><span>三、资金划转</span></a></h3><h4 id="划转接口" tabindex="-1"><a class="header-anchor" href="#划转接口"><span>划转接口</span></a></h4><p>///资金划拨请求</p><p>///@return 资金划拨订单在XTP系统中的ID,如果为‘0’表示消息发送失败，此时用户可以调用GetApiLastError()来获取错误代码，非“0”表示消息发送成功，用户需要记录下返回的serial_id，它保证一个交易日内唯一，不同的交易日不保证唯一性</p><p>///@param fund_transfer 资金划拨的请求信息</p><p>///@param session_id 资金账户对应的session_id,登录时得到</p><p>///@remark 此函数支持一号两中心节点之间的资金划拨，注意资金划拨的方向。 virtual uint64_t FundTransfer(XTPFundTransferReq *fund_transfer, uint64_t session_id) = 0;</p><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct XTPFundTransferReq
{
    ///资金内转编号，无需用户填写，类似于xtp_id
    uint64_t	serial_id;
	///资金账户代码
	char        fund_account[XTP_ACCOUNT_NAME_LEN];
	///资金账户密码
	char	    password[XTP_ACCOUNT_PASSWORD_LEN];
	///金额
	double	    amount;
	///内转类型
	XTP_FUND_TRANSFER_TYPE	 transfer_type;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="转出xtp" tabindex="-1"><a class="header-anchor" href="#转出xtp"><span>转出XTP</span></a></h5><p>fund_account = 资金账户</p><p>Password = 账户密码</p><p>Amount = 转账金额</p><p>transfer_type = 0</p><p>session_id 登录时返回的id</p><h5 id="转入xtp" tabindex="-1"><a class="header-anchor" href="#转入xtp"><span>转入XTP</span></a></h5><p>fund_account = 资金账户</p><p>Password = 账户密码</p><p>Amount = 转账金额</p><p>transfer_type = 1</p><p>session_id 登录时返回的id</p><h5 id="跨节点转出" tabindex="-1"><a class="header-anchor" href="#跨节点转出"><span>跨节点转出</span></a></h5><p>fund_account = 资金账户</p><p>Password = “”</p><p>Amount = 转账金额</p><p>transfer_type = 2</p><p>session_id 登录时返回的id</p><h5 id="跨节点转入" tabindex="-1"><a class="header-anchor" href="#跨节点转入"><span>跨节点转入</span></a></h5><p>fund_account = 资金账户</p><p>Password = “”</p><p>Amount = 转账金额</p><p>transfer_type = 3</p><p>session_id 登录时返回的id</p><h3 id="四、组合策略期权及合并行权" tabindex="-1"><a class="header-anchor" href="#四、组合策略期权及合并行权"><span>四、组合策略期权及合并行权</span></a></h3><h4 id="_1-接口" tabindex="-1"><a class="header-anchor" href="#_1-接口"><span>1.接口</span></a></h4><h5 id="报单接口-1" tabindex="-1"><a class="header-anchor" href="#报单接口-1"><span>报单接口</span></a></h5><p>///期权组合策略报单录入请求</p><p>///@return 报单在XTP系统中的ID,如果为‘0’表示报单发送失败，此时用户可以调用GetApiLastError()来获取错误代码，非“0”表示报单发送成功，用户需要记录下返回的order_xtp_id，它保证一个交易日内唯一，不同的交易日不保证唯一性</p><p>///@param order 报单录入信息，其中order.order_client_id字段是用户自定义字段，用户输入什么值，订单响应OnOptionCombinedOrderEvent()返回时就会带回什么值，类似于备注，方便用户自己定位订单。当然，如果你什么都不填，也是可以的。order.order_xtp_id字段无需用户填写，order.ticker必须不带空格，以&#39;\\0&#39;结尾</p><p>///@param session_id 资金账户对应的session_id,登录时得到</p><p>///@remark 交易所接收订单后，会在报单响应函数OnOptionCombinedOrderEvent()中返回报单未成交的状态，之后所有的订单状态改变（除了部成状态）都会通过报单响应函数返回</p><p>virtual uint64_t InsertOptionCombinedOrder(XTPOptCombOrderInsertInfo *order, uint64_t session_id) = 0;</p><h5 id="撤单接口-1" tabindex="-1"><a class="header-anchor" href="#撤单接口-1"><span>撤单接口</span></a></h5><p>///期权组合策略报单撤单请求</p><p>///@return 撤单在XTP系统中的ID,如果为‘0’表示撤单发送失败，此时用户可以调用GetApiLastError()来获取错误代码，非“0”表示撤单发送成功，用户需要记录下返回的order_cancel_xtp_id，它保证一个交易日内唯一，不同的交易日不保证唯一性</p><p>///@param order_xtp_id 需要撤销的期权组合策略委托单在XTP系统中的ID</p><p>///@param session_id 资金账户对应的session_id,登录时得到</p><p>///@remark 如果撤单成功，会在报单响应函数OnOptionCombinedOrderEvent()里返回原单部撤或者全撤的消息，如果不成功，会在OnCancelOrderError()响应函数中返回错误原因</p><p>virtual uint64_t CancelOptionCombinedOrder(const uint64_t order_xtp_id, uint64_t session_id) = 0;</p><h4 id="_2-涉及的结构体" tabindex="-1"><a class="header-anchor" href="#_2-涉及的结构体"><span>2.涉及的结构体</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>///期权组合策略新订单请求
struct XTPOptCombOrderInsertInfo
{
    ///XTP系统订单ID，无需用户填写，在XTP系统中唯一
    uint64_t                order_xtp_id;
    ///报单引用，由客户自定义
    uint32_t	            order_client_id;
    ///交易市场
    XTP_MARKET_TYPE         market;
    ///数量(单位为份)
    int64_t                 quantity;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>///组合方向
    XTP_SIDE_TYPE           side;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> ///业务类型
    XTP_BUSINESS_TYPE       business_type;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>///期权组合策略信息
    XTPOptCombPlugin        opt_comb_info;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>///期权组合策略报单附加信息结构体
typedef struct XTPOptCombPlugin {
    char                                strategy_id[XTP_STRATEGY_ID_LEN];               ///&lt; 组合策略代码，比如CNSJC认购牛市价差策略等。
    char                                comb_num[XTP_SECONDARY_ORDER_ID_LEN];           ///&lt; 组合编码，组合申报时，该字段为空；拆分申报时，填写拟拆分组合的组合编码。
    int32_t                             num_legs;                                       ///&lt; 成分合约数
    XTPOptCombLegInfo                   leg_detail[XTP_STRATEGE_LEG_NUM];               ///&lt; 成分合约数组，最多四条腿。
}XTPOptCombPlugin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/// 组合策略腿合约信息结构体
typedef struct XTPOptCombLegInfo {
    char                            leg_security_id[XTP_TICKER_LEN]; ///&lt; 成分合约代码
    XTP_OPT_CALL_OR_PUT_TYPE        leg_cntr_type;                   ///&lt; 合约类型，认沽或认购。
    XTP_POSITION_DIRECTION_TYPE     leg_side;                        ///&lt; 持仓方向，权利方或义务方。
    XTP_OPT_COVERED_OR_UNCOVERED    leg_covered;                     ///&lt; 备兑标签
    int32_t                         leg_qty;                         ///&lt; 成分合约数量（张）
}XTPOptCombLegInfo;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-组合" tabindex="-1"><a class="header-anchor" href="#_3-组合"><span>3.组合</span></a></h4><p>须填写的参数：</p><p>market = 市场</p><p>quantity = 数量</p><p>side = XTP_SIDE_OPT_COMBINE</p><p>business_type = XTP_BUSINESS_TYPE_OPTION_COMBINE</p><p>opt_comb_info.num_legs = 2</p><p>opt_comb_info.strategy_id = 组合策略代码</p><p>opt_comb_info.leg_detail[0].leg_security_id = 合约1</p><p>opt_comb_info.leg_detail[1].leg_security_id = 合约2</p><h4 id="_4-拆分" tabindex="-1"><a class="header-anchor" href="#_4-拆分"><span>4.拆分</span></a></h4><p>须填写的参数：</p><p>market = 市场</p><p>quantity = 数量</p><p>side = XTP_SIDE_OPT_SPLIT</p><p>business_type = XTP_BUSINESS_TYPE_OPTION_COMBINE</p><p>opt_comb_info.num_legs = 0</p><p>opt_comb_info.strategy_id = 组合策略代码</p><p>opt_comb_info.comb_num = 组合编码</p><h4 id="_5-合并行权" tabindex="-1"><a class="header-anchor" href="#_5-合并行权"><span>5.合并行权</span></a></h4><p>须填写的参数：</p><p>market = 市场</p><p>quantity = 数量</p><p>business_type = XTP_BUSINESS_TYPE_EXECUTE_COMBINE</p><p>opt_comb_info.num_legs = 2</p><p>opt_comb_info.strategy_id = “exec”</p><p>opt_comb_info.leg_detail[0].leg_security_id = 合约1</p><p>opt_comb_info.leg_detail[1].leg_security_id = 合约2</p>`,493);function c(_,v){return s(),d("div",null,[a,i(" TOC "),t,i(" /TOC "),l])}const E=p(r,[["render",c],["__file","XTP交易业务报单接口及参数说明.html.vue"]]),b=JSON.parse('{"path":"/docs/XTP%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E/XTP%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3%E5%8F%8A%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E.html","title":"XTP交易业务报单接口参数说明","lang":"zh-CN","frontmatter":{"description":"XTP交易业务报单接口参数说明 一、客户端接口 报单接口 撤单接口 二、参数介绍 股票交易 买入股票 卖出股票 撤单 两融业务 融资买入股票 需要股票支持融资融券业务 卖券还款 现金还款 融券卖出股票 需要股票支持融资融券业务 买券还券 现券还券 余券划转 买入担保品 卖出担保品 担保品转入 担保品转出 ETF申赎 申购ETF 赎回ETF 其它交易 新...","head":[["meta",{"property":"og:url","content":"https://10000l.github.io/docs/XTP%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E/XTP%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E6%8A%A5%E5%8D%95%E6%8E%A5%E5%8F%A3%E5%8F%8A%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"XTP交易业务报单接口参数说明"}],["meta",{"property":"og:description","content":"XTP交易业务报单接口参数说明 一、客户端接口 报单接口 撤单接口 二、参数介绍 股票交易 买入股票 卖出股票 撤单 两融业务 融资买入股票 需要股票支持融资融券业务 卖券还款 现金还款 融券卖出股票 需要股票支持融资融券业务 买券还券 现券还券 余券划转 买入担保品 卖出担保品 担保品转入 担保品转出 ETF申赎 申购ETF 赎回ETF 其它交易 新..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T15:52:56.000Z"}],["meta",{"property":"article:author","content":"xtp_master"}],["meta",{"property":"article:modified_time","content":"2024-06-03T15:52:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XTP交易业务报单接口参数说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-03T15:52:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xtp_master\\",\\"url\\":\\"https://xtp.zts.com.cn\\"}]}"]]},"headers":[{"level":3,"title":"一、客户端接口","slug":"一、客户端接口","link":"#一、客户端接口","children":[]},{"level":3,"title":"二、参数介绍","slug":"二、参数介绍","link":"#二、参数介绍","children":[]},{"level":3,"title":"三、资金划转","slug":"三、资金划转","link":"#三、资金划转","children":[]},{"level":3,"title":"四、组合策略期权及合并行权","slug":"四、组合策略期权及合并行权","link":"#四、组合策略期权及合并行权","children":[]}],"git":{"createdTime":1717429976000,"updatedTime":1717429976000,"contributors":[{"name":"linxiaolx-lx","email":"1247776138@qq.com","commits":1}]},"readingTime":{"minutes":15.86,"words":4758},"filePathRelative":"docs/XTP交易业务报单接口参数说明/XTP交易业务报单接口及参数说明.md","localizedDate":"2024年6月3日","autoDesc":true}');export{E as comp,b as data};
