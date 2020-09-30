export default function tagList(jobId, tags, slot) {
    return `
        <ul class="tag-list clean-list flex align-center wrap">
            ${tags.map(tag => `
                <li class="flex-center" onclick="onOpenTagEditor('${jobId}')">
                    <p>${tag}</p>
                    ${slot && slot(jobId, tag) || ''}
                </li>
            `).join('')}
        </ul>
    `;
}