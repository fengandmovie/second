module.exports = {
  lintOnSave: true,
  configureWebpack: {
  	resolve: {
  		alias: {
  			"vue$":"vue/dist/vue.common.js"
  		}
  	} 
  }
}