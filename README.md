# Yume

<div align="center">
  <img align="center"  width="auto" height="auto" src="/public/mstile-150x150.png" />
  <br/>

  <div id="user-content-toc">
    <ul>
      <summary>
      <h1 style="display: inline-block;">Yume</h1>
      <br/>
      <h3 style="display: inline-block;">The AI-powered social wish-list platform</h3>
      </summary>
    </ul>
  </div>
</div>

Yume client is the main entry point for our users. It contains the source code for our web app.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [Yume](#yume)
  - [Getting Started](#getting-started)
    - [Working locally](#working-locally)
  - [Using conventional commits](#using-conventional-commits)
    - [Using commitizen](#using-commitizen)
  - [Development flow](#development-flow)
    - [There is no develop branch](#there-is-no-develop-branch)
    - [Branch naming convention](#branch-naming-convention)
    - [Branch category](#branch-category)
    - [Branch reference](#branch-reference)
    - [Branch description](#branch-description)
    - [Branch name examples](#branch-name-examples)
  - [Testing strategy](#testing-strategy)
    - [Unit tests](#unit-tests)
    - [E2E Tests](#e2e-tests)
  - [Storybook for component documentation](#storybook-for-component-documentation)
    - [Storybook structure](#storybook-structure)
  - [References](#references)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

Clone the project

```sh
git clone https://github.com/yumedotso/client
```

Install the dependencies

```sh
yarn install
```

Copy the .env file and add the variables if needed

```sh
cp .env.example .env
```

### Working locally

Local development using local APIs

```sh
# Local instance
yarn dev
```

Run storybook (isolated component development) for more info see: [Storybook for component documentation](#storybook-for-component-documentation)

```sh
yarn storybook
```

Run the unit tests, for more info see: [Testing strategy: unitary](#unit-tests)

```sh
yarn test:unit
```

Run e2e tests for more info see: [Testing strategy: unitary](#unit-tests)

```sh
yarn test:e2e
```

## Using conventional commits

The Conventional Commits specification is a lightweight convention on top of commit messages. If you want to read more about it: [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

This repository is created using [husky](https://www.npmjs.com/package/husky), [commitlint](https://commitlint.js.org/#/) and [lint-staged](https://www.npmjs.com/package/lint-staged) so the convectional commits is always applied before pushing to a branch.

Then the only thing you need to do is commit your work following the **conventional commit specification**. If you don't follow the specification don't worry, a prompt will appear telling you the correct way to create your commit.

The tipical categories are:

- _feat_ is for adding a new feature
- _fix_ is for fixing a bug
- _refactor_ is for changing code for peformance or convenience purpose (e.g. readibility)
- _chore_ is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)
- _docs_ is to add documentation (readme, swagger, storybook, etc).

If you even wan to add more semantic to the commit you add a scope:

```sh
git commit <category(scope): description>
```

One example could be (taking into account you are developing something related to the layout and its a new feature).

```sh
git commit <feat(layout): sidenav redirection added>
```

### Using commitizen

At the beggining it may be difficult to get used to the conventions. If you are just getting started with commitlint I'd reccomend to use the commit command. It uses commitizen in order to create and interactive commit approach. To execture:

```sh
# Add your changes
git add .

# Commit
yarn commit
```

## Development flow

We'll be using the [GithubFlow](https://docs.github.com/es/get-started/quickstart/github-flow) meanwhile we are not creating realeases (for the on-premise entreprise pricing) then we'll switch to [Scaled Trunk-based development](https://trunkbaseddevelopment.com/).

The flow is really simply and scales amazing:

- **Feature branch**: simply a branch following one the convections bellow containning a fetaure, fix, etc.
- **Main branch**: production branch that contains the source of truth.
- **Release branch**: will contain the releases for the on-premise subscription.

This flow works amazing with [Vercel]("https://vercel.com/") and its new [comments](https://vercel.com/docs/concepts/deployments/comments) and preview deployments for the whole team.

### There is no develop branch

Features should branch off `main` and PRs should go into `main`. This means when a feature has been completed and PR merged, a release will be made in production.

### Branch naming convention

This convention is a simplified version of: [Git Branch naming convection article](https://dev.to/couchcamote/git-branching-name-convention-cch).

### Branch category

A git branch should start with a category. Pick one of these: _feature_, _bugfix_, _hotfix_, or _test_:

- **feature** is for adding, refactoring or removing a feature.
- **bugfix** is for fixing a bug.
- **hotfix** is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency).
- **test** is for experimenting outside of an issue/ticket.

### Branch reference

After the category, there should be a `/` followed by the reference of the _issue/ticket_ you are working on. If there's no reference, just add `no-ref`.

### Branch description

After the reference, there should be another `/` followed by a description which sums up the purpose of this specific branch. This description should be short and `"kebab-cased"`.

By default, you can use the title of the issue/ticket you are working on. Just replace any special character by "-".

### Branch name examples

```sh
git branch <category/reference/description-in-kebab-case>
```

- You need to add, refactor or remove a feature: `git branch feature/<notion-story-id>/create-new-button-component`
- You need to fix a bug: git branch `bugfix/<notion-story-id>/button-overlap-form-on-mobile`
- You need to fix a bug really fast (possibly with a temporary solution): `git branch hotfix/no-ref/registration-form-not-working`
- You need to experiment outside of an issue/ticket: `git branch test/no-ref/refactor-components-with-atomic-design`

## Testing strategy

The testing strategy will be focused in making the client secure using best practices:

In order to do that we should take the following into consideration:

- Unit tests:
  - Cheap and fast but it will require more development time to have a bigger coverage that provide a holistic view of the use case.
  - We should provide this test for both critical and non-critical for application-level (when-ever possible)
- End-to-end:
  - Less tests but slower development and takes a huge load in CI pipeline. This provide an easier way of testing the whole use case.
  - Harder to set-up
  - This is only for critial features where we need to have the base-cases covered for each use-case.

### Unit tests

Unit tests include both:

- Pure-ts based: testing use cases mainly mocking repositories. And also critical shared and domain-level functions.
- Components: React-based components.

```sh
## Running application-level unit tests
yarn test:unit
```

```sh
## Running ui-level unit tests
yarn test:unit:ui
```

### E2E Tests

As said this will cover critical feature and use cases.

For this we'll use [Cypress](https://www.cypress.io/), we've evaluated cucumber but for now the added complexity doest not require enough value.

```sh
## Running E2E in console
yarn test:e2e
```

```sh
## Running E2E opening the explorer
yarn test:e2e:open
```

## Storybook for component documentation

[Storybook](https://storybook.js.org/) is a frontend workshop for building UI components and pages in isolation.

This is great in order to be able to build components isolated using a clean architecture beacuse we can test components isolated and at the same time provide documention for our peers.

In order to work with storybook simply run:

```sh
yarn storybook
```

### Storybook structure

As we are not creating our own design component system the division inside storybook will be the same as the architecture:

- Layout/ComponentName

An example can be:

- Development a navbar inside the layout folder of sections (src/sections/layout)

```typescript
import { ComponentName, ComponentNameProps } from './Component'
import { Meta, Story } from '@storybook/react'

export default {
	title: 'Layout/ComponentName',
	component: ComponentName
} as Meta

const Template: Story<ComponentNameProps> = (args) => <ComponentName {...args} />
export const Default = Template.bind()
Default.args = {}
```

## References

- [CodelyTV](https://codely.com/)

## License

[MIT](/LICENSE.md)
