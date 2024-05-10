import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type ApiResponse = RegisterResponse | { error: FetchBaseQueryError | SerializedError };


export interface RegisterResponse {
    data: {
      status: string;
      uuid: string;
    };
  }

