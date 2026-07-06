# 1. Create new NestJS project
nest new backend --package-manager npm
cd backend

# 2. Install required packages
npm install @nestjs/typeorm typeorm pg @nestjs/config class-validator class-transformer
npm install --save-dev @nestjs/schematics

mkdir zagol-reconciliation-system
cd zagol-reconciliation-system

mkdir backend frontend

# 1. Delete node_modules and package-lock (to be safe)
rm -rf node_modules package-lock.json

# 2. Reinstall dependencies
npm install

# 3. Run the project using npx directly
npx nest start --watch