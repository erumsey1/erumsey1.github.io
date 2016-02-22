// DATA

// all currencies

var currencies = {"AED":{"currencyName":"UAE dirham","id":"AED"},"AFN":{"currencyName":"Afghan afghani","currencySymbol":"؋","id":"AFN"},"ALL":{"currencyName":"Albanian lek","currencySymbol":"Lek","id":"ALL"},"AMD":{"currencyName":"Armenian dram","id":"AMD"},"ANG":{"currencyName":"Netherlands Antillean gulden","currencySymbol":"ƒ","id":"ANG"},"AOA":{"currencyName":"Angolan kwanza","id":"AOA"},"ARS":{"currencyName":"Argentine peso","currencySymbol":"$","id":"ARS"},"AUD":{"currencyName":"Australian dollar","currencySymbol":"$","id":"AUD"},"AWG":{"currencyName":"Aruban florin","currencySymbol":"ƒ","id":"AWG"},"AZN":{"currencyName":"Azerbaijani manat","currencySymbol":"ман","id":"AZN"},"BAM":{"currencyName":"Bosnia and Herzegovina konvertibilna marka","currencySymbol":"KM","id":"BAM"},"BBD":{"currencyName":"Barbadian dollar","currencySymbol":"$","id":"BBD"},"BDT":{"currencyName":"Bangladeshi taka","id":"BDT"},"BGN":{"currencyName":"Bulgarian lev","currencySymbol":"лв","id":"BGN"},"BHD":{"currencyName":"Bahraini dinar","id":"BHD"},"BIF":{"currencyName":"Burundi franc","id":"BIF"},"BND":{"currencyName":"Brunei dollar","currencySymbol":"$","id":"BND"},"BOB":{"currencyName":"Bolivian boliviano","currencySymbol":"$b","id":"BOB"},"BRL":{"currencyName":"Brazilian real","currencySymbol":"R$","id":"BRL"},"BSD":{"currencyName":"Bahamian dollar","currencySymbol":"$","id":"BSD"},"BTC":{"currencyName":"Bitcoin","currencySymbol":"BTC","id":"BTC"},"BTN":{"currencyName":"Bhutanese ngultrum","id":"BTN"},"BWP":{"currencyName":"Botswana pula","currencySymbol":"P","id":"BWP"},"BYR":{"currencyName":"Belarusian ruble","currencySymbol":"p.","id":"BYR"},"BZD":{"currencyName":"Belize dollar","currencySymbol":"BZ$","id":"BZD"},"CAD":{"currencyName":"Canadian dollar","currencySymbol":"$","id":"CAD"},"CDF":{"currencyName":"Congolese franc","id":"CDF"},"CHF":{"currencyName":"Swiss franc","currencySymbol":"Fr.","id":"CHF"},"CLP":{"currencyName":"Chilean peso","currencySymbol":"$","id":"CLP"},"CNY":{"currencyName":"Chinese renminbi","currencySymbol":"¥","id":"CNY"},"COP":{"currencyName":"Colombian peso","currencySymbol":"$","id":"COP"},"CRC":{"currencyName":"Costa Rican colon","currencySymbol":"₡","id":"CRC"},"CUP":{"currencyName":"Cuban peso","currencySymbol":"$","id":"CUP"},"CVE":{"currencyName":"Cape Verdean escudo","id":"CVE"},"CZK":{"currencyName":"Czech koruna","currencySymbol":"Kč","id":"CZK"},"DJF":{"currencyName":"Djiboutian franc","id":"DJF"},"DKK":{"currencyName":"Danish krone","currencySymbol":"kr","id":"DKK"},"DOP":{"currencyName":"Dominican peso","currencySymbol":"RD$","id":"DOP"},"DZD":{"currencyName":"Algerian dinar","id":"DZD"},"EGP":{"currencyName":"Egyptian pound","currencySymbol":"£","id":"EGP"},"ERN":{"currencyName":"Eritrean nakfa","id":"ERN"},"ETB":{"currencyName":"Ethiopian birr","id":"ETB"},"EUR":{"currencyName":"European Euro","currencySymbol":"€","id":"EUR"},"FJD":{"currencyName":"Fijian dollar","currencySymbol":"$","id":"FJD"},"FKP":{"currencyName":"Falkland Islands pound","currencySymbol":"£","id":"FKP"},"GBP":{"currencyName":"British pound","currencySymbol":"£","id":"GBP"},"GEL":{"currencyName":"Georgian lari","id":"GEL"},"GHS":{"currencyName":"Ghanaian cedi","id":"GHS"},"GIP":{"currencyName":"Gibraltar pound","currencySymbol":"£","id":"GIP"},"GMD":{"currencyName":"Gambian dalasi","id":"GMD"},"GNF":{"currencyName":"Guinean franc","id":"GNF"},"GQE":{"currencyName":"Central African CFA franc","id":"GQE"},"GTQ":{"currencyName":"Guatemalan quetzal","currencySymbol":"Q","id":"GTQ"},"GYD":{"currencyName":"Guyanese dollar","currencySymbol":"$","id":"GYD"},"HKD":{"currencyName":"Hong Kong dollar","currencySymbol":"$","id":"HKD"},"HNL":{"currencyName":"Honduran lempira","currencySymbol":"L","id":"HNL"},"HRK":{"currencyName":"Croatian kuna","currencySymbol":"kn","id":"HRK"},"HTG":{"currencyName":"Haitian gourde","id":"HTG"},"HUF":{"currencyName":"Hungarian forint","currencySymbol":"Ft","id":"HUF"},"IDR":{"currencyName":"Indonesian rupiah","currencySymbol":"Rp","id":"IDR"},"ILS":{"currencyName":"Israeli new sheqel","currencySymbol":"₪","id":"ILS"},"INR":{"currencyName":"Indian rupee","currencySymbol":"₹","id":"INR"},"IQD":{"currencyName":"Iraqi dinar","id":"IQD"},"IRR":{"currencyName":"Iranian rial","currencySymbol":"﷼","id":"IRR"},"ISK":{"currencyName":"Icelandic króna","currencySymbol":"kr","id":"ISK"},"JMD":{"currencyName":"Jamaican dollar","currencySymbol":"J$","id":"JMD"},"JOD":{"currencyName":"Jordanian dinar","id":"JOD"},"JPY":{"currencyName":"Japanese yen","currencySymbol":"¥","id":"JPY"},"KES":{"currencyName":"Kenyan shilling","currencySymbol":"KSh","id":"KES"},"KGS":{"currencyName":"Kyrgyzstani som","currencySymbol":"лв","id":"KGS"},"KHR":{"currencyName":"Cambodian riel","currencySymbol":"៛","id":"KHR"},"KMF":{"currencyName":"Comorian franc","id":"KMF"},"KPW":{"currencyName":"North Korean won","currencySymbol":"₩","id":"KPW"},"KRW":{"currencyName":"South Korean won","currencySymbol":"₩","id":"KRW"},"KWD":{"currencyName":"Kuwaiti dinar","id":"KWD"},"KYD":{"currencyName":"Cayman Islands dollar","currencySymbol":"$","id":"KYD"},"KZT":{"currencyName":"Kazakhstani tenge","currencySymbol":"лв","id":"KZT"},"LAK":{"currencyName":"Lao kip","currencySymbol":"₭","id":"LAK"},"LBP":{"currencyName":"Lebanese lira","currencySymbol":"£","id":"LBP"},"LKR":{"currencyName":"Sri Lankan rupee","currencySymbol":"₨","id":"LKR"},"LRD":{"currencyName":"Liberian dollar","currencySymbol":"$","id":"LRD"},"LSL":{"currencyName":"Lesotho loti","id":"LSL"},"LVL":{"currencyName":"Latvian lats","currencySymbol":"Ls","id":"LVL"},"LYD":{"currencyName":"Libyan dinar","id":"LYD"},"MAD":{"currencyName":"Moroccan dirham","id":"MAD"},"MDL":{"currencyName":"Moldovan leu","id":"MDL"},"MGA":{"currencyName":"Malagasy ariary","id":"MGA"},"MKD":{"currencyName":"Macedonian denar","currencySymbol":"ден","id":"MKD"},"MMK":{"currencyName":"Myanma kyat","id":"MMK"},"MNT":{"currencyName":"Mongolian tugrik","currencySymbol":"₮","id":"MNT"},"MOP":{"currencyName":"Macanese pataca","id":"MOP"},"MRO":{"currencyName":"Mauritanian ouguiya","id":"MRO"},"MUR":{"currencyName":"Mauritian rupee","currencySymbol":"₨","id":"MUR"},"MVR":{"currencyName":"Maldivian rufiyaa","id":"MVR"},"MWK":{"currencyName":"Malawian kwacha","id":"MWK"},"MXN":{"currencyName":"Mexican peso","currencySymbol":"$","id":"MXN"},"MYR":{"currencyName":"Malaysian ringgit","currencySymbol":"RM","id":"MYR"},"MZM":{"currencyName":"Mozambican metical","id":"MZM"},"NAD":{"currencyName":"Namibian dollar","currencySymbol":"$","id":"NAD"},"NGN":{"currencyName":"Nigerian naira","currencySymbol":"₦","id":"NGN"},"NIO":{"currencyName":"Nicaraguan cordoba","currencySymbol":"C$","id":"NIO"},"NOK":{"currencyName":"Norwegian krone","currencySymbol":"kr","id":"NOK"},"NPR":{"currencyName":"Nepalese rupee","currencySymbol":"₨","id":"NPR"},"NZD":{"currencyName":"New Zealand dollar","currencySymbol":"$","id":"NZD"},"OMR":{"currencyName":"Omani rial","currencySymbol":"﷼","id":"OMR"},"PAB":{"currencyName":"Panamanian balboa","currencySymbol":"B/.","id":"PAB"},"PEN":{"currencyName":"Peruvian nuevo sol","currencySymbol":"S/.","id":"PEN"},"PGK":{"currencyName":"Papua New Guinean kina","id":"PGK"},"PHP":{"currencyName":"Philippine peso","currencySymbol":"₱","id":"PHP"},"PKR":{"currencyName":"Pakistani rupee","currencySymbol":"₨","id":"PKR"},"PLN":{"currencyName":"Polish zloty","currencySymbol":"zł","id":"PLN"},"PYG":{"currencyName":"Paraguayan guarani","currencySymbol":"Gs","id":"PYG"},"QAR":{"currencyName":"Qatari riyal","currencySymbol":"﷼","id":"QAR"},"RON":{"currencyName":"Romanian leu","currencySymbol":"lei","id":"RON"},"RSD":{"currencyName":"Serbian dinar","currencySymbol":"Дин.","id":"RSD"},"RUB":{"currencyName":"Russian ruble","currencySymbol":"руб","id":"RUB"},"RWF":{"currencyName":"Rwandan franc","id":"RWF"},"SAR":{"currencyName":"Saudi riyal","currencySymbol":"﷼","id":"SAR"},"SBD":{"currencyName":"Solomon Islands dollar","currencySymbol":"$","id":"SBD"},"SCR":{"currencyName":"Seychellois rupee","currencySymbol":"₨","id":"SCR"},"SDG":{"currencyName":"Sudanese pound","id":"SDG"},"SEK":{"currencyName":"Swedish krona","currencySymbol":"kr","id":"SEK"},"SGD":{"currencyName":"Singapore dollar","currencySymbol":"$","id":"SGD"},"SHP":{"currencyName":"Saint Helena pound","currencySymbol":"£","id":"SHP"},"SLL":{"currencyName":"Sierra Leonean leone","id":"SLL"},"SOS":{"currencyName":"Somali shilling","currencySymbol":"S","id":"SOS"},"SRD":{"currencyName":"Surinamese dollar","currencySymbol":"$","id":"SRD"},"STD":{"currencyName":"Sao Tome and Principe dobra","id":"STD"},"SYP":{"currencyName":"Syrian pound","currencySymbol":"£","id":"SYP"},"SZL":{"currencyName":"Swazi lilangeni","id":"SZL"},"THB":{"currencyName":"Thai baht","currencySymbol":"฿","id":"THB"},"TJS":{"currencyName":"Tajikistani somoni","id":"TJS"},"TMM":{"currencyName":"Turkmen manat","id":"TMM"},"TND":{"currencyName":"Tunisian dinar","id":"TND"},"TOP":{"currencyName":"Paanga","id":"TOP"},"TRY":{"currencyName":"Turkish new lira","id":"TRY"},"TTD":{"currencyName":"Trinidad and Tobago dollar","currencySymbol":"TT$","id":"TTD"},"TWD":{"currencyName":"New Taiwan dollar","currencySymbol":"NT$","id":"TWD"},"TZS":{"currencyName":"Tanzanian shilling","currencySymbol":"TSh","id":"TZS"},"UAH":{"currencyName":"Ukrainian hryvnia","currencySymbol":"₴","id":"UAH"},"UGX":{"currencyName":"Ugandan shilling","currencySymbol":"USh","id":"UGX"},"USD":{"currencyName":"United States dollar","currencySymbol":"$","id":"USD"},"UYU":{"currencyName":"Uruguayan peso","currencySymbol":"$U","id":"UYU"},"UZS":{"currencyName":"Uzbekistani som","currencySymbol":"лв","id":"UZS"},"VEB":{"currencyName":"Venezuelan bolivar","id":"VEB"},"VND":{"currencyName":"Vietnamese dong","currencySymbol":"₫","id":"VND"},"VUV":{"currencyName":"Vanuatu vatu","id":"VUV"},"WST":{"currencyName":"Samoan tala","id":"WST"},"XAF":{"currencyName":"Central African CFA franc","id":"XAF"},"XCD":{"currencyName":"East Caribbean dollar","currencySymbol":"$","id":"XCD"},"XDR":{"currencyName":"Special Drawing Rights","id":"XDR"},"XOF":{"currencyName":"West African CFA franc","id":"XOF"},"XPF":{"currencyName":"CFP franc","id":"XPF"},"YER":{"currencyName":"Yemeni rial","currencySymbol":"﷼","id":"YER"},"ZAR":{"currencyName":"South African rand","currencySymbol":"R","id":"ZAR"},"ZMK":{"currencyName":"Zambian kwacha","id":"ZMK"}};

