const path = require('path');
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');

module.exports = {
	root,
	src,
	build: path.resolve(root, 'dist'),
	htmlTemplate: path.resolve(src, 'index.html'),
	packageJson: path.resolve(root, 'package.json'),
	tsConfig: path.resolve(root, 'tsconfig.json'),
	tailwindConfig: path.resolve(root, 'tailwind.config.js')
};
