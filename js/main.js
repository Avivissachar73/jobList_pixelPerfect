import appHeader from './cmps/app-header.cmp.js';
import jobList from './cmps/job-list.cmp.js';
import { jobService } from './services/job.service.js';

const appTitle = 'Job List';
document.title = appTitle;

function render() {
    const jobs = jobService.query();

    const RootCmp = (() => {
        return `
            <div>
                ${appHeader()}
                <main class="app-main container">
                    ${jobList(jobs)}
                </main>
            </div>
        `
    })();

    const selector = '#app';
    document.querySelector(selector).innerHTML = RootCmp;
}

window.onload = render;