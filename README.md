<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This application uses the Spotify API and creates a user interface for users to fine tune the recommendations they receive from Spotify by selecting a range of values for serveral various parameters nad then choosing up to 5 genres of music to go along with the parameter they choose to filter by.

### Built With

* [React](https://reactjs.org)
* [Express](http://expressjs.com/)
* [Axios](https://www.npmjs.com/package/axios)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation and starting the project

1. Get a free client id and client secret at [https://developer.spotify.com/](https://developer.spotify.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/stevennguyen21/Vibe-ify
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your client Id and client secret in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```
5. Cd into the authserver folder and run the command node web-api-auth-examples/authorization_code/app.js 
6. open a new terminal and cd into the client folder of the app folder and run npm start
7. goto localhost:8888 on your browser


<!-- USAGE EXAMPLES -->
## Usage

![til](./vibeifyusage.gif)

<!-- CONTACT -->
## Contact

Steven Nguyen - [@linkedin.com/in/stevennguyen44](https://linkedin/com/in/stevennguyen44) - steeven.nguyen1102@gmail.com

Project Link: [https://github.com/stevennguyen21/Vibe-ify](https://github.com/stevennguyen21/Vibe-ify)

