const cheerio = require("cheerio");
const {arrayFromLength} = require('./helpers/common');
const getPageContent = require('./helpers/puppeteer');
const {slugify} = require('transliteration');
const listItemHandler = require('./handlers/listImemHandler');
const path = require('path');

const SITE = "https://www.culture.ru/afisha/nizhnii-novgorod?page_num=1";
const pages = 1;

(async function () {
    try {
        for (const page of arrayFromLength(pages)) {
            const url = `${SITE}${page}`;
            const pageContent = await getPageContent(url);
            const $ = cheerio.load(pageContent);
            const events_data = [];
            $('.G8w3d').each((i, header) => {
                const page_path = $(header).attr('href');
                const page_url = path.join("https://www.culture.ru", page_path);
                const title = $(header).find(".fRPti").text().trim();
                events_data.push({
                    title,
                    page_url,
                    code: slugify(title)
                });
            })
            await listItemHandler(events_data);
        }        
    } catch (e) {
        console.log(e);
    }
})()