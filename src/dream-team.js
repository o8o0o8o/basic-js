module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false; }

  members.forEach( (name, i) => {
    (typeof name === "string") ? members[i] = name.trim() : delete members[i];
  });

  return members.reduce( (abbr, name) =>
    abbr + name.slice(0, 1), 
  "").toUpperCase().split("").sort().join("");

};