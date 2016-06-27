'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kryptonian ' + chalk.red('choo') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var files = [
      { template: 'README.md' },
      { template: 'package.json' },
      { template: 'index.js' },
      { template: 'index.html', output: 'public/index.html' }
    ];

    files.forEach(function (file) {
      this.fs.copy(this.templatePath(file.template), this.destinationPath(file.output || file.template));
    }.bind(this));
  },

  install: function () {
    this.npmInstall();
    //this.installDependencies();
  }
});
