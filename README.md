# Bit Command for CI/CD Pipelines
Execute Bit command in a Bit workspace.

# GitHub Actions

This task executes `bit ${cmd}` inside the workspace directory.

## Inputs

### `cmd`

**Required** The command to execute in bit workspace.

### `ws-dir`

**Optional** The workspace directory path from the root. Default `"Dir specified in Init Task or ./"`.

## Example usage

**Note:** Use `bit-task/init@v1` as a prior step in your action before running `vturb/bit-command@v1`.

```yaml
name: Test Bit Command
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
      - name: Bit Custom Command
        uses: vturb/bit-command@v1
        with:
          cmd: lint -a
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
