module.exports = {
  validateEnvironment: function (prog) {
    var requiredVariables = [
      "DATABASE_URL",
      "NEO_USER",
      "NEO_PASS"
    ];

    requiredVariables.forEach(function (variableName) {
      if (process.env[variableName] === "undefined") {
        var msg = variableName + " must be set in the environment before " +
                          "using this tool. For instance, " + variableName +
                          "=.... " + String(prog ? prog : "");
        throw new Error(msg);
      }
    });

    return true;
  },
  createConnectionString: function () {
    return [
      "http://",
      process.env.NEO_USER,
      ":",
      process.env.NEO_PASS,
      "@",
      process.env.DATABASE_URL
    ].join("");
  }
};
