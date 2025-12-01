document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', function () {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerBtn.classList.add('hide');
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            if (window.innerWidth <= 991) {
                hamburgerBtn.classList.remove('hide');
            }
        });
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 991) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerBtn.classList.add('hide');
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        } else {
            hamburgerBtn.classList.remove('hide');
        }
    });
});


function copyCode() {
    const codeText = document.querySelector('.code-display').textContent;
    navigator.clipboard.writeText(codeText).then(function() {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓';
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy:', err);
    });
}

/**
 * Load content dynamically into the mainContent div.
 * @param {string} file - The path to the content-only HTML file
 */
function loadContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Content not found: ' + file);
            return response.text();
        })
        .then(html => {
            // Inject the fetched HTML into the mainContent container
            document.getElementById('mainContent').innerHTML = html;

            // Optional: Scroll to top whenever new content loads
            window.scrollTo(0, 0);
        })
        .catch(error => {
            console.error(error);
            document.getElementById('mainContent').innerHTML = `
                <p style="color:red;">Error loading content.</p>
            `;
        });
}

/**
 * Optional: Highlight the active sidebar link
 */
function setActiveSidebar(link) {
    // Remove 'active' from all links
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));

    // Add 'active' to the clicked link
    link.classList.add('active');
}
