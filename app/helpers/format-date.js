import Ember from 'ember';

export function formatDate(date) {
  date = new Date(date*1000);

  return date.getDay() + '/' + date.getMonth() + '/' + date.getYear();
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
