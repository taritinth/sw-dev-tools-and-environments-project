import { createPage, setupTest } from '@nuxt/test-utils'
import { expect } from '@playwright/test'

describe('browser', () => {
  setupTest({ browser: true })

  //   test.beforeEach(async ({ page }) => {
  //     // Runs before each test and signs in each page.
  //     await createPage('/signin')
  //     await page.fill('#email', 'tarit@gmail.com')
  //     await page.fill('#password', '123456')
  //     await page.click('#submit')
  //   })

  it('first', async () => {
    // page is signed in.
    const page = await createPage('/signin')

    console.log(await page.url())
    await page.fill('#email', 'tarit@gmail.com')
    await page.fill('#password', '123456')
    // await page.click('#submit')
    await page.locator('#submit').click()
    // await expect(page).toHaveURL('/')

    await page.waitForNavigation(/http:\/\/localhost:[0-9]+\//i)
    await expect(page).toHaveURL(/http:\/\/localhost:[0-9]+\//i)
    console.log(await page.url())

    console.log(await page.locator('#navFullname').innerText())
    expect(await page.locator('#navFullname').innerText()).toContain(
      'Tarit Khanbo'
    )
  }, 120000)
})
