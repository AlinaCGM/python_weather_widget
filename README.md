
# Weather App

The Weather App is a simple Django web application that allows users to check the current weather conditions for a specific location. Users can either provide a city name or enable geolocation to automatically detect their current location.

## Features

- Weather information for a specified location
- Geolocation support to detect the user's current city
- Dynamic background image based on weather conditions
- Responsive design for a better user experience on various devices

## Getting Started

Follow these instructions to set up and run the Weather App on your local machine.

### Prerequisites

- Python 3.6 or higher
- Django 4.2 (included in the project's requirements)
- An API key from WeatherAPI (https://www.weatherapi.com/)
- Internet connection (for geolocation)

### Installation

1. Clone the repository to your local machine:

   
   git clone https://github.com/AlinaCGM/python_weather_widget.git
   cd python_weather_widget


2. Create a virtual environment (optional but recommended):


   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate


3. Install the project's dependencies:

 
   pip install -r requirements.txt
  

4. Set up your WeatherAPI API key:

   - Create an account and obtain an API key from [WeatherAPI](https://www.weatherapi.com/).
   - Rename the \`.env.example\` file to \`.env\`.
   - Replace \`YOUR_API_KEY\` in the \`.env\` file with your actual API key.

5. Apply the database migrations:

  
   python manage.py migrate
  

6. Start the development server:

  
   python manage.py runserver
 

7. Open your web browser and access the Weather App at http://localhost:8000/.

## Usage

- Enter a city name in the input field and click the "Submit" button to check the weather for that city.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/).
- Geolocation functionality based on the browser's geolocation API.



