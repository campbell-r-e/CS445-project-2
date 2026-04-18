<template>
  <div class="plant-page">
    <button class="back-btn" @click="$router.push('/')">&#8592; Back</button>
    <img :src="coneflowerImg" alt="Eastern Purple Coneflower" class="plant-image" />
    <h1>Eastern Purple Coneflower</h1>
    <p class="sci-name">Echinacea purpurea</p>

    <section class="info-section">
      <h2>Description</h2>
      <p>The Eastern Purple Coneflower is a striking native wildflower with large daisy-like blooms featuring drooping purple-pink petals surrounding a spiny, dome-shaped orange-brown center cone. It typically grows 2–5 feet tall and blooms from midsummer through fall, attracting butterflies and bees.</p>
    </section>

    <section class="info-section">
      <h2>History in Indiana</h2>
      <p>This coneflower is native to Indiana's tallgrass prairies and open woodlands. Indigenous peoples, including the Potawatomi and Miami tribes of Indiana, used it extensively as a medicinal herb to treat infections and wounds. European settlers later adopted its uses, and it became one of the most harvested wild plants in the region. As Indiana's prairies were converted to farmland in the 1800s, populations declined sharply.</p>
    </section>

    <section class="info-section fun-fact">
      <h2>&#127807; Fun Fact</h2>
      <p>Indiana once had over 5 million acres of tallgrass prairie teeming with coneflowers. Today, less than 1% of those original prairies remain — making the Eastern Purple Coneflower a symbol of native plant restoration efforts across the state.</p>
    </section>

    <a href="https://en.wikipedia.org/wiki/Echinacea_purpurea" target="_blank" class="wiki-link">View on Wikipedia &#8599;</a>
    <a href="https://www.prairiemoon.com/echinacea-purpurea-purple-coneflower-prairie-moon-nursery.html" target="_blank" class="buy-link">Buy Seeds &#8594;</a>
  </div>
</template>

<script>
export default {
  name: 'ConeflowerPage',
  data() {
    return {
      coneflowerImg: new URL('../assets/coneflower.jpg', import.meta.url).href
    }
  }
}
</script>

<style scoped>
.plant-page {
  max-width: 380px;
  margin: 0 auto;
  padding: 20px 16px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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

.plant-image {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
}

h1 {
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.sci-name {
  font-style: italic;
  color: #777;
  margin: 0;
  font-size: 14px;
}

.info-section {
  width: 100%;
  background: #FDF4EC;
  border-radius: 8px;
  padding: 14px 16px;
}

.info-section h2 {
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  color: #C85A17;
  margin: 0 0 8px;
  letter-spacing: 0.5px;
}

.info-section p {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: #333;
}

.fun-fact { background: #fff8e7; }
.fun-fact h2 { color: #C9A961; }

.wiki-link {
  color: #C85A17;
  font-size: 15px;
}

.buy-link {
  display: inline-block;
  background: #2e7d32;
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
}

.buy-link:hover {
  background: #1b5e20;
}
</style>
