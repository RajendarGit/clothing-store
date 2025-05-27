'use client'
import Container from "@/components/ui/container";
import UserSummary from "@/components/user-summary";
import UserAccountTabs from "@/components/user-account-tabs";
import { withAuthProtection } from "@/components/hoc/with-auth-protection";

function UserAccountPage() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <UserSummary />
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <UserAccountTabs />
        </div>
      </div>
    </Container>
  );
}


export default withAuthProtection(UserAccountPage);