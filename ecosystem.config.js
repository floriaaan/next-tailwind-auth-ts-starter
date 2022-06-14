module.exports = {
  apps: [
    {
      name: "next",
      exec_mode: "cluster",
      instances: 2,
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/admin/current",
    },
  ],
};
