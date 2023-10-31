import { dirname as pathDirname } from 'path';
import { URL,fileURLToPath } from 'url';

export function dirname (importMeta: { url: string | URL; }) {
    return pathDirname(filename(importMeta));
}

export function filename (importMeta: { url: string | URL; }) {
    return importMeta.url ? fileURLToPath(importMeta.url) : '';
}