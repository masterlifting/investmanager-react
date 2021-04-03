export const RM = {
  Accounts: {
    RestAction: "/accounts",
    ById: (id: number) => `/accounts/${id}`,
    Summary: (id: number) => `/accounts/${id}/summary/`,
    Additional: (id: number) => `/accounts/${id}/additional/`,
  },
  AccountTransactions: {
    RestAction: "/accounttransactions",
    ByAccountId: (id: number) => `/accounttransactions/byaccountid/${id}`,
    SummaryByAccountId: (id: number) =>
      `/accounttransactions/byaccountid/${id}/summary/`,
  },
  BuyRecommendations: {
    RestAction: "/buyrecommendations",
  },
  Catalog: {
    CurrencyTypes: "/catalog/currencytypes/",
    ExchangeTypes: "/catalog/exchangetypes/",
    ComissionTypes: "/catalog/comissiontypes/",
    StatusTypes: "/catalog/statustypes/",
    LotTypes: "/catalog/lottypes/",
  },
  Coefficients: {
    RestAction: "/coefficients",
  },
  Comissions: {
    RestAction: "/comissions",
  },
  ComissionTypes: {
    RestAction: "/comissiontypes",
  },
  Companies: {
    RestAction: "/companies",
  },
  Dividends: {
    RestAction: "/dividends",
  },
  ExchangeRates: {
    RestAction: "/exchangerates",
  },
  Isins: {
    RestAction: "/isins",
  },
  Prices: {
    RestAction: "/prices",
  },
  Ratings: {
    RestAction: "/ratings",
  },
  Reports: {
    RestAction: "/reports",
  },
  ReportSources: {
    RestAction: "/reportsources",
  },
  SellRecommendations: {
    RestAction: "/sellrecommendations",
  },
  Services: {
    RestAction: "/services",
  },
  StockTransactions: {
    RestAction: "/stocktransactions",
  },
  Tickers: {
    RestAction: "/tickers",
  },
  Sectors: {
    RestAction: "/sectors",
  },
  Industries: {
    RestAction: "/industries",
  },
};