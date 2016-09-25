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
      script: 'admin/App.js',
      ext: 'js',
      watch: ['admin/backend']
    })
    .on('start', function(){ console.log('Starting Node Server App.js') })
    browserSync.reload
  })

  .task('browserify', function() {
    gutil.log('Compiling JS....')
    browserify('admin/frontend/main.js')
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
      .pipe(gulp.dest('admin/public/js'))
      .pipe(browserSync.stream({once: true})
    )
  })

  .task('sass', function() {
    return gulp.src('admin/frontend/assets/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('admin/public/styles'));
  })

  .task('sync', function() {
    browserSync.init({
      proxy: { target: 'localhost:3000' }
     ,files: ['public']
     ,port: 8000
    })
  })

  .task('default', ['serve','browserify','sass','sync'], function() {
    gulp.watch('admin/frontend/**/*.js', ['browserify'])
    gulp.watch('admin/frontend/assets/**/*.*', ['sass'])
    gulp.watch('admin/public/**/*.*', browserSync.reload)
  })
;
