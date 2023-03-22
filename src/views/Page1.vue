<template>
  <div>
    <h1>Page number One</h1>
    <FormPage ref="FormPage"
    :data="dataPage1"
    @saveForm="saveForm"/>
    <Footer style="margin-top: 20px"
    hiddenButton="back"
    @next="$refs.FormPage.getValuesForm()"
    />
  </div>
</template>

<script>
import FormPage from '@/components/FormPage1'
import { mapGetters, mapActions } from 'vuex'
import Footer from '@/components/Footer'

export default {
  name: 'ThePage1',
  components: {
    FormPage,
    Footer
  },
  computed: {
    ...mapGetters (['dataPage1']) 
  },
  created () {
    this.$store.commit('setHiddenFooterButton', 'back')
  },
  methods: {
    ...mapActions (['nextPage']),
    saveForm (value) {
      this.$store.commit('setFormPage', { name: 'page1', value })
      this.nextPage()
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 45px;
    letter-spacing: 4px;
    color: rgba(0, 0, 0, 0.143);
  }
</style>