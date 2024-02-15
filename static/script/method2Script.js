async function mapGen(){
    const lat = document.getElementById('Latitude').value;
    const lon = document.getElementById('Longitude').value;
    const iframeMap = document.getElementById('iframeMap');

    if (lat !== '' && lon !== '') {
        iframeMap.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    }

    else {
        iframeMap.src='';
    }
}