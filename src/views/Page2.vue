<template>
  <div>
    <h1>Page number Two</h1>
    <FormPage ref="FormPage"
    :data="dataPage2"
    :image="image"
    @saveForm="saveForm"></FormPage>
    <Footer style="margin-top: 20px"
    @next="$refs.FormPage.getValuesForm()"
    />
  </div>
</template>

<script>
import FormPage from '@/components/FormPage2'
import { mapGetters, mapActions } from 'vuex'
import Footer from '@/components/Footer'

export default {
  name: 'ThePage2',
  components: {
    FormPage,
    Footer
  },
  computed: {
    ...mapGetters (['dataPage1','dataPage2', 'image'])
  },
  created () {
    if (!this.dataPage1) {
      this.$router.push({ name: 'Page1'})
    }
  },
  methods: {
    ...mapActions(['nextPage']),
    saveForm (value) {
      this.$store.commit('setFormPage', { name: 'page2', value })
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