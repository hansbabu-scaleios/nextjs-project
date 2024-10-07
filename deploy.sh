#!/bin/bash

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

cd /home/ubuntu/deploy_nextjs_app

# Stash any local changes before pulling the latest code
git stash --include-untracked

# Pull the latest code from the repository
git pull origin master

# Apply the stashed changes back (if any)
git stash pop || echo "No local changes to reapply."

nvm use v16
yarn install &&
yarn build &&
pm2 restart next_hello_world_app
