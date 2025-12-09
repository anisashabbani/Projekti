# Quick Start: Git Collaboration for Your Project

## 🚀 Getting Started Right Now

### Step 1: Open Terminal in VS Code
- Press `Ctrl + ` ` (backtick) or go to View → Terminal

### Step 2: Navigate to Your Project
```bash
cd Projekti
```

### Step 3: Check if Git is Already Set Up
```bash
git status
```

**If you see "not a git repository":**
```bash
git init
git add .
git commit -m "Initial commit"
```

**If you see file changes:** Git is already set up! Continue to Step 4.

### Step 4: Connect to Your Partner's Repository

**If your partner created a GitHub/GitLab repository:**
```bash
git remote add origin [repository-url-from-partner]
```

**If you need to clone their repository:**
```bash
cd ..
git clone [repository-url] Projekti
cd Projekti
```

### Step 5: Get Your Partner's Work (about.html)
```bash
git pull origin main
```

Now you should have their `about.html` file!

---

## 📝 Daily Workflow (Do This Every Time)

### Before Starting Work:
```bash
git pull origin main
```
**This gets your partner's latest changes (like about.html)**

### After You Finish Your Work:
```bash
git status                    # See what you changed
git add .                     # Add all your changes
git commit -m "What you did"  # Save with a message
git pull origin main          # Get any new changes
git push origin main          # Share your work
```

---

## 🎯 Your Specific Situation

### Your Partner is Working on: `about.html`
### You Should Work On: `home.html`, `style.css`, `script.js`

**This way you avoid conflicts!**

### Example Session:

```bash
# 1. Start of day - get their work
git pull origin main
# ✅ Now you have their latest about.html

# 2. Work on your files
# Edit home.html, style.css, script.js in VS Code
# Save and test

# 3. When done - share your work
git add home.html style.css script.js
git commit -m "Updated home page and added new styles"
git pull origin main    # Get any new changes they made
git push origin main    # Share your changes
```

---

## ⚠️ If You Both Edit the Same File

### Option 1: Communicate First (Best!)
- "Hey, I'm editing style.css right now, can you wait?"
- Work on different files when possible

### Option 2: Handle the Conflict
When you `git pull`, you might see:
```
CONFLICT: Merge conflict in style.css
```

**VS Code will help you:**
1. Open the file - you'll see conflict markers
2. Choose "Accept Current Change" or "Accept Incoming Change"
3. Save the file
4. Run:
```bash
git add style.css
git commit -m "Resolved conflict in style.css"
git push origin main
```

---

## 🔍 Using VS Code's Git Interface

### Visual Way (Easier!):

1. **Click the Source Control icon** (branch icon) in left sidebar
   - Or press `Ctrl+Shift+G`

2. **See Changes:**
   - Files you changed show with an "M" (Modified)
   - New files show with a "U" (Untracked)

3. **Stage Changes:**
   - Click the `+` next to files you want to commit
   - Or click `+` next to "Changes" to add all

4. **Commit:**
   - Type a message in the box (top of Source Control panel)
   - Click the checkmark ✓ or press `Ctrl+Enter`

5. **Push/Pull:**
   - Click the `...` menu (three dots)
   - Choose "Pull" or "Push"

---

## 📋 Quick Checklist

### Before You Start Coding:
- [ ] `git pull origin main` - Get latest changes
- [ ] Check what files your partner is working on
- [ ] Choose different files to work on

### While Coding:
- [ ] Save your work frequently
- [ ] Test that it works
- [ ] Don't edit files your partner is working on

### Before Pushing:
- [ ] `git status` - See what changed
- [ ] `git pull origin main` - Get latest changes
- [ ] Resolve any conflicts if needed
- [ ] `git add .` - Stage your changes
- [ ] `git commit -m "Clear message"` - Commit
- [ ] `git push origin main` - Share your work

---

## 💬 Communication Tips

**Good messages to send your partner:**
- "I'm working on home.html right now"
- "Just pushed my changes to style.css"
- "Done with my work, you can pull now"
- "I'm editing the header, can you avoid style.css for a bit?"

**When to coordinate:**
- Before editing shared files (like style.css)
- When you're about to push major changes
- If you see a conflict

---

## 🆘 Common Problems & Solutions

### Problem: "Your branch is behind"
```bash
git pull origin main
```

### Problem: "Failed to push"
```bash
git pull origin main    # Get their changes first
git push origin main    # Then push yours
```

### Problem: "Merge conflict"
- VS Code will highlight it
- Choose which version to keep
- Save and commit

### Problem: "File not found"
- Check you're in the right folder: `cd Projekti`
- Check file name matches exactly (case-sensitive!)

---

## 🎓 Next Steps

1. **Right now:** Run `git pull origin main` to get about.html
2. **Today:** Work on your files (home.html, style.css, etc.)
3. **Before leaving:** Push your changes
4. **Tomorrow:** Pull first, then work, then push

**Remember:** Pull → Work → Push. That's the cycle! 🔄

---

## 📚 Need More Help?

- See `GIT_COLLABORATION_GUIDE.md` for detailed explanations
- Ask your partner if you're stuck
- Google the error message - someone else had it too!

Good luck with your project! 🚀

