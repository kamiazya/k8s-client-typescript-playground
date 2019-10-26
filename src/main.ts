import { inspect } from 'util';
import { KubeConfig, AppsV1Api } from '@kubernetes/client-node';

async function main() {
  try {
    const config = new KubeConfig();
    config.loadFromDefault();

    const appsV1Api = config.makeApiClient(AppsV1Api);
    const resources = await appsV1Api.getAPIResources();

    console.log(inspect(resources));
    for (const resource of resources.body.resources) {
      console.log(resource.name);

    }
  } catch (error) {
    console.log({ error });
  }
}

main();
