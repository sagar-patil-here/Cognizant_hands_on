# Git Hands-on Part 4: Remote Repositories

Here are the essential commands for interacting with remote repositories (like GitHub):

```bash
# View configured remote repositories
git remote -v

# Add a new remote repository
git remote add origin https://github.com/user/repo.git

# Fetch changes from the remote repository without merging
git fetch origin

# Fetch and merge changes from the remote repository (pull)
git pull origin main

# Push your local commits to the remote repository
git push origin main
```
