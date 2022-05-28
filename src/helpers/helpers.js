module.exports = {
  countUnreadMessages,
  hasUnreadMessages,
  getMessage,
  getTime,
};

function countUnreadMessages(array) {
  return array.filter(item => item.read === false).length;
};

function hasUnreadMessages(array) {
  return array.some(item => item.read === false);
}

function getMessage(name, array) {
  const arr = array.slice().sort((a, b) => a.id - b.id);
  const last = arr[arr.length - 1];
  const prefix = (name !== last.author) ? "Вы: " : "";
  return `${prefix}${last.message}`;
}

function getTime(array) {
  const arr = array.slice().sort((a, b) => a.id - b.id);
  return arr[arr.length - 1].time;
}
