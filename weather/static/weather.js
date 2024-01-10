document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const submitButton = document.getElementById("submitButton");
    const locationSpan = document.getElementById("location");
    const temperatureSpan = document.getElementById("temperature");
    const loadingDiv = document.getElementById("loading");
    const errorDiv = document.getElementById("error");
    const sunImage = document.querySelector(".sun");

    // Function to fetch weather data based on user's location
    function fetchWeatherByLocation(latitude, longitude) {
        loadingDiv.style.display = "block";
        errorDiv.style.display = "none";

        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
            .then((data) => {
                const city = data.address.city || "Unknown";
                locationSpan.textContent = city;
                
                // Fetch weather data using the detected city name
                fetchWeatherByCity(city);
            })
            .catch(() => {
                loadingDiv.style.display = "none";
                errorDiv.style.display = "block";
            });
    }

    // Function to fetch weather data by city name
    function fetchWeatherByCity(city) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=f1d445cc67e2496a8be133433221805&q=${city}&aqi=nos`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
            .then((data) => {
                loadingDiv.style.display = "none";
                locationSpan.textContent = `${data.location.name}, ${data.location.country}`;
                temperatureSpan.textContent = `${data.current.temp_c} C`;
                sunImage.src = data.current.condition.icon;
            })
            .catch(() => {
                loadingDiv.style.display = "none";
                errorDiv.style.display = "block";
            });
    }

    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
        // Use geolocation API to get user's coordinates
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Fetch weather data based on user's coordinates
            fetchWeatherByLocation(latitude, longitude);
        });
    } else {
        // If geolocation is not available, use a default city (e.g., Stockholm)
        fetchWeatherByCity("Stockholm");
    }

    // Event listener for user-provided location
    submitButton.addEventListener("click", () => {
        const userLocation = locationInput.value.trim();
        if (userLocation) {
            // Fetch weather data based on user-provided location
            fetchWeatherByCity(userLocation);
        }
    });
});
