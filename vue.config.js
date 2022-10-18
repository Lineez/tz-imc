module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // this includes in each file
        // don't include not removable scss
        // only for mixins, functions and scss variables
        additionalData: `
                    @import "@/assets/scss/default/_mixin.scss";
                `,
      },
    },
  },
};
