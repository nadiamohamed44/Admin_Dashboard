# Admin Dashboard - React + Vite

##  How to Test Admin vs. Non-Admin Access

###  Logging in as Admin:
1. Go to `http://localhost:5173/login`.
2. Click the `Login as Admin` button.
3. You will be redirected to `/admin`.
4. You should see the Admin Dashboard with statistics and sidebar links.
5. If Maintenance Mode is enabled, a visual indicator will appear.

###  Logging in as Normal User (Non-Admin):
1. Go to `http://localhost:5173/login`.
2. Click the `Login as User` button.
3. You will be redirected to `/admin`.
4. Since this user is not an admin, they will be automatically redirected to the `/403` Forbidden page.

###  Success Criteria:
- **Admin**: Can access and view the dashboard.
- **Non-Admin**: Gets redirected to the forbidden page.
- Maintenance Mode indicator is visible and updates correctly.
