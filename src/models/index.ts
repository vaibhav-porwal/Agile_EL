import { AppState as AppStateInterface } from './globals/AppState';
import { GenericState as GenericStateInterface } from './common/GenericState';
import {
  Page as PageInterface,
  RootModule as RootModuleInterface
} from './common/RootModule';
import { Coin as CoinInterface } from './api/Coin';
import {
  AvailableDayRanges as AvailableDayRangesInterface,
  AvailableIntervals as AvailableIntervalsInterface,
  CoinMarketChart as CoinMarketChartInterface,
  CoinMarketChartList as CoinMarketChartListInterface,
  DominanceChartList as DominanceChartListInterface,
  CoinMarketChartListState as CoinMarketChartListStateInterface
} from './api/CoinMarketChart';
import {
  GasOracle as GasOracleInterface,
  GasOracleRootObject as GasOracleRootObjectInterface,
  GasOracleState as GasOracleStateInterface
} from './api/GasOracle';
import {
  TrendingCoin as TrendingCoinInterface,
  TrendingCoinItem as TrendingCoinItemInterface,
  TrendingRootObject as TrendingRootObjectInterface
} from './api/TrendingCoin';
import {
  TotalMarketCap as TotalMarketCapInterface,
  TotalVolume as TotalVolumeInterface,
  MarketCapPercentage as MarketCapPercentageInterface,
  GlobalCoinData as GlobalCoinDataInterface,
  GlobalCoinDataRootObject as GlobalCoinDataRootObjectInterface
} from './api/GlobalCoinData';
import {
  FearGreedIndex as FearGreedIndexInterface,
  FearGreedIndexMetadata as FearGreedIndexMetadataInterface,
  FearGreedIndexRootObject as FearGreedIndexRootObjectInterface,
  FearGreedIndexState as FearGreedIndexStateInterface
} from './api/FearGreedIndex';

export type AppState = AppStateInterface;
export type GenericState<T> = GenericStateInterface<T>;
export type Page = PageInterface;
export type RootModule = RootModuleInterface;
export type Coin = CoinInterface;
export type AvailableDayRanges = AvailableDayRangesInterface;
export type AvailableIntervals = AvailableIntervalsInterface;
export type CoinMarketChart = CoinMarketChartInterface;
export type CoinMarketChartList = CoinMarketChartListInterface;
export type DominanceChartList = DominanceChartListInterface;
export type CoinMarketChartListState = CoinMarketChartListStateInterface;
export type GasOracle = GasOracleInterface;
export type GasOracleState = GasOracleStateInterface;
export type GasOracleRootObject = GasOracleRootObjectInterface;
export type TrendingCoin = TrendingCoinInterface;
export type TrendingCoinItem = TrendingCoinItemInterface;
export type TrendingRootObject = TrendingRootObjectInterface;
export type TotalMarketCap = TotalMarketCapInterface;
export type TotalVolume = TotalVolumeInterface;
export type MarketCapPercentage = MarketCapPercentageInterface;
export type GlobalCoinData = GlobalCoinDataInterface;
export type GlobalCoinDataRootObject = GlobalCoinDataRootObjectInterface;
export type FearGreedIndex = FearGreedIndexInterface;
export type FearGreedIndexMetadata = FearGreedIndexMetadataInterface;
export type FearGreedIndexRootObject = FearGreedIndexRootObjectInterface;
export type FearGreedIndexState = FearGreedIndexStateInterface;