import {shallowMount } from '@vue/test-utils'
import ProfilePage from '@/pages/profile/index.vue'
import { axios } from '@/plugins/axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'
const data = {
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
}
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
  
  test('Email input should be disabled', () => {
    const wrapper = shallowMount(ProfilePage, {
      mocks: {
        $nuxt:{
          $auth
        },
        $auth,
        $router,
        $route,
        $toast,
      },
    })
    const emailInput = wrapper.find('[data-test="email-input"]')
    expect(emailInput.attributes.disabled).toBeUndefined()
  })

  test('Should render Profile title', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
    expect(emailInput.element.value).toEqual('tarit@gmail.com')
  })
  test('Should render Fullname label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
      const fullnameLabel = wrapper.get('[data-test="fullname-label"]').text()
      expect(fullnameLabel).toEqual('Fullname*')
  })

  test('Should render Email label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
      const emailLabel = wrapper.get('[data-test="email-label"]').text()
      console.log(emailLabel)
      expect(emailLabel).toEqual('Email*')
  })
  
  test('Should render Phone label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
    const phoneLabel = wrapper.find('[data-test="phone-label"]').text()
    expect(phoneLabel).toEqual('Phone*')
  })

  test('Should render Education label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
    const educationLabel = wrapper.find('[data-test="education-label"]').text()
    expect(educationLabel).toEqual('Education')
  })
  
  test('Should render Resume label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
    const resumeLabel = wrapper.find('[data-test="resume-label"]').text()
    expect(resumeLabel).toEqual('Resume*')
  })

  test('Should render Resume label', async () => {
    mockAxios.onGet('/api/users/620948092ad991e73d2f6011').reply(200, data)

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
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(1)
  })
})
