let five = [
  {
    name: "Visor/Main",
    namespace: "west",
    script: 'beş.js',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Supervisor/"
  },
  {
    name: "Guards",
    namespace: "west",
    script: 'beş.js',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Shields"
  },
  {
    name: "Room",
    namespace: "west",
    script: 'beş.js',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Rooms"
  },
  {
    name: "Welcome",
    namespace: "west",
    script: 'beş.js',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Welcome"
  },
]
module.exports = {apps: five}
