![SIMPLE SERVER GEOIP](http://tukangslicing.net/img/tukangslicing-logo.png)
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
[DEMO](http://hengkiardo.com:5000)


### API

##### Country List

response:

```js
[
  {
    "name": "Afghanistan",
    "alpha-2": "AF",
    "alpha-3": "AFG",
    "country-code": "004",
    "iso_3166-2": "ISO 3166-2:AF",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Aland Islands",
    "alpha-2": "AX",
    "alpha-3": "ALA",
    "country-code": "248",
    "iso_3166-2": "ISO 3166-2:AX",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    ....
    ....
    ...
  }
]
````
