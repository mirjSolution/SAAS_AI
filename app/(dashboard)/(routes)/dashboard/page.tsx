import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <p>
      Dashboard Page (Protected)
      <UserButton afterSignOutUrl='/' />
    </p>
  );
};

export default DashboardPage;
