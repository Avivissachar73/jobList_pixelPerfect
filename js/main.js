import appHeader from './cmps/app-header.cmp.js';
import jobList from './cmps/job-list.cmp.js';
import jobFilter from './cmps/job-filter.cmp.js';

import { jobService } from './services/job.service.js';

// let filterTags = ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript', 'Junior', 'React', 'Scss'];
let filterTags = ['Frontend', 'Senior', 'HTML', 'CSS'];

function render() {
    const jobs = jobService.query(filterTags);
    console.log(jobs);
    const RootCmp = (() => {
        return `
            <div>
                ${appHeader()}
                <main class="app-main container">
                    ${jobFilter(filterTags)}
                    ${jobList(jobs)}
                </main>
            </div>
        `;
    })();

    const selector = '#app';
    document.querySelector(selector).innerHTML = RootCmp;
}


window.onRemoveFilter = (ev, tag) => {
    console.log(ev);
    ev.stopPropagation();
    filterTags = filterTags.filter(curr => curr !== tag);
    render();
}
window.onAddTofilter = (tag) => {
    if (!filterTags.includes(tag)) {
        filterTags.push(tag);
        render();
    }
}
window.onClearFilter = () => {
    filterTags = [];
    render();
}


const appTitle = 'Job List';
document.title = appTitle;

window.onload = render;