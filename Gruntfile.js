/**
 * Created by nolazybits on 9/11/15.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        application: {
            demo: 'demo',
            src: 'src',
            dist: 'dist'
        },
        bower: grunt.file.readJSON('bower.json'),

        jshint: {
            files: ['Gruntfile.js', '<%=application.src %>/**/*.js']
        },

        watch: {
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'concat', 'uglify']
            }
        },

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['<%=application.src %>/**/*.js'],
                // the location of the resulting JS file
                dest: '<%=application.dist %>/<%= bower.name %>.js'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= bower.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= bower.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        connect: {
            demo: {
                options: {
                    port: 7888,
                    base: './'
/*                    middleware: function (connect, options, middlewares) {
                        var rules = [
                            '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.ttf|\\.txt|\\.otf|\\.eot|\\.woff|\\.woff2|\\.gif$ /index.html [L]'
                        ];
                        middlewares.unshift(rewrite(rules));

                        middlewares.unshift(require('grunt-connect-proxy/lib/utils').proxyRequest);
                        return middlewares;
                    }*/
                }
            }
        }
    });

    grunt.registerTask('build:dist',
    [
        'jshint',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('demo',[
        'connect:demo',
        'watch:js'
    ]);

    grunt.registerTask('default', 'build:dist');
};