// DATA-END

var from = $('[name=from]'),
		to = $('[name=to]'),
		inputFrom = $('#inputFrom'),
		inputTo = $('#inputTo span')
		currencyRate = 0,
    turn = 0
    appearNode = $('#appearNode')
    buttonDecimal = false;
    
// get currency rate from API --- 1
/*function getCurrencyRate(){
  $.ajax({
    
    type: "GET",
    url: "http://rate-exchange.appspot.com/currency?from="+from.val()+"&to="+to.val()+"",
    dataType: "jsonp",
    
	}).done(function(data){
    
    currencyRate = data.rate; 
 		inputTo.text(currencyRate*inputFrom.val());
    
  });
};*/

// get currency rate from API --- 2
/*function getCurrencyRateTwo(){
  var urlHandler = from.val() + "_" + to.val();
  $.ajax({
    
    type: "GET",
    url: "http://freecurrencyconverterapi.com/api/v2/convert?q="+urlHandler,
    dataType: "jsonp",
    
	}).done(function(data){
    
    currencyRate = data.results[urlHandler].val; 
 		inputTo.text(currencyRate*inputFrom.val());
    
  });
};*/

// api -> yahoo
function yahooGetCurrencyRate(){
  var urlHandler = from.val() + to.val();
  $.ajax({
    
    type: "GET",
    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22"+urlHandler+"%22)&format=json&env=store://datatables.org/alltableswithkeys&callback=",
    dataType: "json",
    
	}).done(function(data){

    currencyRate = data.query.results.rate.Rate;
 		var endNumber = parseFloat(currencyRate*inputFrom.val()).toFixed(3);
  	inputTo.text(endNumber);
    
  });
};
    
