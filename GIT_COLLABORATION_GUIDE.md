# Git Collaboration Guide - Working Together on a Project

This guide will teach you how to collaborate with your partner using Git and VS Code.

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Daily Workflow](#daily-workflow)
3. [Handling Conflicts](#handling-conflicts)
4. [Best Practices](#best-practices)
5. [Common Commands](#common-commands)
6. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Make Sure Git is Installed

Open terminal in VS Code (Ctrl + ` or View → Terminal) and check:
```bash
git --version
```

If it's not installed, download from: https://git-scm.com/

### Step 2: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Initialize Repository (If Not Already Done)

If your project doesn't have Git yet:
```bash
cd Projekti
git init
```

### Step 4: Connect to Remote Repository

**Option A: If you're creating a new repository on GitHub/GitLab:**
```bash
git remote add origin https://github.com/username/project-name.git
```

**Option B: If your partner already created the repository:**
```bash
git remote add origin [repository-url]
```

**Option C: If you're cloning an existing repository:**
```bash
git clone https://github.com/username/project-name.git
cd project-name
```

### Step 5: First Commit (If Starting Fresh)

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

## Daily Workflow

### ⚠️ ALWAYS DO THIS FIRST - Before Starting Work:

```bash
# 1. Pull the latest changes from your partner
git pull origin main

# This gets all the changes your partner made
```

### Then Work on Your Files:

1. Edit your files in VS Code
2. Save your work
3. Test that everything works

### When You're Done with Your Work:

```bash
# 1. Check what files you changed
git status

# 2. Add your changes
git add .                    # Adds all changes
# OR
git add about.html           # Adds specific file

# 3. Commit with a clear message
git commit -m "Added about page with team section"

# 4. Push to share with your partner
git push origin main
```

---

## Complete Workflow Example

### Scenario: Your partner is working on about.html, you're working on home.html

**Morning - Starting Work:**
```bash
# Always pull first!
git pull origin main

# Now you have the latest version of about.html
```

**During Work:**
- Edit `home.html` in VS Code
- Save frequently
- Test in browser

**Before Pushing:**
```bash
# Check what changed
git status

# See the actual changes
git diff
```

**Pushing Your Work:**
```bash
git add home.html
git commit -m "Updated home page with new services section"
git push origin main
```

**Your Partner's Turn:**
They do the same:
```bash
git pull origin main    # Gets your changes
# Work on their files
git add about.html
git commit -m "Added contact information to about page"
git push origin main
```

---

## Handling Conflicts

### What is a Conflict?

A conflict happens when both of you edit the same part of the same file.

### Example Conflict:

**Your version:**
```html
<h1>Welcome to Our Site</h1>
```

**Partner's version:**
```html
<h1>Welcome to A&E Beauty</h1>
```

### How to Resolve Conflicts:

#### Step 1: Git Will Tell You There's a Conflict

When you run `git pull`, you might see:
```
Auto-merging home.html
CONFLICT (content): Merge conflict in home.html
```

#### Step 2: VS Code Will Show Conflict Markers

The file will look like this:
```html
<<<<<<< HEAD
<h1>Welcome to Our Site</h1>
=======
<h1>Welcome to A&E Beauty</h1>
>>>>>>> branch-name
```

#### Step 3: Resolve the Conflict

You have 3 options in VS Code:

**Option A: Accept Current Change (Yours)**
- Click "Accept Current Change"
- Keeps your version

**Option B: Accept Incoming Change (Theirs)**
- Click "Accept Incoming Change"
- Keeps their version

**Option C: Accept Both Changes**
- Click "Accept Both Changes"
- Keeps both (if it makes sense)

**Option D: Manual Edit**
- Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Edit the code to what you want
- Save the file

#### Step 4: Complete the Merge

After resolving:
```bash
git add home.html
git commit -m "Resolved merge conflict in home.html"
git push origin main
```

---

## Best Practices for Team Collaboration

### 1. **Communication is Key**
- Tell your partner what file you're working on
- "I'm working on home.html, don't edit it right now"
- "I'm done with about.html, you can work on it now"

### 2. **Work on Different Files When Possible**
- You: `home.html`
- Partner: `about.html`
- Less conflicts = easier collaboration

### 3. **Pull Before You Push**
```bash
# ALWAYS do this first
git pull origin main
```

### 4. **Commit Often, Push Regularly**
- Don't wait until everything is perfect
- Push small, working changes
- Better to have many small commits than one huge one

### 5. **Write Clear Commit Messages**
```bash
# Good messages:
git commit -m "Added navigation menu to home page"
git commit -m "Fixed mobile responsive layout"
git commit -m "Added contact form validation"

# Bad messages:
git commit -m "stuff"
git commit -m "changes"
git commit -m "asdf"
```

### 6. **Use Branches for Big Features (Optional)**
```bash
# Create a branch for a new feature
git checkout -b feature-new-page

# Work on it
# ...

# When done, merge back
git checkout main
git merge feature-new-page
git push origin main
```

### 7. **Don't Commit Broken Code**
- Test your changes before committing
- Make sure the page loads
- Fix errors before pushing

---

## Common Git Commands

### Checking Status
```bash
git status              # See what files changed
git diff               # See what changed in detail
git log                # See commit history
```

### Adding Changes
```bash
git add .              # Add all changes
git add file.html      # Add specific file
git add *.html         # Add all HTML files
```

### Committing
```bash
git commit -m "Message"           # Commit with message
git commit -am "Message"          # Add and commit in one step
```

### Pushing/Pulling
```bash
git push origin main              # Send your changes
git pull origin main              # Get partner's changes
git fetch                         # Get changes without merging
```

### Undoing Changes
```bash
git restore file.html             # Undo changes to file (before commit)
git restore --staged file.html    # Unstage file
git reset HEAD~1                  # Undo last commit (keeps changes)
```

---

## VS Code Git Integration

### Using VS Code's Built-in Git

VS Code has a great Git interface:

1. **Source Control Panel**: Click the branch icon on the left sidebar (or Ctrl+Shift+G)

2. **See Changes**: 
   - Files with changes show up in the Source Control panel
   - Click a file to see what changed

3. **Stage Changes**:
   - Click the `+` next to a file to stage it
   - Or click `+` next to "Changes" to stage all

4. **Commit**:
   - Type a message in the box at the top
   - Click the checkmark (✓) or press Ctrl+Enter

5. **Push/Pull**:
   - Click the `...` menu
   - Select "Push" or "Pull"

6. **Resolve Conflicts**:
   - VS Code will highlight conflicts
   - Use the buttons to accept changes
   - Or edit manually

---

## Workflow for Your Specific Situation

### Your Partner is Working on about.html

**You should:**
1. Pull before starting: `git pull origin main`
2. Work on different files (home.html, style.css, script.js)
3. If you need to edit the same file, communicate first
4. Pull again before pushing: `git pull origin main`
5. Push your changes: `git push origin main`

**Example Day:**
```bash
# Morning
git pull origin main
# Now you have their latest about.html

# Work on home.html
# ... edit, save, test ...

# Before pushing
git pull origin main    # Get any new changes
git add home.html
git commit -m "Updated home page hero section"
git push origin main

# Your partner can now pull and see your changes
```

---

## Troubleshooting

### "Your branch is behind 'origin/main'"
```bash
# Just pull the changes
git pull origin main
```

### "Failed to push some refs"
```bash
# Someone else pushed first, pull their changes
git pull origin main
# Resolve any conflicts
git push origin main
```

### "Merge conflict"
- Follow the conflict resolution steps above
- VS Code will help you resolve it

### "File not found" or "Path issues"
- Make sure you're in the right directory: `cd Projekti`
- Check file paths are correct
- Use relative paths: `about.html` not `C:/Users/...`

### Accidentally committed wrong file
```bash
# Undo last commit (keeps changes)
git reset HEAD~1

# Or unstage specific file
git restore --staged file.html
```

### Want to see what partner changed
```bash
git pull origin main
git log                    # See commit history
git show [commit-hash]     # See specific commit
```

---

## Quick Reference Card

### Start of Day:
```bash
git pull origin main
```

### During Work:
- Edit files
- Save frequently
- Test your changes

### End of Work Session:
```bash
git status
git add .
git commit -m "Clear message about what you did"
git pull origin main    # Get latest changes
git push origin main
```

### If Conflict:
1. VS Code shows conflict markers
2. Choose which version to keep
3. Save file
4. `git add file.html`
5. `git commit -m "Resolved conflict"`
6. `git push origin main`

---

## Tips for Smooth Collaboration

1. **Coordinate**: "I'm working on X file from 2-4pm"
2. **Pull First**: Always pull before starting work
3. **Small Commits**: Push working code frequently
4. **Clear Messages**: Describe what you changed
5. **Test Before Push**: Make sure it works
6. **Different Files**: Work on different files when possible
7. **Communicate Conflicts**: If you see a conflict, discuss with partner

---

## Next Steps

1. Make sure both of you have Git installed
2. Decide on a repository (GitHub, GitLab, or local)
3. One person initializes, the other clones
4. Start with the daily workflow
5. Practice pulling and pushing
6. Learn conflict resolution (it will happen!)

**Remember**: Git is a tool to help you work together. Don't be afraid of conflicts - they're normal and easy to fix! 🚀

