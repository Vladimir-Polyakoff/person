<template>
  <div class="login-box">
    <div class="field">
      <input type="file" ref="File" @change="addPhoto" class="user user-file">
      <img :src="img" class="user">
    </div>
    <!-- <h2>{{ name }}</h2> -->
    <div class="field">
      <p>Имя</p>
      <input type="text" placeholder="Введите имя" v-model="name">
      <div class="error"> {{ errors.name }} </div>
    </div>
    <div class="field">
      <p>Пароль</p>
      <input type="password" placeholder="Введите пароль" v-model="password">
      <div class="error"> {{ errors.password }} </div>
    </div>
  </div>
</template>

<script>
import validator from '@/halpers/validator.js'

export default {
  name: 'FormPage1',
  props: {
    data: {
      type: [Object, String],
      required: true
    }
  },
  data () {
    return {
      name: '',
      password: '',
      errors: {
        name: '',
        password: ''
      },
      img: require('@/img/3.png'),
    }
  },
  mounted () {
    if (this.data) {
      this.name = this.data.name
      this.password = this.data.password
      if (this.data.image) {
        this.img = this.data.image
      }
    }
  },
  methods: {
    validForm () {
      this.errors = {
        name: '',
        password: ''
      }

      const isValidName = validator('name', this.name)
      const isValidPassword = validator('password', this.password)

      if (!isValidName) {
        this.errors.name = 'длина от 3 до 8 символов'
      }
      if (!isValidPassword) {
        this.errors.password = 'длина 8 символов'
      }
      
      return isValidName && isValidPassword
    },
    addPhoto () {
      const photo = this.$refs.File.files[0]
      this.img = URL.createObjectURL(photo)
    },
    getValuesForm () {
      if (this.validForm()) {
        const data = { name: this.name, password: this.password }
        if (this.img !== require('@/img/3.png')) {
          data.image = this.img
        }
        this.$emit('saveForm', data)
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
  color: red;
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
.user-file {
    z-index: 100;
    position: absolute;
    width: 100px !important;
    left: 81px;
    top: -30px;
    opacity: 0;
    cursor: pointer;
    overflow: hidden;
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
h2 {
  margin: 0;
  padding-bottom:20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}
.login-box p {
  margin: 10px;
  padding: 0;
  font-weight: bold;
  color: #fff;
}
.login-box input {
  width: 100%;
  margin-bottom: 20px;

}
.login-box input[type="text"],
.login-box input[type="password"] {
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