import { mount, shallowMount } from '@vue/test-utils'
import ProfilePage from '@/pages/profile/index.vue'
import { axios } from '@/plugins/axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'

const $router = {
  push: jest.fn(),
}
const $route = {
  query: {
    query: '',
    type: '',
  },
}

const $toast = {
  error: jest.fn(),
}

const $auth = {
  loggedIn: true,
  user: {
    id: '620948092ad991e73d2f6011',
    type: 'user',
  },
}

const $v = {
  user: {
    fullname: {
      required: true,
      $model: 'Tarit Khanbo',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: { required: { type: 'required' } },
    },
    email: {
      $model: 'tarit@gmail.com',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: {},
    },
    phone: {
      required: true,
      maxLength: true,
      $model: '0987037324',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: {
        required: { type: 'required' },
        maxLength: { type: 'maxLength', max: 12 },
      },
    },
    education: {
      $model: '',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: {},
    },
    position: {
      $model: '',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: {},
    },
    jobType: {
      $model: '',
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $error: false,
      $anyError: false,
      $pending: false,
      $params: {},
    },
    $model: {
      _id: '620948092ad991e73d2f6011',
      fullname: 'Tarit Khanbo',
      email: 'tarit@gmail.com',
      phone: '0987037324',
      type: 'user',
      website: '',
      position: '',
      education: '',
      jobType: '',
      createdAt: '2022-02-13T18:03:53.124Z',
      updatedAt: '2022-03-04T13:05:46.651Z',
      __v: 0,
      resumeFile:
        'https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/resume/620948092ad991e73d2f6011_1644775477205.pdf',
      profileImg:
        'https://jobjab-bucket-1.s3.amazonaws.com/profile/620948092ad991e73d2f6011_1646309013685.webp',
    },
    $invalid: false,
    $dirty: false,
    $anyDirty: false,
    $error: false,
    $anyError: false,
    $pending: false,
    $params: {
      fullname: null,
      email: null,
      phone: null,
      education: null,
      position: null,
      jobType: null,
    },
  },
  resume: {
    $model: null,
    $invalid: false,
    $dirty: false,
    $anyDirty: false,
    $error: false,
    $anyError: false,
    $pending: false,
    $params: {},
  },
  $model: null,
  $invalid: false,
  $dirty: false,
  $anyDirty: false,
  $error: false,
  $anyError: false,
  $pending: false,
  $params: { user: null, resume: null },
}

describe('ProfilePage', () => {
  let mockAxios

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  // Test Case No.1
  test('Should render Profile title', () => {
    const wrapper = shallowMount(ProfilePage, {
      mocks: {
        $v,
        $nuxt: {
          $auth,
        },
        $auth,
        $router,
        $route,
        $toast,
      },
    })
    const title = wrapper.find('[data-test="title"]')
    expect(title.text()).toEqual('Profile')
  })

  test('Should render Profile title', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, {
      _id: '620948092ad991e73d2f6011',
      fullname: 'Tarit Khanbo',
      email: 'tarit@gmail.com',
      phone: '0987037324',
      type: 'user',
      website: '',
      position: '',
      education: '',
      jobType: '',
      createdAt: '2022-02-13T18:03:53.124Z',
      updatedAt: '2022-03-04T13:05:46.651Z',
      __v: 0,
      resumeFile:
        'https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/resume/620948092ad991e73d2f6011_1644775477205.pdf',
      profileImg:
        'https://jobjab-bucket-1.s3.amazonaws.com/profile/620948092ad991e73d2f6011_1646309013685.webp',
    })

    const wrapper = shallowMount(ProfilePage, {
      mocks: {
        $v,
        $nuxt: {
          $auth,
        },
        $auth,
        $router,
        $route,
        $toast,
      },
    })

    await flushPromises()

    const emailInput = wrapper.find('[data-test="email-input"]')
    expect(emailInput.text()).toEqual('')
  })
})
