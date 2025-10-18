function includePart(file, targetId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải ' + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => {
            console.error('Lỗi include:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    includePart('header.html', 'header-data');
    includePart('footer.html', 'footer-data');
});