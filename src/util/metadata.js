(function (window, document) {
    <script src="https://cdn.jsdelivr.net/npm/exifreader@4.12.0/dist/exifreader.min.js"></script>

    'use strict';

    if (!supportsFileReader()) {
        alert('Sorry, your web browser does not support the FileReader API.');
        return;
    }

    window.addEventListener('load', function () {
        document.querySelector('form').addEventListener('submit', handleSubmit, false);
    }, false);

    function supportsFileReader() {
        return window.FileReader !== undefined;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const file = event.target.elements.file.files[0];
        const url = event.target.elements.url.value;

        ExifReader.load(file || url, {async: true}).then(function (tags) {
            // The MakerNote tag can be really large. Remove it to lower
            // memory usage if you're parsing a lot of files and saving the
            // tags.
            delete tags['MakerNote'];

            // If you want to extract the thumbnail you can use it like
            // this:
            if (tags['Thumbnail'] && tags['Thumbnail'].image) {
                var image = document.getElementById('thumbnail');
                image.classList.remove('hidden');
                image.src = 'data:image/jpg;base64,' + tags['Thumbnail'].base64;
            }

            // Use the tags now present in `tags`.
        }).catch(function (error) {
            // Handle error.
        });
    }
})(window, document);