<template>
  <div>
    <!-- Modal -->

    <div class="relative px-4 w-full md:h-auto">
      <!-- Modal content -->
      <div
        class="relative rounded-xl shadow bg-gray-50 pb-6 md:h-auto overflow-y-auto"
      >
        <!-- Modal header (close icon)-->
        <div class="flex justify-end p-2">
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
        <!-- Modal body -->
        <div class="flex flex-col pb-5 pt-0 text-left px-2 sm:px-8">
          <!-- first box -->
          <div class="bg-white p-3 rounded-xl">
            <div class="w-full">
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  :class="{
                    'text-red-500': $v.title.$error,
                  }"
                  >Job title</label
                >
                <input
                  v-model="$v.title.$model"
                  type="text"
                  id="base-input"
                  placeholder="Job title"
                  class="border border-gray-300 text-sm text-gray-900 rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
                  :class="{
                    'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                      $v.title.$error,
                    'focus:ring-blue-300': !$v.title.$error,
                  }"
                />
                <template v-if="$v.title.$error">
                  <p
                    v-if="!$v.title.required"
                    class="mt-2 text-sm text-red-400"
                  >
                    This field is required
                  </p>
                </template>
              </div>
            </div>
            <div class="w-full">
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  :class="{
                    'text-red-500': $v.overview.$error,
                  }"
                  >Overview</label
                >
                <input
                  v-model="$v.overview.$model"
                  type="text"
                  id="base-input"
                  placeholder="Overview"
                  class="border border-gray-300 text-sm text-gray-900 rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
                  :class="{
                    'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                      $v.overview.$error,
                    'focus:ring-blue-300': !$v.overview.$error,
                  }"
                />
                <template v-if="$v.overview.$error">
                  <p
                    v-if="!$v.overview.required"
                    class="mt-2 text-sm text-red-400"
                  >
                    This field is required
                  </p>
                </template>
              </div>
            </div>
            <!-- <job-title :title="job.title" :company="job.company" /> -->
          </div>

          <div class="bg-white p-3 rounded-xl mt-5">
            <div class="grid xl:grid-cols-3 xl:gap-6">
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  :class="{
                    'text-red-500': $v.dueDate.$error,
                  }"
                  >Due date</label
                >
                <input
                  disabled
                  v-model="$v.dueDate.$model"
                  type="text"
                  id="base-input"
                  placeholder="Due date"
                  class="border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
                  :class="{
                    'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                      $v.dueDate.$error,
                    'focus:ring-blue-300': !$v.dueDate.$error,
                  }"
                />
                <template v-if="$v.dueDate.$error">
                  <p
                    v-if="!$v.dueDate.required"
                    class="mt-2 text-sm text-red-400"
                  >
                    This field is required
                  </p>
                </template>
              </div>
              <div class="mb-6">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900"
                  :class="{
                    'text-red-500': $v.salary.$error,
                  }"
                  >Salary</label
                >
                <select
                  v-model="$v.salary.$model"
                  class="border border-gray-300 text-sm text-gray-900 rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
                  :class="{
                    'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                      $v.salary.$error,
                    'focus:ring-blue-300': !$v.salary.$error,
                  }"
                >
                  <option :value="true">Paid</option>
                  <option :value="false">Not paid</option>
                </select>
                <template v-if="$v.salary.$error">
                  <p
                    v-if="!$v.salary.required"
                    class="mt-2 text-sm text-red-400"
                  >
                    This field is required
                  </p>
                </template>
              </div>
              <div class="mb-6">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900"
                  :class="{
                    'text-red-500': $v.type.$error,
                  }"
                  >Job type</label
                >
                <select
                  v-model="$v.type.$model"
                  class="border border-gray-300 text-sm text-gray-900 rounded-2xl focus:ring-2 focus:outline-none block w-full p-3"
                  :class="{
                    'border-red-400 text-red-500 placeholder-red-400 focus:ring-red-300':
                      $v.type.$error,
                    'focus:ring-blue-300': !$v.type.$error,
                  }"
                >
                  <option value="parttime">Part-time</option>
                  <option value="fulltime">Full-time</option>
                  <option value="internship">Internship</option>
                </select>
                <template v-if="$v.type.$error">
                  <p v-if="!$v.type.required" class="mt-2 text-sm text-red-400">
                    This field is required
                  </p>
                </template>
              </div>
            </div>
          </div>

          <!-- description box -->
          <div
            class="flex flex-col items-start bg-white py-5 px-2 rounded-xl mt-5 pb-7"
          >
            <div class="pl-5 my-2">
              <p class="text-base text-gray-400">Description</p>
            </div>

            <!-- <quill-editor
              ref="editor"
              v-model="content"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            /> -->

            <!-- 
            <client-only>
              <vue-editor v-model="content"></vue-editor>
            </client-only> -->

            <!-- <client-only><div id="q-editor"></div></client-only> -->

            <div class="flex flex-col items-start w-full pl-5 overflow-auto">
              <client-only>
                <quill-editor
                  ref="editor"
                  v-model="description"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                />
              </client-only>
            </div>
          </div>

          <button
            @click="createJob"
            type="button"
            class="w-full md:w-56 self-end text-white bg-blue-300 hover:bg-blue-400 font-medium rounded-2xl text-sm px-5 py-3 text-center mt-5"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/plugins/axios'
