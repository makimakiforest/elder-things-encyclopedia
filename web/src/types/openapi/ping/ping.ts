/**
 * REST API
 * REST API
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'



  /**
 * @summary system ping
 */
export const getSystemPing = <TData = AxiosResponse<string>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/system/ping`,options
    );
  }
export type GetSystemPingResult = AxiosResponse<string>
