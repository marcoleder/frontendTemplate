# frontendTemplate
Based on SoPra template\
![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=marcoleder&repo=frontendTemplate&show_owner=true)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs scripts/start.js in the development mode on [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds for production with scripts/build.js to the `build` folder

### `npm run test`

Launches the test runner via scripts/test.js in the interactive watch mode

### `npm run start`

Runs serve -s build to serve the production build

## Docker

All changes to main will automatically be pushed to [docker](https://hub.docker.com/r/marcolederdev/frontendtemplate) and optimized for production.\
If you use this template, be sure to set your repository secrets: 
- dockerhub_username
- dockerhub_password (use a PAT([personal access token](https://docs.docker.com/docker-hub/access-tokens/)) for more security)
- repo_name
