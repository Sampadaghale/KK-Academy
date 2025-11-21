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
