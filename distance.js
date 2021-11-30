function distance(){
    var x = document.getElementById("distance");

    // Distance Between two points on Earth

    function distance(lat1,
                    lat2, lon1, lon2)
    {

    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2),2);
            
    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth =6378 kilometers=3956 miles
    //let r = 6371;
    let r=3956;

    // calculate the result
    return (c * r);
    }

    // Driver code  


    //location of the destination 
    //Atlanta, GA
    let lat1 = 33.76008402112574;
    let lon1 = -84.39602420628964;

    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    }

    function showPosition(position) { 
        //user's location
        let lat2=position.coords.latitude;
        let lon2=position.coords.longitude; 
        x.innerHTML =distance(lat1, lat2, lon1, lon2) + "Miles";
    }
}