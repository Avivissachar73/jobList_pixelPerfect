import { jobService } from "../services/job.service.js";
import tagList from "./tag-list.cmp.js";

export default function tagEditor() {
    return `
        <section class="tag-editor flex align-center space-between">
            <div class="tags-container"></div>
            <button class="close-btn" onclick="onCloseTagEditor()">Clear</button>
        </section>
        `;
}

window.onOpenTagEditor = function onOpenTagEditor(jobId) {
    const job = jobService.get(jobId);
    const elEditor = document.querySelector('.tag-editor');
    elEditor.style.display = 'flex';

    // elEditor.innerHTML = `
    elEditor.querySelector('.tags-container').innerHTML = tagList(jobId, job.tags, removeTagBtn);
        // <button class="close-btn" onclick="onCloseTagEditor()">Clear</button>
}

window.onCloseTagEditor = function onCloseTagEditor() {
    const elEditor = document.querySelector('.tag-editor');
    elEditor.style.display = 'none';
}

function removeTagBtn(jobId, tag) {
    return `
        <button class="remove-tag-btn" onclick="onRemoveTag('${jobId}', '${tag}')">
            <img src="img/close-btn.svg"/>
        </button>
    `;
}