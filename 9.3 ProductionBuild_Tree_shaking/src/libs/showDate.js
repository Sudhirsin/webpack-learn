import mnt from 'moment';

export function showDate() {
  console.log(mnt(new Date()).format('DD-MM-YYYY'))
}

export function dummyFunction() {
  console.log('Its a dummy function')
}