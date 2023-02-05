import {test, devices, expect} from '@playwright/test'

test.use({
    browserName: 'cromium',
    ...devices['iPhone XR']
})
test.describe("The mobile viewport for iPhone XR",()=>{
    test('Testing for colours on iPhone XR', async ({ page })=>{
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#colouring');

        const checkingBackgroundColour = await mainContainer.evaluate((ele)=> {
            return window.getComputedStyle(ele).getPropertyValue("background-color")

        })
        console.log("printing bgcolor" + checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(0, 0, 255)");
    })
})