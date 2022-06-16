const getPageContent = require('../helpers/puppeteer');
const cheerio = require("cheerio");
const saveData = require('./saver');

module.exports = async function(data) {
    try {
        const event = [];
        const url = 'http://localhost:5000/api/event'
        for (const initialData of data) {
            const pageOfData = await getPageContent(initialData.page_url);
            const $ = cheerio.load(pageOfData);

            const img = $('.KRQ9s').attr('src');
            const type = $('._8PLWA').eq(0).text();
            const data = $('._19IwE:first-child').eq(-1).text();
            const price = $('._19IwE:last-child').eq(-1).text();
            const title = initialData.title;
            event.pop();
            event.push({title, type, data, price, img});
            console.log(event);
            await saveData(event);
        }
    } catch (e) {
        throw e;
    }
}