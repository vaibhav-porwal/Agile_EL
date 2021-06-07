import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toCamelCase } from '../common/helpers/caseTransformer';
import { RootState } from '../app/store';
import { endpoints as API } from '../common/endpoints';
import { API_CONFIG as config } from '../common/constants';
import { CoinMarketChartList, GenericState } from '../models';

const initialState: GenericState<CoinMarketChartList> = {
  value: {},
  status: 'IDLE',
  param: 'key'
};

export const fetchDominanceChartList = createAsyncThunk('dominanceChartList', async (coinIdList: string[]) => {
  const canceler = axios.CancelToken.source();

  const normalizedResponse = {} as any

  for (var i = 0; i < coinIdList.length; i++) {
    const response = await axios.request({
      ...config,
      url: API.coinMarketChart(coinIdList[i], 30),
      cancelToken: canceler.token
    });

    normalizedResponse[coinIdList[i]] = toCamelCase(response.data)
  }

  return normalizedResponse as CoinMarketChartList
});

export const selectDominanceChartList: (state: RootState) => GenericState<CoinMarketChartList>
  = (state: RootState) => state.dominanceChartList;

const dominanceChartListSlice: Slice<GenericState<CoinMarketChartList>, {}, 'dominanceChartList'> = createSlice({
  name: 'dominanceChartList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDominanceChartList.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(fetchDominanceChartList.fulfilled, (state, action) => {
        state.status = 'IDLE';
        state.value = action.payload;
      })
      .addCase(fetchDominanceChartList.rejected, (state, action) => {
        state.status = 'FAILED';
        state.error = action.error.message
      })
  },
});

export default dominanceChartListSlice.reducer