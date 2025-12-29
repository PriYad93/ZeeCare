Backend deployment / local verification steps

1) Local test (safe, uses .env):
   - Copy example env: `cp config/.env.example config/.env` and fill in MONGO_URI with your MongoDB URI.
   - Install dependencies: `npm install`
   - Start server locally: `npm run dev` (nodemon) or `npm start`
   - Check logs for any runtime errors.

2) What changed to fix the render issue:
   - Replaced `bcrypt` with `bcryptjs` to avoid native binary / ELF header errors during deploy.
   - Updated `backend/models/userSchema.js` to use `bcryptjs` sync API (hashSync, compareSync).

3) Required environment variables on Render (set these in the Render dashboard for the service):
   - CLOUDINARY_CLOUD_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
   - JWT_SECRET_KEY
   - MONGO_URI
   - Optional: JWT_EXPIRES, COOKIE_EXPIRE, FRONTEND_URL, DASHBOARD_URL, PORT

4) After push, Render will run `npm install` and `npm start` automatically; check deploy logs for success.

5) If you see any errors in Render logs, paste the logs here and I'll troubleshoot them quickly.
