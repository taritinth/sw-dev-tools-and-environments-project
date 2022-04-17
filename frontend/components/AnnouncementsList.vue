<template>
  <div class="">
    <div v-if="loading" class="">Loading...</div>
    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="flex flex-col items-center justify-evenly rounded-3xl h-80 bg-white p-8 shadow-1 cursor-pointer"
        @click="showCreateJob"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-12 w-12 text-gray-300"
          viewBox="0 0 24 24"
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
        <span>Create new announcement</span>
      </div>
      <div
        v-for="(job, index) in announcements"
        :key="index"
        class="flex flex-col items-start justify-between rounded-3xl h-80 bg-white p-8 shadow-1 cursor-pointer"
        @click="showJobDesc(job)"
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
      v-if="showCreate"
      style="background-color: rgba(0, 0, 0, 0.25)"
      class="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen shadow-lg"
    >
      <div
        class="container flex justify-center items-center h-full px-2 md:px-12 lg:px-48"
      >
        <create-job @update="onUpateModal" @close="onCloseModal"></create-job>
      </div>
    </div>
    <div
      v-if="showDesc"
      style="background-color: rgba(0, 0, 0, 0.25)"
      class="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen shadow-lg"
    >
      <div
        class="container flex justify-center items-center h-full px-2 md:px-12 lg:px-48"
      >
        <job-description
          :job="job"
          @update="onUpateModal"
          @close="onCloseModal"
        ></job-description>
      </div>
    </div>
  </div>
</template>
<script>
import CreateJob from './CreateJob.vue'
import JobDescription from './JobDescription.vue'
import { axios } from '@/plugins/axios'

export default {
  components: { CreateJob, JobDescription },

  data() {
    return {
      job: null,
      announcements: [],
      showDesc: false,
      showCreate: false,
      loading: true,
    }
  },
  async mounted() {
    await this.getAnnouncements()
  },
  methods: {
    onCloseModal(val) {
      if (val == 'JobDescription') {
        this.hideJobDesc()
      }
      if (val == 'CreateJob') {
        this.hideCreateJob()
      }
    },
    async onUpateModal(val) {
      if (val == 'JobDescription') {
        this.hideJobDesc()
      }
      if (val == 'CreateJob') {
        await this.getAnnouncements(false)
      }
    },
    showCreateJob() {
      this.showCreate = true
    },
    hideCreateJob() {
      this.showCreate = false
    },
    showJobDesc(job) {
      this.job = job
      this.showDesc = true
    },
    hideJobDesc() {
      this.showDesc = false
    },
    async getAnnouncements(loading = false) {
      try {
        if (loading) this.loading = true

        const response = await axios.get(`/api/jobs/announcements`)
        console.log(response)

        this.announcements = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
        this.loading = false
      }
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
