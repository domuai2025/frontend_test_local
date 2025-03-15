import fs from "fs";
import path from "path";

export function getAllFiles(directories: string[]): string[] {
	const allFiles: string[] = [];

	function traverseDirectory(dir: string) {
		const files = fs.readdirSync(dir);

		for (const file of files) {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				traverseDirectory(filePath);
			} else {
				allFiles.push(filePath);
			}
		}
	}

	for (const dir of directories) {
		const fullPath = path.join(process.cwd(), dir);
		if (fs.existsSync(fullPath)) {
			traverseDirectory(fullPath);
		}
	}

	return allFiles;
}

interface FileData {
	filePath: string;
	content: string;
}

export function writeFiles(files: FileData[]): void {
	files.forEach(({filePath, content}) => {
		const fullPath = path.join(process.cwd(), filePath);
		const dir = path.dirname(fullPath);

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, {recursive: true});
		}

		fs.writeFileSync(fullPath, content);
		console.log(`File created: ${fullPath}`);
	});
}
