export default function jobPreview(job) {
    const now = Date.now();
    const hr24 = 1000*60*60*24;

    const isNew = job.createdAt >= now - hr24;
    
    // <pre>${JSON.stringify(job, null, 2)}</pre>
    return `
        <section class="job-preview width-all flex space-between">
            <div class="side-line"></div>
            <div class="flex align-center wrap">
                <img class="job-img" src="${job.img}"/>
                <div class="info flex column space-between wrap">
                    <div class="flex align-center titles wrap">
                        <h3 class="comp-name">${job.companyName}</h3>
                        <div class="tags flex align-center wrap">
                            ${isNew && `<h3 class="flex-center">NEW!</h3>` || ''}
                            ${job.isFeatured && `<h3 class="flex-center">FEATURED</h3>` || ''}
                        </div>
                    </div>
                    <h2 class="job-title">${job.title}</h2>
                    <div class="about flex align-center">
                        <p>${formatTime(job.createdAt)}</p>
                        <p>${job.status}</p>
                        <p>${job.availableAt.length > 1 ? 'Worldwide' : job.availableAt.length ? job.availableAt[0] : ''}</p>
                    </div>
                </div>
            </div>
            <div class="costume-hr"></div>
            <ul class="tag-list clean-list flex align-center wrap">
                ${job.tags.map(tag => `<li class="flex-center"><p>${tag}</p></li>`).join('')}
            </ul>
        </section>
    `;
}


function formatTime(timestamp) {
    const now = Date.now();

    const diff = now - timestamp;
    
    if (diff <= 1000*60*10) return 'Just now';
    if (diff <= 1000*60*60) return 'About a hour ago';
    if (diff <= 1000*60*60*12) return 'Todoy';
    if (diff <= 1000*60*60*24) return '1d ago';
    if (diff <= 1000*60*60*24*2) return '2d ago';
    if (diff <= 1000*60*60*24*3) return '3d ago';
    if (diff <= 1000*60*60*24*4) return '4d ago';
    if (diff <= 1000*60*60*24*5) return '5d ago';
    if (diff <= 1000*60*60*24*6) return '6d ago';
    if (diff <= 1000*60*60*24*7) return '1w ago';
    if (diff <= 1000*60*60*24*7*2) return '2w ago';

    var atDate = new Date(timestamp);
    return `at ${atDate.getFullYear()}-${atDate.getMonth()+1}-${atDate.getDate()}`;
}