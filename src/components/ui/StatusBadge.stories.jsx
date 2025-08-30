import StatusBadge from './StatusBadge';

export default {
  title: 'UI/StatusBadge',
  component: StatusBadge,
};

export const Pending = { args: { status: 'Pending' } };
export const Approved = { args: { status: 'Approved' } };
export const Rejected = { args: { status: 'Rejected' } };
