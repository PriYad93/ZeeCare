Frontend deploy notes (Render)

1) Set environment variables in Render service:
   - VITE_API_BASE_URL=https://zeecare-backend-j180.onrender.com

2) Build command:
   - npm run build

3) Publish directory:
   - dist

4) Static site: ensure the service type is "Static Site" (or Web Service for SPA with server)

5) After deploy, open the site and exercise the main pages (Home, Appointment, About, Login).

6) If API calls fail, ensure the backend URL is correctly configured and CORS allows the frontend origin.
