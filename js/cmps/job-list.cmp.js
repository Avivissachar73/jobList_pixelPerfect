import jobPreview from './job-preview.cmp.js';

export default function jobList(jobs) {
    return `
        <ul class="job-list flex column align-center">
            ${jobs.map(job => `
                <li>
                    ${jobPreview(job)}
                </li>
            `).join('')}
        </ul>
    `
}