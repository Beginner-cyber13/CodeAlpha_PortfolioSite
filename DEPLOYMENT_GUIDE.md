# How to Deploy Your Website to GitHub

This guide explains how to upload your website code to GitHub and host it live using GitHub Pages.

## Prerequisites
1.  **Git Installed**: You need Git installed on your computer. You can check by typing `git --version` in your terminal.
2.  **GitHub Account**: You need an account at [github.com](https://github.com).

---

## Part 1: First-Time Setup (New Project)

Do this only once for each new project.

1.  **Create a Repository on GitHub**:
    *   Go to [github.com/new](https://github.com/new).
    *   Name your repository (e.g., `my-portfolio`).
    *   Keep it **Public**.
    *   **Do not** check "Add a README file" (it's easier to start empty).
    *   Click **Create repository**.

2.  **Open Terminal in Your Project Folder**:
    *   Right-click your project folder and select "Open in Terminal" (or "Git Bash Here").

3.  **Run These Commands**:
    Copy and run these commands one by one:

    ```bash
    # 1. Initialize Git (starts tracking your files)
    git init

    # 2. Add all files to the staging area
    git add .

    # 3. Save your changes (create a "commit")
    git commit -m "Initial commit"

    # 4. Rename the branch to 'main'
    git branch -M main

    # 5. Link your local project to GitHub (Replace URL with your own repo URL)
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

    # 6. Upload your code
    git push -u origin main
    ```

---

## Part 2: Updating Your Website

Do this whenever you make changes to your files (like editing HTML or CSS).

1.  Open your terminal in the project folder.
2.  Run these three commands:

    ```bash
    # 1. Add your changes
    git add .

    # 2. Save your changes
    git commit -m "Update website content"

    # 3. Upload to GitHub
    git push
    ```

---

## Part 3: Making It Live (GitHub Pages)

1.  Go to your repository page on GitHub.
2.  Click **Settings** (top right tab).
3.  Click **Pages** (in the left sidebar).
4.  Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
5.  Select **main** branch and **/(root)** folder.
6.  Click **Save**.
7.  Wait 1-2 minutes, and your site will be live at the provided URL!

---

## Troubleshooting: "Updates were rejected" (Merge Conflict)

If you see an error like `Updates were rejected because the remote contains work that you do not have locally`, it means something changed on GitHub that isn't on your computer (like if you created a README on the website).

**Fix**:
```bash
# 1. Download the changes from GitHub
git pull origin main --allow-unrelated-histories

# 2. If it opens a confusing text editor, just type ':qa' and hit Enter (vim) or close it.
# 3. Upload again
git push -u origin main
```
