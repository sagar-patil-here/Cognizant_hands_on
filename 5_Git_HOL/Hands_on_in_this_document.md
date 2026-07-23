# Git Hands-on Part 5: Advanced Operations

Here are some advanced Git commands for undoing changes and stashing:

```bash
# Temporarily shelve (stash) your uncommitted changes
git stash

# Apply the most recently stashed changes
git stash pop

# Undo the last commit while keeping the changes in your working directory
git reset --soft HEAD~1

# Completely undo the last commit and discard changes
git reset --hard HEAD~1

# Create a new commit that undoes the changes from a previous commit
git revert <commit-hash>
```
