import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronRight, 
  Users, 
  Target, 
  Megaphone, 
  PlusCircle, 
  List,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const [campaignExpanded, setCampaignExpanded] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { title: 'Customer Bucket', icon: Users, path: '/dashboard/customer-bucket' },
    { title: 'Segment', icon: Target, path: '/dashboard/segment' },
  ];

  const campaignItems = [
    { title: 'Create Campaign', icon: PlusCircle, path: '/dashboard/create-campaign' },
    { title: 'View Campaign', icon: List, path: '/dashboard/view-campaign' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <h1 className="text-xl font-bold text-foreground">Campaign Rewards Service</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Welcome, {user?.username}
          </span>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "w-64 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 fixed lg:sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </NavLink>
            ))}

            {/* Campaign Section */}
            <div>
              <button
                onClick={() => setCampaignExpanded(!campaignExpanded)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Megaphone className="h-5 w-5" />
                  <span>Campaign</span>
                </div>
                {campaignExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {campaignExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  {campaignItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        )
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden top-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
