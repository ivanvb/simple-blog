# Simple Blog

This a blog created with [Gatsby](https://www.gatsbyjs.com/) (a React framework), and [Tailwind](https://tailwindcss.com/). It sources its data from Contentful, a Content Management System (CMS).

The project itself servers as a basic site for a non technical professional who desires to have a public online blog that is also heavily customizable and free to host due to the fact that it is statically generated and does not require any sort of API or database to be fully functional.

**You can see the final result hosted [here](https://str-blog.netlify.app/)**

## Features

The main feature of this project is its blog, it is divided in categories, which are created from the CMS. At the same time each category is paginated by a customizable amount, which is 5 by default.

Aside from the blog the page also contains:

- A home page where a quote defined by the blog's owner is displayed as well as the four most recent blog posts.
- An about page with the author's photo and biography.
- A contact page where people can send the author emails. It can be extended to include captcha verification to avoid spam.
- Dark and light mode, which defaults to the preferred color scheme of your system, but can be set to whichever one you feel more comfortable with. After setting up the color scheme of your preference it will stay the same even if you refresh the page, until you manually change it.

## Setup

To run this project locally you will need to have `Node` installed. The project was developed using `Node v14` however it may work in other versions as well.

Once you have node installed you can run

```
npm install
```

or 

```
yarn install
```

Then proceed to create two `.env` files, `.env.development` and `.env.production`. Each one should have the following information:

```
ACCESS_TOKEN="Your Contentful access token"
SPACE_ID="Your Contentful space id"
```

This information is required for the Contentful integration to work properly.

### Create Contentful model and upload test data

The project comes with the models that should be in your Contentful instance in order to source the data properly. To upload said data to your instance run:

```bash
cd ./contentful
bash ./import.sh your_space_id
```
