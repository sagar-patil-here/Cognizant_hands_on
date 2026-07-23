# Git Hands-on Part 3: Branching & Merging

Here are the essential commands for working with branches:

```bash
# List all local branches
git branch

# Create a new branch
git branch feature-branch

# Switch to a specific branch
git checkout feature-branch
# Or using the newer switch command:
git switch feature-branch

# Create and switch to a new branch in one command
git checkout -b new-feature
# Or:
git switch -c new-feature

# Merge a branch into your current branch
git merge feature-branch
```
