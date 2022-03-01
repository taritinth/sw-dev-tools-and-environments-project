<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      class="flex flex-col w-full md:w-72 text-gray-700 bg-jobjab flex-shrink-0 md:h-screen sticky top-0"
    >
      <!-- <div
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
      </div> -->
      <div
        class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
      >
        <!-- <a
          href="#"
          class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >Flowtrail UI</a
        > -->
        <router-link to="/" class="flex items-center h-12">
          <!-- <img
            class="w-28"
            src="@/assets/img/logo.svg"
            alt="Movies &amp; TV Shows, Online cinema HTML Template"
          /> -->
          <span class="text-2xl font-semibold">JobJab</span>
        </router-link>
        <button
          class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
          @click="open = !open"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        :class="{ block: open, hidden: !open }"
        class="flex-grow md:block px-4 pb-4"
      >
        <div
          v-if="$auth && $auth.loggedIn"
          class="flex flex-row items-center justify-between px-4 py-3 mb-4 font-medium rounded-2xl"
        >
          <router-link to="/profile" class="flex items-center min-w-0 mr-3">
            <div
              v-if="$auth.user.type == 'company'"
              class="flex bg-blue-50 rounded-lg p-2 mr-3"
            >
              <img
                class="object-contain w-8 h-8"
                :src="
                  $auth.user.profileImg +
                  '?v=' +
                  new Date($auth.user.updatedAt).valueOf()
                "
              />
            </div>
            <div
              v-else
              class="flex flex-shrink-0 items-center overflow-hidden rounded-full h-12 w-12 bg-blue-50 mr-3"
            >
              <img
                v-if="$auth.user.profileImg"
                :src="
                  $auth.user.profileImg +
                  '?v=' +
                  new Date($auth.user.updatedAt).valueOf()
                "
                class="object-cover"
                alt="profile img"
              />
            </div>
            <div id="navFullname" class="truncate">
              {{ $auth.user.fullname }}
            </div>
          </router-link>

          <button
            @click="logout"
            class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-5"
            >
              <path
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
              ></path>
            </svg>
          </button>
        </div>

        <router-link
          v-else
          to="/signin"
          class="flex flex-row items-center px-4 py-3 mb-4 font-medium rounded-2xl"
        >
          <div class="rounded-full h-12 w-12 bg-gray-200 mr-3"></div>
          Sign in / Sign up
        </router-link>

        <router-link
          to="/"
          exact-active-class="text-white bg-blue-300"
          class="flex flex-row items-center px-4 py-3 my-4 font-medium rounded-2xl active:text-white active:bg-blue-300 hover:text-gray-500 focus:text-white hover:bg-gray-100 focus:bg-blue-300 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-5 mr-4"
          >
            <path
              d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
            ></path>
          </svg>
          Home
        </router-link>

        <router-link
          to="/search"
          active-class="text-white bg-blue-300"
          class="flex flex-row items-center px-4 py-3 my-4 font-medium rounded-2xl active:text-white active:bg-blue-300 hover:text-gray-500 focus:text-white hover:bg-gray-100 focus:bg-blue-300 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-5 mr-4"
          >
            <path
              class="heroicon-ui"
              d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
            ></path>
          </svg>
          Search
        </router-link>

        <router-link
          v-if="$auth && $auth.loggedIn && config.applicationsList"
          to="/applied"
          active-class="text-white bg-blue-300"
          class="flex flex-row items-center px-4 py-3 my-4 font-medium rounded-2xl active:text-white active:bg-blue-300 hover:text-gray-500 focus:text-white hover:bg-gray-100 focus:bg-blue-300 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-5 mr-4"
          >
            <path
              d="M19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z"
            ></path>
          </svg>
          {{ $auth.user.type == 'user' ? 'Applied' : 'Applications' }}
        </router-link>
      </nav>
    </div>

    <div class="flex flex-col w-full px-6">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { axios } from '@/plugins/axios'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters({
      config: 'config/get',
    }),
  },
  async mounted() {
    await this.loadConfig()
    // await this.getMovies()
  },
  methods: {
    ...mapMutations({
      setConfig: 'config/set',
      resetConfig: 'config/reset',
    }),
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
    async loadConfig() {
      try {
        const response = await axios.get(`/api/configs`)
        console.log(response)

        this.setConfig(response.data)

        console.log('dashboard: ', this.config)
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
      }
    },
  },
}
</script>
