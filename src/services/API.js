import axios from "axios";
console.log("api");

const BASE_URL = "https://love-lyrics-backend.vercel.app/api/v1/";

export async function getAllTrack() {
  try {
    let res = await axios.post(`${BASE_URL}Album/GetAllAlbum`, {});
    let data = await res.data;

    return data;
  } catch (error) {
    console.log("get all track api ", error);
  }
}

export async function getArtists() {
  try {
    const res = await axios.post(
      `${BASE_URL}tracks/getArtists`,
      JSON.stringify({})
    );
    console.log(await res.data);
  } catch (error) {
    console.log("error", error);
  }
}
