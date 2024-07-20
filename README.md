# Website

### Setup

Install [Node.js](https://nodejs.org/en/download/package-manager).

Install `yarn`:

```
npm install --global yarn
```

Install `react-player`:

```
npm install react-player # or yarn add react-player
```

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `deployment` branch.


### Helpful Links

[Squoosh](https://squoosh.app/): A website to compress and resize images for webpages. 

[How Big Should My Images Be?](https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide)

[Image Resizer](https://imageresizer.com/): When you don't want to compress the image, but still want to constrain its size.

### When Domain Expires

Change both instances of `url` to `https://bandofpv.github.io` in the `docusaurus.config.js` file.
