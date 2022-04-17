<template>
  <div class="flex items-center">
    <div class="flex bg-blue-50 rounded-lg p-3 mr-3">
      <img class="object-contain w-8 h-8" :src="company.profileImg" />
    </div>
    <div class="flex flex-col items-start">
      <p class="font-semibold" data-test="job-title">{{ title }}</p>
      <p class="font-light text-gray-500">{{ company.fullname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
