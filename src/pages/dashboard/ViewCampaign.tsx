import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const ViewCampaign = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      type: 'Promotional',
      status: 'Active',
      segment: 'High Value',
      created: '2024-01-15',
    },
    {
      id: 2,
      name: 'Welcome Campaign',
      type: 'Engagement',
      status: 'Active',
      segment: 'New Users',
      created: '2024-01-10',
    },
    {
      id: 3,
      name: 'Order Confirmation',
      type: 'Transactional',
      status: 'Paused',
      segment: 'All Users',
      created: '2024-01-05',
    },
  ];

  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">View Campaigns</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>Created Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>
                    <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.segment}</TableCell>
                  <TableCell>{campaign.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewCampaign;
