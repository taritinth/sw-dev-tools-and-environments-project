<template>
  <div class="flex items-center">
    <div class="flex bg-blue-50 rounded-full h-12 w-12 mr-3">
      <img class="rounded-full h-12 w-12" :src="user.profileImg" />
    </div>
    <div class="flex flex-col items-start">
      <p class="font-semibold">{{ title }}</p>
      <p class="font-light text-gray-500">{{ user.fullname }}</p>
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
    user: {
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
