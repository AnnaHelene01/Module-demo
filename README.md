# Module-demo

## VITE packing
1. Clear .gitignore for everything exepct:
Dependency directories
node_modules/

2. Run 
```
npm init -y
```

3. Initialize vite with
```
npm i vite
```

4. Gå inn i package.json filen, under scripts legg til:
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"

5. Run (to make a dist folder)
```
npm run build
```

6. Set up site in Netlify, with CORRECT BRANCH and add
dist/ in 

Now you have packed your project in dist and deployed site with only the dist folder!
Thanks vite

