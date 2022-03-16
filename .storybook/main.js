module.exports = {
  typescript: { reactDocgen: false },
  "stories": ["../src/components/**/stories.tsx"],
  "addons": ["@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
