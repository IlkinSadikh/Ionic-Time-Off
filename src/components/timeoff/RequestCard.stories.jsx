import RequestCard from './RequestCard';

export default {
  title: 'TimeOff/RequestCard',
  component: RequestCard,
};

export const Pending = {
  args: {
    req: {
      id: '1',
      employeeName: 'Alice Employee',
      startDate: '2025-09-02',
      endDate: '2025-09-05',
      type: 'Vacation',
      status: 'Pending',
      createdAt: new Date().toISOString(),
    },
  },
};
