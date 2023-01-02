const config = {
    target: "node16",
    mode: "production",
    output: {
        filename: 'index.js',
        module: true
    },
    experiments: {
        outputModule: true
    }
};

export default config;
