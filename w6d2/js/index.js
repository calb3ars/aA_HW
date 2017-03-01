console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success(data) {
    console.log("We have your weather!")
    console.log(data);
  },
  error() {
    console.log("An error occurred, we were unable to fetch your weather data.");
  },
});

// Add another console log here, outside your AJAX request
console.log("What's the weather like?");


// Response:
// Objectbase: "stations"clouds: Objectall: 90__proto__:
// Objectcod: 200coord: Objectlat: 40.71lon: -74.01__proto__:
// Objectdt: 1488336360id: 5128581main:
// Objecthumidity: 93pressure: 1018temp: 284.55temp_max: 286.15temp_min: 282.15__proto__:
// Objectname: "New York"sys: Objectcountry: "US"id: 1972message: 0.0104sunrise: 1488367763sunset: 1488408465type: 1__proto__:
// Objectvisibility: 8047weather: Array[2]0:
// Objectdescription: "mist"icon: "50n"id: 701main: "Mist"__proto__:
// Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor:
// Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: __proto__()set __proto__: __proto__()1:
// Objectdescription: "fog"icon: "50n"id: 741main: "Fog"__proto__:
// Objectlength: 2__proto__: Array[0]wind:
// Objectdeg: 160.501speed: 3.68__proto__:
// Object__proto__: Object
