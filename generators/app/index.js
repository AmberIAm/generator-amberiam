'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous ' + chalk.red('generator-amberiam') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    //编写渲染模板
    this.fs.copy(
       this.templatePath('gulpfile.js'),
       this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
       this.templatePath('package.json'),
       this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('src/*.html'),
      this.destinationPath('src/')
    );
    this.fs.copy(
      this.templatePath('src/sass/*'),
      this.destinationPath('src/sass/')
    );
    this.fs.copy(
      this.templatePath('src/css/*'),
      this.destinationPath('src/css/')
    );
    this.fs.copy(
      this.templatePath('src/js/*'),
      this.destinationPath('src/js/')
    );
  }

  install() {
    this.installDependencies();
  }
};
