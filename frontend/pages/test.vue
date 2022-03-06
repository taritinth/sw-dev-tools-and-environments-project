<template>
  <div>
    <div>Hello</div>
    <div id="result">{{ forTest }}</div>
  </div>
</template>
<script>
export default {
  name: 'testPage',
  data() {
    return {
      forTest: 'angel',
    }
  },
  methods: {
    testClick() {
      return this.forTest + '.'
    },
    fullName(firstName, lastName) {
      return firstName + ' ' + lastName
    }
  }
}
</script>
