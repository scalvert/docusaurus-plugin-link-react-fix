# docusaurus-plugin-link-react-fix

Docusaurus development plugin to force a single version of React for linked projects.

## Details

This plugin is intended to be used in a Docusaurus project that is linked to another project that also uses React. This can cause issues with multiple versions of React being included in the final build, which can cause issues with hooks and other React features.

Specifically refering to this issue from the React documentation:

> This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

## Solution

The solution uses a Docusaurus plugin to override the target project's webpack configuration to alias the linked project's React to the Docusaurus project's React. This ensures that all projects use the same version of React.

## Installation

```bash
npm install docusaurus-plugin-link-react-fix
```

## Usage

Add the plugin to your Docusaurus project's `docusaurus.config.js`:

```js
module.exports = {
  plugins: [
    'docusaurus-plugin-link-react-fix'
  ]
}
```