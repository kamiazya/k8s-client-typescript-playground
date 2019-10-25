import { inspect } from 'util';
import { KubeConfig } from '@kubernetes/client-node';

const config = new KubeConfig();
config.loadFromDefault();
console.log(inspect(config));
