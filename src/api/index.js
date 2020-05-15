import axios from "axios";

const urlWorld = "https://covid19.mathdro.id/api/";

const urlIndia = "https://covid19.mathdro.id/api/countries/India";

export const fetchWorldData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(urlWorld);

    const modifiedWorldData = {
      name: "World Statistics",
      confirmedValue: confirmed.value,
      deathsValue: deaths.value,

      recoveredValue: recovered.value,
      lastUpdatedTime: lastUpdate.date.toUTCString(),
    };

    return modifiedWorldData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchIndiaData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(urlIndia);

    const modifiedIndiaData = {
      name: "India Statistics",
      confirmedValue: confirmed.value,
      deathsValue: deaths.value,

      recoveredValue: recovered.value,
      lastUpdatedTime: lastUpdate,
    };

    return modifiedIndiaData;
  } catch (error) {
    console.log(error);
  }
};
