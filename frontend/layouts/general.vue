<template>
  <div>
    <nav class="border-b border-gray-800">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-4 py-6"
      >
        <ul class="flex flex-col md:flex-row items-center">
          <li class="mr-20">
            <router-link to="/"> </router-link>
          </li>
          <li class="md:ml-16 mt-3 mr-10 md:mt-0">
            <a
              href="#"
              class="text-gray-300 hover:text-blue-400 font-medium transition ease-in-out duration-300"
              >Movies</a
            >
          </li>
          <li class="md:ml-6 mt-3 mr-10 md:mt-0">
            <a
              href="#"
              class="text-gray-300 hover:text-blue-400 font-medium transition ease-in-out duration-300"
              >TV Shows</a
            >
          </li>
          <li class="md:ml-6 mt-3 mr-10 md:mt-0">
            <a
              href="#"
              class="text-gray-300 hover:text-blue-400 font-medium transition ease-in-out duration-300"
              >Actors</a
            >
          </li>
        </ul>

        <div class="flex flex-col md:flex-row items-center"></div>
      </div>
    </nav>

    <div class="container mx-auto px-4 pt-16">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
