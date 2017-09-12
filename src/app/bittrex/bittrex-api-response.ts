import * as _ from "lodash";

export class BittrexApiResponse {
  success: boolean;
  message: string;
  result: any;

  static fromObject(obj: any): BittrexApiResponse {
    let bar: BittrexApiResponse = new BittrexApiResponse();
    _.merge(bar, obj);
    return bar;
  }
}
