# Release Process And Cadence

Argo CD is being developed using the following process:

* Maintainers commit to work on set of features and enhancements and create GitHub milestone to track the work.
* We are trying to avoid delaying release and prefer moving the feature into the next release if we cannot complete it on time.
* The new release is published every **3 months**.
* Critical bug-fixes are cherry-picked into the release branch and delivered using patch releases as frequently as needed.

## Release Planning

| Release | Release Candidate 1   | General Availability | Release Champion                                      | Release Approver                                      |Checklist                                                      |
|---------|-----------------------|----------------------|-------------------------------------------------------|-------------------------------------------------------|---------------------------------------------------------------|
| v2.6    | Monday, Dec. 19, 2022 | Monday, Feb. 6, 2023 | [William Tam](https://github.com/wtam2018)            | [William Tam](https://github.com/wtam2018)            | [checklist](https://github.com/argoproj/argo-cd/issues/11563) |
| v2.7    | Monday, Mar. 20, 2023 | Monday, May 1, 2023  | [Pavel Kostohrys](https://github.com/pasha-codefresh) | [Pavel Kostohrys](https://github.com/pasha-codefresh) | [checklist](https://github.com/argoproj/argo-cd/issues/12762) |
| v2.8    | Monday, Jun. 26, 2023 | Monday, Aug. 7, 2023 | [Keith Chong](https://github.com/keithchong)          | [Keith Chong](https://github.com/keithchong)          | [checklist](https://github.com/argoproj/argo-cd/issues/13742) |
| v2.9    | Monday, Sep. 18, 2023 | Monday, Nov. 6, 2023 | [Leonardo Almeida](https://github.com/leoluz)         | [Leonardo Almeida](https://github.com/leoluz)         | [checklist](https://github.com/argoproj/argo-cd/issues/14078) |
| v2.10   | Monday, Dec. 18, 2023 | Monday, Feb. 5, 2024 | [Katie Lamkin](https://github.com/kmlamkin9)          |                                                       | [checklist](https://github.com/argoproj/argo-cd/issues/16339) |
| v2.11   | Monday, Mar. 18, 2024 | Monday, May 6, 2024  | 
| v2.12   | Monday, Jun. 17, 2024 | Monday, Aug. 5, 2024 | 

* Issues that maintainers committed to working on. Maintainers decide which features they are committing to work on during the next release based on
  their availability. Typically issues added offline by each maintainer and finalized during the contributors' meeting. Each such issue should be
  assigned to maintainer who plans to implement and test it.
* Nice to have improvements contributed by community contributors. Nice to have issues are typically not critical, smallish enhancements that could
  be contributed by community contributors. Maintainers are not committing to implement them but committing to review PR from the community.

The milestone should have a clear description of the most important features as well as the expected end date. This should provide clarity to end-users
about what to expect from the next release and when.

In addition to the next milestone, we need to maintain a draft of the upcoming release milestone. 

A minor Argo CD release occurs four times a year, once every three months. Each General Availability (GA) release is
preceded by several Release Candidates (RCs). The first RC is released seven weeks before the scheduled GA date. This
effectively means that there is a seven-week feature freeze.

We receive a lot of contributions from our awesome community, and we're very grateful for that fact. However, reviewing and testing PRs is a lot of (unplanned) work and therefore, we cannot guarantee that contributions (especially large or complex ones) made by the community receive a timely review within a release's time frame. Maintainers may decide on their own to put work on a PR together with the contributor and in this case, the maintainer will self-assigned the PR and thereby committing to review, eventually merge and later test it on the release scope.

## Release Testing

We need to make sure that each change, both from maintainers and community contributors, is tested well and have someone who is going to fix last-minute
bugs. In order to ensure it, each merged pull request must have an assigned maintainer before it gets merged. The assigned maintainer will be working on
testing the introduced changes and fixing of any introduced bugs.

We have a code freeze period two weeks before the release until the release branch is created. During code freeze no feature PR should be merged and it is ok
to merge bug fixes.

Maintainers assigned to a PR that's been merged should drive testing and work on fixing last-minute issues. For tracking purposes after verifying PR the assigned
the maintainer should label it with a `verified` label.

#### Release Champion

To help manage all the steps involved in a release, we will have a Release Champion. The Release Champion will be
responsible for a checklist of items for their release. The checklist is an issue template in the Argo CD repository.

The Release Champion can be anyone in the Argo CD community. Some tasks (like cherry-picking bug fixes and cutting
releases) require [Approver](https://github.com/argoproj/argoproj/blob/master/community/membership.md#community-membership)
membership. The Release Champion can delegate tasks when necessary and will be responsible for coordinating with the
Approver.

### Feature Acceptance Criteria

To be eligible for inclusion in a minor release, a new feature must meet the following criteria before the release’s RC
date.

If it is a large feature that involves significant design decisions, that feature must be described in a Proposal, and
that Proposal must be reviewed and merged.

The feature PR must include:

* Tests (passing)
* Documentation
* If necessary, a note in the Upgrading docs for the planned minor release
* The PR must be reviewed, approved, and merged by an Approver.

If these criteria are not met by the RC date, the feature will be ineligible for inclusion in the RC series or GA for
that minor release. It will have to wait for the next minor release.

### Security Patch Policy

CVEs in Argo CD code will be patched for all supported versions. Read more about supported versions in the [security policy for Argo CD](https://github.com/argoproj/argo-cd/security/policy#supported-versions).

### Dependencies Lifecycle Policy

Dependencies are evaluated before being introduced to ensure they:

1) are actively maintained
2) are maintained by trustworthy maintainers

These evaluations vary from dependency to dependencies.

Dependencies are also scheduled for removal if the project has been deprecated or if the project is no longer maintained.

CVEs in dependencies will be patched for all supported versions if the CVE is applicable and is assessed by Snyk to be
of high or critical severity. Automation generates a [new Snyk scan weekly](../snyk).
