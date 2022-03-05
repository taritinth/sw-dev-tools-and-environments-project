import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import ProfilePage from '@/pages/profile/index.vue'
import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
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
// const factory = (vuetify) =>
//   mount(ProfilePage, {
//     vuetify,
//   })
describe('ProfilePage', () => {
  let store
  let authMock
  let authMock2

  beforeEach(() => {
    // store = new Vuex.Store(cloneDeep({ state: { auth: { loggedIn: false } } }))
    // store = new Vuex.Store(cloneDeep({ state: { v: { email: 'test@test' } } }))
    authMock = {
      user: {
        type: 'user',
      },
      loggedIn: false,
      strategy: 'local',
    }
    authMock2 = {
      user: {
        type: 'user',
      },
      loggedIn: true,
      strategy: 'local',
    }
  })

  // Test Case No.1
  test('Should render Profile title', () => {
    const wrapper = mount(ProfilePage, {
      mocks: {
        $auth: authMock,
        $router,
        $route,
        $toast,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Profile')
  })

  test('Email input should be disabled', () => {
    const wrapper = mount(ProfilePage, {
      mocks: {
        $auth: authMock,
        $router,
        $route,
        $toast,
      },
    })
    const emailInput = wrapper.find('[data-test="email-input"]')
    expect(emailInput.attributes.disabled).toBeUndefined()
  })

  //   test('Should render Fullname label', () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     const fullnameLabel = wrapper.find('label')
  //     expect(fullnameLabel).toEqual('Fullname')
  //   })

  //   test('Should render Email label', () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     const emailLabel = wrapper.find('label[data-test="email-label"]')
  //     expect(emailLabel).toEqual('Email')
  //   })

  //   test('Should render Phone label', () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     const phoneLabel = wrapper.find('label[data-test="phone-label"]').text()
  //     expect(phoneLabel).toEqual('Phone')
  //   })

  //   test('Should render Phone label', () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     const phoneLabel = wrapper.find('label[data-test="phone-label"]')
  //     expect(phoneLabel).toEqual('Phone')
  //   })

  //   test('Should render Resume label', () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     const resumeLabel = wrapper.find('label[data-test="resume-label"]')
  //     expect(resumeLabel).toEqual('Resume')
  //   })

  //   test('trigger', async () => {
  //     const wrapper = mount(ProfilePage, {
  //       mocks: {
  //         $auth: authMock,
  //         $router,
  //         $route,
  //         $toast,
  //       },
  //     })
  //     // trigger the element
  //     await wrapper.find('[data-test="save-button"]').trigger('click')

  //     // assert some action has been performed, like an emitted event.
  //     expect(wrapper.emitted()).toHaveProperty('save')
  //   })
})
