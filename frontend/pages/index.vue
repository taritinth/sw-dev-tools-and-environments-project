<template>
  <div class="container md:max-w-screen-md lg:max-w-screen-lg mx-auto">
    <div class="pt-8">
      <h1 class="mb-5 text-2xl text-gray-800 dark:text-gray-500" id="title">
        Home
      </h1>
      <div
        v-if="!$auth.loggedIn || ($auth.loggedIn && $auth.user.type == 'user')"
        class="flex flex-col gap-6"
      >
        <div
          class="flex flex-col items-center rounded-3xl bg-white px-12 py-16 shadow-1"
        >
          <h1 class="text-3xl font-medium self-start" id="internship">
            Search for Internships
          </h1>
          <div class="flex flex-col md:flex-row mt-8">
            <div class="md:pr-8 mb-4">
              <p class="text-base text-gray-500">
                An internship is a short-term work experience offered by
                companies and other organizations for people usually students,
                but not alwaysto get some entry-level exposure to a particular
                industry or field.
              </p>
            </div>
            <button
              @click="
                $router.push({
                  path: '/search',
                  query: { query: '', type: 'internship' },
                })
              "
              type="button"
              class="text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
              style="height: fit-content"
              data-test="buttonIntern"
            >
              Explore
            </button>
          </div>
        </div>

        <div
          class="flex flex-col items-center rounded-3xl bg-white px-12 py-16 shadow-1"
        >
          <h1
            class="text-3xl font-medium self-start"
            data-testid="h1"
            id="fullTime"
          >
            Search for Full-time jobs
          </h1>
          <div class="flex flex-col md:flex-row mt-8">
            <div class="md:pr-8 mb-4">
              <p class="text-base text-gray-500">
                A full-time job is one that expects a person to work a certain
                number of hours per week. The number of hours required to work
                is determined by a company, institution, or government,
                typically 40–42 hours per week as full-time work.
              </p>
            </div>

            <button
              @click="
                $router.push({
                  path: '/search',
                  query: { query: '', type: 'fulltime' },
                })
              "
              type="button"
              class="text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
              style="height: fit-content"
              data-test="buttonFull"
            >
              Explore
            </button>
          </div>
        </div>

        <div
          class="flex flex-col items-center rounded-3xl bg-white px-12 py-16 shadow-1"
        >
          <h1 class="text-3xl font-medium self-start" id="partTime">
            Search for Part-time jobs
          </h1>
          <div class="flex flex-col md:flex-row mt-8">
            <div class="md:pr-8 mb-4">
              <p class="text-base text-gray-500">
                A part-time job is one that usually requires a person to work
                fewer hours per workweek than their employer deems full-time
                employment. There isn't a set number of hours per week that's
                legally considered full-time or part-time employment.
              </p>
            </div>
            <button
              @click="
                $router.push({
                  path: '/search',
                  query: { query: '', type: 'parttime' },
                })
              "
              type="button"
              class="text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mr-2 mb-2"
              style="height: fit-content"
              data-test="buttonPart"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div v-if="$auth.loggedIn && $auth.user.type == 'company'" class="">
        <announcements-list />
      </div>
    </div>
  </div>
</template>


<script>
import AnnouncementsList from '../components/AnnouncementsList.vue'
export default {
  name: 'Home',
  components: { AnnouncementsList },
  layout: 'dashboard',
  data() {
    return {
      test: 'Hello World!',
      email: 'angel',
    }
  },
  methods: {},
}
</script>
