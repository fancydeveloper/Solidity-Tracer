import { Item } from "../transaction";

export interface SELFDESTRUCT {
  beneficiary: string;
}

async function format(item: Item<SELFDESTRUCT>): Promise<string> {
  return `SELFDESTRUCT beneficiary=${item.params.beneficiary}`;
}

export default { format };
