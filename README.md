![SIMPLE SERVER GEOIP](https://raw.githubusercontent.com/aredo/simple-server-geoip/master/ip.png)
## simple-server-geoip

A very simple geoip server to show you about your IP public

``` js
{
  "ip": "118.137.237.113",
  "range": [
    1988750592,
    1988750847
  ],
  "country": {
    "name": "Indonesia",
    "alpha-2": "ID",
    "alpha-3": "IDN",
    "country-code": "360",
    "iso_3166-2": "ISO 3166-2:ID",
    "region-code": "142",
    "sub-region-code": "035"
  },
  "region": "04",
  "city": "Jakarta",
  "ll": [
    -6.1744,
    106.8294
  ]
}

```
[DEMO](http://lite-server-geoip.herokuapp.com/)


### API

##### Country List

``` shell
/country/

```

response:

```js
[
  {
    "name": "Indonesia",
    "nativeName": "Indonesia",
    "tld": [".id"],
    "cca2": "ID",
    "ccn3": "360",
    "cca3": "IDN",
    "currency": ["IDR"],
    "callingCode": ["62"],
    "capital": "Jakarta",
    "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"],
    "relevance": "2",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "language": ["Indonesian"],
    "languageCodes": ["id"],
    "translations": {
        "fr": "Indon\u00e9sie",
        "nl": "Indonesi\u00eb",
        "de": "Indonesien",
        "it": "Indonesia",
        "ja": "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2",
        "es": "Indonesia",
        "hr": "Indonezija"
    },
    "latlng": [-6.2, 106.8],
    "demonym": "Indonesian",
    "borders": ["TLS", "MYS", "PNG"],
    "area": 1904569
  }, {
    "name": "United States",
    "nativeName": "United States",
    "tld": [".us"],
    "cca2": "US",
    "ccn3": "840",
    "cca3": "USA",
    "currency": ["USD", "USN", "USS"],
    "callingCode": ["1"],
    "capital": "Washington D.C.",
    "altSpellings": ["US", "USA", "United States of America"],
    "relevance": "3.5",
    "region": "Americas",
    "subregion": "Northern America",
    "language": ["English"],
    "languageCodes": ["en"],
    "translations": {
        "de": "Vereinigte Staaten von Amerika",
        "es": "Estados Unidos",
        "fr": "\u00c9tats-Unis",
        "it": "Stati Uniti D'America",
        "ja": "\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd",
        "nl": "Verenigde Staten",
        "hr": "Sjedinjene Ameri\u010dke Dr\u017eave"
    },
    "latlng": [38, -97],
    "demonym": "American",
    "borders": ["CAN", "MEX"],
    "area": 9372610
  }, {
    ....
    ....
    ...
  }
]
````


##### Get Spesify Country

``` shell
/country/get
```

*example:*
```
/country/get?ccn=AR
```

response:

```js
{
    "name": "Argentina",
    "nativeName": "Argentina",
    "tld": [".ar"],
    "cca2": "AR",
    "ccn3": "032",
    "cca3": "ARG",
    "currency": ["ARS"],
    "callingCode": ["54"],
    "capital": "Buenos Aires",
    "altSpellings": ["AR", "Argentine Republic", "Rep\u00fablica Argentina"],
    "relevance": "0",
    "region": "Americas",
    "subregion": "South America",
    "language": ["Spanish"],
    "languageCodes": ["es", "gn"],
    "translations": {
        "cy": "Ariannin",
        "de": "Argentinien",
        "es": "Argentina",
        "fr": "Argentine",
        "it": "Argentina",
        "ja": "\u30a2\u30eb\u30bc\u30f3\u30c1\u30f3",
        "nl": "Argentini\u00eb",
        "hr": "Argentina"
    },
    "latlng": [-34, -64],
    "demonym": "Argentinean",
    "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
    "area": 2780400
}
````
