# Geo Data App - Backend

## Overview

The backend for the Geo Data App provides an API to serve geospatial data to the frontend. It fetches, stores, and filters geographic data from a **MySQL** database. The backend is built with **Node.js**, **Express.js**, and connected to a **MySQL** database.

## Features

- **Geo Data API**: Provides geospatial data, including latitude, longitude, and additional information about places.
- **Database Integration**: Stores geospatial data in a **MySQL** database.
- **Data Filtering**: Filters geospatial data based on search parameters like name and location.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MySQL**: Relational database to store geospatial data.
- **Sequelize ORM**: Object-relational mapping (ORM) for easy interaction with the MySQL database.
- **Axios**: For making HTTP requests (optional in the backend if required).
- **dotenv**: For managing environment variables securely.

## Installation

### Prerequisites

- **Node.js**: Make sure **Node.js** is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MySQL**: Install MySQL on your local machine or use a cloud-based MySQL database service.

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

  
   git clone https://github.com/Anshika31sharma/GeoData-Backend


2. Navigate to the project directory: 
   
   cd GeoData-Backend

3. Install the dependencies:
   
   npm install
   
4. Start the development server:

   node server.js

- **Others:**

   Github (for version control)
 

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## Author

Anshika Sharma

