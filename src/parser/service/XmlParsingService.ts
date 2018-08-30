import { Builder, parseString } from 'xml2js';

export default class XmlParsingService {
  private static readonly xmlBuilder = new Builder({ headless: true });

  public static toXml(obj: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        resolve(this.xmlBuilder.buildObject(obj));
      } catch (err) {
        return reject(err.message);
      }
    });
  }

  public static fromXml<T>(xml: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      parseString(xml, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}
