<template>
  <div class="container md:max-w-screen-md lg:max-w-screen-lg mx-auto">
    <!-- <div class="text-center text-xl mt-4 mx-auto"><b>Fill in Profile</b></div> -->
    <!-- component -->
    <!-- <div class="p-2">
    <div class="mx-4">
        <div class="flex justify-center items-end">
           <div class="flex mt-2 text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 bg-indigo-600 border-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                </div>
                
            </div>
        </div>
    </div> -->
    <div class="pt-8">
      <h1 class="mb-5 text-2xl text-gray-800 dark:text-gray-500">Profile</h1>

      <form v-if="user" method="put" @submit.prevent="submitForm">
        <div
          v-if="
            $v.user.fullname.$error ||
            $v.user.email.$error ||
            $v.user.phone.$error
          "
          class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          <svg
            class="inline flex-shrink-0 mr-3 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <span class="font-medium">Warning !</span> Please complete your
            profile before submit the job.
          </div>
        </div>

        <!-- <img :src="profile" /> -->

        <div class="flex justify-center">
          <div class="relative rounded-full h-48 w-48 bg-blue-50">
            <div v-if="$auth.user.type == 'user'">
              <img
                v-if="profileImg"
                :src="profileImgPath"
                class="rounded-full h-48 w-48 object-cover"
              />
              <img
                v-else-if="user.profileImg"
                :src="
                  user.profileImg + '?v=' + new Date(user.updatedAt).valueOf()
                "
                class="rounded-full h-48 w-48 object-cover"
              />
            </div>
            <div v-else>
              <img
                v-if="profileImg"
                :src="profileImgPath"
                class="rounded-full h-48 w-48 object-contain"
              />
              <img
                v-else-if="user.profileImg"
                :src="
                  user.profileImg + '?v=' + new Date(user.updatedAt).valueOf()
                "
                class="rounded-full h-48 w-48 object-contain"
              />
            </div>
            <input
              type="file"
              multiple
              name="fields[profileFieldHandle][]"
              id="profileFieldHandle"
              class="w-px h-px opacity-0 overflow-hidden absolute"
              @change="uploadProfile"
              ref="profile"
              accept=".jpg,.jpeg,.png"
            />
            <label
              for="profileFieldHandle"
              class="flex items-center justify-center absolute right-2 bottom-2 rounded-full border-2 border-white h-8 w-8 bg-blue-300 cursor-pointer"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-current h-5 w-5 text-white"
              >
                <path
                  d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"
                ></path>
              </svg>
            </label>
          </div>
        </div>

        <div class="w-full">
          <div class="mb-6">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              :class="{
                'text-red-500': $v.user.fullname.$error,
              }"
              >Fullname</label
            >
            <input
              v-model="$v.user.fullname.$model"
              type="text"
              id="base-input"
              placeholder="Fullname"
              class="w-full border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
              :class="{
                'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                  $v.user.fullname.$error,
                'focus:ring-blue-300': !$v.user.fullname.$error,
              }"
            />
            <template v-if="$v.user.fullname.$error">
              <p
                v-if="!$v.user.fullname.required"
                class="mt-2 text-sm text-red-400"
              >
                This field is required
              </p>
            </template>
          </div>
        </div>

        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="mb-6">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              :class="{
                'text-red-500': $v.user.email.$error,
              }"
              >Email</label
            >
            <input
              disabled
              v-model="$v.user.email.$model"
              type="text"
              id="base-input"
              placeholder="Email"
              class="border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
              :class="{
                'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                  $v.user.email.$error,
                'focus:ring-blue-300': !$v.user.email.$error,
              }"
            />
            <template v-if="$v.user.email.$error">
              <p
                v-if="!$v.user.email.required"
                class="mt-2 text-sm text-red-400"
              >
                This field is required
              </p>
            </template>
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              :class="{
                'text-red-500': $v.user.phone.$error,
              }"
              >Phone</label
            >
            <input
              v-model="$v.user.phone.$model"
              type="text"
              id="base-input"
              placeholder="xxx-xxx-xxxx"
              class="border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
              :class="{
                'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                  $v.user.phone.$error,
                'focus:ring-blue-300': !$v.user.phone.$error,
              }"
            />
            <template v-if="$v.user.phone.$error">
              <p
                v-if="!$v.user.phone.required"
                class="mt-2 text-sm text-red-400"
              >
                This field is required
              </p>
              <p
                v-if="!$v.user.phone.maxLength"
                class="mt-2 text-sm text-red-400"
              >
                The phone length must not exceed 12 characters.
              </p>
            </template>
          </div>
        </div>

        <div v-if="$auth.loggedIn && $auth.user.type == 'user'" class="w-full">
          <div class="mb-6">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Education</label
            >
            <input
              v-model="$v.user.education.$model"
              type="text"
              id="base-input"
              placeholder="University, School"
              class="border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-3"
            />
          </div>
        </div>

        <!-- <div
          v-if="$auth.loggedIn && $auth.user.type == 'user'"
          class="grid xl:grid-cols-2 xl:gap-6"
        >
          <div class="mb-6">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Position</label
            >
            <select
              v-model="$v.user.position.$model"
              class="border border-gray-300 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-3"
              :class="{ 'text-gray-400': !user.position }"
            >
              <option value="">Please select position</option>
              <option>Full Stack Developer</option>
              <option>Mobile Developer</option>
              <option>Front End Developer</option>
              <option>Back End Developer</option>
              <option>Web Developement</option>
              <option>UX/UI</option>
              <option>Graphic Design</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Job type</label
            >
            <select
              v-model="user.jobType"
              class="border border-gray-300 text-sm rounded-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-3"
              :class="{ 'text-gray-400': !user.jobType }"
            >
              <option value="">Please select job type</option>
              <option value="parttime">Part-time</option>
              <option value="fulltime">Full-time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div> -->

        <div
          v-if="$auth.loggedIn && $auth.user.type == 'user'"
          class="w-full mb-5"
        >
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Resume</label
          >
          <a
            v-if="user.resumeFile"
            :href="user.resumeFile"
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
          <div
            class="text-center py-12 px-6 bg-white-100 rounded-2xl border-gray-300 border-dashed border-2"
          >
            <input
              type="file"
              multiple
              name="fields[assetsFieldHandle][]"
              id="assetsFieldHandle"
              class="w-px h-px opacity-0 overflow-hidden absolute"
              @change="uploadResume"
              ref="resume"
              accept=".pdf,.jpg,.jpeg,.png"
            />

            <label for="assetsFieldHandle" class="block cursor-pointer">
              <div v-if="!resumeFile">
                <h6 class="underline text-center text-xl text-gray-400">
                  Click here to upload Resume/CV
                </h6>
                <h6 class="text-gray-300">.pdf,.jpg,.jpeg,.png</h6>
              </div>
              <div v-else>
                <h6 class="underline text-center text-xl text-gray-400">
                  {{ resumeFile.name }}
                </h6>
                <h6 class="text-gray-300">
                  {{ formatBytes(resumeFile.size) }}
                </h6>
              </div>
            </label>
          </div>
        </div>
        <!-- {{ uploadPercentage }} -->
        <div class="block">
          <button
            type="submit"
            class="inline-flex justify-center w-full text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
            :class="{ 'cursor-not-allowed': loading }"
            :disabled="loading"
          >
            <svg
              v-if="loading"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { axios } from '@/plugins/axios'
