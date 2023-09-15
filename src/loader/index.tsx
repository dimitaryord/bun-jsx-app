import * as elements from 'typed-html'

const AppProvider = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script type="module" src="/main.js" defer></script>
    <link rel="stylesheet" href="/public/style.css"/>
</head>
<body>
    <div id="app">
        ${children}
    </div>
</body>
</html>
`

export default AppProvider