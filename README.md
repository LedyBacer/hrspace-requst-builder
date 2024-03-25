# [Project: "HRSpace Request Builder"](http://185.221.162.231:81)

The HRSpace Request Builder, developed by team number 7 during the HRSpace hackathon, is an MVP for building job vacancy requests on the HRSpace platform. HRSpace is a job marketplace where users can search for jobs or recruit employees. The Request Builder simplifies the process of creating job requests, ensuring that all necessary information is provided. The frontend of this project was skillfully crafted by [Nikita Dybov](https://github.com/LedyBacer) and [Timur Abuev](https://github.com/TimAbuev), contributing to the intuitive user interface and seamless user experience.
## Features

- Validation to ensure data integrity: Data validation allows to send only correct data to the server, as well as simplify the use of the app.
- Dynamic form: Dynamic form structure allows you to show only relevant form options for specific jobs. And also show dynamically changing tips.
- Backend communication via API: The project uses API for backend interaction. This allows you to receive all the necessary and up-to-date data, as well as dynamically change the app form.
- Routing: Routing has been implemented to manage different pages of the application. 

## Technologies Used:

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A library for managing application state.
- [Material UI](https://mui.com/material-ui/): A UI framework for React.
- [Formik](https://formik.org/): A library for managing React forms.
- [Yup](https://github.com/jquense/yup): A schema validation library for React forms.
- [ESLint](https://eslint.org/): A linter for JavaScript code.
- [Prettier](https://prettier.io/): A code formatter for JavaScript.

## Development

### Prerequisites

Before you begin, make sure you have the following tools installed:

- git
- Node.js
- running and working [hrspace-request-builder-backend](https://github.com/hrspace-request-builder/hrspace-request-builder-backend)

### Installation

1. Clone the repository:
```
git clone https://github.com/hrspace-request-builder/hrspace-request-builder-frontend.git
```
2. Go to the project folder:
```
cd hrspace-request-builder-frontend
```
3. Install dependencies:
```
npm install
```
4. Copy env file:
```
cp .env_example .env
```
5. Change backend URL inside .env:
```
nano .env
```
6. Run the project:
```
npm run start
```

After completing these steps, your project will be accessible at http://localhost:3000/ in your web browser. Also if backend running on different network you may need [this plugin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) installed for avoid CORS errors.

## Deployment

⚠️ Keep in mind that the backend may have its own subtleties in the installation. You may want to use the all-in-one solution provided by the backend repo.

### Prerequisites

Before you begin, make sure you have the following tools installed:

- git
- docker compose
- running and working [hrspace-request-builder-backend](https://github.com/hrspace-request-builder/hrspace-request-builder-backend)

### To deploy the project on a server, follow these steps:

1. Clone the repository:
```
git clone https://github.com/hrspace-request-builder/hrspace-request-builder-frontend.git
```
2. Go to the project folder:
```
cd hrspace-request-builder-frontend
```
3. Copy env file:
```
cp .env_example .env
```
4. Change backend URL inside .env:
```
nano .env
```
5. Change port inside docker-compose if you want (3000 default):
```
nano docker-compose.yml
```
6. Run production build inside docker compose:
```
docker compose up
```
Project will be available at this link: http://your_ip_or_domain:your_port
