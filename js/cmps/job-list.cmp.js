import jobPreview from './job-preview.cmp.js';

export default function jobList(jobs) {
    return `
        <ul class="job-list clean-list width-all flex column align-center">
            ${jobs.map(job => `
                <li class="width-all">
                    ${jobPreview(job)}
                </li>
            `).join('')}
        </ul>
    `
}