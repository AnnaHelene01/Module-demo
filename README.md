# Module-demo
## Web packing
#### Pakke HTML & JS
1. Remove all in gitignore exepct this:
 Dependency directories
node_modules/

2. Run (to create package.json)
```
npm init -y
```

3. Run (to install webpack, package.json will get updated)
```
npm install webpack webpack-cli --save-dev
```

4. Ta tak i html filen 
```
npm install --save-dev html-webpack-plugin
```

5. Gå i package.json filen, gå til script , legg til komma og skriv :
"build": "webpack"

6. Lag en ny fil: webpack.config.js

7. Legger til disse to for å si fra til webpack at de funker:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

8. Legger til disse to i webpack.config.js:
module.exports = { 
    mode: "production", 
    entry: "./index.js", (begynne med index.js)
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
      output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
};

9. Now we run
```
npm run build
```
Nå har vi pakket html og js

10. Gå i index.html, kommenter ut script src i head og kjør npm run build IGJEN.

11. Last siden til netlify, I RIKTIG BRANCH og velg publish directory dist/ for å publisere kun dist mappen

#### Pakke CSS
12. Kommenter ut link til css i html filen din.

13. Går i index.js på ROOT og legger til import "./style.css"

14. Run (for å ta seg av styling/css)
```
npm install --save-dev style-loader css-loader
```

15. Legg dette til i webpack.config.js under output:
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

16. Run: 
```
npm run build
```

17. 
