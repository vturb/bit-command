# Bit Verify Components for CI/CD Pipelines
Check Bit components for issues in a Bit workspace.

# GitHub Actions

This task executes `bit status --strict && bit build` inside the workspace directory.

## Inputs

### `ws-dir`

**Optional** The workspace directory path from the root. Default `"Dir specified in Init Task or ./"`.

### `skip-build`

**Optional** Skip running `bit build` in the action.

## Example usage

**Note:** Use `bit-task/init@v1` as a prior step in your action before running `bit-tasks/verify@v1`.

```yaml
name: Test Bit Verify
on:
  workflow_dispatch:
jobs:
  verify:
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      GIT_USER_NAME: ${{ secrets.GIT_USER_NAME }}
      GIT_USER_EMAIL: ${{ secrets.GIT_USER_EMAIL }}
      BIT_CONFIG_USER_TOKEN: ${{ secrets.BIT_CONFIG_USER_TOKEN }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Initialize Bit
        uses: bit-tasks/init@v1
        with:
          ws-dir: '<WORKSPACE_DIR_PATH>'
      - name: Bit Verify
        uses: bit-tasks/verify@v1
```

# Contributor Guide

Steps to create custom tasks in different CI/CD platforms.

## GitHub Actions

Go to the GithHub action task directory and build using NCC compiler. For example;

```
npm install
npm run build
git commit -m "Update task"
git tag -a -m "action release" v1 --force
git push --follow-tags
```

For more information, refer to [Create a javascript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
