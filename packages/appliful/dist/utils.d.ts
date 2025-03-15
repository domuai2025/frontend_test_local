export declare function getAllFiles(directories: string[]): string[];
interface FileData {
    filePath: string;
    content: string;
}
export declare function writeFiles(files: FileData[]): void;
export {};
