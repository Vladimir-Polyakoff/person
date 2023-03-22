
<template>
  <div class="footer" :style="'justify-content: ' + justifyContent">
    <button @click="prevPage"
    v-if="hiddenButton !== 'back'">назад
    </button>
    <button @click="$emit('next')"
    v-if="hiddenButton !== 'next'">вперед
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheFooter',
  props: {
    hiddenButton: {
      type: String,
      required: false
    }
  },
  computed: {
    justifyContent () {
      let style = 'space-between'
      const pageName = this.$route.name
      if (pageName === 'Page1') {
        style = 'flex-end'
      } else if (pageName === 'Page3') {
        style = 'flex-start'
      }
      return style
    }
  },
  methods: {
    ...mapActions (['prevPage'])
  }
}
</script>

<style scoped>
  .footer {
    width: 300px;
    display: flex;
    align-items: center;
  }
  button {
    border: none;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 10px;
    padding-inline: 20px;
}
button:hover {
    background: #efec4067;
    color: #262626;
}

</style>