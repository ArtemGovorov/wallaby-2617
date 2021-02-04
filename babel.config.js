module.exports = function (api) {
    api.cache(true);

    return {
        "presets": [
            "@babel/typescript",
            [
                "@babel/preset-env",
                {
                    "useBuiltIns": "entry",
                    "debug": false,
                    "forceAllTransforms": true,
                    "corejs": {
                        "version": 3,
                        "proposals": true
                    },
                    "targets": {
                        "browsers": "last 1 versions, ie >= 11, chrome >= 71, edge >= 17"
                    }
                }
            ],
            "@babel/preset-react",
            "@babel/preset-flow"
        ],
        "exclude": [
            "transform-regenerator",
            "es6.set"
        ],
        "plugins": [
            [
                "@babel/plugin-transform-typescript"
            ],
            [
                "@babel/plugin-proposal-class-properties",
                {
                    "loose": true
                }
            ],
            [
                "babel-plugin-transform-es5-property-mutators"
            ],
            [
                "@babel/plugin-transform-classes",
                {
                    "loose": true
                }
            ],
            [
                "@babel/plugin-transform-arrow-functions"
            ],
            [
                "@babel/plugin-transform-spread"
            ],
            [
                "@babel/plugin-proposal-optional-chaining"
            ],
            [
                "@babel/plugin-proposal-nullish-coalescing-operator"
            ]
        ],
        "env": {
            "test": {
                "plugins": [
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }
        }
    };
}