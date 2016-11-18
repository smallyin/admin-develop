module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            style_expanded: {
                options: {
                    outputStyle: 'expanded',
                    sourcemap: false
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            },

            style_min: {
                options: {
                    outputStyle: 'compressed',
                    sourcemap: false
                },
                files: {
                    'css/style.min.css': 'sass/style.scss'
                }
            }
        },

        watch: {
            watch_sass_style: {
                files: ['sass/style.scss','sass/components/*.scss'],
                tasks: ['sass_style'],
                options: {
                    interrupt: false,
                    spawn: false
                }
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true,
                limit: 10
            },
            monitor: {
                tasks: [
                    'watch:watch_sass_style',
                    'notify:watching'
                ]
            },
            release:{
                tasks:[
                    'sass_style',
                    'notify:release'
                ]
            }
        },

        notify: {
            sass_style_compile: {
                options: {
                    enabled: true,
                    message: 'Sas Style Compiled!',
                    title: "Style",
                    success: true,
                    duration: 1
                }
            },
            watching: {
                options: {
                    enabled: true,
                    message: 'Watching Files!',
                    title: 'Watching',
                    success: true,
                    duration: 1
                }
            },

            release: {
                options: {
                    enabled: true,
                    message: 'Release task!',
                    title: 'Release',
                    success: true,
                    duration: 1
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch'        );
    grunt.loadNpmTasks('grunt-contrib-copy'         );
    grunt.loadNpmTasks('grunt-sass'                 );
    grunt.loadNpmTasks('grunt-contrib-concat'       );
    grunt.loadNpmTasks('grunt-contrib-uglify'       );
    grunt.loadNpmTasks('grunt-contrib-compress'     );
    grunt.loadNpmTasks('grunt-contrib-clean'        );
    grunt.loadNpmTasks('grunt-contrib-jade'         );
    grunt.loadNpmTasks('grunt-concurrent'           );
    grunt.loadNpmTasks('grunt-notify'               );
    grunt.loadNpmTasks('grunt-text-replace'         );
    grunt.loadNpmTasks('grunt-banner'               );
    grunt.loadNpmTasks('grunt-rename'               );
    grunt.loadNpmTasks("grunt-remove-logging"       );
    grunt.loadNpmTasks('grunt-browser-sync'         );
    grunt.loadNpmTasks('grunt-contrib-testem'       );
    grunt.loadNpmTasks('grunt-contrib-cssmin'       );

    grunt.registerTask('sass_style', ['sass:style_expanded', 'sass:style_min', 'notify:sass_style_compile']);


    grunt.registerTask('develop', ['concurrent:monitor']);
    grunt.registerTask('release',['concurrent:release']);
};