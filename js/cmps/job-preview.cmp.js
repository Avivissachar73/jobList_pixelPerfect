export default function jobPreview(job) {
    return `
        <section>
            <pre>${JSON.stringify(job, null, 2)}</pre>
        </section>
    `;
}