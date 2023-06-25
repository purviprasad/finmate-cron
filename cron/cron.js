var cron = require("node-cron");
const {
  RECURRING_PAYMENT_CRON_SCHEDULE,
  RECURRING_PAYMENT_CRON_START,
  RECURRING_PAYMENT_CRON_TIMEZONE,
} = require("../config/constants");
const {
  updatePaymentStatus,
  sendPaymentReminderMail,
} = require("../controllers/UpdatePaymentStatus");
export default async function handler(req, res) {
  // cron.schedule(
  //   RECURRING_PAYMENT_CRON_SCHEDULE,
  //   async () => {
  try {
    console.log(
      "running a task every day to calculate new payment status & send reminder emails" +
        new Date()
    );
    await updatePaymentStatus();
    await sendPaymentReminderMail();
    res.status(200).end("Hello Cron!");
  } catch (err) {
    console.log(err);
  }
  // },
  // {
  //   scheduled: RECURRING_PAYMENT_CRON_START,
  //   timezone: RECURRING_PAYMENT_CRON_TIMEZONE,
  // }
  // );
}
// cronService();
