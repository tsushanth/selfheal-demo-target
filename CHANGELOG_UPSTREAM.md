# acme-pay-sdk v2.0.0 (upstream, simulated for this demo)

BREAKING: `PaymentClient.charge(customerId, amountCents, currency)` is removed.
Replaced by `PaymentClient.createCharge({ customerId, amountCents, currency })`,
which returns a Promise (v1's `charge` was synchronous-looking but internally
callback-based — v2 makes the async nature explicit).
