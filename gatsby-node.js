exports.createPages = async ({ actions }) => {

    const { createPage } = actions;
    const categories = ['residencial', 'comercial', 'consultoria'];

    categories.forEach(category => {
        createPage({
            path: `/portfolio/${category}`,
            component: require.resolve('./src/templates/portfolio.js'),
            context: {
                category
            }
        })
    })
}