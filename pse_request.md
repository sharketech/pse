
# Composite and Sector Indices

```
curl 'https://www.pse.com.ph/stockMarket/home.html?method=fetchIndicesDetails&ajax=true&_dc=1556456770139' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/dailySummary.html?method=getMarketIndices&ajax=true&_dc=1556456830138' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
```


# Indices Composition

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getMarketIndices&ajax=true&_dc=1556457016183' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=PSE' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=ALL' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=FIN' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=IND' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=HDG' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=SVC' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=M-O' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=PRO' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=SME' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=getCompositionIndices&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=ETF' --compressed
```


# Most Active

```
curl 'https://www.pse.com.ph/stockMarket/dailySummary.html?method=getTopActiveStocks&ajax=true&_dc=1556457721352' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
```


# Advances/Declines

```
curl 'https://www.pse.com.ph/stockMarket/dailySummary.html?method=getAdvancedSecurity&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'limit=25' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/dailySummary.html?method=getDeclinesSecurity&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'limit=25' --compressed
```


# Market Report

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-marketReports.html?method=getMarketReports&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'start=0&limit=10&reportType=End%20of%20Day%20Quotes' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-marketReports.html?method=getMarketReports&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'start=10&limit=10&reportType=End%20of%20Day%20Quotes&quarter=&month=3&year=2019&date=04%2F28%2F2019' --compressed
```


# Index History

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-historicalData.html?method=getRecentHistoryData&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=PSE' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-historicalData.html?method=getFiftyTwoWeekHigh&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=PSE' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-historicalData.html?method=getFiftyTwoWeekLow&ajax=true' -H 'Origin: https://www.pse.com.ph' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'sector=PSE' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/marketInfo-marketActivity-historicalData.html?method=getMarketIndices&ajax=true&_dc=1556458135433' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://www.pse.com.ph/stockMarket/marketInfo-marketActivity.html?tab=0' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
```


# Company Information

```
curl 'https://www.pse.com.ph/stockMarket/companyInfo.html?method=fetchHeaderData&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'company=180&security=293' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/companyInfo.html?method=getDisclosuresETF&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'limit=3&secid=293&word=etf%20end-of-day%20disclosure' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/dividendRights.html?method=getDividends&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'start=0&limit=5&secid=293' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/dividendRights.html?method=getRights&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'start=0&limit=5&secid=293' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/companyInfoSecurityInformation.html?method=getSecurityYearTotals&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'security=293' --compressed
```


# Company Information > Profile

```
curl 'https://www.pse.com.ph/stockMarket/companyInfoSecurityProfile.html?method=getSecurityTypes&ajax=true&_dc=1556458607566' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'X-Requested-With: XMLHttpRequest' --compressed
```

```
curl 'https://www.pse.com.ph/stockMarket/companyInfoSecurityProfile.html?method=getSecuritiesByCompany&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'company=180' --compressed
```


# Company Information > Chart

```
curl 'https://www.pse.com.ph/stockMarket/chartDemo.html?ajax=true&company=180&security=293' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'X-Requested-With: XMLHttpRequest' --compressed
```


# Company Information > Historical Data

```
curl 'https://www.pse.com.ph/stockMarket/companyInfoHistoricalData.html?method=getRecentSecurityQuoteData&ajax=true' -H 'Referer: https://www.pse.com.ph/stockMarket/companyInfo.html?id=180&security=293&tab=0' -H 'Origin: https://www.pse.com.ph' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'security=293' --compressed
```