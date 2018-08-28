const cities = ["NYC", "SF", "LA", "ATX", "SYD"];

cities.forEach(function (city) { 
    const tag = document.createElement("option");
    const tagCity = document.createTextNode(city);
    tag.appendChild(tagCity);
    document.querySelector('#city-type').appendChild(tag);
    // document.querySelector('#city-type').innerHTML = "<option>" + city + "<option>";
 })


