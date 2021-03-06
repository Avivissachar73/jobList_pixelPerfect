import { utils } from "./utils.service.js";

export const jobService = {
    query,
    get,
    // removeTag
}

const gJobs = createJobs();

function query(filterTags) {
    if (!filterTags || !filterTags.length) return gJobs;
    return gJobs.filter(curr => {
        let isExist = false;
        filterTags.forEach(tag => {
            if (curr.tags.includes(tag)) isExist = true;
        });
        return isExist;
    });
}

function get(id) {
    if (!id) return query()[0];
    return query().find(job => job.id === id);
}

// function removeTag(jobId, tag) {
//     const job = get(jobId);
//     const tags = job.tags;
//     const idx = tags.findIndex(curr => curr === tag);
//     tags.splice(idx, 1);
// }

function createJobs() {
    const now = Date.now();
    const min = 1000*60;
    const hr24 = 1000*60*60*24;
    const min10 = min *10;
    return [
        createJob('Photosnap', 'Senior Frontend Developer', 'img/job/job1.svg', now+min10-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Manage', 'Fullstack Developer', 'img/job/job2.svg', now+min10-hr24, ['Fullstack', 'Midweight', 'Python', 'React'], 'Remote', true, 'Part Time'),
        createJob('Account', 'Junior Frontend Developer', 'img/job/job3.svg', now+min10-(hr24*2), ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'], ['USA'], false, 'Part Time'),
        createJob('MyHome', 'Junior Frontend Developer', 'img/job/job4.svg', now+min10-(hr24*5), ['Frontend', 'Junior', 'CSS', 'JavaScript'], ['USA'], false, 'Contract'),
    ];
}

function createJob(companyName = '', title = '', img = '', createdAt, tags = [], availableAt = [], isFeatured = false, status = 'Full Time') {
    return {
        id: utils.getRandomId(),
        companyName,
        title,
        createdAt: createdAt || Date.now(),
        tags,
        img,
        availableAt,
        isFeatured,
        status
    };
}