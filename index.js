function UpdateMap()
{
    fetch("./data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element => {
            longitude = element.longitude;
            latitude = element.latitude;
            
            cases = element.infected;
            if (cases>255) {
                color = "red";
                
            }
            else{
                color=`rgb(${cases},0,0)`;
            }
            
            const marker = new mapboxgl.Marker({
                draggable: true, 
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);

                 

        });
    })

}
UpdateMap();