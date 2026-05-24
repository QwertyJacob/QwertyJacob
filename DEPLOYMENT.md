# 🚀 Deployment Guide: Achieving your custom URL

To make your website available at **`https://qwertyjacob.github.io`** (instead of the current subfolder URL), follow these simple steps:

### 1. Create a New Repository
*   Go to GitHub and create a **new public repository**.
*   **Crucial:** Name it exactly `qwertyjacob.github.io`.
*   Initialize it with a README if you like, but it's not required.

### 2. Move the Website Code
*   Copy the `index.html` file from this repository (`QwertyJacob`).
*   Upload/Commit `index.html` to the **root** of your new `qwertyjacob.github.io` repository.

### 3. Enable GitHub Pages
*   In your new repository, go to **Settings** > **Pages**.
*   Under **Build and deployment**, ensure the source is set to "Deploy from a branch".
*   Select the `main` branch and the `/ (root)` folder.
*   Click **Save**.

### 4. Verification
*   Wait about 1-2 minutes.
*   Visit `https://qwertyjacob.github.io`.
*   Your new "admirable" portfolio should now be live!

---

### Why do this?
GitHub treats repositories named `username.github.io` specially. They serve content directly from the root domain, which is the gold standard for personal academic portfolios.

*Note: Your Profile README (the one people see when they search for you on GitHub) will stay in the current `QwertyJacob` repository.*
