export class URLs {
  static BASE_URL = 'https://hb2.bankleumi.co.il';
  static LOGIN_URL = 'https://www.leumi.co.il/';
  static TRANSACTIONS_URL = `${this.BASE_URL}/eBanking/SO/SPA.aspx#/ts/BusinessAccountTrx?WidgetPar=1`;
  static FILTERED_TRANSACTIONS_URL = `${this.BASE_URL}/ChannelWCF/Broker.svc/ProcessRequest?moduleName=UC_SO_27_GetBusinessAccountTrx`;
}
