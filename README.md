
# NextJs mini... 🍁
A mini website to learn how to create a website with NextJs 

<img src="https://github.com/user-attachments/assets/e2ea082b-ffa3-493f-9cda-c8432ca19659" alt="Description of Image" width="100" />



## Technology:
- NextJs
- Session cookie
- JQuery
## Structure
- Using `Page Router`
- Authenticate with `middleware.ts`
- The structure:
```
.
├── commons/
│   ├── components
│   └── images
├── modules/
│   ├── articles/
│   ├── authentication/
│   ├── contact/
│   └── home/
├── pages/
│   ├── about/
│   ├── admin/
│   ├── api/
│   ├── articles/
│   ├── audio/
│   ├── category/
│   ├── contact/
│   ├── fonts/
│   ├── gallery/
│   ├── login/
│   ├── style/
│   ├── video/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── publics/
├── styles/
└── middleware.ts
```

## Admin account
- Default admin account:
```
  username: admin
  password: password
```
## Functionality
#### Anonymous user:
- View all articles in homepage, filter by category, send contact to the admin in the contact page
#### Admin:
- Login with admin account and able to see the user's contact in `Requests` page.

## Workflow:
#### Articles load and pagination:
_This website does not use database, the hardcode data is using._
- Article use api in `pages/api/articles/` (for both single article or articles with pagination) to fetch data in `/modules/articles/PostPagination.tsx` 
#### Login:
- User go to `login page` -> login with default account
- `Login page` -> request to server -> `POST api/auth/login/` -> confirm infomation -> save to `Session cookie` with expire time is 3600s.
- Every time load page, client take user information in `Session cookie` -> `GET api/auth/` -> server to validate user information.
#### Logout:
- User click logout -> `POST api/auth/logout/` -> Remove information in `Session cookie`, redirect to homepage.
#### Contacts:
- User send contact to server: `POST api/contact-form` -> save data to `Session cookie` with time out is 3600.
- Admin get contacts: `GET api/contact-form` -> get all contacts with pagination.
## Page url:
- Homepage: `localhost:3000`
- Single article: `localhost:3000/articles/[id]`
- Category: `localhost:3000/categories/`
- Specific category: `localhost:3000/categories/[slug]`
- Contact for user: `localhost:3000/contact/`
- View user's contacts: `locahost:3000/admin/contacts/`
