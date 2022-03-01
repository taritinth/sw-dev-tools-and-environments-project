<template>
  <div class="container md:max-w-screen-md lg:max-w-screen-lg mx-auto">
    <div class="pt-8">
      <h1
        class="mb-5 text-2xl text-gray-800 dark:text-gray-500"
        data-test="title"
      >
        Search
      </h1>

      <div class="flex flex-col sm:flex-row gap-3 mb-6">
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <svg
              class="fill-current text-gray-400 h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              ></path>
            </svg>
          </div>
          <input
            v-model="query"
            @input="onSearch"
            type="text"
            data-test="search-input"
            placeholder="What are you looking for..."
            class="border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full py-3 pl-12"
          />
        </div>
        <!-- <div class="w-full sm:w-80">
          <select
            v-model="position"
            class="border border-gray-300 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-3"
            :class="{ 'text-gray-400': !position }"
          >
            <option value="">Position</option>
            <option>Full Stack Developer</option>
            <option>Mobile Developer</option>
            <option>Front End Developer</option>
            <option>Back End Developer</option>
            <option>Web Developement</option>
            <option>UX/UI</option>
            <option>Graphic Design</option>
          </select>
        </div> -->
        <div class="w-full sm:w-80">
          <select
            @input="onSearch"
            v-model="type"
            class="border border-gray-300 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-3"
            :class="{ 'text-gray-400': !type }"
          >
            <option value="">Job type</option>
            <option value="parttime">Part-time</option>
            <option value="fulltime">Full-time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div v-if="loading" class="">Loading...</div>

      <div v-else-if="!jobs.length" class="">No record</div>

      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          @click="showJobDesc(job)"
          class="flex flex-col items-start justify-between rounded-3xl h-80 bg-white p-8 shadow-1 cursor-pointer"
          data-test="job"
        >
          <div class="block">
            <job-title :title="job.title" :company="job.company" />
            <p class="text-base font-extralight text-gray-500 mt-4">
              {{ job.overview }}
            </p>
          </div>
          <div class="flex items-center mt-4">
            <button
              type="button"
              class="py-1 px-3 mr-2 mb-2 text-sm font-light text-gray-500 bg-white rounded-full border border-gray-200 hover:bg-gray-100 capitalize"
            >
              {{ job.type }}
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="showDesc"
        style="background-color: rgba(0, 0, 0, 0.25)"
        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg"
      >
        <div class="container mx-auto md:px-12 lg:px-48">
          <job-description
            :job="job"
            @update="onUpateModal"
            @close="onCloseModal"
          ></job-description>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/plugins/axios'
import JobDescription from '../../components/JobDescription.vue'
import JobTitle from '../../components/JobTitle.vue'

export default {
  name: 'Search',
  components: { JobDescription, JobTitle },
  layout: 'dashboard',
  data() {
    return {
      jobs: [],
      job: null,
      query: '',
      // position: '',
      type: '',
      showDesc: false,
      loading: true,
      debounceSearch: null,
    }
  },
  async mounted() {
    this.query = this.$route.query.query ?? ''
    this.type = this.$route.query.type ?? ''

    await this.getJobs()
  },
  methods: {
    async onSearch() {
      clearTimeout(this.debounceSearch)

      this.debounceSearch = setTimeout(async () => {
        await this.getJobs()
      }, 300)
    },
    async getJobs() {
      try {
        this.loading = true

        const params = [`query=${this.query}`, `type=${this.type}`].join('&')

        this.$router.push({
          query: { query: this.query, type: this.type },
        })

        const response = await axios.get(`/api/jobs?${params}`)
        console.log(response)

        this.jobs = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async getUser() {
      try {
        this.loading = true

        const response = await axios.get(
          `/api/users/${this.$nuxt.$auth.user.id}`
        )
        console.log(response)

        this.user = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    onCloseModal(val) {
      if (val == 'JobDescription') {
        this.hideJobDesc()
      }
    },
    onUpateModal(val) {
      if (val == 'JobDescription') {
        this.hideJobDesc()
      }
    },
    showJobDesc(job) {
      this.job = job
      this.showDesc = true
    },
    hideJobDesc() {
      this.showDesc = false
    },
  },
}
</script>
<style scoped>
option {
  color: rgba(156, 163, 175, 1);
}
option:not(:first-of-type) {
  color: rgb(45, 48, 53);
}
</style>
