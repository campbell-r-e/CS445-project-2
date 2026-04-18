<template>
  <div class="scavenger-hunt">
    <div class="title-row">
      <svg class="map-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-label="map pin">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      <h1>SCAVENGER HUNT</h1>
    </div>
    <h2 class="subtitle">FIND THESE SPECIES OF PLANTS:</h2>
    <button class="map-btn" @click="$router.push('/map')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 8 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
      View Campus Map
    </button>

    <div class="plant-list">
      <div v-for="plant in plants" :key="plant.id" class="plant-card">
        <div class="plant-info">
          <h3 class="plant-name">{{ plant.name }}</h3>
          <p class="learn-label">&#128205; Click to learn more:</p>
        <img :src="plant.image" :alt="plant.name" class="plant-image" @click="$router.push(plant.route)" />
        <div class="found-row">
            <label class="found-label"><strong>Found it:</strong> <input type="checkbox" v-model="plant.found" @change="onFoundChange(plant)" /></label>
            <div v-if="plant.showSelected" class="selected-toast">&#10003; Selected!</div>
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
    const saved = JSON.parse(localStorage.getItem('plantFound') || '{}')
    return {
      plants: [
        {
          id: 1,
          name: 'Eastern Purple Coneflower',
          image: new URL('../assets/coneflower.jpg', import.meta.url).href,
          link: 'https://en.wikipedia.org/wiki/Echinacea_purpurea',
          route: '/plant/coneflower',
          found: !!saved[1],
          showSelected: false
        },
        {
          id: 2,
          name: 'Eastern Redbud',
          image: new URL('../assets/redbud.jpg', import.meta.url).href,
          link: 'https://en.wikipedia.org/wiki/Cercis_canadensis',
          route: '/plant/redbud',
          found: !!saved[2],
          showSelected: false
        },
        {
          id: 3,
          name: 'Sugar Maple',
          image: new URL('../assets/maple.jpg', import.meta.url).href,
          link: 'https://en.wikipedia.org/wiki/Acer_saccharum',
          route: '/plant/maple',
          found: !!saved[3],
          showSelected: false
        }
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    saveFound() {
      const saved = {}
      this.plants.forEach(p => { saved[p.id] = p.found })
      localStorage.setItem('plantFound', JSON.stringify(saved))
    },
    onFoundChange(plant) {
      this.saveFound()
      if (plant.found) {
        plant.showSelected = true
        setTimeout(() => {
          plant.showSelected = false
        }, 2500)
      } else {
        plant.showSelected = false
      }
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
  width: 360px;
  height: 360px;
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
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 6px;
  color: #C85A17;
}

.found-label {
  font-size: 14px;
}

.play-btn:hover {
  background: #9E4510;
}

.found-row {
  font-size: 13px;
  color: #333;
}

.map-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 auto 16px;
  padding: 7px 16px;
  background: #C85A17;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.3px;
}

.map-btn:hover { background: #9E4510; }

.found-row input[type="checkbox"] {
  margin-left: 4px;
}

@keyframes dropFade {
  0%   { transform: translateY(-8px); opacity: 0; }
  15%  { transform: translateY(0);    opacity: 1; }
  70%  { transform: translateY(0);    opacity: 1; }
  100% { transform: translateY(0);    opacity: 0; }
}

.selected-toast {
  display: inline-block;
  margin-top: 6px;
  padding: 3px 10px;
  background: #4CAF50;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  animation: dropFade 2.5s ease forwards;
}
</style>
