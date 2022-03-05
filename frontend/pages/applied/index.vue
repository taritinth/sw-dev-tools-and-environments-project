<template>
  <div class="container md:max-w-screen-md lg:max-w-screen-lg mx-auto">
    <div class="pt-8">
      <h1 class="mb-5 text-2xl text-gray-800 dark:text-gray-500">
        {{ $auth.user.type == 'user' ? 'Applied' : 'Applications' }}
      </h1>
      <div class="flex overflow-x-auto mb-6">
        <button
          @click="setStatus()"
          type="button"
          class="flex justify-center w-24 mr-3 text-gray-700 bg-gray-100 hover:bg-gray-300 focus:outline-none px-6 py-2 text-sm leading-5 rounded-2xl"
          :class="{ 'bg-gray-300': status == '' }"
        >
          All
        </button>

        <!-- pending button -->
        <button
          @click="setStatus('pending')"
          type="button"
          class="flex justify-center w-24 mr-3 text-gray-700 bg-gray-100 hover:bg-yellow-300 focus:outline-none px-6 py-2 text-sm leading-5 rounded-2xl"
          :class="{ 'bg-yellow-300': status == 'pending' }"
        >
          Pending
        </button>
        <!-- hired button -->

        <button
          @click="setStatus('hired')"
          type="button"
          class="flex justify-center w-24 mr-3 text-gray-700 bg-gray-100 hover:bg-green-300 focus:outline-none px-6 py-2 text-sm leading-5 rounded-2xl"
          :class="{ 'bg-green-300': status == 'hired' }"
        >
          Hired
        </button>

        <!-- rejected button -->
        <button
          @click="setStatus('rejected')"
          type="button"
          class="flex justify-center w-24 mr-3 text-gray-700 bg-gray-100 hover:bg-red-300 focus:outline-none px-6 py-2 text-sm leading-5 rounded-2xl"
          :class="{ 'bg-red-300': status == 'rejected' }"
        >
          Rejected
        </button>
      </div>

      <div v-if="loading" class="">Loading...</div>

      <div v-else-if="!applications.length" class="">No record</div>

      <!-- application list -->
      <div v-else class="flex flex-col gap-6">
        <div
          v-for="(application, index) in applications"
          :key="index"
          @click="showApplicationDetails(application)"
          class="flex justify-between items-center bg-white rounded-2xl p-3 shadow-1 cursor-pointer"
        >
          <user-title
            v-if="$auth.user.type == 'company'"
            :title="application.job.title"
            :user="application.user"
          ></user-title>

          <job-title
            v-else
            :title="application.job.title"
            :company="application.company"
          ></job-title>

          <div
            class="flex justify-center w-24 mr-3 text-gray-700 px-6 py-2 text-sm leading-5 rounded-2xl capitalize"
            :class="{
              'bg-yellow-100': application.status == 'pending',
              'bg-green-100': application.status == 'hired',
              'bg-red-100': application.status == 'rejected',
            }"
          >
            {{ application.status }}
          </div>
        </div>
      </div>

      <div
        v-if="showDetails"
        style="background-color: rgba(0, 0, 0, 0.25)"
        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg"
      >
        <div class="container mx-auto md:px-12 lg:px-48">
          <application-details
            :application="application"
            @update="onUpateModal"
            @close="onCloseModal"
          ></application-details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/plugins/axios'
import JobTitle from '../../components/JobTitle.vue'
import UserTitle from '../../components/UserTitle.vue'
import ApplicationDetails from '../../components/ApplicationDetails.vue'
export default {
  middleware: ['auth'],
  components: { JobTitle, UserTitle, ApplicationDetails },
  layout: 'dashboard',
  data() {
    return {
      application: null,
      applications: [],
      status: '',
      loading: true,
      showDetails: false,
    }
  },
  async mounted() {
    await this.getApplications()
  },
  watch: {
    async status() {
      await this.getApplications()
    },
  },
  methods: {
    async getApplications(loading = true) {
      try {
        if (loading) this.loading = true

        const params = [`status=${this.status}`].join('&')

        const response = await axios.get(`/api/applications?${params}`)
        console.log(response)

        this.applications = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    setStatus(status = '') {
      this.status = status
    },
    onCloseModal(val) {
      if (val == 'ApplicationDetails') {
        this.hideApplicationDetails()
      }
    },
    async onUpateModal(val) {
      if (val == 'ApplicationDetails') {
        await this.getApplications(false)
      }
    },
    showApplicationDetails(application) {
      this.application = application
      this.showDetails = true
    },
    hideApplicationDetails() {
      this.showDetails = false
    },
  },
}
</script>
