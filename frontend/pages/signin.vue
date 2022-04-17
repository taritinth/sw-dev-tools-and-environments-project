<template>
  <div
    class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-jobjab"
  >
    <div
      class="flex flex-col bg-white shadow-1 px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-full sm:w-6/12 sm:max-w-md"
    >
      <div class="flex flex-col items-center justify-center">
        <span class="text-2xl font-semibold text-gray-500">JobJab</span>
      </div>
      <form method="post" class="mt-8" @submit.prevent="login">
        <!-- <input type="hidden" name="remember" value="true" /> -->
        <div class="mb-6">
          <input
            id="email"
            v-model="$v.email.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.email.$error,
              'focus:ring-blue-300': !$v.email.$error,
            }"
            type="text"
            data-test="email"
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
            id="password"
            v-model="$v.password.$model"
            class="w-full border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block p-3"
            :class="{
              'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                $v.password.$error,
              'focus:ring-blue-300': !$v.password.$error,
            }"
            type="password"
            data-test="password"
            placeholder="Password"
          />
          <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="mt-2 text-sm text-red-400">
              This field is required
            </p>
          </template>
        </div>
        <div class="mt-12">
          <button
          id="submit"
            data-test="submit"
            type="submit"
            class="w-full text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
          >
            Sign in
          </button>
        </div>
        <div class="flex items-center justify-center mt-10">
          <div class="text-sm">
            <span class="font-light text-gray-500"
              >Don't have an account ?</span
            >
            <router-link to="/signup">
              <span class="font-medium text-blue-300 hover:text-blue-400"
                >Sign up</span
              >
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required,  } from 'vuelidate/lib/validators'
// import { axios } from '@/plugins/axios'

export default {
  name: 'SignInPage',
  middleware: ['isNotLoggedIn'],
  //   layout: 'dashboard',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: { required },
    password: { required },
  },
  async mounted() {},

  methods: {
    async login(e) {
      e.preventDefault()

      this.$v.$touch()
      if (!this.$v.$invalid) {
        const payload = {
          email: this.email,
          password: this.password,
        }

        try {
          await this.$auth.loginWith('local', {
            data: payload,
          })
          console.log(this.$nuxt.$auth.user)
          this.$toast.success(`Logged in as ${this.$nuxt.$auth.user.email}!`)
          this.$router.push('/')
        } catch (e) {
          this.$toast.error('Sorry, Something went wrong. Please try again')
          console.log(e)
          this.$router.push('/signin')
        }
      }

      //   if (this.email == '' || this.password == '') {
      //     this.$toast.error('Sorry, Please fill in all the required fields.')
      //     return
      //   }
    },
  },
}
</script>
