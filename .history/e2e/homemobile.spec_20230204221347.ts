import {test, devices, expect} from '@playwright/test'

test.use({
    browserName: 'cromium',
    ...devices['iPhone XR']
})
test.describe("")