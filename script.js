document.querySelectorAll('.watch-btn').forEach(button => {
    button.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('mainVideo').src = videoUrl;
    });
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterVideos(category);
    });
});

document.getElementById('clearFilter').addEventListener('click', function() {
    filterVideos(null);
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.video-item').remove();
    });
});

function filterVideos(category) {
    document.querySelectorAll('.video-item').forEach(item => {
        if (category === null || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
