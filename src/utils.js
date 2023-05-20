export function formatTimestamp(timestamp) {
  const currentTimestamp = new Date();
  const diff = currentTimestamp - timestamp;
  let seconds = Math.floor(diff / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24),
    months = Math.floor(days / 30),
    years = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  if (years) {
    if (years === 1) {
      return years + " year ago";
    } else {
      return years + " years ago";
    }
  } else if (months) {
    if (months === 1) {
      return months + " month ago";
    } else {
      return months + " months ago";
    }
  } else if (days) {
    if (days === 1) {
      return days + " day ago";
    } else {
      return days + " days ago";
    }
  } else if (hours) {
    if (hours === 1) {
      return hours + " hour ago";
    } else {
      return hours + " hours ago";
    }
  } else if (minutes) {
    if (minutes === 1) {
      return minutes + " minute ago";
    } else {
      return minutes + " minutes ago";
    }
  } else if (seconds < 10) {
    return "Just now";
  } else {
    return "A few seconds ago";
  }
}
