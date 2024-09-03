import React from 'react'
import ExifReader from 'exifreader'

export default function Contribution() {
    React.useEffect(() => {
        if (!supportsFileReader()) {
            alert('Sorry, your web browser does not support the FileReader API.');
            return;
        }

        function handleSubmit(event) {
            event.preventDefault();

            const file = event.target.elements.file.files[0];
            const url = event.target.elements.url.value;

            ExifReader.load(file || url, { async: true }).then((tags) => {
                delete tags['MakerNote'];

                if (tags['Thumbnail'] && tags['Thumbnail'].image) {
                    var image = document.getElementById('thumbnail');
                    image.classList.remove('hidden');
                    image.src = 'data:image/jpg;base64,' + tags['Thumbnail'].base64;
                
                    var latP = document.getElementById('lat');
                    var longP = document.getElementById('long');
                    var lat = tags['GPSLatitude'].description;
                    var long = tags['GPSLongitude'].description;
                    latP.innerHTML = 'Latitude: ' + lat;
                    longP.innerHTML = 'Longitude: ' + long;

                    console.log(tags)
                }
            }).catch((error) => {
                console.error('Error loading EXIF data:', error);
            });
        }

        document.querySelector('form').addEventListener('submit', handleSubmit);
    }, []);

    return (
        <div>
            <form>
                <input type="file" name="file" />
                <input type="text" name="url" placeholder="Or enter a URL" />
                <button type="submit">Submit</button>
            </form>
            <img id="thumbnail" className="hidden" alt="Thumbnail" />
            <div>
                <p id="lat"></p>
                <p id="long"></p>
            </div>
        </div>
    );
}

function supportsFileReader() {
    return window.FileReader !== undefined;
}