import { required, minValue, maxLength } from 'vuelidate/lib/validators'

export default {
  middleware: ['auth'],
  layout: 'dashboard',
  data() {
    return {
      user: null,
      // data: {
      //   fullname: null,
      //   email: null,
      //   phone: null,
      //   education: null,
      //   position: null,
      //   jobType: null,
      // },
      profileImgPath: null,
      profileImg: null,
      // profile: null,
      resumeFile: null,
      resume: null,
      loading: true,
      uploadPercentage: 0,
    }
  },
  validations: {
    user: {
      fullname: { required },
      email: {},
      phone: { required, maxLength: maxLength(12) },
      education: {},
      position: {},
      jobType: {},
    },
    // profile: {},
    resume: {},
  },
  async mounted() {
    await this.getUser()
    // await this.getImg('/users/profile/62064f337adf7b14a9d962b4_profile.webp')
  },
  methods: {
    async getUser() {
      try {
        this.loading = true

        const response = await axios.get(`/users/${this.$nuxt.$auth.user.id}`)
        console.log(response)

        this.user = response.data
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    uploadProfile() {
      this.profileImg = this.$refs.profile.files[0]
      this.profileImgPath = URL.createObjectURL(this.profileImg)

      console.log(this.profileImg)
    },
    uploadResume() {
      this.resumeFile = this.$refs.resume.files[0]
      console.log(this.resumeFile)
    },
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) {
        return '0 Bytes'
      }
      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    },
    async submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          this.loading = true

          const formData = new FormData()

          for (const field in this.user) {
            formData.append(field, this.user[field])
          }
          formData.append('resume', this.resumeFile)
          formData.append('profile', this.profileImg)

          console.log(formData)

          const headers = { 'Content-Type': 'multipart/form-data' }
          const response = await axios.put('/users', formData, {
            headers,
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              )
            }.bind(this),
          })
          console.log(response)

          if (response.data?.success) {
            this.$toast.success('Successfully, Your profile has been updated')
            this.$router.go(0)
          }
        } catch (e) {
          this.$toast.error('Sorry, Something went wrong. Please try again')
          console.error(e)
        } finally {
          this.loading = false
        }
      }
    },
    // hexToBase64(str) {
    //   return btoa(
    //     String.fromCharCode.apply(
    //       null,
    //       str
    //         .replace(/\r|\n/g, '')
    //         .replace(/([\da-fA-F]{2}) ?/g, '0x$1 ')
    //         .replace(/ +$/, '')
    //         .split(' ')
    //     )
    //   )
    // },
    // async getImg(url) {
    //   const response = await axios.get(url)
    //   const imgPath = 'data:image/jpeg;base64,' + response.data

    //   this.profile = imgPath
    //   return imgPath
    // },
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
