# DailyNotes

DailyNotes is a modern and intuitive note-taking application that allows users to create, edit, and manage their notes efficiently. The application supports features like tag management, search functionality, user authentication, and more.

## Features

- **User Authentication**: Secure login and signup functionality.
- **Create and Edit Notes**: Easily create new notes or edit existing ones.
- **Tag Management**: Add and remove tags to categorize your notes.
- **Search**: Quickly search for notes using keywords.
- **Pin Notes**: Pin important notes for quick access.
- **Delete Notes**: Remove notes that are no longer needed.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Others**: Axios, React Icons, React Tiny popover, React Modal, Moment.js etc.

## Installation

1. Clone the repository:
   
   ```
    git clone https://github.com/AvikNayak22/DailyNotes.git
   ```
2. Change into the project directory: 
   ```
   cd DailyNotes
   ```
3. Install dependencies for both the client and server:
   ```
   cd frontend/notes-app
   npm install
   ```
   ```
   cd ../backend
   npm install
   ```
4. Create a `.env` file in the `server` directory with the following content:
   ```
   ACCESS_TOKEN_SECRET=your-access-token-secret
   ```
5. Start the client:
   ```
   npm run dev
   ```
6. Start the server:
   ```
   npm start
   ```
