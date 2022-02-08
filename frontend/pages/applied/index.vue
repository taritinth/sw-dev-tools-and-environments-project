<template>
  <div>
    <div class="flex mt-5">
      <!-- pending button -->
      <button
        type="button"
        class="w-24 mr-5 bg-yellow-500 hover:bg-yellow-400 focus:outline-none px-5 py-2 text-sm leading-5 rounded-lg font-semibold text-white"
      >
        Pending
      </button>
      <!-- hired button -->

      <button
        type="button"
        class="w-24 mr-5 bg-green-500 hover:bg-green-400 focus:outline-none px-5 py-2 text-sm leading-5 rounded-lg font-semibold text-white"
      >
        Hired
      </button>

      <!-- rejected button -->
      <button
        type="button"
        class="w-24 mr-5 bg-red-500 hover:bg-red-400 focus:outline-none px-5 py-2 text-sm leading-5 rounded-lg font-semibold text-white"
      >
        Rejected
      </button>
    </div>

    <!-- application list -->
    <div class="grid grid-cols-6 mb-3 mt-5">
      <div class="flex col-span-3 bg-white h-20">
        <div class="flex bg-blue-50 rounded-lg w-14 h-14 m-3">
          <img
            class="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/1280px-True_Corporation_%28Thailand%29.svg.png"
          />
        </div>
        <div class="flex items-center">
          <p class="font-bold text-lg w-80">True Corperation</p>
          <p class="text-lg">Backend Developer</p>
        </div>
      </div>
      <div
        class="flex justify-end items-center col-span-3 text-gray-400 h-20 bg-white"
      >
        <p class="mr-3">Pending</p>
      </div>
    </div>

    <div class="grid grid-cols-6 mb-3">
      <div class="flex col-span-3 bg-white h-20">
        <div class="flex bg-blue-50 rounded-lg w-14 h-14 m-3">
          <img
            class="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/1280px-True_Corporation_%28Thailand%29.svg.png"
          />
        </div>
        <div class="flex items-center">
          <p class="font-bold text-lg w-80">True Corperation</p>
          <p class="text-lg">Backend Developer</p>
        </div>
      </div>
      <div
        class="flex justify-end items-center col-span-3 text-gray-400 h-20 bg-white"
      >
        <p class="mr-3">Pending</p>
      </div>
    </div>

    <div class="grid grid-cols-6 mb-3">
      <div class="flex col-span-3 bg-white h-20">
        <div class="flex bg-blue-50 rounded-lg w-14 h-14 m-3">
          <img
            class="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/1280px-True_Corporation_%28Thailand%29.svg.png"
          />
        </div>
        <div class="flex items-center">
          <p class="font-bold text-lg w-80">True Corperation</p>
          <p class="text-lg">Backend Developer</p>
        </div>
      </div>
      <div
        class="flex justify-end items-center col-span-3 text-gray-400 h-20 bg-white"
      >
        <p class="mr-3">Pending</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {}
  },
  methods: {},
}
</script>
