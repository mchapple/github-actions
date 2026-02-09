const core = require('@actions/core');
 
async function run() { 
  core.info('I am a custom JS action');
  /*
  1) parse inputs:
  1.1) base branch
  1.2) target branch
  1.3) github token
  1.4) working directory
  2) Execute the npm update command within the working dir
  3) Check
  4)
  4.1) add and commit files to base branch
  4.2) create a PR to base-branch
  4.3) otherwise conclude custom action 

  */
}
 
run();