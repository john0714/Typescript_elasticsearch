import moment from 'moment';

export async function handler(event: any): Promise<any> {
  console.log("Hello TypeScript!");

  return {
    statusCode: 200,
    body: {
      message: 'typescript test',
      timestamp: moment().format()
    }
  };
}