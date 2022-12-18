import { GatsbyNode } from 'gatsby';

// getting rid of mini-css-extract-plugin warnings in console
// no need to take into account such warnings, since we run on css modules => no case interference
// see: https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
    stage,
    actions,
    getConfig,
}) => {
    if (stage === 'develop' || stage === 'build-javascript') {
        const config = getConfig();
        const miniCssExtractPlugin = config.plugins.find(
            (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
        );
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true;
        }
        actions.replaceWebpackConfig(config);
    }
};
