const PseClient = require('./pse.js');
const PSE = new PseClient();

(async () => {

  await PSE.getMarket({ sector: 'ALL' })
    .then((data) => {
      data.records.forEach(i => {
        console.log(i.lastTradeDate, '\t', i.securitySymbol, '\t', i.lastTradePrice);
      });
    });

  // await PSE.getTicker({ symbol: 'BDO' })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getHistory({ symbol: 'BDO' })
  //   .then((data) => {
  //     data.records.forEach(i => {
  //       console.log(
  //         i.tradingDate,
  //         parseFloat(i.sqOpen).toFixed(2),
  //         parseFloat(i.sqHigh).toFixed(2),
  //         parseFloat(i.sqLow).toFixed(2),
  //         parseFloat(i.sqClose).toFixed(2)
  //       );
  //     });
  //   });

  // await PSE.getIndexDetails()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getMarketIndexDetails()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getTopGainers()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getTopLossers()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getSectors()
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getSectorHistory({ sector: 'PSE' })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getSectorFiftyTwoWeekHigh({ sector: 'PSE' })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // await PSE.getSectorFiftyTwoWeekLow({ sector: 'PSE' })
  //   .then((data) => {
  //     console.log(data);
  //   });

})();