// gets currency rate after load
$(document).ready(function(){
  yahooGetCurrencyRate();
});

                  
// get currency rate from API after change of option
$('select').on('change', function(){
  yahooGetCurrencyRate();
});


// loops through all countries and add them to DOM
function addAllCurrencies (fromCurrency, toCurrency) {
  for(key in currencies){

    if(key === fromCurrency){
      from.append("<option selected id='from"+key+"' value='"+key+"'>"+key);
    } else{
      from.append("<option id='from"+key+"' value='"+key+"'>"+key);
    }
    
    if(key === toCurrency){
      to.append("<option selected id='to"+key+"' value='"+key+"'>"+key);
    } else{
      to.append("<option id='to"+key+"' value='"+key+"'>"+key);
    }
  }  
}


// recalculates currency on keyup
// inputFrom.on('change', function(){
  
	
// });

$('#switchCurrency').on('click', function(){
  var fromSelected = from.val();
  var toSelected = to.val();
  
  turn++;
  $(this).css('transform','translateY(-50%) '+'rotate('+turn*180+'deg)');
  
  $("#to"+fromSelected+"").attr("selected", "selected");
  $("#from"+toSelected+"").attr("selected", "selected");
  
  currencyRate = 1 / currencyRate;
  var endNumber = parseFloat(currencyRate*inputFrom.val()).toFixed(3);
  inputTo.text(endNumber);
  
});

