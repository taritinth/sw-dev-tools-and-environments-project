<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      class="flex flex-col border-r border-gray-800 w-full md:w-3/12 text-gray-700 bg-my-movie-mood dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 h-screen sticky top-0"
    >
      <div
        class="flex-shrink-0 flex flex-row justify-between h-full bg-red-500"
      >
        <div class="flex flex-col w-full">
          <div class="flex h-1/3 bg-blue-400 px-10 py-5">
              <div class="flex w-full items-center justify-center">
                <div class="flex w-32 h-32">
                  <img class="object-center rounded-full object-cover" src="https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80">
                </div>
              </div>
              <div class="flex w-full items-center justify-center">
                <p class="text-white text-2xl font-medium">
                  Salinya Timklip
                </p>
              </div>
          </div>
          <div class="flex flex-col bg-blue-400 h-full">
            <div class="flex w-full">
              <button class="flex w-full h-full py-6 px-4 text-blue-500 font-medium bg-white">
                Home
              </button>
            </div>
            <div class="flex w-full">
              <button class="flex w-full h-full py-6 px-4 text-white font-medium">
                Profile
              </button>
            </div>
            <div class="flex w-full ">
              <button class="flex w-full h-full py-6 px-4 text-white font-medium">
                Search Job
              </button>
            </div>
            <div class="flex w-full">
              <button class="flex w-full h-full py-6 px-4 text-white font-medium">
                Applied
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full px-6">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {},
}
</script>
