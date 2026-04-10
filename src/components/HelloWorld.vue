<template>
  <div class="scavenger-hunt">
    <div class="title-row">
      <svg class="map-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-label="map pin">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      <h1>SCAVENGER HUNT</h1>
    </div>
    <h2 class="subtitle">FIND THESE SPECIES OF PLANTS:</h2>

    <div class="plant-list">
      <div v-for="plant in plants" :key="plant.id" class="plant-card">
        <img :src="plant.image" :alt="plant.name" class="plant-image" @click="$router.push(plant.route)" />
        <div class="plant-info">
          <h3 class="plant-name">{{ plant.name }}</h3>
          <p class="learn-label">Click to learn more:</p>
          <button class="play-btn" @click="openLink(plant.link)">&#9654;</button>
          <div class="found-row">
            <label>Found it: <input type="checkbox" v-model="plant.found" /></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      plants: [
        {
          id: 1,
          name: 'Eastern Purple Coneflower',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Echinacea_purpurea_Grandview_Prairie.jpg/400px-Echinacea_purpurea_Grandview_Prairie.jpg',
          link: 'https://en.wikipedia.org/wiki/Echinacea_purpurea',
          route: '/plant/coneflower',
          found: false
        },
        {
          id: 2,
          name: 'Eastern Redbud',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/RedbudOhio02.jpg/400px-RedbudOhio02.jpg',
          link: 'https://en.wikipedia.org/wiki/Cercis_canadensis',
          route: '/plant/redbud',
          found: false
        },
        {
          id: 3,
          name: 'Sugar Maple',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acer_saccharum_1-jgreenlee_%285098070608%29.jpg/400px-Acer_saccharum_1-jgreenlee_%285098070608%29.jpg',
          link: 'https://en.wikipedia.org/wiki/Acer_saccharum',
          route: '/plant/maple',
          found: false
        }
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.scavenger-hunt {
  max-width: 320px;
  margin: 0 auto;
  padding: 20px 16px;
  font-family: sans-serif;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 4px;
}

.map-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

h1 {
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #C9A961;
  font-style: italic;
  margin: 8px 0 20px;
  text-transform: uppercase;
}

.plant-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.plant-card {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
}

.plant-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
}

.plant-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.plant-name {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 8px;
  line-height: 1.2;
}

.learn-label {
  font-size: 13px;
  margin: 0 0 6px;
  color: #333;
}

.play-btn {
  background: #C85A17;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 0;
}

.play-btn:hover {
  background: #9E4510;
}

.found-row {
  font-size: 13px;
  color: #333;
}

.found-row input[type="checkbox"] {
  margin-left: 4px;
}
</style>
