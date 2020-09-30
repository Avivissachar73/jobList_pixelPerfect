import appHeader from './cmps/app-header.cmp.js';
import jobList from './cmps/job-list.cmp.js';

const jobs = [];

const RootCmp = (() => {
    return `
        <div>
            ${appHeader()}
            <main>
                ${jobList(jobs)}
            </main>
        </div>
    `
})();


const selector = '#app';
document.querySelector(selector).innerHTML = RootCmp;