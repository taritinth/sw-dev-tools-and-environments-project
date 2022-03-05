import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/pages/index.vue'

const $router = {
  push: jest.fn(),
}
describe('IndexPage', () => {
  let authMock
  let authMock2

  beforeEach(() => {
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

  test('Should render Home title', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Home')
  })

  test('Should be render Search for Internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  test('Should be render Search for Full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  test('Should be render Search for Part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  test('Should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })

  test('If no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

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

  test('Should be render Search for Internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  test('Should be render Search for Full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  test('Should be render Search for Part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  test('Should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })

  test('If no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: authMock2,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

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
