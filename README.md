## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn storybook`

runs storybook in [http://localhost:6006](http://localhost:6006)
storybook is a tool for building a UI for your app.see [https://storybook.js.org/](https://storybook.js.org/)

### this project follows Atomic Design Pattern by Brad Frost although we are not strict to it's rules; we just use it as a helpful example, we don't have template layout because i think Page layout will do it's responsibility for us.

### our component structure:

- atoms : basic components
- molecules : combination of 3rd libraries and atoms
- organisms : more complex components that related to product features
- pages : combination of logics and components and apis and hooks to form a page.

### \*you can read more about Atomic Design in [https://atomicdesign.bradfrost.com/table-of-contents/](https://atomicdesign.bradfrost.com/table-of-contents/)

---

### For Better DX(Developer Experience):

- install this extensions: **better comment**,**eslint**,**prettier**,**todo tree**
- follow **conventional commit** syntax in your git commits, you can use **commitizen** extension
