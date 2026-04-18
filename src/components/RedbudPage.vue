<template>
  <div class="plant-page">
    <button class="back-btn" @click="$router.push('/')">&#8592; Back</button>
    <img :src="redbudImg" alt="Eastern Redbud" class="plant-image" />
    <h1>Eastern Redbud</h1>
    <p class="sci-name">Cercis canadensis</p>

    <section class="info-section">
      <h2>Description</h2>
      <p>The Eastern Redbud is a small, graceful deciduous tree reaching 20–30 feet tall. It is best known for its breathtaking spring display of magenta-pink flowers that burst directly from bare branches and even the trunk before any leaves emerge. Heart-shaped leaves follow in summer, turning yellow in fall.</p>
    </section>

    <section class="info-section">
      <h2>History in Indiana</h2>
      <p>Eastern Redbuds have grown throughout Indiana's forests and woodland edges for thousands of years. Native Americans across the region ate the flowers raw or boiled and roasted the seeds as food. Indiana communities have long planted redbuds in parks, neighborhoods, and along roadsides for their brilliant spring color, and they remain one of the most popular ornamental trees in the state.</p>
    </section>

    <section class="info-section fun-fact">
      <h2>&#127807; Fun Fact</h2>
      <p>The Eastern Redbud's flowers are edible — they have a slightly sweet, pea-like flavor and can be tossed into salads or used as a garnish. In Indiana, the tree typically blooms in April, making it one of the very first splashes of color after the long Midwestern winter.</p>
    </section>

    <a href="https://en.wikipedia.org/wiki/Cercis_canadensis" target="_blank" class="wiki-link">View on Wikipedia &#8599;</a>
    <a href="https://www.etsy.com/listing/1591079761/eastern-redbud-tree-seeds?gpla=1&gao=1&&utm_source=bing&utm_medium=cpc&utm_campaign=shopping_us_en_us_search_partners&utm_custom1=_k_92f392cb11e513eb2d56fb1f7cd77b95_k_&utm_content=bing_319339186_1310617986645934_81913644654434_pla-4585513245482005:pla-4585513245482005_c__1591079761&utm_custom2=319339186&msclkid=92f392cb11e513eb2d56fb1f7cd77b95" target="_blank" class="buy-link">Buy Seeds &#8594;</a>
  </div>
</template>

<script>
export default {
  name: 'RedbudPage',
  data() {
    return {
      redbudImg: new URL('../assets/redbud.jpg', import.meta.url).href
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
