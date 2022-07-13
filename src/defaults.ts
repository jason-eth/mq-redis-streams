// TODO: Add docs for options and defaults

import * as IORedis from 'ioredis';

export interface RedisOptions extends IORedis.RedisOptions {}

const redisOptions: RedisOptions = {};

export interface QueueOptions {
  maxIndividualQueueResultSize?: number;
  maxGlobalListSize?: number;
}

const queueOptions: QueueOptions = {
  // Currently there is no API to override these defaults
  maxIndividualQueueResultSize: 10_000,
  maxGlobalListSize: 100_000
};

export interface ConsumerOptions {
  workerFnTimeoutMs?: number | null;
  stealFromInactiveConsumersAfterMs?: number;
  taskBufferSize?: number;
  maxRetry?: number;
  concurrencyPerInstance?: number;
}

const consumerOptions: ConsumerOptions = {
  workerFnTimeoutMs: null,
  stealFromInactiveConsumersAfterMs: 300 * 1000, // 5 mins. Only tasks from inactive workers will be taken over.
  taskBufferSize: 10,
  maxRetry: 0,
  concurrencyPerInstance: 1
};

export interface LoggingOptions {
  enabled?: boolean;
  loggerFn?(message?: any, ...optionalParams: any[]): void;
}

const loggingOptions: LoggingOptions = {
  enabled: false,
  loggerFn: console.log
};

export const defaultOptions = {
  NAMESPACE: '__stb',
  INTERNALS: '__internals',
  RESULTLIST: '__stb:__internals:results',
  FAILEDLIST: '__stb:__internals:failed',
  DEADLIST: '__stb:__internals:dead',
  STAT: '__stb:__internals:stat',
  QUENAMES: '__stb:__internals:qnames',
  redisOptions,
  queueOptions,
  consumerOptions,
  loggingOptions
};
