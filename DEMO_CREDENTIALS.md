# Alumni Network - Demo Credentials & Setup

## Quick Start

### 1. Start Both Servers

**Backend** (Terminal 1):
```bash
cd "/Users/sumukhahs/HTES/Alumini Network/alumni-connect-backend"
npm run dev
```
Backend runs on: `http://localhost:5000`

**Frontend** (Terminal 2):
```bash
cd "/Users/sumukhahs/HTES/Alumini Network/alumni-connect-frontend"
npm run dev
```
Frontend runs on: `http://localhost:5174`

### 2. Create Your First Account

Since this is a fresh installation, you'll need to register:

1. Open `http://localhost:5174` in your browser
2. Click **"Sign up"** link
3. Fill in the registration form:
   - **Email**: `admin@example.com`
   - **Password**: `password123`
   - **First Name**: `John`
   - **Last Name**: `Doe`
   - **Role**: `Alumni` or `Student`
   - **College ID**: `college123` (use any ID for testing)
   - **Department**: `Computer Science`
   - **Graduation Year**: `2020`

### 3. Login

After registration, you'll be automatically logged in. If you need to login again:
- **Email**: The email you registered with
- **Password**: The password you created

## Testing Different Roles

### Super Admin
To test super admin features, you'll need to:
1. Register with role set to `super_admin` (if backend allows)
2. Or manually update the user role in the database

### College Admin
Register with:
- **Role**: `college_admin`
- **College ID**: Same college ID for all users in that college

### Alumni
Register with:
- **Role**: `alumni`
- **Graduation Year**: Past year

### Student
Register with:
- **Role**: `student`
- **Graduation Year**: Future year

## Environment Setup

### Backend Environment Variables
Create `.env` file in `alumni-connect-backend`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/alumni-connect
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### Frontend Environment Variables
Create `.env` file in `alumni-connect-frontend`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Database Setup

You'll need MongoDB running locally:

```bash
# Install MongoDB (if not installed)
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Or run manually
mongod --config /usr/local/etc/mongod.conf
```

## Testing Features

Once logged in, you can test:

- ✅ **Dashboard**: View stats and activity
- ✅ **Feed**: Create and view posts
- ✅ **Directory**: Search alumni
- ✅ **Connections**: Send/accept connection requests
- ✅ **Messages**: Real-time chat (requires Socket.IO)
- ✅ **Events**: Create and manage events
- ✅ **Jobs**: Post job opportunities

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify `.env` file exists with correct values
- Check port 5000 is not in use

### Frontend won't start
- Run `npm install` in frontend directory
- Check if Tailwind CSS is properly installed
- Verify port 5174 is available

### Can't login
- Check backend console for errors
- Verify MongoDB connection
- Check network tab in browser DevTools

## Default Test Data

For testing, you can create multiple accounts:

**Alumni 1**:
- Email: `alice@example.com`
- Password: `password123`
- Role: Alumni

**Alumni 2**:
- Email: `bob@example.com`
- Password: `password123`
- Role: Alumni

**Student**:
- Email: `student@example.com`
- Password: `password123`
- Role: Student

**Admin**:
- Email: `admin@college.edu`
- Password: `admin123`
- Role: College Admin
