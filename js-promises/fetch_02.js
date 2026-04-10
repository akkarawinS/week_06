const apiUrl = ('https://api.api-ninjas.com/v1/animals?name=cheetah');
const apiKey = "8xxSOad0TepUbsa7JlcwAlRjW412dh2qrDFP01vK";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
    },
};


fetch(apiUrl, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if(data.length > 0){
            displayData(data[0]);
        }
    })
    .catch((error) => {
        console.error("Something went wrong!", error);
    })


function displayData(data){
    const name1 = document.getElementById("data");

    const {name} = data;

    name1.textContent = name;
}