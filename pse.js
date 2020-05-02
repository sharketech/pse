const Request = require('request');
const Https = require('https');
const Http = require('http');


class RestClient {

  constructor() {

    this._url = 'http://www.pse.com.ph/stockMarket/';
    this._agent = new Https.Agent({
      keepAlive: true,
      maxSockets: 1,
      keepAliveMsecs: 5000,
    });

    var companies = require('./companies.js');
    this._companies_db = {};
    companies.records.forEach(i => {
      this._companies_db[i.securitySymbol] = {
        securitySymbol: i.securitySymbol,
        securityName: i.securityName,
        companyId: i.companyId,
        securityID: i.securityID
      };
    });

  }

  request(method, params, callback) {
    params.ajax = true;
    // console.log(params);

    return new Promise((resolve, reject) => {
      return Request({
        url: this._url + method,
        headers: {
          // 'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
          'Connection': 'keep-alive',
          'Accept': '*/*',
        },
        // agent: this._agent,
        method: 'GET',
        qs: params,
        json: true,
      }, (error, res, body) => {

        if (error) {
          reject(error);
          return;
        }

        if (callback) {
          callback(body);
        }

        resolve(body)
      });
    });


  }

  getTicker({ symbol = '' } = {}, callback) {
    const params = { symbol };
    return this.request(
      'companyInfo.html',
      {
        method: 'fetchHeaderData',
        company: this._companies_db[params.symbol].companyId,
        security: this._companies_db[params.symbol].securityID
      },
      callback
    );
  }

  getSectors(callback) {
    return this.request(
      'marketInfo-marketActivity-historicalData.html',
      { method: 'getMarketIndices' },
      callback
    );
  }
  // sector = ['ALL', 'FIN', 'IND', 'HDG', 'SVC', 'M-O', 'PRO', 'SME', 'ETF']
  getMarket({ sector = 'ALL' } = {}, callback) {
    const params = { sector };
    return this.request(
      'marketInfo-marketActivity-indicesComposition.html',
      {
        method: 'getCompositionIndices',
        sector: params.sector,
      },
      callback
    );
  }

  getHistory({ symbol = '' } = {}, callback) {
    const params = { symbol };
    return this.request(
      'companyInfoHistoricalData.html',
      {
        method: 'getRecentSecurityQuoteData',
        security: this._companies_db[params.symbol].securityID
      },
      callback
    );
  }

  getSectorHistory({ sector = '' } = {}, callback) {
    const params = { sector };
    return this.request(
      'marketInfo-marketActivity-historicalData.html',
      {
        method: 'getRecentHistoryData',
        sector: params.sector
      },
      callback
    );
  }

  getSectorFiftyTwoWeekHigh({ sector = '' } = {}, callback) {
    const params = { sector };
    return this.request(
      'marketInfo-marketActivity-historicalData.html',
      {
        method: 'getFiftyTwoWeekHigh',
        sector: params.sector
      },
      callback
    );
  }

  getSectorFiftyTwoWeekLow({ sector = '' } = {}, callback) {
    const params = { sector };
    return this.request(
      'marketInfo-marketActivity-historicalData.html',
      {
        method: 'getFiftyTwoWeekLow',
        sector: params.sector
      },
      callback
    );
  }

  getIndexDetails(callback) {
    return this.request(
      'home.html',
      { method: 'fetchIndicesDetails' },
      callback
    );
  }

  getMarketIndexDetails(callback) {
    return this.request(
      'dailySummary.html',
      { method: 'getMarketIndices' },
      callback
    );
  }

  getTopGainers(callback) {
    return this.request(
      'dailySummary.html',
      { method: 'getAdvancedSecurity' },
      callback
    );
  }

  getTopLossers(callback) {
    return this.request(
      'dailySummary.html',
      { method: 'getDeclinesSecurity' },
      callback
    );
  }

}

module.exports = RestClient;
