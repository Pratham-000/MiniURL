# MiniURL

**MiniURL** is a URL shortener application that converts long URLs into concise, 8-character codes. It provides users with a simple interface to generate shortened URLs, view their redirection links, and track the number of clicks. The frontend is built using **EJS (Embedded JavaScript)** for rendering the data.

## Features

- **URL Shortening**: Convert long URLs into unique 8-character short codes.
- **Analytics**: Track the number of clicks for each shortened URL.
- **Display Data**: The frontend shows the generated short code, the original URL, and the total number of clicks.
- **Redirection**: The shortened URL automatically redirects users to the original link.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: EJS (Embedded JavaScript)
- **Other**: Mongoose (for MongoDB object modeling)

## Added New Functionality
- **Login** : only login users can see the generated code which they have made
- **SignUp ** : Use this to add urself to databse
  

## How It Works

1. User submits a long URL.
2. The backend generates an 8-character short code.
3. The frontend displays:
   - The short code generated.
   - The original (redirect) URL.
   - The number of clicks on the shortened link.
4. Clicking the short URL redirects the user to the original URL.
5. Analytics track and display the total number of clicks on each link.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/MiniURL.git
    ```
2.  Navigate to the project directory:

    ```bash
    npm install
    ```
3.  Set up your MongoDB connection in connect.js:
    ```js
    mongoose.connect('mongodb://127.0.0.1:27017/short-url')
    ```
4. Run the project:

   ```bash
   npm start
   ```
5. Open your browser and go to http://localhost:8001 to access the app.



# Usage
1. Enter a URL in the provided field and click "Shorten."
2. The short code, original URL, and number of clicks will be displayed.
3. Use the shortened link to share it. The analytics will update with each click.


   
# License
This project is licensed under the MIT License. See the LICENSE file for details.

```markdown
This code can be directly copied into your `README.md` file for your **MiniURL** project!
```
