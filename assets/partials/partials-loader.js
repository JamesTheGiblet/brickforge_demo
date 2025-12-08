// Dynamically loads HTML partials into elements with data-partial attributes
function loadPartials() {
    const partials = document.querySelectorAll('[data-partial]');
    partials.forEach(el => {
        const partial = el.getAttribute('data-partial');
        fetch(`assets/partials/${partial}.html`)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load partial: ${partial}`);
                return res.text();
            })
            .then(html => {
                el.innerHTML = html;
                // Optionally set tool title if data-tool-title is present
                if (el.hasAttribute('data-tool-title')) {
                    const title = el.getAttribute('data-tool-title');
                    const titleEl = el.querySelector('#tool-title');
                    if (titleEl) titleEl.textContent = title;
                }
            })
            .catch(err => {
                console.error(err);
                el.innerHTML = `<div style='color:red;font-family:monospace;'>Error loading partial: ${partial}</div>`;
            });
    });
}
document.addEventListener('DOMContentLoaded', loadPartials);