import { utils } from "./utils.service.js";

export const jobService = {
    query
}

function query() {
    return createJobs();
}

function createJobs() {
    const now = Date.now();
    const hr24 = 1000*60*60*24;
    return [
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
        createJob('Photosnap', 'Senior Frontend Developer', 'https://api-lunacy.icons8.com/api/assets/a4934ba9-510c-442b-9492-ae53c8b5826f/Oval.png', now-hr24, ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], ['USA'], true, 'Full Time'),
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