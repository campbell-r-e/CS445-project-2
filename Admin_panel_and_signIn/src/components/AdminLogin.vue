<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="logo-row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="logo-icon">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        <span class="logo-text">Scavenger Hunt</span>
      </div>

      <h1>Admin Sign In</h1>
      <p class="subtitle">Conner Prairie Staff Portal</p>

      <div v-if="error" class="error-banner">{{ error }}</div>

      <form @submit.prevent="signIn">
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="staff@connerprairie.org"
            autocomplete="username"
            required
          />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            autocomplete="current-password"
            required
          />
          <button type="button" class="toggle-pw" @click="showPassword = !showPassword">
            {{ showPassword ? 'Hide' : 'Show' }}
          </button>
        </div>

        <button type="submit" class="sign-in-btn" :disabled="loading">
          <span v-if="loading">Signing in…</span>
          <span v-else>Sign In</span>
        </button>
      </form>

      <p class="hint">Demo credentials: admin@connerprairie.org / admin123</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      loading: false,
      error: ''
    }
  },
  methods: {
    signIn() {
      this.error = ''
      if (this.email === 'admin@connerprairie.org' && this.password === 'admin123') {
        this.loading = true
        setTimeout(() => {
          this.$router.push('/add-data')
        }, 800)
      } else {
        this.error = 'Invalid email or password. Try the demo credentials below.'
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 36px 28px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
}

.logo-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  color: #C85A17;
}

.logo-icon {
  width: 22px;
  height: 22px;
  fill: #C85A17;
}

.logo-text {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C85A17;
}

h1 {
  font-size: 22px;
  font-weight: 900;
  margin: 0 0 4px;
  text-align: center;
  color: #1a1a1a;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  color: #888;
  margin: 0 0 24px;
}

.error-banner {
  background: #fdecea;
  color: #c0392b;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  margin-bottom: 16px;
  border: 1px solid #f5c6c2;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
}

label {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #333;
}

input {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.15s;
}

input:focus {
  border-color: #C85A17;
}

.toggle-pw {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: none;
  border: none;
  color: #C85A17;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
}

.sign-in-btn {
  width: 100%;
  background: #C85A17;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.15s;
}

.sign-in-btn:hover:not(:disabled) {
  background: #9E4510;
}

.sign-in-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.hint {
  text-align: center;
  font-size: 11px;
  color: #aaa;
  margin: 18px 0 0;
}
</style>
