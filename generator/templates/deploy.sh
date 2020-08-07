#!/bin/sh

# abort on errors
set -e

# use nvm
source ~/.nvm/nvm.sh
echo "当前nvm版本"
nvm --version

echo "当前node版本"
node -v

NODE_VERSION="v8.11.3"
nvm use $NODE_VERSION || nvm install $NODE_VERSION

echo "切换到node版本"
node -v

# build
buildDir=/srv/builds/<%=options.project_git_name%>
branch=$1
if [ -z "$branch" ]; then
    branch='origin/master'
fi

if [ ! -d "$buildDir" ]; then
    cd /srv/builds/
    git clone git@bitbucket.org:<%=options.project_git_name%>.git
fi
cd $buildDir
git checkout -- .
git fetch
git checkout $branch
if [ "$?" = "1" ]; then
    echo -e "\033[31mcheckout error and exit.\033[0m"
    exit 1
fi
npm install
npm run build
time_now=`date "+%Y-%m-%d %H:%M:%S"`
commit_hash=`git log --pretty=oneline | head -n 1`
echo "[$time_now] [build] branch=> $branch, hash => $commit_hash success " >> /srv/builds/.<%=options.project_git_name%>_log

echo "------ Last Commit: -------"
git status | head -1
git show -s --date=relative | head -3
echo "-------------------------------"

# deploy
deployDir=/srv/<%=options.project_git_name%>
if [ ! -d "$deployDir" ]; then
    mkdir -p /srv/<%=options.project_git_name%>/dist
fi
echo -e "\033[32msync the dist from build to deploy.\033[0m"

#first time sync hashed resource  then replace index.html to prevent possible resource not found
rsync -rvpog --checksum --exclude 'index.html' /srv/builds/<%=options.project_git_name%>/dist/ /srv/<%=options.project_git_name%>/dist/
rsync -rvpog --checksum /srv/builds/<%=options.project_git_name%>/dist/index.html /srv/<%=options.project_git_name%>/dist/
