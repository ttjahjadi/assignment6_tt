const cities = ["NYC", "SF", "LA", "ATX", "SYD"];
const body = document.querySelector('body');
const selectBox = document.querySelector('#city-type');

cities.forEach(function (city) { 
    const tag = document.createElement("option");
    const tagCity = document.createTextNode(city.toUpperCase());
    tag.appendChild(tagCity);
    selectBox.appendChild(tag);
    // document.querySelector('#city-type').innerHTML = "<option>" + city + "<option>";
 })


//  $('#city-type').change(function () { 
//     if (selectBox.value === 'NYC'){
//         // body.style.backgroundImage = 'url(images/nyc.jpg)';
//         body.classList.add('nyc');
//     }
    
// })

$('#city-type').change(function () {
    // body.classList.remove();
    $('body').removeClass();
    cities.forEach(function (city) { 
        if (selectBox.value === city.toUpperCase()) {
            body.classList.add(city.toLowerCase());
        }
     })
})


