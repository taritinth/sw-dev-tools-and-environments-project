<template>
  <div
    class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="flex flex-col bg-white shadow-1 px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-full sm:w-6/12 sm:max-w-md"
    >
      <div class="flex flex-col items-center justify-center">
        <span class="text-2xl font-semibold text-gray-500">JobJab</span>
      </div>
      <form method="post" @submit.prevent="signUp" class="mt-8">
        <div v-if="config.companySignup" class="flex mb-6">
          <div class="flex items-center mr-3">
            <input
              v-model="$v.type.$model"
              id="user-option-1"
              type="radio"
              name="type"
              value="user"
              class="w-4 h-4 border-gray-300 focus:ring-blue-300"
              aria-labelledby="user-option-1"
              aria-describedby="user-option-1"
              checked
            />
            <label
              for="user-option-1"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              User
            </label>
          </div>

          <div class="flex items-center">
            <input
              v-model="$v.type.$model"
              id="user-option-2"
              type="radio"
              name="type"
              value="company"
              class="w-4 h-4 border-gray-300 focus:ring-blue-300"
              aria-labelledby="user-option-2"
              aria-describedby="user-option-2"
            />
            <label
              for="user-option-2"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company
            </label>
          </div>
        </div>

        <div class="mb-6">
          <input
            v-model="$v.fullname.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.fullname.$error,
              'focus:ring-blue-300': !$v.fullname.$error,
            }"
            type="text"
            placeholder="Fullname"
          />
          <template v-if="$v.fullname.$error">
            <p v-if="!$v.fullname.required" class="mt-2 text-sm text-red-400">
              This field is required
            </p>
          </template>
        </div>
        <div class="mb-6">
          <input
            v-model="$v.email.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.email.$error,
              'focus:ring-blue-300': !$v.email.$error,
            }"
            type="text"
            placeholder="E-Mail"
          />
          <template v-if="$v.email.$error">
            <p v-if="!$v.email.required" class="mt-2 text-sm text-red-400">
              This field is required
            </p>
          </template>
        </div>
        <div class="mb-6">
          <input
            v-model="$v.password.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.password.$error,
              'focus:ring-blue-300': !$v.password.$error,
            }"
            type="password"
            placeholder="Password"
          />
          <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="mt-2 text-sm text-red-400">
              This field is required
            </p>
          </template>
        </div>
        <div class="mb-6">
          <input
            v-model="$v.confirmPassword.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.confirmPassword.$error,
              'focus:ring-blue-300': !$v.confirmPassword.$error,
            }"
            type="password"
            placeholder="Confirm Password"
          />
          <template v-if="$v.confirmPassword.$error">
            <p
              v-if="!$v.confirmPassword.required"
              class="mt-2 text-sm text-red-400"
            >
              This field is required
            </p>
            <p
              v-else-if="!$v.confirmPassword.sameAs"
              class="mt-2 text-sm text-red-400"
            >
              Password is not match
            </p>
          </template>
        </div>

        <div class="mt-12">
          <button
            type="submit"
            class="w-full text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { axios } from '@/plugins/axios'
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
  middleware: ['isNotLoggedIn'],
  //   layout: 'general',
  data() {
    return {
      type: 'user',
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  validations: {
    type: { required },
    fullname: { required },
    email: { required },
    password: { required },
    confirmPassword: { required, sameAs: sameAs('password') },
  },
  async mounted() {
    await this.loadConfig()
    // await this.getMovies()
  },
  computed: {
    ...mapGetters({
      config: 'config/get',
    }),
  },
  methods: {
    ...mapMutations({
      setConfig: 'config/set',
      resetConfig: 'config/reset',
    }),
    async signUp(e) {
      e.preventDefault()

      //   if (
      //     this.email == '' ||
      //     this.password == '' ||
      //     this.confirmPassword == ''
      //   ) {
      //     this.$toast.error('Sorry, Please fill in all the required fields.')
      //     return
      //   }

      //   if (this.password != this.confirmPassword) {
      //     this.$toast.error('Sorry, Please fill in all the required fields.')
      //     return
      //   }

      this.$v.$touch()
      if (!this.$v.$invalid) {
        const payload = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          type: this.type,
        }
        try {
          const response = await axios.post(`/api/auth/signup`, payload)
          console.log(response)
          this.$toast.success(`Successfully, Let's sign in to find careers !`)
          this.$router.push('/signin')
        } catch (e) {
          this.$toast.error('Sorry, Something went wrong. Please try again')
          console.log(e)
        } finally {
        }
      }
    },
    async loadConfig() {
      try {
        const response = await axios.get(`/api/configs`)
        console.log(response)

        this.setConfig(response.data)

        console.log(this.config)
      } catch (e) {
        this.$toast.error('Sorry, Something went wrong. Please try again')
        console.log(e)
      } finally {
      }
    },
  },
}
</script>
