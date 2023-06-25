const { transporter } = require("../config/mailconfig");

exports.sendMail = (to, subject, text, html, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `FinMate <finmate-no-reply@sehgaltech.com>`, // sender address
        to: to ? to : "sayuj.sehgal@gmail.com", // list of receivers
        subject: subject
          ? subject
          : "OTP confirmation alert for your finmate account", // Subject line
        text: text ? text : "Hello world?", // plain text body
        html: html ? html : "<b>Hello world, this is a demo mail</b>", // html body
        dsn: {
          id: id ? id : "some random message specific id",
          return: "headers",
          notify: ["failure"],
          recipient: "finmate-no-reply@sehgaltech.com",
        },
      });

      resolve(info);
    } catch (error) {
      reject(error);
    }
  });
};