import JobTitle from './JobTitle.vue'
import { required, minValue, maxLength } from 'vuelidate/lib/validators'

// import { VueEditor } from 'vue2-editor'

// import Quill from 'quill'

export default {
  components: {
    JobTitle,
  },
  props: {
    // job: {
    //   type: Object,
    //   required: true,
    // },
  },
  data() {
    return {
      // editor: null,
      isModified: false,
      title: '',
      overview: '',
      dueDate: null,
      salary: true,
      type: 'internship',
      description: '',
      content: '<p>I am Example</p>',
      editorOption: {
        // Some Quill options...
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: 1 }, { header: 2 }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ],
        },
      },
    }
  },
  validations: {
    title: { required },
    overview: { required },
    dueDate: {},
    salary: { required },
    type: { required },
  },
  beforeDestroy() {
    if (this.isModified) this.emitUpdate()
  },
  mounted() {
    // var editor = new Quill('#q-editor', {
    //   modules: {
    //     toolbar: toolbarOptions,
    //   },
    //   theme: 'snow',
    //   placeholder: 'Write something...',
    // })
    // this.editor = editor
    console.log(this.job)
  },
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    closeModal() {
      this.$emit('close', 'CreateJob')
    },
    emitUpdate() {
      this.$emit('update', 'CreateJob')
    },
    getDateText(date) {
      if (date) {
        date = new Date(date)
        let options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
        return date.toLocaleString('en-US', options)
      } else {
        return '-'
      }
    },
    async createJob() {
      try {
        const data = {
          title: this.title,
          overview: this.overview,
          dueDate: this.dueDate,
          salary: this.salary,
          type: this.type,
          description: this.description,
        }
        const response = await axios.post('/jobs', data)
        console.log(response)

        if (response.data?.success) {
          this.isModified = true

          this.$toast.success(response.data?.message)
          setTimeout(() => {
            this.closeModal()
          }, 250)
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

<style>
.quill-editor {
  width: 100%;
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
}
.quill-editor {
  border: 1px solid #ccc !important;
}
.ql-toolbar.ql-snow {
  border: 0 !important;
  border-bottom: 1px solid #ccc !important;
}
.ql-container.ql-snow {
  border: 0 !important;
}
</style>
<style scoped>
/* option {
  color: rgba(156, 163, 175, 1);
}
option:not(:first-of-type) {
  color: rgb(45, 48, 53);
} */
</style>
