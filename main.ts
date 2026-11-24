import { mkdirSync, writeFileSync } from 'node:fs';

const entry = "On vacation until Monday, temperature set to 2.0. Any replies before then are not from me, or anyone, or in a known language.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
