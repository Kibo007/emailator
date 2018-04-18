const keys = require('../../config/keys');

module.exports = survay => {
  return `
        <html>
        <body>
            <div style="text-align: center">
            <h3>Please answare on fellowing question</h3>
            <p>${survay.body}</p>
            <div>
                <a href="${keys.redirectDomain}" >YES</a>
            </div>
            <div>
                <a href="${keys.redirectDomain}" >NO</a>
            </div>
            </div>
        </body>
        </html>
    `;
};
