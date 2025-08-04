async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "939008c1382c80c261f6bff7c66d3b1a"; // Replace this with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // ✅ Use backticks

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>🌤 Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    // ✅ Use backticks for the string and wrap HTML properly
    document.getElementById("weatherResult").innerHTML = `<p style="color: yellow;">${error.message}</p>`;
  }
}
