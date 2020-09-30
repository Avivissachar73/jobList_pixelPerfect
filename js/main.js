import appHeader from './cmps/app-header.cmp.js';
import jobList from './cmps/job-list.cmp.js';
import tagEditor from './cmps/tag-editor.cmp.js';

import { jobService } from './services/job.service.js';

function render() {
    const jobs = jobService.query();
    console.log(jobs);
    const RootCmp = (() => {
        return `
            <div>
                ${appHeader()}
                <main class="app-main container">
                    ${tagEditor()}
                    ${jobList(jobs)}
                </main>
            </div>
        `;
    })();

    const selector = '#app';
    document.querySelector(selector).innerHTML = RootCmp;
}

window.onRemoveTag = function onRemoveTag(jobId, tag) {
    console.log('wowowowing');
    jobService.removeTag(jobId, tag);
    render();
}

const appTitle = 'Job List';
document.title = appTitle;

window.onload = render;