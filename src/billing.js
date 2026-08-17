const { PaymentClient } = require("acme-pay-sdk");

const client = new PaymentClient({ apiKey: process.env.ACME_KEY });

function chargeCustomer(customerId, amountCents) {
  return client.createCharge({ customerId, amountCents, currency: "usd" });
}

module.exports = { chargeCustomer };
