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
        @click="closeModal"
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        data-modal-toggle="popup-modal"
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
    <!-- Modal body for user -->
    <div
      v-if="$auth.loggedIn && $auth.user.type == 'user'"
      class="flex flex-col flex-auto text-left overflow-y-auto"
    >
      <!-- first box -->
      <div
        class="flex flex-col md:flex-row justify-between items-center bg-white py-3 px-3 rounded-xl"
      >
        <job-title
          :title="application.job.title"
          :company="application.company"
        />
        <div class="flex flex-row mt-2 md:mt-0 md:flex-col md:items-end">
          <div
            class="w-24 text-gray-700 px-6 py-2 text-sm leading-5 rounded-2xl capitalize"
            :class="{
              'bg-yellow-100': application.status == 'pending',
              'bg-green-100': application.status == 'hired',
              'bg-red-100': application.status == 'rejected',
            }"
          >
            {{ application.status }}
          </div>
          <span
            v-if="application.status != 'pending'"
            class="text-sm font-light text-gray-400 mt-2"
          >
            {{ getDateText(application.updatedAt) }}</span
          >
        </div>
      </div>
      <!-- second box -->
      <div
        class="flex items-center justify-around bg-white p-3 rounded-xl mt-5"
      >
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Due Date</p>
          <p class="font-semibold text-lg">
            {{
              application.job.dueDate
                ? getDateText(application.job.dueDate)
                : 'Any time'
            }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Salary</p>
          <p class="font-semibold text-lg">
            {{ application.job.salary ? 'Paid' : '-' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Job Type</p>
          <p class="font-semibold text-lg capitalize">
            {{ application.job.type || '-' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Apply Time</p>
          <p class="font-semibold text-lg capitalize">
            {{ getDateText(application.createdAt) }}
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
          v-html="application.job.description"
          class="flex flex-col items-start w-full pl-5 max-h-80 overflow-auto text-left"
        ></div>
      </div>
      <!-- user info box -->
      <div
        class="flex items-center justify-around bg-white p-3 rounded-xl mt-5"
      >
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Email</p>
          <p class="font-semibold text-lg">
            {{ application.user.email }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Phone</p>
          <p class="font-semibold text-lg">
            {{ application.user.phone }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Education</p>
          <p class="font-semibold text-lg capitalize">
            {{ application.user.education }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <a
            :href="application.user.resumeFile"
            type="button"
            class="flex w-max items-center py-2.5 px-3 mr-2 mb-2 text-sm font-light text-gray-500 bg-white rounded-full border border-gray-200 hover:bg-gray-100 capitalize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-current text-gray-500 mr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 10h3v-4h2v4h3l-4 4-4-4z"
              />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </div>
    <!-- Modal body for company -->
    <div
      v-if="$auth.loggedIn && $auth.user.type == 'company'"
      class="flex flex-col flex-auto text-left overflow-y-auto"
    >
      <div
        class="flex flex-col items-center sm:flex-row sm:items-start justify-between bg-white py-3 px-3 pl-5 rounded-xl"
      >
        <div class="sm:mr-14">
          <div class="relative rounded-full h-60 w-60 bg-blue-50">
            <img
              :src="application.user.profileImg"
              class="rounded-full h-60 w-60 object-cover"
            />
          </div>
        </div>
        <div class="flex flex-col flex-1 items-start justify-start mt-9">
          <div class="flex flex-col md:flex-row w-full justify-between">
            <div class="flex flex-col items-start">
              <div class="font-medium text-4xl">
                {{ application.user.fullname }}
              </div>
              <div class="text-xl font-medium text-gray-600 mt-2">
                {{ application.job.title }}
              </div>
            </div>
            <div class="flex flex-row mt-2 md:mt-0 md:flex-col md:items-end">
              <div
                class="w-24 text-gray-700 px-6 py-2 text-sm leading-5 rounded-2xl capitalize"
                :class="{
                  'bg-yellow-100': application.status == 'pending',
                  'bg-green-100': application.status == 'hired',
                  'bg-red-100': application.status == 'rejected',
                }"
              >
                {{ application.status }}
              </div>
              <span
                v-if="application.status != 'pending'"
                class="text-sm font-light text-gray-400 mt-2"
              >
                {{ getDateText(application.updatedAt) }}</span
              >
            </div>
          </div>

          <div class="flex flex-col items-start mt-4">
            <div>
              <span class="font-light text-gray-500">Education: </span>
              <span class="text-gray-600 font-medium">
                {{ application.user.education }}</span
              >
            </div>
            <div>
              <span class="font-light text-gray-500">Email: </span>
              <span class="text-gray-600 font-medium">
                {{ application.user.email }}</span
              >
            </div>
            <div>
              <span class="font-light text-gray-500">Phone: </span>
              <span class="text-gray-600 font-medium">
                {{ application.user.phone }}</span
              >
            </div>
            <div class="flex items-center mt-2">
              <span class="font-light text-gray-500 mr-3">Resume/CV: </span>
              <a
                :href="application.user.resumeFile"
                type="button"
                class="flex w-max items-center py-1.5 px-3 mr-2 mb-2 text-sm font-light text-gray-500 bg-white rounded-full border border-gray-200 hover:bg-gray-100 capitalize"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 fill-current text-gray-500 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 10h3v-4h2v4h3l-4 4-4-4z"
                  />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-between items-center bg-white py-3 pl-5 rounded-xl mt-5"
      >
        <job-title
          :title="application.job.title"
          :company="application.company"
        />
      </div>

      <div
        class="flex items-center justify-around bg-white p-3 rounded-xl mt-5"
      >
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Due Date</p>
          <p class="font-semibold text-lg">
            {{
              application.job.dueDate
                ? getDateText(application.job.dueDate)
                : 'Any time'
            }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Salary</p>
          <p class="font-semibold text-lg">
            {{ application.job.salary ? 'Paid' : '-' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Job Type</p>
          <p class="font-semibold text-lg capitalize">
            {{ application.job.type || '-' }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-light text-gray-400">Apply Time</p>
          <p class="font-semibold text-lg capitalize">
            {{ getDateText(application.createdAt) }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="$auth.loggedIn && $auth.user.type == 'company'"
      class="flex self-end"
    >
      <button
        v-if="application.status == 'pending'"
        @click="updateApplications('rejected')"
        type="button"
        class="w-full md:w-56 mr-3 text-red-400 bg-white border border-red-400 hover:text-white hover:bg-red-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mt-5"
      >
        Reject
      </button>
      <button
        v-if="application.status == 'pending'"
        @click="updateApplications('hired')"
        type="button"
        class="w-full md:w-56 text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mt-5"
      >
        Hire
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { axios } from '@/plugins/axios'
import JobTitle from './JobTitle.vue'
export default {
  components: { JobTitle },
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModified: false,
    }
  },
  beforeDestroy() {
    if (this.isModified) this.emitUpdate()
  },
  mounted() {
    console.log(this.job)
  },

  methods: {
    closeModal() {
      this.$emit('close', 'ApplicationDetails')
    },
    emitUpdate() {
      this.$emit('update', 'ApplicationDetails')
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
        let options = {
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
    async updateApplications(status) {
      try {
        const data = {
          status: status,
        }
        const response = await axios.put(
          `/applications/${this.application._id}`,
          data
        )
        console.log(response)

        if (response.data?.success) {
          this.isModified = true

          this.getApplication()
          this.$toast.success(response.data?.message)
        } else {
          this.$toast.error(response.data?.message)
        }
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.error(e)
      }
    },
    async getApplication() {
      try {
        const response = await axios.get(
          `/applications/${this.application._id}`
        )
        console.log(response)

        this.application = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.error(e)
      }
    },
  },
}
</script>
