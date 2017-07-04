import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import jasmine from 'gulp-jasmine';
import watch from 'gulp-watch';
import karma from 'karma';
const Server = karma.Server;
import cover from 'gulp-coverage';

require('../jasmine/helpers/setup.js');

function test (done) {
   gulp.src('src/**/*.spec.js')
  .pipe(jasmine({
    conf: require('../jasmine/conf.json'),
    errorOnFail: false
  })
    .on('jasmineDone', ()=> {
      done();
    }));
}

gulp.task('test', (done)=> {
 test(done);
});

// gulp.task('cover', (done) => {
//   gulp.src('src/**/*.spec.js')
//     .pipe(cover.instrument({
//                       pattern: ['**/spec*'],
//                       debugDirectory: 'debug'
//                   }))
//                   .pipe(jasmine())
//                   .pipe(cover.gather())
//                   .pipe(cover.format())
//                   .pipe(gulp.dest('reports'));
// });

gulp.task('cover', (done)=> {
  new Server({
    configFile: path.join(__dirname, '..', 'configs/karma/config.js')
  }, done)
  .start();
});

gulp.task('tdd', (done)=> {
  test(done);
  gulp.watch('src/**/*.js', gulp.series('test'));
  done();
});

