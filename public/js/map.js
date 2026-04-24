const mapContainer = document.getElementById("map");

if (mapContainer) {
  const mapToken = mapContainer.dataset.mapToken || "";
  const title = mapContainer.dataset.title || "Listing";
  const coordinates = (mapContainer.dataset.coordinates || "")
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((value) => !Number.isNaN(value));

  const hasValidCoordinates = coordinates.length === 2;

  if (!mapToken) {
    mapContainer.classList.add("map-fallback");
    mapContainer.innerHTML =
      "<p class='mb-0'>Map token is missing, so the map cannot be displayed.</p>";
  } else if (hasValidCoordinates) {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 9,
    });

    new mapboxgl.Marker({ color: "red" })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h6>${title}</h6><p class="mb-0">Exact location provided after booking!</p>`
        )
      )
      .addTo(map);
  } else {
    mapContainer.classList.add("map-fallback");
    mapContainer.innerHTML =
      "<p class='mb-0'>Location preview is not available for this listing.</p>";
  }
}
