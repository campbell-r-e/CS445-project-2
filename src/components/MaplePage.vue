<template>
  <div class="plant-page">
    <button class="back-btn" @click="$router.push('/')">&#8592; Back</button>
    <img :src="mapleImg" alt="Sugar Maple" class="plant-image" />
    <h1>Sugar Maple</h1>
    <p class="sci-name">Acer saccharum</p>

    <section class="info-section">
      <h2>Description</h2>
      <p>The Sugar Maple is a large, long-lived deciduous tree that grows 75–100 feet tall and can live 200–400 years. Celebrated for its spectacular fall foliage in shades of orange, red, and yellow, it is also the primary commercial source of maple syrup. Its distinctive five-lobed leaf is one of the most recognized shapes in North America.</p>
    </section>

    <section class="info-section">
      <h2>History in Indiana</h2>
      <p>Sugar Maples have shaped Indiana's forests and culture for centuries. Indigenous peoples in Indiana — including the Potawatomi and Delaware — were tapping sugar maples for sap long before European contact, producing maple sugar as a vital food source and trade good. Early settlers learned the practice from Native Americans and established "sugar camps" across northern and central Indiana. The tradition of maple sugaring became a hallmark of Indiana rural life throughout the 1800s.</p>
    </section>

    <section class="info-section fun-fact">
      <h2>&#127807; Fun Fact</h2>
      <p>Indiana celebrates its maple syrup heritage every spring with festivals like the Parke County Maple Fair. It takes roughly 40 gallons of sugar maple sap — collected during Indiana's late-winter thaw — to produce just one gallon of maple syrup.</p>
    </section>

    <a href="https://en.wikipedia.org/wiki/Acer_saccharum" target="_blank" class="wiki-link">View on Wikipedia &#8599;</a>
    <a href="https://www.walmart.com/ip/TomorrowSeeds-Sugar-Maple-Tree-Seeds-100-Count-For-2026-Planting-Acer-Saccharum-Sweet-Syrup/19519102513?wmlspartner=wlpa&selectedSellerId=101086957&adid=22222222222000000000&wmlspartner=wmtlabs&wl0=e&wl1=s&wl2=c&wl3=10352200394&wl4=pla-1103028060075&wl5=95402&wl6=&wl7=&wl10=Walmart&wl11=Online&wl12=19519102513_10001106321&wl14=sugar%20maple%20seeds&veh=sem&msclkid=1118ff7d9f3f1b688fba96a9f3da3c93&gclid=1118ff7d9f3f1b688fba96a9f3da3c93&gclsrc=3p.ds" target="_blank" class="buy-link">Buy Seeds &#8594;</a>
  </div>
</template>

<script>
export default {
  name: 'MaplePage',
  data() {
    return {
      mapleImg: new URL('../assets/maple.jpg', import.meta.url).href
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
