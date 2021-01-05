const recommendationsUri = "https://api.spotify.com/v1/recommendations";

const fullRecoUri = (genres, type, min, max) => {
    if (!genres) {
        return `${recommendationsUri}?min_${type}=${min}&max_${type}=${max}`
    } else {
        return `${recommendationsUri}?seed_genres=${genres}&min_${type}=${min}&max_${type}=${max}`;
    }
}

const getHeaders = (access) => {
    return { Authorization: 'Bearer ' + access};
}

const getMusicFromSpotify = async (genres, type, min, max, access) => {
    const uri = fullRecoUri(genres, type, min, max);
    const headers = getHeaders(access);
    const response = await fetch(uri, {
        headers,
    });
    if (!response || response.error && response.status === 401) {
        window.location.href = '/';
    }

    const tracks = (await response.json()).tracks;
    console.log(tracks);
    return tracks;
}

export default getMusicFromSpotify;