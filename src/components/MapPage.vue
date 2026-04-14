<template>
  <div class="map-page">
    <button class="back-btn" @click="$router.push('/')">&#8592; Back</button>
    <div class="header">
      <svg class="map-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
      <h1>Conner Prairie Campus</h1>
    </div>
    <p class="address">13400 Allisonville Rd, Fishers, IN 46038</p>

    <div class="map-container">
      <iframe
        title="Conner Prairie OpenStreetMap"
        :src="mapUrl"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
    </div>

    <a
      href="https://www.openstreetmap.org/?mlat=39.9728&mlon=-86.0290#map=15/39.9728/-86.0290"
      target="_blank"
      class="osm-link"
    >Open in OpenStreetMap &#8599;</a>
  </div>
</template>

<script>
export default {
  name: 'MapPage',
  computed: {
    mapUrl() {
      return 'https://www.openstreetmap.org/export/embed.html?bbox=-86.0450%2C39.9630%2C-86.0130%2C39.9830&layer=mapnik&marker=39.9728%2C-86.0290'
    }
  }
}
</script>

<style scoped>
.map-page {
  max-width: 420px;
  margin: 0 auto;
  padding: 20px 16px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.back-btn {
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #C85A17;
  padding: 0;
}

.back-btn:hover { text-decoration: underline; }

.header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.map-icon {
  width: 22px;
  height: 22px;
  fill: #C85A17;
  flex-shrink: 0;
}

h1 {
  font-size: 22px;
  font-weight: 900;
  margin: 0;
  text-align: center;
}

.address {
  font-size: 13px;
  color: #777;
  margin: 0;
  text-align: center;
}

.map-container {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #e0c9a6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}

.map-container iframe {
  width: 100%;
  height: 420px;
  display: block;
}

.osm-link {
  color: #C85A17;
  font-size: 14px;
  text-decoration: none;
}

.osm-link:hover { text-decoration: underline; }
</style>
