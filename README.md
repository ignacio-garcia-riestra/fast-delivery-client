fast-delivery-client is a simple web application.


## GitFlow

### Main branches

#### Main
Project's main branch. Contains the production code. We never work on it. The only branches we create from here are the hotfix/*

#### Develop
Development branch. We never work on it. From this branch we create all the feature/* ones. Develop branch merges on Main through release branches when we are ready to deploy the project.

### Support branches

#### Feature
Normally we'll work on these branches. By default, will be named with prefix feature/ followed by branch's name. We always create them from develop branch and we kill'em after merging them on develop

#### Release
These are the branches that we will use to create new versions to deploy to production. They are prefixed with release/ followed by the version number. It is the mechanism through which we merge the new developments we have in develop on main. We are implementing SemVer for the version numbers.

#### Hotfix
We use these branches to fix critical bugs founded on production. We name them using hotfix/ prefix followed by the branch's name. These branches are always created from Main and will be merged both on develop and main, so the hotfix is set on production and is available for new iterations on develop branch

#### Bugfix
These are the branches that are used to fix bugs that have not yet reached production. They are prefixed with bugfix/ followed by the branch name. They are ALWAYS born from the develop branch.


### Installation
A prerequisite is a working Git installation.

```shell
apt-get install git-flow
```

### Usage

After cloning the repository, each developer must run this command for the first time from the project's root folder:

```shell
git flow init
```
Git Flow will ask us a series of questions from the terminal, we will answer by default (by simply pressing enter) each and every one of them. If we want to avoid this step, using the -d flag will set all the default settings.


## Example working flow case 

### working with feature branches

Create a feature branch. The name is mandatory (the prefix "feature/" will be added automatically), the base is optional and would allow us to create the feature from a specific branch. If not specified by default is develop:

```shell
git flow feature start create-register-route
```

Upload the branch to the remote repository:

```shell
git flow feature publish create-register-route
```

From this point on, work with commits and pushes as we usually do with git, until the functionality is finished.

Finalize a feature and merge it against develop (or the base we declared when creating it):

```shell
git flow feature finish create-register-route
```
Remove the feature branch:

```shell
git flow feature delete create-register-route
```

### working with release branches

The release branches are used when we are going to deploy a new version of our development. For this Git Flow offers the git flow release command, which offers several subcommands.

Create a release branch. The base is optional and would allow us to create the release from a specific branch. If not specified, the default is develop:

```shell
git flow release start 1.0.0
```

Upload the branch to the remote repository:

```shell
git flow release publish 1.0.0
```

From this point on, work with commits and pushes as we usually do with git, until the release is ready to be sent to production.

Finalize a release and merge it against develop (or the base we declared when creating it) and main:

```shell
git flow release finish 1.0.0
```
Remove the release branch:

```shell
git flow release delete 1.0.0
```

### working with hotfix branches

If a bug is detected in production, we will perform a hotfix. For this Git Flow offers the command git flow hotfix, which offers several subcommands:

Create a hotfix branch.
The name is mandatory (the prefix "hotfix/" will be added automatically), the base is optional and would allow us to create the hotfix from a specific branch. If not specified, it defaults to main:

```shell
git flow hotfix start fix-register-route
```

Upload the branch to the remote repository:

```shell
git flow hotfix publish fix-register-route
```

From this point on, work with commits and pushes as we usually do with git, until the hotfix is done.

Finalize a hotfix and merge it against main (or the base we declared when creating it):

```shell
git flow hotfix finish fix-register-route
```
Remove the hotfix branch:

```shell
git flow hotfix delete fix-register-route
```

A hotfix branch, once completed, will automatically merge over main and develop.
When finishing a hotfix branch, Git Flow prompts us to enter 3 messages:
The first message is for the commit that will be merged on main.
The second message is for the tag that Git Flow will create to identify this version.
The third message is for the commit that will be merged into develop.


### working with bugfix branches

If a bug is detected that has not yet reached production, we will perform a bugfix. For this purpose Git Flow offers the command git flow bugfix, which offers several subcommands:

Create a bugfix branch. 
The name is mandatory (the prefix "bugfix/" will be added automatically), the base is optional and would allow us to create the bugfix from a specific branch. If not specified by default is develop:

```shell
git flow bugfix start fix-register-route
```

Upload the branch to the remote repository:

```shell
git flow bugfix publish fix-register-route
```

From this point on, work with commits and pushes as we usually do with git, until the bugfix is done.

Finalize a bugfix and merge it against develop (or the base we declared when creating it):

```shell
git flow bugfix finish fix-register-route
```
Remove the bugfix branch:

```shell
git flow bugfix delete fix-register-route
```
