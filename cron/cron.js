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
exports.cronService = () => {
  cron.schedule(
    RECURRING_PAYMENT_CRON_SCHEDULE,
    async () => {
      console.log(
        "running a task every day to calculate new payment status" + new Date()
      );
      await updatePaymentStatus();
      await sendPaymentReminderMail();
    },
    {
      scheduled: RECURRING_PAYMENT_CRON_START,
      timezone: RECURRING_PAYMENT_CRON_TIMEZONE,
    }
  );
};
