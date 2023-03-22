<template>
  <div class="login-box">
    <img  v-if="image" :src="image" class="user">
    <div class="field">
      <p>Почта</p>
      <input type="email" placeholder="почта" v-model="email">
      <div class="error">{{ errors.email }}</div>
    </div>
    <div class="field">
      <p>Телефон</p>
      <input type="text" placeholder="номер телефона" v-model="phone">
      <div class="error">{{ errors.phone }}</div>
    </div>
  </div>
</template>

<script>
import validator from '@/halpers/validator.js'

export default {
  name: 'FormPage2',
  props: {
    data: {
      type: [Object, String],
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      email: '',
      phone: '',
      errors: {
        email: '',
        phone: ''
      }
    }
  },
  mounted () {
    if (this.data) {
      this.email = this.data.email
      this.phone = this.data.phone
    }
  },
  methods: {
    validForm () {
      this.errors = {
        email: '',
        phone: ''
      }

      const isValidEmail = validator('email', this.email)
      const isValidPhone = validator('phone', this.phone)

      if (!isValidEmail) {
        this.errors.email = 'потча должна содержать @ символ'
      }
      if (!isValidPhone) {
        this.errors.phone = 'номер начинается с цифры 8 и содержит еще 10 чисел'
      }
      
      return isValidEmail && isValidPhone
    },

    getValuesForm () {
      if (this.validForm()) {
        this.$emit('saveForm', { email: this.email, phone: this.phone })
      } else {
        this.$store.commit('setActivePage', null)
      }
    }
  }
}
</script>

<style scoped> 
  body {
  margin: 0;
  padding: 0;
  background-size:cover;
  font-family: sans-serif;
}
.error {
  color: rgba(255, 0, 0, 0.5);
}
.login-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 420px;
  padding: 80px 40px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius:15px ;
}
.user {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: calc(-100px/2);
  left: calc(50% - 50px);
}
.login-box p {
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #fff;
}
.login-box input {
  width: 100%;
  margin-bottom: 20px;
}
.login-box input[type="email"],
.login-box input[type="text"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-style: 16px;
}
::placeholder {
  color: rgba(225, 225, 225, .5);
}
</style>