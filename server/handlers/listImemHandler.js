const getPageContent = require('../helpers/puppeteer');
const cheerio = require("cheerio");
const {formatPrice} = require('../helpers/common');
const saveData = require('./saver');

module.exports = async function(data) {
    try {
        const events = [];
        const url = 'http://localhost:5000/api/event'
        for (const initialData of data) {
            const pageOfData = await getPageContent(initialData.page_url);
            const $ = cheerio.load(pageOfData);

            const img = $('.KRQ9s').attr('src');
            const type = $('._8PLWA').eq(0).text();
            const data = $('._19IwE:first-child').eq(-1).text();
            const price = $('._19IwE:last-child').eq(-1).text();
            const title = initialData.title;
            events.push({title, type, data,price, img});
        }

        console.log(events);

        // let obj = {}
        // events.forEach((value, key) => {
        //     obj[key] = value;
        // });

        // console.log(obj);

        // getResource(url, obj)
        //     .then(data => console.log(data))        
        //     .catch(err => console.error(err));

    } catch (e) {
        throw e;
    }
}
 
async function getResource(url, data) {
    const res = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error ("error");
    }
    return await res.json();
}