export namespace Responses {
  export type PingResponse = {
    name: string;
    version: string;
    environment: string | undefined;
  }

  export type DataResponse<T> = {
    data: T;
  }
}