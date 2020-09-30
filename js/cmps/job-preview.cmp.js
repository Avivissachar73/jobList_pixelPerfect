export default function jobPreview(job) {
    return `
        <section>
            <pre>${JSON.stringify(job)}</pre>
        </section>
    `;
}