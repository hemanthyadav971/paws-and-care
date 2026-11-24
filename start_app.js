const { spawn } = require('child_process');
const path = require('path');

const nodeExec = 'C:\\Users\\HEMANTH\\AppData\\Local\\node-portable\\node-v20.18.0-win-x64\\node.exe';
const serverDir = path.join(__dirname, 'server');
const clientDir = path.join(__dirname, 'client');
const viteBin = path.join(clientDir, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('🚀 Starting Paws & Care Backend Server...');
const backend = spawn(nodeExec, ['server.js'], {
  cwd: serverDir,
  stdio: 'inherit'
});

console.log('🚀 Starting Paws & Care Frontend Vite Server...');
const frontend = spawn(nodeExec, [viteBin, '--host', '0.0.0.0', '--port', '3000'], {
  cwd: clientDir,
  stdio: 'inherit'
});

backend.on('error', (err) => console.error('Backend process error:', err));
frontend.on('error', (err) => console.error('Frontend process error:', err));

process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
});
