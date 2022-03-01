import { createPage, setupTest } from '@nuxt/test-utils'
import { test, expect } from '@playwright/test'

describe('browser', () => {
  setupTest({ browser: true })

  it('renders the index page', async () => {
    const page = await createPage('/')
    console.log(await page.url())

    await page.locator('[data-test="explore-internship"]').click()

    await page.waitForNavigation(/search\?query=&type=internship/)
    await expect(page).toHaveURL(/search\?query=&type=internship/)
    console.log(await page.url())
  }, 120000)
})
