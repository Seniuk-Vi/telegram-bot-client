# Cloud app

This is a Front-end application for the telegram-bot.

### Improvements can be done
- [ ] fix css in ChatPage (display input above all messages)
- [ ] 


## Environment variables
```bash
    REACT_APP_BACKEND_API_URL - URL of the backend API
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Running the Application with Docker

To run the cloud-app with Docker, follow these steps:

1. Ensure that Docker and Docker Compose are installed on your system.
2. Clone the repository and navigate to the project directory.
3. Build the Docker image by running the following command. Make sure to replace the placeholders `<your_*>` with your
   actual values:

   ```sh
   docker build \
       --build-arg REACT_APP_BACKEND_API_URL=<your_backend_url> \
       -t cloud-app .
    ```

