module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    layout: 'byComponent',
                    install: true,
                    targetDir: 'www/vendor',
                    cleanTargetDir: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');

    // Default task(s).
    grunt.registerTask('default', ['bower']);
};
