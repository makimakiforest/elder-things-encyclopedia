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
import type {
  GetCharacters200
} from '.././schemas'



  /**
 * @summary Get a list of characters
 */
export const getCharacters = <TData = AxiosResponse<GetCharacters200>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/characters`,options
    );
  }
