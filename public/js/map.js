	// mapboxgl.accessToken = mapToken;

    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style:"mapbox://styles/mapbox/streets-v12",
    //     center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //     zoom: 9, // starting zoom
    // });

    //  const marker = new mapboxgl.Marker({color:"red"})
    //     .setLngLat(listing.geometry.coordinates)
    //     .setPopup(new mapboxgl.Popup({offset: popupOffsets,className:'my-class'})
    //     .setHTML(
    //         `<h4> ${listing.title} </h4><p>Exact location will be provided after booking!</p>`
    //     )
    // )
    //     .addTo(map);
 mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: [73.8786, 18.5246],
    zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat([73.8786, 18.5246])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        "<h6>Exact location provided after booking!</h6>"
      )
    )
    .addTo(map);