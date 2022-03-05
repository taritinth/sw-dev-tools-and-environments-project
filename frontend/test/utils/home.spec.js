import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/pages/index.vue'
import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const $router = {
  push: jest.fn(),
}
describe('IndexPage', () => {
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
  test('Should render Home title', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Home')
  })

  // Test Case No.2
  test('Should be render Search for Internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  // Test Case No.3
  test('Should be render Search for Full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  // Test Case No.4
  test('Should be render Search for Part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  // Test Case No.5
  test('Should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })
  // Test Case No.6
  test('If no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

  // Test Case No.7
  test('Click to explore an internship page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock,
      },
    })
    const buttonIntern = wrapper.get('[data-test="button-of-intern"]')
    buttonIntern.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'internship' },
    })
  })

  // Test Case No.8
  test('Click to explore an Full-Time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock,
      },
    })
    const buttonFull = wrapper.get('[data-test="button-of-fulltime"]')
    buttonFull.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'fulltime' },
    })
  })

  // Test Case No.9
  test('Click to explore an Part-Time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock,
      },
    })
    const buttonPart = wrapper.get('[data-test="button-of-parttime"]')

    buttonPart.trigger('click')

    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'parttime' },
    })
  })

  test('Should render Home title', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Home')
  })

  // Test Case No.2
  test('Should be render Search for Internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  // Test Case No.3
  test('Should be render Search for Full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  // Test Case No.4
  test('Should be render Search for Part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  // Test Case No.5
  test('Should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })
  // Test Case No.6
  test('If no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

  // Test Case No.7
  test('Click to explore an internship page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock2,
      },
    })
    const buttonIntern = wrapper.get('[data-test="button-of-intern"]')
    buttonIntern.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'internship' },
    })
  })

  // Test Case No.8
  test('Click to explore an Full-Time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock2,
      },
    })
    const buttonFull = wrapper.get('[data-test="button-of-fulltime"]')
    buttonFull.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'fulltime' },
    })
  })

  // Test Case No.9
  test('Click to explore an Part-Time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: authMock2,
      },
    })
    const buttonPart = wrapper.get('[data-test="button-of-parttime"]')

    buttonPart.trigger('click')

    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'parttime' },
    })
  })
})
