# Painting Equipment online-store on React
## Page link: https://penguih.github.io/painting-equipment-store-react/



### Install:
#### `npm install`     установка пакетов
#### `npm start`       запустить localhost

### GitHub:
#### `git init`                            нужно для инициализации папки и файлов
#### `git remote add origin /link/`        установить новую ссылку
#### `git add .`                           нужно для инициализации нужных файлов файлов
#### `git commit -m ""`                    загрузка обновления
#### `git push origin master`              загрузка в дерикторию гитхаба
#### `git remote set-url origin /link/`    установить новую ссылку
### [GitHub deploy gh-pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f):
### package.json
#### `"homepage": "http://penguih.github.io/my-app"`
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
#### `npm run deploy`                      загрузка обновления build на GitHib
