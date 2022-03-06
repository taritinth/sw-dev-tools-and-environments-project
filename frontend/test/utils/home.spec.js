import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/pages/index.vue'

const $router = {
  push: jest.fn(),
}
describe('IndexPage', () => {
  let notLoggedIn
  let loggedIn

  beforeEach(() => {
    notLoggedIn = {
      user: {
        type: 'user',
      },
      loggedIn: false,
      strategy: 'local',
    }
    loggedIn = {
      user: {
        type: 'user',
      },
      loggedIn: true,
      strategy: 'local',
    }
  })

  test('should render home title', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Home')
  })

  test('should render search for Internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  test('should render search for full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  test('should render search for part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  test('should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })

  test('if no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: notLoggedIn,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

  test('should navigate to explore internship page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: notLoggedIn,
      },
    })
    const buttonIntern = wrapper.get('[data-test="explore-internship"]')
    buttonIntern.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'internship' },
    })
  })

  test('should navigate to explore full-time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: notLoggedIn,
      },
    })
    const buttonFullTime = wrapper.get('[data-test="explore-fulltime"]')
    buttonFullTime.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'fulltime' },
    })
  })

  test('should navigate to explore part-time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: notLoggedIn,
      },
    })
    const buttonPartTime = wrapper.get('[data-test="explore-parttime"]')

    buttonPartTime.trigger('click')

    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'parttime' },
    })
  })

  test('should render home title', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    const title = wrapper.find('[data-test="title"]').text()
    expect(title).toEqual('Home')
  })

  test('should render search for internship', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    const intern = wrapper.find('[data-test="internship"]').text()
    expect(intern).toEqual('Search for Internships')
  })

  test('should render search for full-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    const fullTime = wrapper.find('[data-test="full-time"]').text()
    expect(fullTime).toEqual('Search for Full-time jobs')
  })

  test('should render search for part-time jobs', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    const partTime = wrapper.find('[data-test="part-time"]').text()
    expect(partTime).toEqual('Search for Part-time jobs')
  })

  test('should render 3 buttons', () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    const button = wrapper.findAll('button')
    expect(button).toHaveLength(3)
  })

  test('if no user authentications', async () => {
    const wrapper = mount(Home, {
      mocks: {
        $auth: loggedIn,
      },
    })
    wrapper.vm.$auth.loggedIn
    console.log(wrapper.vm.$auth.loggedIn)
  })

  test('should navigate to explore internship page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: loggedIn,
      },
    })
    const buttonIntern = wrapper.get('[data-test="explore-internship"]')
    buttonIntern.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'internship' },
    })
  })

  test('should navigate to explore full-time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: loggedIn,
      },
    })
    const buttonFullTime = wrapper.get('[data-test="explore-fulltime"]')
    buttonFullTime.trigger('click')
    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'fulltime' },
    })
  })

  test('should navigate to explore part-time page', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth: loggedIn,
      },
    })
    const buttonPartTime = wrapper.get('[data-test="explore-parttime"]')

    buttonPartTime.trigger('click')

    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'parttime' },
    })
  })
})
