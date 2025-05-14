export default function getTimeDiff(time) {
  const unixTimeInMS = time * 1000;
  const diffInMs = Date.now() - unixTimeInMS;
  const diffInSeconds = diffInMs / 1000;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 60);

  let metric = '';
  let difference = 0;
  if (diffInMinutes < 60) {
    metric = 'minute';
    difference = diffInMinutes;
  } else if (diffInHours < 24) {
    metric = 'hour';
    difference = diffInHours;
  } else {
    metric = 'day';
    difference = diffInDays;
  }
  if (difference > 1) {
    metric += 's';
  }
  if (difference === 0) {
    difference = 1;
  }
  return { metric, difference };
}
