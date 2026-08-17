# selfheal-demo-target

A minimal sample app with a deliberately outdated dependency usage
(`src/billing.js` calls the v1 `acme-pay-sdk` API). `CHANGELOG_UPSTREAM.md`
simulates the v2 breaking-change notes.

This repo exists to give [selfheal-cli](https://github.com/tsushanth/selfheal-cli)
a safe, owned target to open real migration PRs against — rather than filing
unsolicited AI-generated PRs on third-party OSS repos.
