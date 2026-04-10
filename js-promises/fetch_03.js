
function getAllAnimalByLetter(letter) {
    let offset = 0;
    let allResults = [];

    const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;
    const apiKey = "8xxSOad0TepUbsa7JlcwAlRjW412dh2qrDFP01vK";


    return fetch(apiUrl, {
        headers: {
            "X-Api-Key": apiKey
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.length > 0) {
                allResults.push(...data);
                offset += 20; //Move to the next page
            }
            console.log(
                `found ${allResults.length} animals containing the letter ${letter}`,
            );
            console.log(allResults[0]);
        })
}



getAllAnimalByLetter("a")

