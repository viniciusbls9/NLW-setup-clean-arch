import { Header } from '@components/Header';
import { SummaryTable } from '@components/SummaryTable';
import { useHttpClient } from '@context/HttpClientContext';
import { useHabits } from '@hooks/useHabits';
import './presentation/styles/global.css';

export const App = () => {
  const { habitGateway } = useHttpClient();
  const { habit } = useHabits(habitGateway);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable habitItems={habit?.items} />
      </div>
    </div>
  );
};
