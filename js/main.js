import appHeader from './cmps/app-header.cmp.js';

const jobs = [];

const RootCmp = (() => {
    return `
        <div>
            ${appHeader()}
            <main>
                <h1>WOWOWOWOW</h1>
            </main>
        </div>
    `
})();


const selector = '#app';
document.querySelector(selector).innerHTML = RootCmp;