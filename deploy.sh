#!/bin/bash

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

cd /home/ubuntu/nextjs-project
git pull origin master
nvm use v16
yarn install &&
yarn build &&
pm2 restart next_hello_world_app
