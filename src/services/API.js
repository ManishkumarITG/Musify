const BASE_URL = "https://love-lyrics-backend.vercel.app/api/v1/"


export async function getAllTrack(){
    try {
        let res = await fetch(`${BASE_URL}Album/GetAllAlbum`)
        let data = await res.json();
        return data;
    } catch (error) {
        console.log("get all track api ", error);
    }
}

