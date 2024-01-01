export class URLs {
  BASE_URL = 'https://hb2.bankleumi.co.il';
  LOGIN_URL = 'https://www.leumi.co.il/';
  TRANSACTIONS_URL = `${this.BASE_URL}/eBanking/SO/SPA.aspx#/ts/BusinessAccountTrx?WidgetPar=1`;
  FILTERED_TRANSACTIONS_URL = `${this.BASE_URL}/ChannelWCF/Broker.svc/ProcessRequest?moduleName=UC_SO_27_GetBusinessAccountTrx`;
}
