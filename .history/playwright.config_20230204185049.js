const {devices} = require('@playwright/test');
/**@type {import ('@playwright/test' ) .PlaywrightTestConfig} */
const config= {
    // option shared for all projects.
    timeout : 30000,
    use:{
        ignoreHTTPSErrors: true,
    },
    projects:[
        {
        name: 'Desktop Chromium',
        use: {
            browserName:'chromium',
            viewport: {width:1280, height:720},
        },
        },
        {
            name: 'Desktop Safari',
            use :{
                
            }

        }
    ]
}