module.exports = {
  tabWidth: 2,
  printWidth: 120,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
};
