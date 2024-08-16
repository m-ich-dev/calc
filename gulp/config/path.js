import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const distPath = `./dist`;
const srcPath = `./src`;

export const path = {
    build: {
        html:   distPath,
        js:     `${distPath}/assets/js/`,
        css:    `${distPath}/assets/css/`,
        images: `${distPath}/assets/images/`,
        fonts:  `${distPath}/assets/fonts/`
    },
    src: {
        html:   `${srcPath}/*.html`,
        js:     `${srcPath}/assets/js/*.js`,
        css:    `${srcPath}/assets/scss/*.{scss,sass}`,
        images: `${srcPath}/assets/images/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json}`,
        svg:    `${srcPath}/assets/images/**/*.svg`,
        fonts:  `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`   
    },
    watch: {
        html:  `${srcPath}/**/*.html`,
        js:    `${srcPath}/assets/js/**/*.js`,
        css:   `${srcPath}/assets/scss/**/*.{scss,sass}`,
        images:`${srcPath}/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts: `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },

    clean: distPath,
    distPath: distPath,
    srcPath: srcPath,
    rootFolder: rootFolder,
    ftp: ``,

}