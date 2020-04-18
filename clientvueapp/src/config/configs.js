/* eslint-disable eol-last */
import axios from 'axios'

export const URL_BASE = '/api/v1/'
export const BaseAxios = axios.create({
  baseURL: 'http://localhost:8888/'
})
