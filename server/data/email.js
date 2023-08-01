module.exports = {
  partOne: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          @media (max-width: 500px){
              :root{
                  font-size: 12px;
              }
          }
      </style>
  </head>
  <body style="font-family: sans-serif;margin: 0px;background: grey;">
      <div style="width:75%;margin:auto;background:white !important;height:100%;">
      <div style="background: #0c212c;color:white;padding:1rem;height:50px;display: flex;align-items: center;">
          <img src="https://coducation.tech/assets/decorationImages/logo.png" style="height:100%;"/>
          <h2>Coducation</h2>
      </div>
      <div style="text-align:center;width:90%;margin:auto;">
      <h1>Thank you for signing up for Coducation!</h1>
              <h2 style="margin-top: 0rem">You are one step away from confirming your account and preventing its deletion.</h2>
              <h3 style="margin-bottom: 4rem;">Please note signing up this means you agree to our Terms of Service and Privacy Policy</h3>
              <a style="background:rgb(0, 102, 255);text-decoration: none;padding:1rem;color:white;border-radius: 10px;" href="home.coducation.tech/users/confirm/`,
  partTwo: `" style="margin-bottom: 300px;">Press me to signup</a>
          </div>
          <footer style="background: #0c212c; margin-top: 30vh">
              <p style="color:white;padding:1rem;">&copy Coducation 2023</p>
          </footer>
      </div>
  </body>
  </html>`,
};
