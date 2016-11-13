'use strict';

let gulp        = require('gulp')
  , nodemon     = require('gulp-nodemon')
  , sass        = require('gulp-sass')
  , sourcemaps  = require('gulp-sourcemaps')
  , gutil       = require('gulp-util')
  , browserSync = require('browser-sync')
  , browserify  = require('browserify')
  , source      = require('vinyl-source-stream')
;

gulp
  .task('serve', function(){
    nodemon({
      script: 'backend/App.js',
      ext: 'js',
      watch: ['backend/**/*']
    })
    .on('start', function(){ console.log('Starting Node Server App.js') })
    browserSync.reload
  })

  .task('browserify', function() {
    gutil.log('Compiling JS....')
    browserify('admin/main.js')
      .transform('babelify', {
        presets: ["es2015","stage-1","stage-0","react"],
        plugins: ['transform-runtime','transform-decorators-legacy']
      })
      .bundle()
      .on('error', function (err) {
          gutil.log(err.message)
          browserSync.notify("Browserify Error! :", err)
          this.emit("end")
        })
      .pipe(source('main.js'))
      .pipe(gulp.dest('public/js'))
      .pipe(browserSync.stream({once: true})
    )
  })

  .task('sass', function() {
    return gulp.src('admin/assets/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/styles'));
  })

  .task('sync', function() {
    browserSync.init({
      // proxy: { target: 'localhost:3000' },
      // files: ['public'],
      server: 'public',
      port: 8000
    })
  })

  .task('default', ['serve','browserify','sass','sync'], function() {
    gulp.watch('admin/**/*.js', ['browserify'])
    gulp.watch('admin/assets/**/*.*', ['sass'])
    gulp.watch('public/**/*.*', browserSync.reload)
  })
;
