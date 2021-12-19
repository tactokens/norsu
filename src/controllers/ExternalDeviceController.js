import { getAdapterByType } from '@tac/signature-adapter';

export class ExternalDeviceController {
  static async getUserList(adapterType, from, to) {
    const adapter = await getAdapterByType(adapterType);

    if (!adapter) throw new Error(`Unknown adapter type: ${adapterType}`);

    return adapter.getUserList(from, to);
  }
}
