powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Initialize the project

Once you've cloned the project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the project in a new browser tab
npm run dev -- --open
```

## Api Rest

To be able to fech the data from the back.

clone this repository and follow the steps:

```bash
npm install

npm start
# By default if you dont have the .env file you will not get any debug log in your console. And the app will try to start the server on PORT 4001.

#CORS Error may be shown if you dont set it up too.
.env file on your root project:

DEBUG=EarthPulse:*
PORT=3001
CORS_ALLOWED_ORIGIN_LOCAL=http://localhost:5173

```

## Building

To create a production version of the project:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your project, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
