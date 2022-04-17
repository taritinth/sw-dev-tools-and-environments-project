<template>
  <!-- Modal -->
  <!-- <div class="relative px-4 w-full h-full md:h-auto"> -->
  <!-- Modal content -->
  <div
    class="flex flex-col w-full rounded-xl shadow bg-gray-50 px-1.5 sm:px-6 py-3"
    style="max-height: calc(100vh - 64px)"
  >
    <!-- Modal header (close icon)-->
    <div class="flex justify-end">
      <button
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        data-modal-toggle="popup-modal"
        @click="closeModal"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <!-- Modal body -->
    <div class="flex flex-col flex-auto text-left overflow-y-auto">
      <!-- first box -->
      <div class="bg-white py-3 px-3 rounded-xl">
        <job-title :title="job.title" :company="job.company" />
      </div>
      <!-- second box -->
      <div
        class="flex items-center justify-around bg-white p-3 rounded-xl mt-5"
      >
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Due Date</p>
          <p class="font-semibold text-lg">
            {{ job.dueDate ? getDateText(job.dueDate) : 'Any time' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Salary</p>
          <p class="font-semibold text-lg">
            {{ job.salary ? 'Paid' : '-' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Job Type</p>
          <p class="font-semibold text-lg capitalize">
            {{ job.type || '-' }}
          </p>
        </div>
      </div>
      <!-- description box -->
      <div
        class="flex flex-col items-start bg-white py-5 px-2 rounded-xl mt-5 pb-7"
      >
        <div class="pl-5 my-2">
          <p class="text-base text-gray-400">Description</p>
        </div>

        <div
          class="flex flex-col items-start text-left w-full pl-5 max-h-80 overflow-auto"
          v-html="job.description"
        ></div>
      </div>
    </div>

    <button
      v-if="
        !$auth.loggedIn || ($auth.loggedIn && $auth.user.type !== 'company')
      "
      type="button"
      class="w-full md:w-56 self-end text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mt-5"
      @click="applyJob"
    >
      Apply
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import JobTitle from './JobTitle.vue'
import { axios } from '@/plugins/axios'
export default {
  components: { JobTitle },
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.job)
  },
  computed: {
    ...mapGetters({
      config: 'config/get',
    }),
  },
  methods: {
    closeModal() {
      this.$emit('close', 'JobDescription')
    },
    emitUpdate() {
      this.$emit('update', 'JobDescription')
    },
    // getDateText(date) {
    //   if (date) {
    //     date = new Date(date)
    //     let options = {
    //       year: 'numeric',
    //       month: 'short',
    //       day: 'numeric',
    //     }
    //     return date.toLocaleString('en-US', options)
    //   } else {
    //     return '-'
    //   }
    // },
    getDateText(date) {
      if (date) {
        date = new Date(date)
        const options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }
        return date.toLocaleString('en-US', options)
      } else {
        return 'Invalid Date'
      }
    },
    async applyJob() {
      if (!this.$nuxt.$auth.loggedIn)
        return this.$router.push({
          path: '/signin',
        })
      try {
        const data = {
          job: this.job._id,
          company: this.job.company._id,
        }
        const response = await axios.post('/api/applications', data)
        console.log(response)

        if (response.data?.success) {
          this.$toast.success(response.data?.message)
          this.closeModal()

          if (this.config.applicationsList) {
            this.$router.push({
              path: '/applied',
            })
          }
        } else {
          this.$toast.error(response.data?.message)
        }
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.error(e)
      }
    },
  },
}
</script>
