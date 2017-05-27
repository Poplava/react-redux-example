import inquirer from 'inquirer';

import webpackConfig from '../webpack.config';
import devServer from './devServer';

const questions = [
  {
    type: 'list',
    name: 'app',
    message: 'Which app are you going to run?',
    choices: Object.keys(webpackConfig.entry)
  },
  {
    type: 'input',
    name: 'port',
    message: 'On which port are you going to run an app?',
    default: 3000
  }
];

inquirer
  .prompt(questions)
  .then(initialize);

function initialize(options) {
  webpackConfig.entry = webpackConfig.entry[options.app];

  devServer(webpackConfig, options);
}
