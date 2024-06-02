<script>document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.clickable');
    const image = document.getElementById('image');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            const newImage = this.getAttribute('data-image');
            image.src = newImage;
        });
    });
});</script>
