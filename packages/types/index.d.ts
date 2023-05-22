export namespace Responses {
  export type PingResponse = {
    name: string;
    version: string;
    environment: string;
  }

  export type DataResponse<T> = {
    data: T;
  }
}