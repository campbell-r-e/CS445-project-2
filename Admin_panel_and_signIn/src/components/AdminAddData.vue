<template>
  <div class="page">
    <div class="topbar">
      <div class="topbar-inner">
        <div class="logo-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="logo-icon">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span>Admin Panel</span>
        </div>
        <button class="signout-btn" @click="$router.push('/')">Sign Out</button>
      </div>
    </div>

    <div class="content">

      <div v-if="submitted" class="success-card">
        <div class="success-icon">&#10003;</div>
        <h2>Observation Logged!</h2>
        <p>The sighting data for <strong>{{ form.personaName }}</strong> has been saved.</p>
        <button class="reset-btn" @click="resetForm">Log Another</button>
      </div>

      <template v-else>
        <div class="persona-card">
          <div class="persona-avatar">MR</div>
          <div class="persona-info">
            <p class="persona-label">Persona</p>
            <p class="persona-name">Mark Rivera</p>
            <p class="persona-role">Doctorate in Biology · Fishers, IN</p>
          </div>
        </div>

        <h1 class="form-title">Log Observation Meeting</h1>
        <p class="form-sub">Record data from an encounter with this persona at Conner Prairie.</p>

        <form @submit.prevent="submitForm">

          <section class="section">
            <h2 class="section-title">Encounter Details</h2>

            <div class="field">
              <label>Persona Name</label>
              <input v-model="form.personaName" type="text" placeholder="e.g. Mark Rivera" required />
            </div>

            <div class="row-2">
              <div class="field">
                <label>Date</label>
                <input v-model="form.date" type="date" required />
              </div>
              <div class="field">
                <label>Time</label>
                <input v-model="form.time" type="time" required />
              </div>
            </div>

            <div class="field">
              <label>Location on Campus</label>
              <select v-model="form.location" required>
                <option value="" disabled>Select area…</option>
                <option>Prairie Garden Trail</option>
                <option>Native Plant Meadow</option>
                <option>Woodland Walk</option>
                <option>Visitor Center Grounds</option>
                <option>Wetlands Edge</option>
                <option>Other</option>
              </select>
            </div>

            <div class="field" v-if="form.location === 'Other'">
              <label>Specify Location</label>
              <input v-model="form.locationOther" type="text" placeholder="Describe the location" />
            </div>

            <div class="field">
              <label>GPS Coordinates <span class="optional">(optional)</span></label>
              <input v-model="form.gps" type="text" placeholder="39.9728, -86.0290" />
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">Species Observed</h2>
            <p class="section-sub">Check all plants the persona encountered or photographed.</p>

            <div class="species-list">
              <label
                v-for="s in species"
                :key="s.id"
                class="species-item"
                :class="{ selected: form.speciesObserved.includes(s.id) }"
              >
                <input type="checkbox" :value="s.id" v-model="form.speciesObserved" />
                <div class="species-info">
                  <span class="species-common">{{ s.common }}</span>
                  <span class="species-sci">{{ s.scientific }}</span>
                </div>
              </label>
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">Observation Quality</h2>

            <div class="field">
              <label>Species Identification Confidence</label>
              <div class="pill-group">
                <button
                  type="button"
                  v-for="level in confidenceLevels"
                  :key="level"
                  class="pill"
                  :class="{ active: form.confidence === level }"
                  @click="form.confidence = level"
                >{{ level }}</button>
              </div>
            </div>

            <div class="field">
              <label>Ease of Logging <span class="optional">(1 = very hard, 5 = very easy)</span></label>
              <div class="rating-row">
                <button
                  type="button"
                  v-for="n in 5"
                  :key="n"
                  class="rating-btn"
                  :class="{ active: form.loggingEase === n }"
                  @click="form.loggingEase = n"
                >{{ n }}</button>
              </div>
            </div>

            <div class="field">
              <label>Photo Uploaded</label>
              <div class="photo-upload" @click="triggerPhoto">
                <span v-if="form.photoName">&#128247; {{ form.photoName }}</span>
                <span v-else>&#43; Tap to attach photo</span>
              </div>
              <input ref="photoInput" type="file" accept="image/*" style="display:none" @change="onPhoto" />
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">Notes</h2>

            <div class="field">
              <label>Observed Pain Points</label>
              <textarea
                v-model="form.painPoints"
                rows="3"
                placeholder="e.g. Struggled to identify species, wanted to share location with a friend…"
              ></textarea>
            </div>

            <div class="field">
              <label>Additional Observations</label>
              <textarea
                v-model="form.notes"
                rows="3"
                placeholder="Any other notes about this encounter…"
              ></textarea>
            </div>
          </section>

          <button type="submit" class="submit-btn">Save Observation</button>
        </form>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAddData',
  data() {
    return {
      submitted: false,
      species: [
        { id: 1, common: 'Eastern Purple Coneflower', scientific: 'Echinacea purpurea' },
        { id: 2, common: 'Eastern Redbud', scientific: 'Cercis canadensis' },
        { id: 3, common: 'Sugar Maple', scientific: 'Acer saccharum' }
      ],
      confidenceLevels: ['Low', 'Medium', 'High'],
      form: {
        personaName: 'Mark Rivera',
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toTimeString().slice(0, 5),
        location: '',
        locationOther: '',
        gps: '',
        speciesObserved: [],
        confidence: '',
        loggingEase: 0,
        photoName: '',
        painPoints: '',
        notes: ''
      }
    }
  },
  methods: {
    triggerPhoto() {
      this.$refs.photoInput.click()
    },
    onPhoto(e) {
      const file = e.target.files[0]
      if (file) this.form.photoName = file.name
    },
    submitForm() {
      this.submitted = true
    },
    resetForm() {
      this.submitted = false
      this.form = {
        personaName: 'Mark Rivera',
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toTimeString().slice(0, 5),
        location: '',
        locationOther: '',
        gps: '',
        speciesObserved: [],
        confidence: '',
        loggingEase: 0,
        photoName: '',
        painPoints: '',
        notes: ''
      }
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #FDE8D8;
}

.topbar {
  background: white;
  border-bottom: 1px solid #e8d5c0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.topbar-inner {
  max-width: 480px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 800;
  color: #C85A17;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.logo-icon {
  width: 18px;
  height: 18px;
  fill: #C85A17;
}

.signout-btn {
  background: none;
  border: 1.5px solid #C85A17;
  color: #C85A17;
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.signout-btn:hover { background: #fff0e8; }

.content {
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 16px 40px;
}

.persona-card {
  background: white;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  border-left: 4px solid #C85A17;
}

.persona-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #C85A17;
  color: white;
  font-size: 15px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.persona-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #C85A17;
  letter-spacing: 0.5px;
  margin: 0 0 2px;
}

.persona-name {
  font-size: 15px;
  font-weight: 900;
  margin: 0 0 2px;
  color: #1a1a1a;
}

.persona-role {
  font-size: 12px;
  color: #888;
  margin: 0;
}

.form-title {
  font-size: 20px;
  font-weight: 900;
  margin: 0 0 4px;
  color: #1a1a1a;
}

.form-sub {
  font-size: 13px;
  color: #666;
  margin: 0 0 20px;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 18px 16px;
  margin-bottom: 14px;
}

.section-title {
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  color: #C85A17;
  letter-spacing: 0.5px;
  margin: 0 0 14px;
}

.section-sub {
  font-size: 12px;
  color: #888;
  margin: -10px 0 12px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
}

.field:last-child { margin-bottom: 0; }

label {
  font-size: 13px;
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
}

.optional {
  font-weight: 400;
  color: #aaa;
  font-size: 11px;
}

input[type="text"],
input[type="date"],
input[type="time"],
select,
textarea {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  outline: none;
  font-family: sans-serif;
  background: white;
  transition: border-color 0.15s;
}

input:focus, select:focus, textarea:focus {
  border-color: #C85A17;
}

textarea { resize: vertical; }

.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}

.species-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.species-item {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.species-item.selected {
  border-color: #C85A17;
  background: #fff5ef;
}

.species-item input[type="checkbox"] {
  border: none;
  padding: 0;
  width: 16px;
  height: 16px;
  accent-color: #C85A17;
  flex-shrink: 0;
}

.species-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.species-common {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
}

.species-sci {
  font-size: 12px;
  font-style: italic;
  color: #888;
}

.pill-group {
  display: flex;
  gap: 8px;
}

.pill {
  padding: 7px 18px;
  border-radius: 20px;
  border: 1.5px solid #ddd;
  background: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: #555;
  transition: all 0.15s;
}

.pill.active {
  background: #C85A17;
  border-color: #C85A17;
  color: white;
}

.rating-row {
  display: flex;
  gap: 8px;
}

.rating-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid #ddd;
  background: white;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  color: #555;
  transition: all 0.15s;
}

.rating-btn.active {
  background: #C85A17;
  border-color: #C85A17;
  color: white;
}

.photo-upload {
  border: 1.5px dashed #C85A17;
  border-radius: 8px;
  padding: 14px;
  text-align: center;
  font-size: 13px;
  color: #C85A17;
  font-weight: 700;
  cursor: pointer;
  background: #fff8f4;
  transition: background 0.15s;
}

.photo-upload:hover { background: #fff0e8; }

.submit-btn {
  width: 100%;
  background: #C85A17;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 15px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.15s;
}

.submit-btn:hover { background: #9E4510; }

.success-card {
  background: white;
  border-radius: 16px;
  padding: 48px 28px;
  text-align: center;
  margin-top: 40px;
}

.success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #4CAF50;
  color: white;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

.success-card h2 {
  font-size: 22px;
  font-weight: 900;
  margin: 0 0 8px;
}

.success-card p {
  font-size: 14px;
  color: #555;
  margin: 0 0 24px;
}

.reset-btn {
  background: #C85A17;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
}

.reset-btn:hover { background: #9E4510; }
</style>
