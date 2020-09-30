export default function jobPreview(job) {
    const now = Date.now();
    const hr24 = 1000*60*60*24;

    const isNew = job.createdAt >= now - hr24;
    
    // <pre>${JSON.stringify(job, null, 2)}</pre>
    return `
        <section class="flex align-center">
            <img src="${job.img}"/>
            <div>
                <div class="flex align-center titles">
                    <h3>${job.companyName}</h3>
                    ${isNew && `<h3 class="stronger">NEW!</h3>` || ''}
                    ${job.isFeatured && `<h3 class="stronger">FEATURED</h3>` || ''}
                </div>
                <h2>${job.title}</h2>
                <div class="flex align-center">
                    <h4>${formatTime(job.createdAt)}</h4>
                    <h4>${job.status}</h4>
                    <h4>${job.availableAt.length > 1 ? 'Worldwide' : job.availableAt.length ? job.availableAt[0] : ''}</h4>
                </div>
            </div>
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