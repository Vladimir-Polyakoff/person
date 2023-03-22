<template>
  <div class="container">
    <h1>Page number Three</h1>
    <div class="login-box">
      <h2>Ваши данные</h2>
      <img v-if="image" :src="image" class="user">
      <div class="info-person">
        <div>Имя: {{ dataPage1.name }}</div>
        <div>Пароль: {{ dataPage1.password }}</div>
        <div>Емайл: {{ dataPage2.email }}</div>
        <div>Телефон: {{ dataPage2.phone }}</div>
      </div>
    </div>
    <Footer style="margin-top: 20px"
    hiddenButton="next"
    />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/Footer'


export default {
  name: 'ThePage3',
  components: {
    Footer
  },
  computed: {
    ...mapGetters (['dataPage1', 'dataPage2', 'image'])
  },
  created () {
    this.$store.commit('setHiddenFooterButton', 'next')
    if (!this.dataPage1 || !this.dataPage2) {
      this.$router.push({name: 'Page1'})
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
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
.info-person {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
div {
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #fff;
  padding: 10px 0;
}
h2 {
  font-size: 35px;
}
h1 {
  font-size: 45px;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.143);
}
</style>