$('.keyboard button').on('click', function(){

  if($(this).hasClass('removeLast')){
    
    var str = inputFrom.val();
    var res = str.substring(0, str.length - 1);
    inputFrom.val(res);
    //inputFrom.val(inputFrom.substring(inputFrom.val().length - 1, 1));
    //inputFrom.val(inputFrom.val().substring(1, inputFrom.val().length - 1));
    
  } else{

    // checks if decimal dot is added more than once, without condition > throws error
    if($(this).hasClass('decimal')){
      if(!buttonDecimal){
        inputFrom.val(inputFrom.val()+$(this).text());
      }
      buttonDecimal = true;
    } else{
      buttonDecimal = false;
      inputFrom.val(inputFrom.val()+$(this).text());
    }

  }

  var beforeNumber = inputTo.text();
  var endNumber = parseFloat(currencyRate*inputFrom.val()).toFixed(3);

  inputTo.text(endNumber);


  if(beforeNumber !== endNumber){
    
    

    appearNode.addClass('appear');

    setTimeout(function(){
      appearNode.removeClass('appear')
    }, 200);
  }

});

// api -> get's data using longtitude and latitude
var resultGet = 10,
    latitude = 50.129110,
    longitude = 14.50000;

// Country code to Currency
function getAjaxData(data){
  var defaultCurrency;

  switch(data){
    case 'CZ':
      defaultCurrency = 'CZK';
      break;
    case 'DE' || 'FR':
      defaultCurrency = 'EUR';
      break;
  }

  console.log(defaultCurrency);
  

  addAllCurrencies('USD', defaultCurrency);
}



$.ajax({
  type: "GET",
  url: 'http://api.geonames.org/countryCodeJSON?lat='+latitude+'&lng='+longitude+'&username=machycek',
  dataType: "json",
  success: function(data) {
    getAjaxData(data.countryCode);
    yahooGetCurrencyRate();
  }
});