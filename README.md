# aurelia-bootstrap-table-plugin

This plugin is a wrapper for [Bootstrap Table](http://bootstrap-table.wenzhixin.net.cn/)

A simple aurelia attribute to allow you to load files into the browser, using the HTML5 FileReader functionality, also supports drag and drop.

##Installing

with jspm

jspm install github:crsnyders/aurelia-boostrap-table-plugin

then

aurelia.use.plugin("crsnyders/aurelia-boostrap-table-plugin");

## Using

 ```shell
  <table bootstrap-table="tableconfig.bind: config" class="bootstrap-table" bootstrap-table.ref="bsTablle">
      </table>
  ```

  ```shell
  <table bootstrap-table class="bootstrap-table">
    <thead>
      <th>4</th>
      <th>6</th>
      <th>7</th>
      <th>9</th>
      <th>0</th>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
   ```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:
  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** Sometimes jspm queries GitHub to install packages, but GitHub has a rate limit on anonymous API requests. If you receive a rate limit error, you need to configure jspm with your GitHub credentials. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
  
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in AMD module format. You can change it based on your needs.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
