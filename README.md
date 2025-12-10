# Website

This is the source code of my website currently hosted under https://ppommer.github.io.
It is based on an open source clone of tailwind's [Spotlight](https://tailwindcss.com/plus/templates/spotlight/preview) template provided by [thatsdc](https://github.com/thatsdc).

## Dev setup

Run `npm install` to install dependencies followed by `npm start` to start the dev setup with auto-reload running under http://localhost:3000.

## Production deployment

Run `npm run deploy` to check out the code to the `gh-pages` branch and auto-deploy.

## Analytics Setup

Page visit tracking is configured using GoatCounter (privacy-friendly, free, open-source). To set it up:

1. Sign up for free at https://www.goatcounter.com/
2. Create a site and get your site code (e.g., 'yoursite')
3. Open `public/index.html` and replace `yoursite` in the GoatCounter script URL with your actual site code
4. Deploy your changes

The analytics will automatically track page views as users navigate through your site.
