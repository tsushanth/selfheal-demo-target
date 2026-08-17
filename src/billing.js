const { PaymentClient } = require("acme-pay-sdk");

const client = new PaymentClient({ apiKey: process.env.ACME_KEY });

function chargeCustomer(customerId, amountCents) {
  // acme-pay-sdk v1 API: charge(customerId, amountCents, currency)
  return client.charge(customerId, amountCents, "usd");
}

module.exports = { chargeCustomer };
