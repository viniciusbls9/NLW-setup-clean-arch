import { createContext, PropsWithChildren, useContext } from 'react';
import { HabitsRepository } from '@gateways/HabitGateway';
import HabitHttpGateway from '@gateways/HabitHttpGateway';
import AxiosAdapter from '@infra/api/adapter/AxiosAdapter';

const httpClientInstance = new AxiosAdapter();

export type HttpClientType = {
  habitGateway: HabitsRepository;
};

const defaultContext: HttpClientType = {
  habitGateway: new HabitHttpGateway(
    httpClientInstance,
    'http://localhost:3333'
  )
};

export const HttpClientContext = createContext(defaultContext);

export const HttpClientProvider = ({ children }: PropsWithChildren) => {
  const habitGateway = new HabitHttpGateway(
    httpClientInstance,
    'http://localhost:3333'
  );

  return (
    <HttpClientContext.Provider value={{ habitGateway }}>
      {children}
    </HttpClientContext.Provider>
  );
};

export const useHttpClient = () => {
  return useContext(HttpClientContext);
};
