export default function template(title, content) {

    const page = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="public/style.css" rel="stylesheet">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="public/client.bundle.js"></script>
            </body>
        </html>
    `;

    return page;
}