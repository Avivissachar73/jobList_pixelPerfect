/*
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
//////////////THIS FILTE IS NOT IN USE//////////////
*/




import { jobService } from "../services/job.service.js";
import tagList from "./tag-list.cmp.js";

export default function tagEditor() {
    return `
        <section class="tag-editor flex align-center space-between">
            <div class="tags-container"></div>
            <button class="clear-btn" onclick="onCloseTagEditor()">Clear</button>
        </section>
    `;
}

window.onOpenTagEditor = function onOpenTagEditor(jobId) {
    const job = jobService.get(jobId);
    const elEditor = document.querySelector('.tag-editor');
    elEditor.style.display = 'flex';

    // elEditor.innerHTML = `
    elEditor.querySelector('.tags-container').innerHTML = tagList(jobId, job.tags, removeTagBtn);
        // <button class="clear-btn" onclick="onCloseTagEditor()">Clear</button>
}

window.onCloseTagEditor = function onCloseTagEditor() {
    const elEditor = document.querySelector('.tag-editor');
    elEditor.style.display = 'none';
}

function removeTagBtn(tag) {
    return `
        <button class="remove-tag-btn" onclick="onRemoveFilter('${tag}', event)">
            <img src="img/clear-btn.svg"/>
        </button>
    `;
}



/*
.tag-editor {
    position: fixed;
    top: 110px;
    min-height: 70px;
    background-color: #fff;
    width: 1060px;
    border-radius: 5px;
    padding: 0 40px;
    z-index: 5;
}

.tag-editor .tag-list li {
    padding-right: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
} .tag-editor .tag-list li:hover {
    background-color: #EEF6F6;
    color: #5CA5A5;
    cursor: unset;
}


.tag-editor .tag-list p {
    margin-right: 5px;
}

.tag-editor .remove-tag-btn {
    background-color: #5CA5A5;
    color: white;
    border: unset;
    border-radius: unset;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 30px;
} .tag-editor .remove-tag-btn:hover {
    background-color: #2B3939;
}


.tag-editor .clear-btn {
    font-size: 0.8125rem;
    color: #5CA5A5;
    background-color: unset;
    border: unset;
    border-radius: unset;
} .tag-editor .clear-btn:hover {
    box-shadow: 0 4px 0px -3px;
}


@media (max-width: 1110px) {
    .tag-editor {
        width: calc(100% - 50px);
    }
}
@media (max-width: 600px) {
    .tag-editor {
        border: 1px solid #2B3939;
    }
}
*/