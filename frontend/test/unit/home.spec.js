import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '../../pages/index.vue'

const localVue = createLocalVue()

const $router = {
  push: jest.fn(),
}

const $auth = {
  loggedIn: true,
  user: {
    type: 'user',
  },
}

describe('browser', () => {
  test.only('triggers a click', async () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $router,
        $auth,
      },
    })
    const buttonIntern = wrapper.find('[data-test="internship"]')

    buttonIntern.trigger('click')

    expect($router.push).toHaveBeenCalledWith({
      path: '/search',
      query: { query: '', type: 'internship' },
    })

    // expect(window.location.href).toBe('http://localhost/#/search')
  })
})
