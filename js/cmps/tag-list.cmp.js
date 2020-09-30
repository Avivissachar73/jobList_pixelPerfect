export default function tagList(tags, slot) {
    return `
        <ul class="tag-list clean-list flex align-center wrap">
            ${tags.map(tag => `
                <li class="flex-center" onclick="onAddTofilter('${tag}')">
                    <p>${tag}</p>
                    ${slot && slot(tag) || ''}
                </li>
            `).join('')}
        </ul>
    `;
}