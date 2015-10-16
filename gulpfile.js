var gulp = require('gulp');

gulp.task('reject:with-value', function rejectWithValue() {
    return Promise.reject('This should exit 0');
});

gulp.task('reject:without-value', function rejectWithoutValue() {
    return Promise.reject();
});

gulp.task('reject:empty-string', function rejectWithEmptyString() {
    return Promise.reject('');
});

gulp.task('reject:bool-false', function rejectWithBoolFalse() {
    return Promise.reject(false);
});

gulp.task('reject:bool-true', function rejectWithBoolTrue() {
    return Promise.reject(true);
});

gulp.task('reject:array', function rejectWithArray() {
    return Promise.reject([1, 2, 3, 'a', 'b', 'c']);
});

gulp.task('reject:empty-array', function rejectWithEmptyArray() {
    return Promise.reject([]);
});

gulp.task('reject:object', function rejectWithObject() {
    return Promise.reject({ a: '1', b: 2, c: true });
});

gulp.task('reject:empty-object', function rejectWithEmptyObject() {
    return Promise.reject({});
});

