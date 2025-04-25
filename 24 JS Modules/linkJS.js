import {yourAbout} from './module.js';
import * as moduleObject from './module.js';
import {myAbout, herAbout as HerAbout} from './module.js';


import hisAbout from './defaultModule.js';
import {default as HisAbout} from './defaultModule.js';

import Run, {Jump, swim as Swim} from './normalDefault.js';

import { start, end } from './styleModule.js';

yourAbout("Isuru", 23);
moduleObject.myAbout("Shehara", 24);
HerAbout("Sofia", 26);

hisAbout("Alex", 25);
HisAbout("Nolan", 25);

Run();
Jump();
console.log(Swim);

start();
console.log(end);