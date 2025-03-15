"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = getAllFiles;
exports.writeFiles = writeFiles;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getAllFiles(directories) {
    const allFiles = [];
    function traverseDirectory(dir) {
        const files = fs_1.default.readdirSync(dir);
        for (const file of files) {
            const filePath = path_1.default.join(dir, file);
            const stat = fs_1.default.statSync(filePath);
            if (stat.isDirectory()) {
                traverseDirectory(filePath);
            }
            else {
                allFiles.push(filePath);
            }
        }
    }
    for (const dir of directories) {
        const fullPath = path_1.default.join(process.cwd(), dir);
        if (fs_1.default.existsSync(fullPath)) {
            traverseDirectory(fullPath);
        }
    }
    return allFiles;
}
function writeFiles(files) {
    files.forEach(({ filePath, content }) => {
        const fullPath = path_1.default.join(process.cwd(), filePath);
        const dir = path_1.default.dirname(fullPath);
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir, { recursive: true });
        }
        fs_1.default.writeFileSync(fullPath, content);
        console.log(`File created: ${fullPath}`);
    });
}
