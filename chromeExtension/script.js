async function fetchdata() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9bdc64230fmsh0d89e3afce36ad3p13de93jsnce9e301476f1',
      'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    }
  };

  const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=kelowna&minDate=%3CREQUIRED%3E&maxDate=2023-12-31&page=1', options);

  const record = await res.json();

  console.log("record", record);

  document.getElementById("concerts").innerHTML = record.data.map(item => item.name)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
}