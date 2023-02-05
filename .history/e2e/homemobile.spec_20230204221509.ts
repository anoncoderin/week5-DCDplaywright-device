import {test, devices, expect} from '@playwright/test'

test.use({
    browserName: 'cromium',
    ...devices['iPhone XR']
})
test.describe("The mobile viewport for iPhone XR",()=>{
    test
})