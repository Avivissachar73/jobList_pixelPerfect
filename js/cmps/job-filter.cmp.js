import tagList from "./tag-list.cmp.js";

export default function jobFilter(filterTags) {
    return `
        <section class="job-filter width-all flex align-center space-between">
            ${tagList(filterTags, removeTagBtn)}
            <button class="clear-btn" onclick="onClearFilter()">Clear</button>
        </section>
    `;
}

function removeTagBtn(tag) {
    return `
        <button class="remove-tag-btn" onclick="onRemoveFilter(event, '${tag}')">
            <img src="img/close-btn.svg"/>
        </button>
    `;
}