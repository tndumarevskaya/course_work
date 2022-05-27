const puppeteer = require('puppeteer');
const consts = require('../utils/consts');

module.exports = async function (url) {
    try {
        const browser = await puppeteer.launch(consts.LAUNCH_PUPPETEER_OPTS);
        const page = await browser.newPage(consts.PAGE_PUPPETEER_OPTS);
        await page.goto(url, consts.PAGE_PUPPETEER_OPTS);
        const content =  await page.content();
        browser.close();

        return content; 
    } catch (e) {
        throw e;
    }
}