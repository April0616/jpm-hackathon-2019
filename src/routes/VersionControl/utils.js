export const getTrackedFiles = files =>
  files.filter(file => file.type === "staged");

export const getUntrackedFiles = files =>
  files.filter(file => file.type === "untracked");

export const getOppositeType = file =>
  file.type === "staged" ? "untracked" : "staged";

export const generateRandomNumber = () =>
  Math.floor(Math.random(12313) * 100000000);

export const hashString = str =>
  str.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

export const hashMessageFiles = (message, files) => {
  const hashMsg = hashString(message);
  const hashFiles = hashString(JSON.stringify(files));
  return "" + hashString(hashMsg + hashFiles + "" + generateRandomNumber());
};
