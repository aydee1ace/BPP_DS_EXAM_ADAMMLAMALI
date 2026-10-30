# Data Science Assessment Prep

A free, client-side React learning app with hints, second attempts, explanations, mistake review, mock exams and local progress tracking. No API key or database is required.

## Local setup
1. Install Node.js LTS and Git.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown by Vite.

## Production check
Run `npm run build`, then `npm run preview`.

## GitHub Pages
1. Create an empty public GitHub repository.
2. Push this project to its `main` branch.
3. In repository **Settings > Pages**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and observe the deployment.
5. The site URL appears in the successful deployment and Pages settings.

The workflow builds the `dist` folder and publishes it automatically after each push to `main`.

## Privacy
Progress is stored only in the current browser's localStorage. Do not add confidential, personal or proprietary data to a public repository.

## Add questions
Edit `src/questions.ts`. Every question needs four options, a zero-based `correctAnswer`, hint, explanation and memory tip.
